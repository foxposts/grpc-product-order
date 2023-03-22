// package: product
// file: product.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as product_pb from "./product_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface IProductServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createProduct: IProductServiceService_ICreateProduct;
    getProduct: IProductServiceService_IGetProduct;
    updateProduct: IProductServiceService_IUpdateProduct;
    deleteProduct: IProductServiceService_IDeleteProduct;
    getProducts: IProductServiceService_IGetProducts;
    getProductsByIds: IProductServiceService_IGetProductsByIds;
}

interface IProductServiceService_ICreateProduct extends grpc.MethodDefinition<product_pb.CreateProductRequest, product_pb.CreateProductResponse> {
    path: "/product.ProductService/CreateProduct";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<product_pb.CreateProductRequest>;
    requestDeserialize: grpc.deserialize<product_pb.CreateProductRequest>;
    responseSerialize: grpc.serialize<product_pb.CreateProductResponse>;
    responseDeserialize: grpc.deserialize<product_pb.CreateProductResponse>;
}
interface IProductServiceService_IGetProduct extends grpc.MethodDefinition<product_pb.GetProductRequest, product_pb.GetProductResponse> {
    path: "/product.ProductService/GetProduct";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<product_pb.GetProductRequest>;
    requestDeserialize: grpc.deserialize<product_pb.GetProductRequest>;
    responseSerialize: grpc.serialize<product_pb.GetProductResponse>;
    responseDeserialize: grpc.deserialize<product_pb.GetProductResponse>;
}
interface IProductServiceService_IUpdateProduct extends grpc.MethodDefinition<product_pb.UpdateProductRequest, product_pb.UpdateProductResponse> {
    path: "/product.ProductService/UpdateProduct";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<product_pb.UpdateProductRequest>;
    requestDeserialize: grpc.deserialize<product_pb.UpdateProductRequest>;
    responseSerialize: grpc.serialize<product_pb.UpdateProductResponse>;
    responseDeserialize: grpc.deserialize<product_pb.UpdateProductResponse>;
}
interface IProductServiceService_IDeleteProduct extends grpc.MethodDefinition<product_pb.DeleteProductRequest, google_protobuf_empty_pb.Empty> {
    path: "/product.ProductService/DeleteProduct";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<product_pb.DeleteProductRequest>;
    requestDeserialize: grpc.deserialize<product_pb.DeleteProductRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}
interface IProductServiceService_IGetProducts extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, product_pb.GetProductsResponse> {
    path: "/product.ProductService/GetProducts";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<product_pb.GetProductsResponse>;
    responseDeserialize: grpc.deserialize<product_pb.GetProductsResponse>;
}
interface IProductServiceService_IGetProductsByIds extends grpc.MethodDefinition<product_pb.GetProductsByIdsRequest, product_pb.GetProductsByIdsResponse> {
    path: "/product.ProductService/GetProductsByIds";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<product_pb.GetProductsByIdsRequest>;
    requestDeserialize: grpc.deserialize<product_pb.GetProductsByIdsRequest>;
    responseSerialize: grpc.serialize<product_pb.GetProductsByIdsResponse>;
    responseDeserialize: grpc.deserialize<product_pb.GetProductsByIdsResponse>;
}

export const ProductServiceService: IProductServiceService;

export interface IProductServiceServer extends grpc.UntypedServiceImplementation {
    createProduct: grpc.handleUnaryCall<product_pb.CreateProductRequest, product_pb.CreateProductResponse>;
    getProduct: grpc.handleUnaryCall<product_pb.GetProductRequest, product_pb.GetProductResponse>;
    updateProduct: grpc.handleUnaryCall<product_pb.UpdateProductRequest, product_pb.UpdateProductResponse>;
    deleteProduct: grpc.handleUnaryCall<product_pb.DeleteProductRequest, google_protobuf_empty_pb.Empty>;
    getProducts: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, product_pb.GetProductsResponse>;
    getProductsByIds: grpc.handleUnaryCall<product_pb.GetProductsByIdsRequest, product_pb.GetProductsByIdsResponse>;
}

export interface IProductServiceClient {
    createProduct(request: product_pb.CreateProductRequest, callback: (error: grpc.ServiceError | null, response: product_pb.CreateProductResponse) => void): grpc.ClientUnaryCall;
    createProduct(request: product_pb.CreateProductRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: product_pb.CreateProductResponse) => void): grpc.ClientUnaryCall;
    createProduct(request: product_pb.CreateProductRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: product_pb.CreateProductResponse) => void): grpc.ClientUnaryCall;
    getProduct(request: product_pb.GetProductRequest, callback: (error: grpc.ServiceError | null, response: product_pb.GetProductResponse) => void): grpc.ClientUnaryCall;
    getProduct(request: product_pb.GetProductRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: product_pb.GetProductResponse) => void): grpc.ClientUnaryCall;
    getProduct(request: product_pb.GetProductRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: product_pb.GetProductResponse) => void): grpc.ClientUnaryCall;
    updateProduct(request: product_pb.UpdateProductRequest, callback: (error: grpc.ServiceError | null, response: product_pb.UpdateProductResponse) => void): grpc.ClientUnaryCall;
    updateProduct(request: product_pb.UpdateProductRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: product_pb.UpdateProductResponse) => void): grpc.ClientUnaryCall;
    updateProduct(request: product_pb.UpdateProductRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: product_pb.UpdateProductResponse) => void): grpc.ClientUnaryCall;
    deleteProduct(request: product_pb.DeleteProductRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteProduct(request: product_pb.DeleteProductRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteProduct(request: product_pb.DeleteProductRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    getProducts(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: product_pb.GetProductsResponse) => void): grpc.ClientUnaryCall;
    getProducts(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: product_pb.GetProductsResponse) => void): grpc.ClientUnaryCall;
    getProducts(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: product_pb.GetProductsResponse) => void): grpc.ClientUnaryCall;
    getProductsByIds(request: product_pb.GetProductsByIdsRequest, callback: (error: grpc.ServiceError | null, response: product_pb.GetProductsByIdsResponse) => void): grpc.ClientUnaryCall;
    getProductsByIds(request: product_pb.GetProductsByIdsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: product_pb.GetProductsByIdsResponse) => void): grpc.ClientUnaryCall;
    getProductsByIds(request: product_pb.GetProductsByIdsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: product_pb.GetProductsByIdsResponse) => void): grpc.ClientUnaryCall;
}

export class ProductServiceClient extends grpc.Client implements IProductServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public createProduct(request: product_pb.CreateProductRequest, callback: (error: grpc.ServiceError | null, response: product_pb.CreateProductResponse) => void): grpc.ClientUnaryCall;
    public createProduct(request: product_pb.CreateProductRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: product_pb.CreateProductResponse) => void): grpc.ClientUnaryCall;
    public createProduct(request: product_pb.CreateProductRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: product_pb.CreateProductResponse) => void): grpc.ClientUnaryCall;
    public getProduct(request: product_pb.GetProductRequest, callback: (error: grpc.ServiceError | null, response: product_pb.GetProductResponse) => void): grpc.ClientUnaryCall;
    public getProduct(request: product_pb.GetProductRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: product_pb.GetProductResponse) => void): grpc.ClientUnaryCall;
    public getProduct(request: product_pb.GetProductRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: product_pb.GetProductResponse) => void): grpc.ClientUnaryCall;
    public updateProduct(request: product_pb.UpdateProductRequest, callback: (error: grpc.ServiceError | null, response: product_pb.UpdateProductResponse) => void): grpc.ClientUnaryCall;
    public updateProduct(request: product_pb.UpdateProductRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: product_pb.UpdateProductResponse) => void): grpc.ClientUnaryCall;
    public updateProduct(request: product_pb.UpdateProductRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: product_pb.UpdateProductResponse) => void): grpc.ClientUnaryCall;
    public deleteProduct(request: product_pb.DeleteProductRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteProduct(request: product_pb.DeleteProductRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteProduct(request: product_pb.DeleteProductRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public getProducts(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: product_pb.GetProductsResponse) => void): grpc.ClientUnaryCall;
    public getProducts(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: product_pb.GetProductsResponse) => void): grpc.ClientUnaryCall;
    public getProducts(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: product_pb.GetProductsResponse) => void): grpc.ClientUnaryCall;
    public getProductsByIds(request: product_pb.GetProductsByIdsRequest, callback: (error: grpc.ServiceError | null, response: product_pb.GetProductsByIdsResponse) => void): grpc.ClientUnaryCall;
    public getProductsByIds(request: product_pb.GetProductsByIdsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: product_pb.GetProductsByIdsResponse) => void): grpc.ClientUnaryCall;
    public getProductsByIds(request: product_pb.GetProductsByIdsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: product_pb.GetProductsByIdsResponse) => void): grpc.ClientUnaryCall;
}
