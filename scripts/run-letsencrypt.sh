#!/bin/bash

DOMAIN="admin.$1" EMAIL=$2 docker compose -f docker-compose-le.yaml up --build
DOMAIN=$1 EMAIL=$2 docker compose -f docker-compose-le.yaml up --build