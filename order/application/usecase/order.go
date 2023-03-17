package usecase

import (
	"context"
	"google.golang.org/grpc"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/credentials/insecure"
	"google.golang.org/grpc/status"
	"log"
	"orderservice/domain/model"
	"orderservice/domain/repository"
	pb "orderservice/gen/order"
	pbProduct "orderservice/gen/product"
	"os"
	"time"
)

type OrderUseCase interface {
	GetOrder(ID int) (*pb.GetOrderResponse, error)
	CreateOrder(products []*pb.CreateOrderRequest_OrderProduct, totalPrice float64) (*pb.CreateOrderResponse, error)
}

type orderUseCase struct {
	orderRepository repository.OrderRepository
}

func NewOrderUseCase(repo repository.OrderRepository) OrderUseCase {
	return &orderUseCase{repo}
}

func (p *orderUseCase) GetOrder(ID int) (*pb.GetOrderResponse, error) {
	order, err := p.orderRepository.GetOrderById(ID)
	if err != nil {
		return nil, err
	}

	orderProducts, err := p.orderRepository.FindProducts(ID)
	if err != nil {
		return nil, err
	}

	var productIDs []int64
	productIDQuantity := map[int64]uint32{}
	for _, p := range *orderProducts {
		productIDs = append(productIDs, p.ProductID)
		productIDQuantity[p.ProductID] = p.Quantity
	}

	conn, err := grpc.Dial(os.Getenv("PRODUCT_SERVER_ADDRESS"), grpc.WithTransportCredentials(insecure.NewCredentials()))
	if err != nil {
		log.Fatalln("failed to connect product server")
	}
	defer conn.Close()
	products, err := pbProduct.NewProductServiceClient(conn).GetProductList(context.Background(), &pbProduct.GetProductListRequest{Ids: productIDs})
	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	orderProto := &pb.Order{
		Id:         order.ID,
		TotalPrice: order.TotalPrice,
		CreatedAt:  order.CreatedAt.Format("2006-01-02 15:04:05"),
		Products:   []*pb.Order_OrderProduct{},
	}

	for _, p := range products.Products {
		orderProto.Products = append(orderProto.Products, &pb.Order_OrderProduct{
			Id:       p.Id,
			Name:     p.Name,
			Price:    p.Price,
			Quantity: productIDQuantity[p.Id],
		})
	}
	return &pb.GetOrderResponse{Order: orderProto}, nil
}

func (p *orderUseCase) CreateOrder(products []*pb.CreateOrderRequest_OrderProduct, totalPrice float64) (*pb.CreateOrderResponse, error) {
	order := model.Order{CreatedAt: time.Now().Local(), TotalPrice: totalPrice}
	orderID, err := p.orderRepository.CreateOrderProducts(products, &order)
	if err != nil {
		return nil, err
	}
	orderProto := &pb.Order{
		Id:         orderID,
		TotalPrice: order.TotalPrice,
		CreatedAt:  order.CreatedAt.Format("2006-01-02 15:04:05"),
		Products:   []*pb.Order_OrderProduct{},
	}
	for _, p := range products {
		orderProto.Products = append(orderProto.Products, &pb.Order_OrderProduct{
			Id:       p.ProductId,
			Name:     p.Name,
			Price:    p.Price,
			Quantity: p.Quantity,
		})
	}
	return &pb.CreateOrderResponse{Order: orderProto}, nil
}
