

# grpc microservices構成

orderとproductを疎結合とし、grpc経由でデータの受け渡しをする構成。


## pb.go作成

```
make set-order-proto
make set-product-proto
```


## ビルド


```
make build
```

## 起動

```
make up
```