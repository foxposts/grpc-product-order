package service

type OrderedProduct struct {
	ID       int64   `json:"id"`
	Name     string  `json:"name"`
	Price    float64 `json:"price"`
	Quantity uint32  `json:"quantity"`
}
