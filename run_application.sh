#!/bin/bash

# Read the value of DEVELOPMENT from .env file
DEVELOPMENT=$(grep -E '^DEVELOPMENT=' .env | cut -d '=' -f2)
current_dir=$(pwd)

cd ./frontend
yarn install --ignore-engines

# Check the value and execute the appropriate docker-compose command
if [[ "$DEVELOPMENT" == "true" ]]; then
  cd "$current_dir"
  docker-compose -f docker-compose.dev.yml up --build 
else
  yarn build
  cd "$current_dir"
  docker-compose -f docker-compose.prod.yml up --build -d
fi
