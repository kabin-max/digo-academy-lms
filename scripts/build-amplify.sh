#!/bin/bash

# Amplify build script for Digo Academy
# This script handles environment setup and builds for AWS Amplify

set -e  # Exit on any error

echo "🚀 Starting Amplify build for Digo Academy..."

# Function to check if a command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Ensure required commands exist
if ! command_exists node; then
    echo "❌ Node.js is not installed"
    exit 1
fi

if ! command_exists npm; then
    echo "❌ npm is not installed"
    exit 1
fi

# Set default environment variables for build
export NODE_ENV="production"

echo "📦 Node version: $(node --version)"
echo "📦 NPM version: $(npm --version)"

# Set dummy database URL for Prisma generate if not provided
if [ -z "$DATABASE_URL" ] || [[ "$DATABASE_URL" == *"dummy"* ]]; then
  echo "⚠️  No real DATABASE_URL found, using dummy for build"
  export DATABASE_URL="postgresql://dummy:dummy@localhost:5432/dummy"
fi

if [ -z "$DIRECT_URL" ] || [[ "$DIRECT_URL" == *"dummy"* ]]; then
  echo "⚠️  No real DIRECT_URL found, using dummy for build"
  export DIRECT_URL="postgresql://dummy:dummy@localhost:5432/dummy"
fi

# Set other required environment variables with defaults for build
export BETTER_AUTH_SECRET="${BETTER_AUTH_SECRET:-dummy_secret_for_build_only_do_not_use_in_production}"
export BETTER_AUTH_URL="${BETTER_AUTH_URL:-https://localhost:3000}"

# Validate environment
echo "🔍 Validating environment configuration..."
if [ -f "scripts/validate-env.js" ]; then
    node scripts/validate-env.js
    echo "✅ Environment validation passed"
else
    echo "⚠️  Environment validation script not found, continuing..."
fi

# Generate Prisma client
echo "🔧 Generating Prisma client..."
if ! npx prisma generate; then
    echo "❌ Prisma client generation failed"
    exit 1
fi

echo "✅ Prisma client generated successfully"

# Build Next.js app
echo "🏗️  Building Next.js application..."
if ! npx next build; then
    echo "❌ Next.js build failed"
    exit 1
fi

echo "✅ Next.js build completed successfully"

# Run pruning script to optimize bundle size
echo "🧹 Optimizing bundle size..."
if [ -f "prune-amplify.js" ]; then
    if ! node prune-amplify.js; then
        echo "⚠️  Bundle pruning failed, but continuing..."
    else
        echo "✅ Bundle optimization completed"
    fi
else
    echo "⚠️  prune-amplify.js not found, skipping optimization"
fi

echo "🎉 Build completed successfully!"
echo "📊 Build artifacts created in .next directory"