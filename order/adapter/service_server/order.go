package service_server

import (
	"context"
	"orderservice/adapter/connection"
	"orderservice/application/usecase"
	pb "orderservice/gen/order"
	"orderservice/infrastructure/persistence"
)

type OrderServer struct {
	pb.OrderServiceServer
}

var db = connection.ConnectDB()
var orderPersistence = persistence.NewOrderPersistence(db)
var orderUseCase = usecase.NewOrderUseCase(orderPersistence)

func (p *OrderServer) GetOrder(ctx context.Context, req *pb.GetOrderRequest) (*pb.GetOrderResponse, error) {
	order, err := orderUseCase.GetOrder(int(req.GetId()))
	if err != nil {
		return nil, err
	}
	return order, nil
}

func (p *OrderServer) CreateOrder(ctx context.Context, req *pb.CreateOrderRequest) (*pb.CreateOrderResponse, error) {
	order, err := orderUseCase.CreateOrder(req.Products, req.TotalPrice)
	if err != nil {
		return nil, err
	}
	return order, nil
}
