package model

import "time"

type Order struct {
	ID         int64     `json:"id"`
	TotalPrice float64   `json:"total_price"`
	CreatedAt  time.Time `json:"created_at,omitempty"`
}

type OrderProduct struct {
	OrderID   int64  `json:"order_id"`
	ProductID int64  `json:"product_id"`
	Quantity  uint32 `json:"quantity"`
}
