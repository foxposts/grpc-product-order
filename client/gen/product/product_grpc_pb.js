// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var product_pb = require('./product_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_product_CreateProductRequest(arg) {
  if (!(arg instanceof product_pb.CreateProductRequest)) {
    throw new Error('Expected argument of type product.CreateProductRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_product_CreateProductRequest(buffer_arg) {
  return product_pb.CreateProductRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_product_CreateProductResponse(arg) {
  if (!(arg instanceof product_pb.CreateProductResponse)) {
    throw new Error('Expected argument of type product.CreateProductResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_product_CreateProductResponse(buffer_arg) {
  return product_pb.CreateProductResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_product_DeleteProductRequest(arg) {
  if (!(arg instanceof product_pb.DeleteProductRequest)) {
    throw new Error('Expected argument of type product.DeleteProductRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_product_DeleteProductRequest(buffer_arg) {
  return product_pb.DeleteProductRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_product_GetProductRequest(arg) {
  if (!(arg instanceof product_pb.GetProductRequest)) {
    throw new Error('Expected argument of type product.GetProductRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_product_GetProductRequest(buffer_arg) {
  return product_pb.GetProductRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_product_GetProductResponse(arg) {
  if (!(arg instanceof product_pb.GetProductResponse)) {
    throw new Error('Expected argument of type product.GetProductResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_product_GetProductResponse(buffer_arg) {
  return product_pb.GetProductResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_product_GetProductsByIdsRequest(arg) {
  if (!(arg instanceof product_pb.GetProductsByIdsRequest)) {
    throw new Error('Expected argument of type product.GetProductsByIdsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_product_GetProductsByIdsRequest(buffer_arg) {
  return product_pb.GetProductsByIdsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_product_GetProductsByIdsResponse(arg) {
  if (!(arg instanceof product_pb.GetProductsByIdsResponse)) {
    throw new Error('Expected argument of type product.GetProductsByIdsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_product_GetProductsByIdsResponse(buffer_arg) {
  return product_pb.GetProductsByIdsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_product_GetProductsResponse(arg) {
  if (!(arg instanceof product_pb.GetProductsResponse)) {
    throw new Error('Expected argument of type product.GetProductsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_product_GetProductsResponse(buffer_arg) {
  return product_pb.GetProductsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_product_UpdateProductRequest(arg) {
  if (!(arg instanceof product_pb.UpdateProductRequest)) {
    throw new Error('Expected argument of type product.UpdateProductRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_product_UpdateProductRequest(buffer_arg) {
  return product_pb.UpdateProductRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_product_UpdateProductResponse(arg) {
  if (!(arg instanceof product_pb.UpdateProductResponse)) {
    throw new Error('Expected argument of type product.UpdateProductResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_product_UpdateProductResponse(buffer_arg) {
  return product_pb.UpdateProductResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var ProductServiceService = exports.ProductServiceService = {
  createProduct: {
    path: '/product.ProductService/CreateProduct',
    requestStream: false,
    responseStream: false,
    requestType: product_pb.CreateProductRequest,
    responseType: product_pb.CreateProductResponse,
    requestSerialize: serialize_product_CreateProductRequest,
    requestDeserialize: deserialize_product_CreateProductRequest,
    responseSerialize: serialize_product_CreateProductResponse,
    responseDeserialize: deserialize_product_CreateProductResponse,
  },
  getProduct: {
    path: '/product.ProductService/GetProduct',
    requestStream: false,
    responseStream: false,
    requestType: product_pb.GetProductRequest,
    responseType: product_pb.GetProductResponse,
    requestSerialize: serialize_product_GetProductRequest,
    requestDeserialize: deserialize_product_GetProductRequest,
    responseSerialize: serialize_product_GetProductResponse,
    responseDeserialize: deserialize_product_GetProductResponse,
  },
  updateProduct: {
    path: '/product.ProductService/UpdateProduct',
    requestStream: false,
    responseStream: false,
    requestType: product_pb.UpdateProductRequest,
    responseType: product_pb.UpdateProductResponse,
    requestSerialize: serialize_product_UpdateProductRequest,
    requestDeserialize: deserialize_product_UpdateProductRequest,
    responseSerialize: serialize_product_UpdateProductResponse,
    responseDeserialize: deserialize_product_UpdateProductResponse,
  },
  deleteProduct: {
    path: '/product.ProductService/DeleteProduct',
    requestStream: false,
    responseStream: false,
    requestType: product_pb.DeleteProductRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_product_DeleteProductRequest,
    requestDeserialize: deserialize_product_DeleteProductRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  getProducts: {
    path: '/product.ProductService/GetProducts',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: product_pb.GetProductsResponse,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_product_GetProductsResponse,
    responseDeserialize: deserialize_product_GetProductsResponse,
  },
  getProductsByIds: {
    path: '/product.ProductService/GetProductsByIds',
    requestStream: false,
    responseStream: false,
    requestType: product_pb.GetProductsByIdsRequest,
    responseType: product_pb.GetProductsByIdsResponse,
    requestSerialize: serialize_product_GetProductsByIdsRequest,
    requestDeserialize: deserialize_product_GetProductsByIdsRequest,
    responseSerialize: serialize_product_GetProductsByIdsResponse,
    responseDeserialize: deserialize_product_GetProductsByIdsResponse,
  },
};

exports.ProductServiceClient = grpc.makeGenericClientConstructor(ProductServiceService);
