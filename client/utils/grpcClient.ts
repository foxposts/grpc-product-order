import {ServiceClient} from "@grpc/grpc-js/src/make-client";

export function SetProductGrpcClient(): ServiceClient {
    const grpc = require('@grpc/grpc-js')
    const protoLoader = require('@grpc/proto-loader');
    const packageDefinition = protoLoader.loadSync('../product/proto/product.proto', {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true,
    })
    const productProto = grpc.loadPackageDefinition(packageDefinition).product;

    return new productProto.ProductService(
        `localhost:50052`,
        grpc.credentials.createInsecure(),
    );
}


export function SetOrderGrpcClient(): ServiceClient {
    const grpc = require('@grpc/grpc-js')
    const protoLoader = require('@grpc/proto-loader');
    const packageDefinition = protoLoader.loadSync('../order/proto/order.proto', {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true,
    })
    const orderProto = grpc.loadPackageDefinition(packageDefinition).order;

    return new orderProto.OrderService(
        `localhost:50051`,
        grpc.credentials.createInsecure(),
    );
}