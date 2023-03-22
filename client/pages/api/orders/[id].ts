import {GetOrderResponse} from "../../../gen/order/order_pb";
import {SetOrderGrpcClient} from "../../../utils/grpcClient";


export default function handler(req, res) {
    switch (req.method) {
        case "GET":
            const { id } = req.query
            const result = getOrder(id);
            result.then((value) => {
                res.json(value)
            }).catch((err) => {
                res.status(400).json({message: err.message});
            });
            return res
        default:
            return res.status(400).json({ message: "Method are not supported" });
    }
}


function getOrder(id): Promise<GetOrderResponse> {
    const client = SetOrderGrpcClient()

    return new Promise<GetOrderResponse>((resolve, reject) => {
        client.GetOrder({id: id}, function (err, response) {

            console.log('Data:', response);
            if (err) {
                return reject(err);
            }
            return resolve(response);
        });
    });
}
