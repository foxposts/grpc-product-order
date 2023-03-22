import {CreateProductResponse, GetProductsResponse} from "../../../gen/product/product_pb";
import {SetProductGrpcClient} from "../../../utils/grpcClient";

export default function handler(req, res) {
    switch (req.method) {
        case "GET":
            const result = getProducts();
            result.then((value) => {
                res.json(value)
            }).catch((err) => {
                res.status(400).json({message: err.message});
            });
            return res
        case "POST":
            const postResult = postProduct(req.body);
            postResult.then((value) => {
                res.json(value)
            }).catch((err) => {
                res.status(400).json({message: err.message});
            });
            return res
        default:
            return res.status(400).json({ message: "Method are not supported" });
    }
}


function getProducts(): Promise<GetProductsResponse> {
    const client = SetProductGrpcClient()

    return new Promise<GetProductsResponse>((resolve, reject) => {
        client.GetProducts({}, function (err, response) {
            console.log('Data:', response);
            if (err) {
                return reject(err);
            }
            return resolve(response);
        });
    });
}

function postProduct(encodedProduct): Promise<CreateProductResponse> {
    const client = SetProductGrpcClient()
    const product = JSON.parse(encodedProduct.body);

    return new Promise<CreateProductResponse>((resolve, reject) => {
        client.CreateProduct(product, function (err, response) {
            console.log('Data:', response);
            if (err) {
                return reject(err);
            }
            return resolve(response);
        });
    });
}
