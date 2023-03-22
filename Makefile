.PHONY: set-order-proto set-order-proto npm-dev build up down

set-order-proto:
	cd ./order && buf generate proto

set-product-proto:
	cd ./product && buf generate proto

npm-install:
	cd ./client && npm install

npm-dev:
	cd ./client && npm run dev

build:
	docker compose build --no-cache

up:
	docker compose up -d

down:
	docker compose down