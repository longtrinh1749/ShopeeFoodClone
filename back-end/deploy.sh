#!/usr/bin/env bash
# git pull
mvn clean package
docker stack rm shopee-ms
# before run the following command, make sure that an external overlay network, named 'food-shop-net' already created
# docker network create -d overlay --attachable microservice-net

# build user-service image
# docker image rm user-service:1.0
docker build -t user-service:1.0 ./user-service

# build product-service image
# docker image rm product-service:1.0
docker build -t product-service:1.0 ./product-service

# build gallery-service image
# docker image rm gallery-service:1.0
docker build -t order-service:1.0 ./order-service

# deploy into docker stack
docker stack deploy --compose-file backend-compose.yaml shopee-ms
