#!/usr/bin/env node

/**
 * Environment validation script for Digo Academy
 * Checks if all required environment variables are properly set
 */

const requiredVars = [
  'NODE_ENV',
  'BETTER_AUTH_SECRET',
  'BETTER_AUTH_URL'
];

const optionalVars = [
  'DATABASE_URL',
  'DIRECT_URL',
  'GOOGLE_CLIENT_ID',
  'GOOGLE_CLIENT_SECRET',
  'GOOGLE_MEET_CLIENT_ID',
  'GOOGLE_MEET_CLIENT_SECRET',
  'S3_BUCKET',
  'S3_REGION',
  'S3_ACCESS_KEY_ID',
  'S3_SECRET_ACCESS_KEY',
  'SES_REGION',
  'SES_ACCESS_KEY_ID',
  'SES_SECRET_ACCESS_KEY',
  'EMAIL_FROM',
  'ENFORCE_MFA'
];

console.log('🔍 Environment Validation for Digo Academy');
console.log('==========================================\n');

let hasErrors = false;

// Check required variables
console.log('✅ Required Environment Variables:');
requiredVars.forEach(varName => {
  const value = process.env[varName];
  if (!value) {
    console.log(`❌ ${varName}: MISSING (Required)`);
    hasErrors = true;
  } else if (value.includes('dummy')) {
    console.log(`⚠️  ${varName}: Using dummy value (OK for build, set real value for production)`);
  } else {
    console.log(`✅ ${varName}: Set`);
  }
});

console.log('\n🔧 Optional Environment Variables:');
optionalVars.forEach(varName => {
  const value = process.env[varName];
  if (!value) {
    console.log(`⚪ ${varName}: Not set (Optional)`);
  } else if (value.includes('dummy')) {
    console.log(`⚠️  ${varName}: Using dummy value`);
  } else {
    console.log(`✅ ${varName}: Set`);
  }
});

console.log('\n📊 Build Environment Info:');
console.log(`Node.js: ${process.version}`);
console.log(`Platform: ${process.platform}`);
console.log(`Architecture: ${process.arch}`);
console.log(`NODE_ENV: ${process.env.NODE_ENV || 'not set'}`);

// Database connection check
console.log('\n🗄️  Database Configuration:');
const dbUrl = process.env.DATABASE_URL;
const directUrl = process.env.DIRECT_URL;

if (!dbUrl || dbUrl.includes('dummy')) {
  console.log('⚠️  No production database configured (using dummy for build)');
} else {
  console.log('✅ Database URL configured');
  console.log(`   Host: ${dbUrl.includes('localhost') ? 'localhost' : 'remote'}`);
}

if (!directUrl || directUrl.includes('dummy')) {
  console.log('⚠️  No direct database URL configured');
} else {
  console.log('✅ Direct database URL configured');
}

console.log('\n==========================================');
if (hasErrors) {
  console.log('❌ Validation completed with errors - check required variables');
  process.exit(1);
} else {
  console.log('✅ Environment validation passed');
  process.exit(0);
}