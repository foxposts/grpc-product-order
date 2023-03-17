package adapter

import (
	"google.golang.org/grpc"
	"log"
	"net"
	"orderservice/adapter/service_server"
	pb "orderservice/gen/order"
	"os"
)

func Server() {

	lis, err := net.Listen("tcp", os.Getenv("SEVER_ADDRESS"))
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}

	s := grpc.NewServer()

	srv := service_server.OrderServer{}
	pb.RegisterOrderServiceServer(s, &srv)

	if err := s.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %s", err)
	}
}
