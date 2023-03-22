package usecase

import (
	"productservice/domain/model"
	"productservice/domain/repository"
	pb "productservice/gen/product"
	"time"
)

type ProductUseCase interface {
	ReadProduct(ID int) (*pb.GetProductResponse, error)
	InsertProduct(product *model.Product) (*pb.CreateProductResponse, error)
	UpdateProduct(product *model.Product) (*pb.UpdateProductResponse, error)
	DeleteProduct(ID int) error
	ReadProductByIds(IDs []int64) (*pb.GetProductsByIdsResponse, error)
	GetProducts() (*pb.GetProductsResponse, error)
}

type productUseCase struct {
	productRepository repository.ProductRepository
}

func NewProductUseCase(repo repository.ProductRepository) ProductUseCase {
	return &productUseCase{repo}
}

func (p *productUseCase) ReadProduct(ID int) (*pb.GetProductResponse, error) {
	product, err := p.productRepository.GetProductById(ID)
	if err != nil {
		return nil, err
	}
	return &pb.GetProductResponse{
		Product: &pb.Product{
			Id:        product.ID,
			Name:      product.Name,
			Price:     product.Price,
			CreatedAt: product.CreatedAt.Format("2006-01-02 15:04:05"),
			UpdatedAt: product.UpdatedAt.Format("2006-01-02 15:04:05"),
		}}, nil
}

func (p *productUseCase) InsertProduct(product *model.Product) (*pb.CreateProductResponse, error) {
	product.CreatedAt = time.Now().Local()
	product.UpdatedAt = time.Now().Local()
	productId, err := p.productRepository.InsertProduct(product)
	if err != nil {
		return nil, err
	}
	return &pb.CreateProductResponse{
		Id:        productId,
		Name:      product.Name,
		Price:     product.Price,
		CreatedAt: product.CreatedAt.Format("2006-01-02 15:04:05"),
		UpdatedAt: product.UpdatedAt.Format("2006-01-02 15:04:05"),
	}, nil
}

func (p *productUseCase) UpdateProduct(product *model.Product) (*pb.UpdateProductResponse, error) {
	product.UpdatedAt = time.Now().Local()
	err := p.productRepository.UpdateProduct(product)
	if err != nil {
		return nil, err
	}
	return &pb.UpdateProductResponse{
		Name:      product.Name,
		Price:     product.Price,
		UpdatedAt: product.UpdatedAt.Format("2006-01-02 15:04:05"),
	}, nil
}

func (p *productUseCase) DeleteProduct(ID int) error {
	err := p.productRepository.DeleteProduct(ID)
	if err != nil {
		return err
	}
	return nil
}

func (p *productUseCase) GetProducts() (*pb.GetProductsResponse, error) {
	products, err := p.productRepository.GetProducts()
	if err != nil {
		return nil, err
	}
	var productProto []*pb.Product
	for _, p := range *products {
		productProto = append(productProto, &pb.Product{
			Id:        p.ID,
			Name:      p.Name,
			Price:     p.Price,
			CreatedAt: p.CreatedAt.Format("2006-01-02 15:04:05"),
			UpdatedAt: p.UpdatedAt.Format("2006-01-02 15:04:05"),
		})
	}
	return &pb.GetProductsResponse{Products: productProto}, nil
}

func (p *productUseCase) ReadProductByIds(ID []int64) (*pb.GetProductsByIdsResponse, error) {
	products, err := p.productRepository.GetProductListByIds(ID)
	if err != nil {
		return nil, err
	}
	var productProto []*pb.Product
	for _, p := range *products {
		productProto = append(productProto, &pb.Product{
			Id:        p.ID,
			Name:      p.Name,
			Price:     p.Price,
			CreatedAt: p.CreatedAt.Format("2006-01-02 15:04:05"),
			UpdatedAt: p.UpdatedAt.Format("2006-01-02 15:04:05"),
		})
	}
	return &pb.GetProductsByIdsResponse{Products: productProto}, nil
}
