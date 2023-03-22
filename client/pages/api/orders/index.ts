import {CreateOrderResponse} from "../../../gen/order/order_pb";
import {SetOrderGrpcClient} from "../../../utils/grpcClient";


export default function handler(req, res) {
    switch (req.method) {
        case "POST":
            const result = createOrder(req.body);
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


function createOrder(encodedOrder): Promise<CreateOrderResponse> {
    const client = SetOrderGrpcClient()
    const order = JSON.parse(encodedOrder.body);

    return new Promise<CreateOrderResponse>((resolve, reject) => {
        client.CreateOrder(order, function (err, response) {

            console.log('Data:', response);
            if (err) {
                return reject(err);
            }
            return resolve(response);
        });
    });
}
