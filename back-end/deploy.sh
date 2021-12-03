#!/usr/bin/env bash
# git pull
mvn clean package
docker stack rm shopee-ms
# before run the following command, make sure that an external overlay network, named 'food-shop-net' already created
# docker network create -d overlay --attachable microservice-net
# build gallery-service image
docker image rm gallery-service:1.0
docker build -t gallery-service:1.0 ./gallery-service
#build image-service image
docker image rm image-service:1.0
docker build -t image-service:1.0 ./image-service
#build user-service image
docker image rm user-service:1.0
docker build -t user-service:1.0 ./user-service
# deploy into docker stack
docker stack deploy --compose-file backend-compose.yaml shopee-ms
