import {GetProductResponse, UpdateProductResponse} from "../../../gen/product/product_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import {SetProductGrpcClient} from "../../../utils/grpcClient";


export default function handler(req, res) {
    const { id } = req.query
    console.log(req.method)

    switch (req.method) {
        case "GET":
            const getResult = getProduct(id);
            getResult.then((value) => {
                res.json(value)
            }).catch((err) => {
                res.status(400).json({message: err.message});
            });
            return res
        case "PUT":
            const updateResult = updateProduct(req.body);
            updateResult.then((value) => {
                res.json(value)
            }).catch((err) => {
                res.status(400).json({message: err.message});
            });
            return res
        case "DELETE":
            const deleteResult = deleteProduct(id);
            deleteResult.then((value) => {
                res.json(value)
            }).catch((err) => {
                res.status(400).json({message: err.message});
            });
            return res
        default:
            return res.status(400).json({ message: "Method are not supported" });
    }
}


function getProduct(id): Promise<GetProductResponse> {
    const client = SetProductGrpcClient()

    return new Promise<GetProductResponse>((resolve, reject) => {
        client.GetProduct({id: id}, function (err, response) {

            console.log('Data:', response);
            if (err) {
                return reject(err);
            }
            return resolve(response);
        });
    });
}


function updateProduct(encodedProduct): Promise<UpdateProductResponse> {
    const client = SetProductGrpcClient()
    const product = JSON.parse(encodedProduct.body);

    return new Promise<UpdateProductResponse>((resolve, reject) => {
        client.UpdateProduct(product, function (err, response) {

            console.log('Data:', response);
            if (err) {
                return reject(err);
            }
            return resolve(response);
        });
    });
}

function deleteProduct(id): Promise<google_protobuf_empty_pb.Empty> {
    const client = SetProductGrpcClient()

    return new Promise<google_protobuf_empty_pb.Empty>((resolve, reject) => {
        client.DeleteProduct({id: id}, function (err, response) {
            console.log('Data:', response);
            if (err) {
                return reject(err);
            }
            return resolve(response);
        });
    });
}