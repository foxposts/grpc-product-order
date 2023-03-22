export interface Order {
    id?: string;
    totalPrice: number;
    created_at?: string;
    products: OrderProduct[]
}


export interface OrderProduct {
    productId?: string;
    name?: string;
    price: number;
    quantity?: number;
    created_at?: string;
    updated_at?: string;
}