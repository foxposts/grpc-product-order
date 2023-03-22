// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var order_pb = require('./order_pb.js');

function serialize_order_CreateOrderRequest(arg) {
  if (!(arg instanceof order_pb.CreateOrderRequest)) {
    throw new Error('Expected argument of type order.CreateOrderRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_order_CreateOrderRequest(buffer_arg) {
  return order_pb.CreateOrderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_order_CreateOrderResponse(arg) {
  if (!(arg instanceof order_pb.CreateOrderResponse)) {
    throw new Error('Expected argument of type order.CreateOrderResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_order_CreateOrderResponse(buffer_arg) {
  return order_pb.CreateOrderResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_order_GetOrderRequest(arg) {
  if (!(arg instanceof order_pb.GetOrderRequest)) {
    throw new Error('Expected argument of type order.GetOrderRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_order_GetOrderRequest(buffer_arg) {
  return order_pb.GetOrderRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_order_GetOrderResponse(arg) {
  if (!(arg instanceof order_pb.GetOrderResponse)) {
    throw new Error('Expected argument of type order.GetOrderResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_order_GetOrderResponse(buffer_arg) {
  return order_pb.GetOrderResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var OrderServiceService = exports.OrderServiceService = {
  getOrder: {
    path: '/order.OrderService/GetOrder',
    requestStream: false,
    responseStream: false,
    requestType: order_pb.GetOrderRequest,
    responseType: order_pb.GetOrderResponse,
    requestSerialize: serialize_order_GetOrderRequest,
    requestDeserialize: deserialize_order_GetOrderRequest,
    responseSerialize: serialize_order_GetOrderResponse,
    responseDeserialize: deserialize_order_GetOrderResponse,
  },
  createOrder: {
    path: '/order.OrderService/CreateOrder',
    requestStream: false,
    responseStream: false,
    requestType: order_pb.CreateOrderRequest,
    responseType: order_pb.CreateOrderResponse,
    requestSerialize: serialize_order_CreateOrderRequest,
    requestDeserialize: deserialize_order_CreateOrderRequest,
    responseSerialize: serialize_order_CreateOrderResponse,
    responseDeserialize: deserialize_order_CreateOrderResponse,
  },
};

exports.OrderServiceClient = grpc.makeGenericClientConstructor(OrderServiceService);
