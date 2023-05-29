#!/bin/bash

# Read the value of DEVELOPMENT from .env file
DEVELOPMENT=$(grep -E '^DEVELOPMENT=' .env | cut -d '=' -f2)

# Check the value and execute the appropriate docker-compose command
if [[ "$DEVELOPMENT" == "true" ]]; then
  docker-compose -f docker-compose.dev.yml down
else
  docker-compose -f docker-compose.prod.yml down
fi
