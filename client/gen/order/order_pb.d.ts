// package: order
// file: order.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Order extends jspb.Message { 
    getId(): number;
    setId(value: number): Order;
    getTotalprice(): number;
    setTotalprice(value: number): Order;
    getCreatedAt(): string;
    setCreatedAt(value: string): Order;
    clearProductsList(): void;
    getProductsList(): Array<Order.OrderProduct>;
    setProductsList(value: Array<Order.OrderProduct>): Order;
    addProducts(value?: Order.OrderProduct, index?: number): Order.OrderProduct;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Order.AsObject;
    static toObject(includeInstance: boolean, msg: Order): Order.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Order, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Order;
    static deserializeBinaryFromReader(message: Order, reader: jspb.BinaryReader): Order;
}

export namespace Order {
    export type AsObject = {
        id: number,
        totalprice: number,
        createdAt: string,
        productsList: Array<Order.OrderProduct.AsObject>,
    }


    export class OrderProduct extends jspb.Message { 
        getId(): number;
        setId(value: number): OrderProduct;
        getName(): string;
        setName(value: string): OrderProduct;
        getPrice(): number;
        setPrice(value: number): OrderProduct;
        getQuantity(): number;
        setQuantity(value: number): OrderProduct;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): OrderProduct.AsObject;
        static toObject(includeInstance: boolean, msg: OrderProduct): OrderProduct.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: OrderProduct, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): OrderProduct;
        static deserializeBinaryFromReader(message: OrderProduct, reader: jspb.BinaryReader): OrderProduct;
    }

    export namespace OrderProduct {
        export type AsObject = {
            id: number,
            name: string,
            price: number,
            quantity: number,
        }
    }

}

export class GetOrderRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): GetOrderRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetOrderRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetOrderRequest): GetOrderRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetOrderRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetOrderRequest;
    static deserializeBinaryFromReader(message: GetOrderRequest, reader: jspb.BinaryReader): GetOrderRequest;
}

export namespace GetOrderRequest {
    export type AsObject = {
        id: number,
    }
}

export class GetOrderResponse extends jspb.Message { 

    hasOrder(): boolean;
    clearOrder(): void;
    getOrder(): Order | undefined;
    setOrder(value?: Order): GetOrderResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetOrderResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetOrderResponse): GetOrderResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetOrderResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetOrderResponse;
    static deserializeBinaryFromReader(message: GetOrderResponse, reader: jspb.BinaryReader): GetOrderResponse;
}

export namespace GetOrderResponse {
    export type AsObject = {
        order?: Order.AsObject,
    }
}

export class CreateOrderRequest extends jspb.Message { 
    clearProductsList(): void;
    getProductsList(): Array<CreateOrderRequest.OrderProduct>;
    setProductsList(value: Array<CreateOrderRequest.OrderProduct>): CreateOrderRequest;
    addProducts(value?: CreateOrderRequest.OrderProduct, index?: number): CreateOrderRequest.OrderProduct;
    getTotalprice(): number;
    setTotalprice(value: number): CreateOrderRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateOrderRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateOrderRequest): CreateOrderRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateOrderRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateOrderRequest;
    static deserializeBinaryFromReader(message: CreateOrderRequest, reader: jspb.BinaryReader): CreateOrderRequest;
}

export namespace CreateOrderRequest {
    export type AsObject = {
        productsList: Array<CreateOrderRequest.OrderProduct.AsObject>,
        totalprice: number,
    }


    export class OrderProduct extends jspb.Message {
        getProductid(): number;
        setProductid(value: number): OrderProduct;
        getName(): string;
        setName(value: string): OrderProduct;
        getPrice(): number;
        setPrice(value: number): OrderProduct;
        getQuantity(): number;
        setQuantity(value: number): OrderProduct;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): OrderProduct.AsObject;
        static toObject(includeInstance: boolean, msg: OrderProduct): OrderProduct.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: OrderProduct, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): OrderProduct;
        static deserializeBinaryFromReader(message: OrderProduct, reader: jspb.BinaryReader): OrderProduct;
    }

    export namespace OrderProduct {
        export type AsObject = {
            productid: number,
            name: string,
            price: number,
            quantity: number,
        }
    }

}

export class CreateOrderResponse extends jspb.Message { 

    hasOrder(): boolean;
    clearOrder(): void;
    getOrder(): Order | undefined;
    setOrder(value?: Order): CreateOrderResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateOrderResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateOrderResponse): CreateOrderResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateOrderResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateOrderResponse;
    static deserializeBinaryFromReader(message: CreateOrderResponse, reader: jspb.BinaryReader): CreateOrderResponse;
}

export namespace CreateOrderResponse {
    export type AsObject = {
        order?: Order.AsObject,
    }
}
