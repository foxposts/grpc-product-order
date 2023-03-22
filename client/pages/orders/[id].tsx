import React from 'react';
import {useRouter} from "next/router";
import {Order} from "../../types/Orders";
import {OrderApi} from "../index";
import {GetServerSideProps} from "next";
import HeaderNav from "../../componets/headerNav";

interface Props {
    order: Order;
}

const Order = ({order}: Props) => {
    const router = useRouter();
    const {id} = router.query;
    return (
        <div>
            <HeaderNav/>
            <div className="flex flex-col mt-20">
                <h1 className="text-2xl font-bold text-center">Order Id: {id}</h1>
                <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5 mt-20">
                    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full">
                                <thead className="bg-gray-200 border-b">
                                <tr>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Product Name
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Price
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Quantity
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                {order.products.map((product, index) => (

                                    <tr key={index}
                                        className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{product.name}</td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            {product.price}
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            {product.quantity}
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                            <div className="text-2xl text-right mt-10">Total Price: {order.totalPrice}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const {id} = context.query;
    const res = await OrderApi.get(`/${id}`);
    const order = res.data.order
    return {
        props: {order},
    };
};

export default Order;




