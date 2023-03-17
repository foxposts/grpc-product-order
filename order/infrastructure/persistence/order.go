package persistence

import (
	"database/sql"
	"fmt"
	_ "github.com/go-sql-driver/mysql"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"orderservice/domain/model"
	"orderservice/domain/repository"
	pb "orderservice/gen/order"
	"strings"
)

type orderPersistence struct {
	mysqlClient *sql.DB
}

func NewOrderPersistence(mysqlClient *sql.DB) repository.OrderRepository {
	return &orderPersistence{mysqlClient}
}

func (p *orderPersistence) GetOrderById(ID int) (*model.Order, error) {
	var order model.Order
	err := p.mysqlClient.QueryRow(`SELECT * FROM orders WHERE id=?`, ID).Scan(&order.ID, &order.TotalPrice, &order.CreatedAt)
	if err != nil {
		if err == sql.ErrNoRows {
			return nil, status.Error(codes.NotFound, "the order was not found")
		} else {
			return nil, status.Error(codes.Internal, err.Error())
		}
	}
	return &order, nil
}

func (p *orderPersistence) FindProducts(ID int) (*[]model.OrderProduct, error) {
	rows, err := p.mysqlClient.Query(`SELECT * FROM order_products WHERE order_id=?`, ID)
	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}
	var orderProducts []model.OrderProduct
	for rows.Next() {
		var orderProduct model.OrderProduct
		err = rows.Scan(&orderProduct.OrderID, &orderProduct.ProductID, &orderProduct.Quantity)
		if err != nil {
			return nil, status.Error(codes.Internal, "while scanning query")
		}
		orderProducts = append(orderProducts, orderProduct)
	}
	if len(orderProducts) == 0 {
		return nil, status.Error(codes.NotFound, "orderProducts not found")
	}
	return &orderProducts, nil
}

func (p *orderPersistence) CreateOrderProducts(products []*pb.CreateOrderRequest_OrderProduct, order *model.Order) (int64, error) {
	tx, err := p.mysqlClient.Begin()
	if err != nil {
		return 0, status.Error(codes.Internal, "unexpected while starting transaction")
	}
	query := `INSERT into orders (total_price) VALUES (?)`
	res, err := tx.Exec(query, order.TotalPrice)
	if err != nil {
		tx.Rollback()
		return 0, status.Error(codes.Internal, err.Error())
	}
	orderId, err := res.LastInsertId()
	if err != nil {
		tx.Rollback()
		return 0, status.Error(codes.Internal, err.Error())
	}

	var sqlValueStrings []string
	var sqlValueArgs []interface{}
	for _, p := range products {
		sqlValueStrings = append(sqlValueStrings, "(?, ?, ?)")
		sqlValueArgs = append(sqlValueArgs, orderId)
		sqlValueArgs = append(sqlValueArgs, p.ProductId)
		sqlValueArgs = append(sqlValueArgs, p.Quantity)
	}

	bulkQuery := `INSERT INTO order_products(order_id, product_id, quantity)
    VALUES %s`
	bulkQuery = fmt.Sprintf(bulkQuery, strings.Join(sqlValueStrings, ","))
	_, er := tx.Exec(bulkQuery, sqlValueArgs...)
	if er != nil {
		tx.Rollback()
		return 0, status.Error(codes.Internal, err.Error())
	}
	commitErr := tx.Commit()
	if commitErr != nil {
		tx.Rollback()
		return 0, status.Error(codes.Internal, err.Error())
	}
	return orderId, nil
}
