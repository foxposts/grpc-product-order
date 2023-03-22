import type {GetServerSideProps} from 'next'
import React, {useState} from 'react';
import {Product} from "../../types/Products";
import {Order, OrderProduct} from "../../types/Orders";
import {OrderApi, ProductApi} from "../index";
import {useRouter} from "next/router";
import HeaderNav from "../../components/headerNav";

interface Props {
    products: Product[];
}

const Orders = ({products}: Props) => {
    const router = useRouter();

    const initOrderProducts: OrderProduct[] = products.map(value => {
        return {productId: value.id, name: value.name, price: value.price, quantity: 0}
    })
    const [orderProducts, setOrderProducts] = useState<OrderProduct[]>(initOrderProducts);
    const [productTotalPrice, setTotalProductCount] = useState(0);

    const handleQuantityIncrease = (index) => {
        const newOrderProducts = [...orderProducts];

        newOrderProducts[index].quantity++;
        setOrderProducts(newOrderProducts);
        calculateTotal()
    };
    const handleQuantityDecrease = (index) => {
        const newOrderProducts = [...orderProducts];

        if (newOrderProducts[index].quantity !== 0) {
            newOrderProducts[index].quantity--;
            setOrderProducts(newOrderProducts);
            calculateTotal()
        }
    };

    const calculateTotal = () => {
        const totalCount = orderProducts.reduce((total, orderProduct) => {
            return total + (orderProduct.quantity * orderProduct.price);
        }, 0);

        setTotalProductCount(totalCount);
    };

    const handleCheckout = () => {
        const countedOrderProducts = orderProducts.filter(orderProduct => orderProduct.quantity !== 0)
        const order: Order = {products: countedOrderProducts, totalPrice: productTotalPrice}
        OrderApi.post("", {
            body: JSON.stringify(order)
        }).then((res) => {
            console.log(res);
            router.push(`/orders/${res.data.order.id}`)
        }).catch((err) => {
            console.log(err)
        });
    };

    return (
        <div>
            <HeaderNav/>
            <div className="bg-gray-100 pt-20">
                <h1 className="mb-10 text-center text-2xl font-bold">Orders</h1>
                <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
                    <div className="rounded-lg md:w-2/3">
                        {orderProducts.map((orderProduct, index) => (
                            <div
                                className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
                                key={index}>
                                <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                                    <div className="mt-5 sm:mt-0">
                                        <h2 className="text-lg font-bold text-blue-400">{orderProduct.name} </h2>
                                        <p className="text-lg mt-2">price: {orderProduct.price}</p>
                                    </div>
                                    <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block">
                                        <div className="flex items-center border-gray-100">
                                            <button
                                                className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                                                onClick={() => handleQuantityDecrease(index)}> -
                                            </button>
                                            <button
                                                className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                                                onClick={() => handleQuantityIncrease(index)}> +
                                            </button>
                                        </div>
                                        <div className="flex items-center space-x-4">
                                            <p className="text-sm">quantity: {orderProduct.quantity}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
                        <div className="flex justify-between">
                            <p className="text-lg font-bold">Total</p>
                            <div className="">
                                <p className="mb-1 text-lg font-bold">{productTotalPrice}</p>
                                <p className="text-sm text-gray-700">including VAT</p>
                            </div>
                        </div>
                        <button
                            className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600"
                            onClick={handleCheckout}>
                            Check out
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const res = await ProductApi.get("");
    const products = res.data.products

    return {
        props: {products},
    };
};

export default Orders;




