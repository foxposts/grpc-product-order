import {useRouter} from "next/router";
import React from "react";
import {GetServerSideProps} from "next";
import {ProductApi} from "../index";
import {Product} from "../../types/Products";
import HeaderNav from "../../componets/headerNav";
import Link from "next/link";


interface Props {
    product: Product;
}

const Product = ({product}: Props) => {
    const router = useRouter();
    const {id} = router.query;


    const handleDelete = async () => {
        ProductApi.delete(`/${id}`, {}).then((res) => {
            console.log(res);
            router.push(`/products`)
        }).catch((err) => {
            console.log(err)
        });
    };

    return (
        <div>
            <HeaderNav/>
            <div className="flex flex-col">
                <h1 className="text-2xl font-bold text-center mt-20">Product Id: {id}</h1>
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
                                        Created At
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Updated At
                                    </th>
                                </tr>
                                </thead>
                                <tbody>

                                <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{product.name}</td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        {product.price}
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        {product.created_at}
                                    </td>
                                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                        {product.updated_at}
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="text-right">
                            <Link href={`/products/edit/${product.id}`}>
                                <a>
                                    <button
                                        className="bg-sky-300 hover:bg-gray-800 ml-2 py-2 px-5 rounded mt-5">update
                                    </button>
                                </a>
                            </Link>
                            <button
                                className="bg-gray-500 hover:bg-gray-800 ml-2 py-2 px-5 rounded mt-5"
                                onClick={() => handleDelete()}>delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const {id} = context.query;
    const res = await ProductApi.get(`/${id}`);
    const product = res.data.product
    return {
        props: {product},
    };
};

export default Product;