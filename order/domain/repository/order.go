package repository

import (
	"orderservice/domain/model"
	pb "orderservice/gen/order"
)

type OrderRepository interface {
	GetOrderById(ID int) (*model.Order, error)
	FindProducts(ID int) (*[]model.OrderProduct, error)
	CreateOrderProducts(products []*pb.CreateOrderRequest_OrderProduct, order *model.Order) (int64, error)
}
