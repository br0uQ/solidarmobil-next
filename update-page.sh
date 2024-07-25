#!/bin/sh

git pull
docker compose down
docker build -t solidarmobil-web:latest .
docker compose up -d
