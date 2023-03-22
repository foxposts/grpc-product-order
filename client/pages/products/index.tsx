import React from 'react';
import {GetServerSideProps} from "next";
import {ProductApi} from "../index";
import {Product} from "../../types/Products";
import Link from "next/link";
import HeaderNav from "../../components/headerNav";


interface Props {
    products: Product[];
}


const Products = ({products}: Props) => {
    return (
        <div>
            <HeaderNav/>
            <div className="bg-gray-100 pt-20">

                <h1 className="mb-10 text-center text-2xl font-bold">Products</h1>
                <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
                    <div className="rounded-lg md:w-2/3">
                        {products.map((product, index) => (
                            <Link href={`/products/${product.id}`} key={index}>
                                <a>
                                    <div
                                        className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                                        <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                                            <div className="mt-5 sm:mt-0">
                                                <h2 className="text-lg font-bold text-blue-400">{product.name} </h2>
                                                <p className="text-lg mt-2">price: {product.price}</p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;


export const getServerSideProps: GetServerSideProps = async (context) => {
    const res = await ProductApi.get("");
    const products = res.data.products

    return {
        props: {products},
    };
};