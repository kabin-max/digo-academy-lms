#!/bin/bash
cd /home/ubuntu/digo-academy-lms

# Generate a .env.production file if it doesn't exist
if [ ! -f .env.production ]; then
    echo "Creating .env.production from example. Please update with real values via AWS Systems Manager Parameter Store or SSH."
    cp .env.example .env.production
fi

# Make sure permissions are correct for ubuntu user
sudo chown -R ubuntu:ubuntu /home/ubuntu/digo-academy-lms

# Build and start the containers
docker-compose -f docker-compose.prod.yml build
docker-compose -f docker-compose.prod.yml up -d

# Wait a few seconds for DB to be healthy
sleep 10

# Run Prisma migrations inside the app container
docker exec digo-academy-app npx prisma migrate deploy
