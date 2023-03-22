package repository

import (
	"productservice/domain/model"
)

type ProductRepository interface {
	GetProductById(ID int) (*model.Product, error)
	InsertProduct(product *model.Product) (int64, error)
	UpdateProduct(product *model.Product) error
	DeleteProduct(ID int) error
	GetProducts() (*[]model.Product, error)
	GetProductListByIds(ID []int64) (*[]model.Product, error)
}
