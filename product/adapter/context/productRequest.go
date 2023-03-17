package context

import (
	"errors"
	"productservice/domain/model"
)

type ProductRequest struct {
	model *model.Product
}

func NewProductRequest(model *model.Product) *ProductRequest {
	return &ProductRequest{
		model: model,
	}
}

func (p *ProductRequest) ValidateCreateProduct() error {
	if p.model.Name == "" {
		return errors.New("the name field is required")
	}

	if len(p.model.Name) < 5 || len(p.model.Name) > 255 {
		return errors.New("the name field must be between 5-255 char")
	}

	if p.model.Price == 0 {
		return errors.New("the price field is required")
	}

	return nil
}

func (p *ProductRequest) ValidateUpdateProduct() error {
	err := p.ValidateCreateProduct()
	if err != nil {
		return err
	}
	if p.model.ID == 0 {
		return errors.New("the ID field is required")
	}
	return nil
}
