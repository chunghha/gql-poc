#!/usr/bin/env bash

docker stop gql-poc
docker rm -v gql-poc
docker build . -t gql-poc
docker run --name gql-poc -d -p 4000:4000 gql-poc
docker ps