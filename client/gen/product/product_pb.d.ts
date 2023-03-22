// package: product
// file: product.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class Product extends jspb.Message { 
    getId(): number;
    setId(value: number): Product;
    getName(): string;
    setName(value: string): Product;
    getPrice(): number;
    setPrice(value: number): Product;
    getCreatedAt(): string;
    setCreatedAt(value: string): Product;
    getUpdatedAt(): string;
    setUpdatedAt(value: string): Product;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Product.AsObject;
    static toObject(includeInstance: boolean, msg: Product): Product.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Product, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Product;
    static deserializeBinaryFromReader(message: Product, reader: jspb.BinaryReader): Product;
}

export namespace Product {
    export type AsObject = {
        id: number,
        name: string,
        price: number,
        createdAt: string,
        updatedAt: string,
    }
}

export class GetProductRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): GetProductRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetProductRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetProductRequest): GetProductRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetProductRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetProductRequest;
    static deserializeBinaryFromReader(message: GetProductRequest, reader: jspb.BinaryReader): GetProductRequest;
}

export namespace GetProductRequest {
    export type AsObject = {
        id: number,
    }
}

export class GetProductResponse extends jspb.Message { 

    hasProduct(): boolean;
    clearProduct(): void;
    getProduct(): Product | undefined;
    setProduct(value?: Product): GetProductResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetProductResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetProductResponse): GetProductResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetProductResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetProductResponse;
    static deserializeBinaryFromReader(message: GetProductResponse, reader: jspb.BinaryReader): GetProductResponse;
}

export namespace GetProductResponse {
    export type AsObject = {
        product?: Product.AsObject,
    }
}

export class GetProductsByIdsRequest extends jspb.Message { 
    clearIdsList(): void;
    getIdsList(): Array<number>;
    setIdsList(value: Array<number>): GetProductsByIdsRequest;
    addIds(value: number, index?: number): number;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetProductsByIdsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetProductsByIdsRequest): GetProductsByIdsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetProductsByIdsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetProductsByIdsRequest;
    static deserializeBinaryFromReader(message: GetProductsByIdsRequest, reader: jspb.BinaryReader): GetProductsByIdsRequest;
}

export namespace GetProductsByIdsRequest {
    export type AsObject = {
        idsList: Array<number>,
    }
}

export class GetProductsByIdsResponse extends jspb.Message { 
    clearProductsList(): void;
    getProductsList(): Array<Product>;
    setProductsList(value: Array<Product>): GetProductsByIdsResponse;
    addProducts(value?: Product, index?: number): Product;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetProductsByIdsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetProductsByIdsResponse): GetProductsByIdsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetProductsByIdsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetProductsByIdsResponse;
    static deserializeBinaryFromReader(message: GetProductsByIdsResponse, reader: jspb.BinaryReader): GetProductsByIdsResponse;
}

export namespace GetProductsByIdsResponse {
    export type AsObject = {
        productsList: Array<Product.AsObject>,
    }
}

export class GetProductsResponse extends jspb.Message { 
    clearProductsList(): void;
    getProductsList(): Array<Product>;
    setProductsList(value: Array<Product>): GetProductsResponse;
    addProducts(value?: Product, index?: number): Product;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetProductsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetProductsResponse): GetProductsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetProductsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetProductsResponse;
    static deserializeBinaryFromReader(message: GetProductsResponse, reader: jspb.BinaryReader): GetProductsResponse;
}

export namespace GetProductsResponse {
    export type AsObject = {
        productsList: Array<Product.AsObject>,
    }
}

export class CreateProductRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): CreateProductRequest;
    getPrice(): number;
    setPrice(value: number): CreateProductRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateProductRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateProductRequest): CreateProductRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateProductRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateProductRequest;
    static deserializeBinaryFromReader(message: CreateProductRequest, reader: jspb.BinaryReader): CreateProductRequest;
}

export namespace CreateProductRequest {
    export type AsObject = {
        name: string,
        price: number,
    }
}

export class CreateProductResponse extends jspb.Message { 
    getId(): number;
    setId(value: number): CreateProductResponse;
    getName(): string;
    setName(value: string): CreateProductResponse;
    getPrice(): number;
    setPrice(value: number): CreateProductResponse;
    getCreatedAt(): string;
    setCreatedAt(value: string): CreateProductResponse;
    getUpdatedAt(): string;
    setUpdatedAt(value: string): CreateProductResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateProductResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateProductResponse): CreateProductResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateProductResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateProductResponse;
    static deserializeBinaryFromReader(message: CreateProductResponse, reader: jspb.BinaryReader): CreateProductResponse;
}

export namespace CreateProductResponse {
    export type AsObject = {
        id: number,
        name: string,
        price: number,
        createdAt: string,
        updatedAt: string,
    }
}

export class UpdateProductRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): UpdateProductRequest;
    getName(): string;
    setName(value: string): UpdateProductRequest;
    getPrice(): number;
    setPrice(value: number): UpdateProductRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateProductRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateProductRequest): UpdateProductRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateProductRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateProductRequest;
    static deserializeBinaryFromReader(message: UpdateProductRequest, reader: jspb.BinaryReader): UpdateProductRequest;
}

export namespace UpdateProductRequest {
    export type AsObject = {
        id: number,
        name: string,
        price: number,
    }
}

export class UpdateProductResponse extends jspb.Message { 
    getName(): string;
    setName(value: string): UpdateProductResponse;
    getPrice(): number;
    setPrice(value: number): UpdateProductResponse;
    getUpdatedAt(): string;
    setUpdatedAt(value: string): UpdateProductResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateProductResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateProductResponse): UpdateProductResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateProductResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateProductResponse;
    static deserializeBinaryFromReader(message: UpdateProductResponse, reader: jspb.BinaryReader): UpdateProductResponse;
}

export namespace UpdateProductResponse {
    export type AsObject = {
        name: string,
        price: number,
        updatedAt: string,
    }
}

export class DeleteProductRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): DeleteProductRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteProductRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteProductRequest): DeleteProductRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteProductRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteProductRequest;
    static deserializeBinaryFromReader(message: DeleteProductRequest, reader: jspb.BinaryReader): DeleteProductRequest;
}

export namespace DeleteProductRequest {
    export type AsObject = {
        id: number,
    }
}
