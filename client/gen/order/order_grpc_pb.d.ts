// package: order
// file: order.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as order_pb from "./order_pb";

interface IOrderServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getOrder: IOrderServiceService_IGetOrder;
    createOrder: IOrderServiceService_ICreateOrder;
}

interface IOrderServiceService_IGetOrder extends grpc.MethodDefinition<order_pb.GetOrderRequest, order_pb.GetOrderResponse> {
    path: "/order.OrderService/GetOrder";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<order_pb.GetOrderRequest>;
    requestDeserialize: grpc.deserialize<order_pb.GetOrderRequest>;
    responseSerialize: grpc.serialize<order_pb.GetOrderResponse>;
    responseDeserialize: grpc.deserialize<order_pb.GetOrderResponse>;
}
interface IOrderServiceService_ICreateOrder extends grpc.MethodDefinition<order_pb.CreateOrderRequest, order_pb.CreateOrderResponse> {
    path: "/order.OrderService/CreateOrder";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<order_pb.CreateOrderRequest>;
    requestDeserialize: grpc.deserialize<order_pb.CreateOrderRequest>;
    responseSerialize: grpc.serialize<order_pb.CreateOrderResponse>;
    responseDeserialize: grpc.deserialize<order_pb.CreateOrderResponse>;
}

export const OrderServiceService: IOrderServiceService;

export interface IOrderServiceServer extends grpc.UntypedServiceImplementation {
    getOrder: grpc.handleUnaryCall<order_pb.GetOrderRequest, order_pb.GetOrderResponse>;
    createOrder: grpc.handleUnaryCall<order_pb.CreateOrderRequest, order_pb.CreateOrderResponse>;
}

export interface IOrderServiceClient {
    getOrder(request: order_pb.GetOrderRequest, callback: (error: grpc.ServiceError | null, response: order_pb.GetOrderResponse) => void): grpc.ClientUnaryCall;
    getOrder(request: order_pb.GetOrderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: order_pb.GetOrderResponse) => void): grpc.ClientUnaryCall;
    getOrder(request: order_pb.GetOrderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: order_pb.GetOrderResponse) => void): grpc.ClientUnaryCall;
    createOrder(request: order_pb.CreateOrderRequest, callback: (error: grpc.ServiceError | null, response: order_pb.CreateOrderResponse) => void): grpc.ClientUnaryCall;
    createOrder(request: order_pb.CreateOrderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: order_pb.CreateOrderResponse) => void): grpc.ClientUnaryCall;
    createOrder(request: order_pb.CreateOrderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: order_pb.CreateOrderResponse) => void): grpc.ClientUnaryCall;
}

export class OrderServiceClient extends grpc.Client implements IOrderServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getOrder(request: order_pb.GetOrderRequest, callback: (error: grpc.ServiceError | null, response: order_pb.GetOrderResponse) => void): grpc.ClientUnaryCall;
    public getOrder(request: order_pb.GetOrderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: order_pb.GetOrderResponse) => void): grpc.ClientUnaryCall;
    public getOrder(request: order_pb.GetOrderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: order_pb.GetOrderResponse) => void): grpc.ClientUnaryCall;
    public createOrder(request: order_pb.CreateOrderRequest, callback: (error: grpc.ServiceError | null, response: order_pb.CreateOrderResponse) => void): grpc.ClientUnaryCall;
    public createOrder(request: order_pb.CreateOrderRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: order_pb.CreateOrderResponse) => void): grpc.ClientUnaryCall;
    public createOrder(request: order_pb.CreateOrderRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: order_pb.CreateOrderResponse) => void): grpc.ClientUnaryCall;
}
