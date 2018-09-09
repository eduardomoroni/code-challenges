#! /bin/bash

echo "Starting proxy backend"

docker build \
  -t "backend-proxy" \
  -f Dockerfile .

docker run \
  -e "NODE_ENV=production" \
  -e "DEBUG=backend:*" \
  --env-file ".env" \
  -m "500M" --memory-swap "1G" \
  -p "3000:3000" \
  backend-proxy
