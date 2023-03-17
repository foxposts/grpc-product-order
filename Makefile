.PHONY: set-order-proto set-order-proto build up down

set-order-proto:
	cd ./order && buf generate proto

set-product-proto:
	cd ./product && buf generate proto

build:
	docker compose build --no-cache

up:
	docker compose up -d

down:
	docker compose down