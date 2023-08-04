#!/bin/bash

# $1 is Domain
# $2 is Email

lines=(
    "events {}"
    "http {"
    "    server {"
    "       listen 80;"
    "       listen [::]:80;"
    "       server_name admin.$1;"
    "       "
    "       location ~ /.well-known/acme-challenge {"
    "           allow all;"
    "           root /tmp/acme_challenge;"
    "       }"
    "   }"
    "    server {"
    "       listen 80;"
    "       listen [::]:80;"
    "       server_name $1;"
    "       "
    "       location ~ /.well-known/acme-challenge {"
    "           allow all;"
    "           root /tmp/acme_challenge;"
    "       }"
    "   }"
    "}"
)
for ((i = 0; i < ${#lines[@]}; i++))
do
    printf '%b\n' "${lines[$i]}" >> ./nginx.conf
done