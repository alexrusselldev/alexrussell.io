#!/bin/bash

# $1 is Domain
# $2 is Email

crontab -l > mycron
echo "00 09 * * 1-5 /home/ubuntu/scripts/run-letsencrypt.sh $1 $2" >> mycron
crontab mycron
rm mycron