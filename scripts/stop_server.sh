#!/bin/bash
cd /home/ubuntu/digo-academy-lms
if [ -f docker-compose.prod.yml ]; then
    docker-compose -f docker-compose.prod.yml down || true
fi
