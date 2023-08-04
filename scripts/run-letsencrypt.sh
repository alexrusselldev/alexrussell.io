#!/bin/bash

DOMAIN="dashboard.$1" EMAIL=$2 docker compose -f docker-compose-le.yaml up --build
DOMAIN="home.$1" EMAIL=$2 docker compose -f docker-compose-le.yaml up --build