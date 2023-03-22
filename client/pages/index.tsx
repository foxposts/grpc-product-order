import type {NextPage} from 'next'

import axios from "axios";
import HeaderNav from "../components/headerNav";

export const OrderApi = axios.create({
    baseURL: 'http://localhost:3000/api/orders'
})

export const ProductApi = axios.create({
    baseURL: 'http://localhost:3000/api/products'
})


const Home: NextPage = () => {
    return (
        <div>
            <HeaderNav/>
        <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl mt-44">
            grpc app</h2>
        </div>
    )
}

export default Home
