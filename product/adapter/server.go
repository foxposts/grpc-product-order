package adapter

import (
	"google.golang.org/grpc"
	"log"
	"net"
	"os"
	"productservice/adapter/service_server"
	pb "productservice/gen/product"
)

func Server() {
	lis, err := net.Listen("tcp", os.Getenv("SEVER_ADDRESS"))
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}
	s := grpc.NewServer()
	srv := service_server.ProductServer{}
	pb.RegisterProductServiceServer(s, &srv)
	if err := s.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %s", err)
	}
}
