package service_server

import (
	"context"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"google.golang.org/protobuf/types/known/emptypb"
	"productservice/adapter/connection"
	mycontext "productservice/adapter/context"
	"productservice/application/usecase"
	"productservice/domain/model"
	pb "productservice/gen/product"
	"productservice/infrastructure/persistence"
)

type ProductServer struct {
	pb.ProductServiceServer
}

var db = connection.ConnectDB()
var productPersistence = persistence.NewProductPersistence(db)
var productUseCase = usecase.NewProductUseCase(productPersistence)

func (p *ProductServer) GetProduct(ctx context.Context, req *pb.GetProductRequest) (*pb.GetProductResponse, error) {
	productResponse, err := productUseCase.ReadProduct(int(req.GetId()))
	if err != nil {
		return nil, err
	}
	return productResponse, nil
}

func (p *ProductServer) CreateProduct(ctx context.Context, req *pb.CreateProductRequest) (*pb.CreateProductResponse, error) {
	productReq := model.Product{
		Name:  req.GetName(),
		Price: req.GetPrice(),
	}
	err := mycontext.NewProductRequest(&productReq).ValidateCreateProduct()
	if err != nil {
		return nil, status.Error(codes.InvalidArgument, err.Error())
	}
	createdResponse, err := productUseCase.InsertProduct(&productReq)
	if err != nil {
		return nil, err
	}
	return createdResponse, nil
}

func (p *ProductServer) UpdateProduct(ctx context.Context, req *pb.UpdateProductRequest) (*pb.UpdateProductResponse, error) {
	productReq := model.Product{
		ID:    req.GetId(),
		Name:  req.GetName(),
		Price: req.GetPrice(),
	}
	err := mycontext.NewProductRequest(&productReq).ValidateUpdateProduct()
	if err != nil {
		return nil, status.Error(codes.InvalidArgument, err.Error())
	}
	product, _ := productUseCase.ReadProduct(int(productReq.ID))
	if product == nil {
		err := status.Error(codes.NotFound, "the product was not found")
		return nil, err
	}

	updatedResponse, err := productUseCase.UpdateProduct(&productReq)
	if err != nil {
		return nil, err
	}
	return updatedResponse, nil
}

func (p *ProductServer) DeleteProduct(ctx context.Context, req *pb.DeleteProductRequest) (*emptypb.Empty, error) {
	out := new(emptypb.Empty)
	product, _ := productUseCase.ReadProduct(int(req.GetId()))
	if product == nil {
		err := status.Error(codes.NotFound, "the product was not found")
		return nil, err
	}
	err := productUseCase.DeleteProduct(int(req.GetId()))
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (p *ProductServer) GetProductList(ctx context.Context, req *pb.GetProductListRequest) (*pb.GetProductListResponse, error) {
	productsResponse, err := productUseCase.ReadProductList(req.Ids)
	if err != nil {
		return nil, err
	}
	return productsResponse, nil
}
