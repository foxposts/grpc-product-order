package persistence

import (
	"database/sql"
	"fmt"
	_ "github.com/go-sql-driver/mysql"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"productservice/domain/model"
	"productservice/domain/repository"
	"strconv"
	"strings"
)

type productPersistence struct {
	mysqlClient *sql.DB
}

func NewProductPersistence(mysqlClient *sql.DB) repository.ProductRepository {
	return &productPersistence{mysqlClient}
}

func (p *productPersistence) GetProductById(ID int) (*model.Product, error) {
	var product model.Product
	err := p.mysqlClient.QueryRow(`SELECT * FROM products WHERE id=?`, ID).Scan(&product.ID, &product.Name, &product.Price, &product.CreatedAt, &product.UpdatedAt)
	if err != nil {
		if err == sql.ErrNoRows {
			return nil, status.Error(codes.NotFound, "The product was not found")
		} else {
			return nil, status.Error(codes.Internal, err.Error())
		}
	}
	return &product, nil
}

func (p *productPersistence) GetProductListByIds(IDs []int64) (*[]model.Product, error) {
	stringIDs := make([]string, len(IDs))
	for index := range IDs {
		stringIDs[index] = strconv.FormatInt(IDs[index], 10)
	}
	query := fmt.Sprintf("SELECT * FROM products WHERE id IN (%s)", strings.Join(stringIDs[:], ","))
	rows, err := p.mysqlClient.Query(query)
	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	var products []model.Product
	for rows.Next() {
		var product model.Product
		err = rows.Scan(&product.ID, &product.Name, &product.Price, &product.CreatedAt, &product.UpdatedAt)
		if err != nil {
			return nil, status.Error(codes.Internal, "unexpected while scanning query")
		}
		products = append(products, product)
	}
	if len(products) == 0 {
		return nil, status.Error(codes.NotFound, "products not found")
	}
	return &products, nil
}

func (p *productPersistence) InsertProduct(product *model.Product) (int64, error) {
	tx, err := p.mysqlClient.Begin()
	query := `INSERT into products (name, price, created_at, updated_at) VALUES (?, ?, ?, ?)`
	res, err := tx.Exec(query, product.Name, product.Price, product.CreatedAt, product.UpdatedAt)
	if err != nil {
		tx.Rollback()
		return 0, status.Error(codes.Internal, err.Error())
	}
	productId, err := res.LastInsertId()
	if err != nil {
		tx.Rollback()
		return 0, status.Error(codes.Internal, err.Error())
	}
	commitErr := tx.Commit()
	if commitErr != nil {
		tx.Rollback()
		return 0, status.Error(codes.Internal, err.Error())
	}
	return productId, nil
}

func (p *productPersistence) UpdateProduct(product *model.Product) error {
	query := `UPDATE products SET name=?, price=?, updated_at=? WHERE id=?`
	_, err := p.mysqlClient.Exec(query, product.Name, product.Price, product.UpdatedAt, product.ID)
	if err != nil {
		return status.Error(codes.Internal, err.Error())
	}
	return nil
}

func (p *productPersistence) DeleteProduct(ID int) error {
	_, err := p.mysqlClient.Exec(`DELETE FROM products WHERE id=?`, ID)
	if err != nil {
		return status.Error(codes.Internal, err.Error())
	}
	return nil
}
