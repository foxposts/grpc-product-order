import React, {useEffect} from 'react';
import {useRouter} from "next/router";
import {Product} from "../../types/Products";
import {ProductApi} from "../index";
import {useForm} from "react-hook-form";
import HeaderNav from "../../componets/headerNav";


const NewProduct = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors},
    } = useForm();
    const validatePrice = (price: number) => {
        if ((Number.isNaN(price) || price <= 0))
            return 'must be greater than or equal to +1.'
    }

    const router = useRouter();

    const formSubmit = async (data) => {

        if (typeof router.query.id === "string") {
            await updateProduct(router.query.id, data);
        } else {
            await createProduct(data);

        }
    }

    const createProduct = async (product: Product) => {
        ProductApi.post("", {
            body: JSON.stringify(product)
        }).then((res) => {
            console.log(res);
            router.push(`/products/${res.data.id}`)
        }).catch((err) => {
            console.log(err)
        });
    }
    const updateProduct = async (id: string, product: Product) => {
        product.id = id
        ProductApi.put(`${id}`, {
            body: JSON.stringify(product)
        }).then((res) => {
            router.push(`/products/${id}`)
        }).catch((err) => {
            console.log(err)
        });
    }

    const loadProduct = async (id: string) => {
        const res = await ProductApi.get(`/${id}`);
        const product = res.data.product
        reset({name: product.name, price: product.price})
    };

    useEffect(() => {
        if (typeof router.query.id === "string") loadProduct(router.query.id);
    }, [router.query]);
    const submitMethod = typeof router.query.id === "string" ? "PUT" : "POST"
    const actionKind = typeof router.query.id === "string" ? "Update Product" : "Create Product"
    return (
        <div>
            <HeaderNav/>
            <div className="flex justify-center items-center h-screen w-full bg-blue-400">
                <div className="w-1/2 bg-white rounded shadow-2xl p-8 m-4">
                    <h1 className="block w-full text-center text-gray-800 text-2xl font-bold mb-6">Product</h1>
                    <form method={submitMethod} onSubmit={handleSubmit(formSubmit)} autoComplete="off">
                        <div className="flex flex-col mb-4">
                            <label className="mb-2 font-bold text-lg text-gray-900" htmlFor="first_name">Product
                                Name</label>
                            <input className="border py-2 px-3 text-grey-800" type="text"
                                   name="name"
                                   {...register("name", {
                                       required: "Name is required",
                                       pattern: {
                                           value: /^\w+$/,
                                           message: "Name must be a valid string",
                                       },
                                       minLength: {
                                           value: 1,
                                           message: "Name should be greater than 1 characters",
                                       },
                                       maxLength: {
                                           value: 255,
                                           message: "Name shouldn't be greater than 20 characters",
                                       },
                                   })} />
                        </div>
                        <div className="invalid-feedback text-red-400">
                            {errors?.name?.message}
                        </div>
                        <div className="flex flex-col mb-4">
                            <label className="mb-2 font-bold text-lg text-gray-900" htmlFor="last_name">Price</label>
                            <input className="border py-2 px-3 text-grey-800" type="text"
                                   name="price" {...register("price", {
                                required: "Price is required",
                                valueAsNumber: true,
                                validate: validatePrice,
                            })}/>
                        </div>
                        <div className="invalid-feedback text-red-400">
                            {errors?.price?.message}
                        </div>
                        <button
                            className="block bg-teal-400 hover:bg-teal-600 text-white  text-lg mx-auto p-4 rounded"
                            type="submit">{actionKind}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default NewProduct;