const fs = require('fs');
const path = require('path');

const dirsToRemove = [
  // NOTE: .next/cache is NOT listed here — amplify.yml moves it out to .next-cache
  // BEFORE this script runs (excludes it from the artifact, keeps it for caching).

  // Prisma CLI + native engines: safe to drop at RUNTIME for this app because it
  // uses the pg driver adapter (lib/db.ts) with the postgresql WASM query compiler,
  // not the native query engine. The CLI is only needed at build time (generate/migrate).
  'node_modules/prisma',
  'node_modules/@prisma/engines',
  'node_modules/@prisma/client/node_modules',

  // Pure dev/build tooling — never needed at runtime.
  'node_modules/typescript',
  'node_modules/@types',
  'node_modules/prettier',
  'node_modules/eslint',
  
  // OS-specific Next.js SWC binaries that aren't needed at runtime on AWS Linux
  'node_modules/@next/swc-darwin-arm64',
  'node_modules/@next/swc-darwin-x64',
  'node_modules/@next/swc-win32-arm64-msvc',
  'node_modules/@next/swc-win32-ia32-msvc',
  'node_modules/@next/swc-win32-x64-msvc',
];

dirsToRemove.forEach(dir => {
  const fullPath = path.join(process.cwd(), dir);
  if (fs.existsSync(fullPath)) {
    console.log(`Removing ${dir}`);
    fs.rmSync(fullPath, { recursive: true, force: true });
  }
});

// Remove unused Prisma WASM compilers (we only need postgresql)
const clientDir = path.join(process.cwd(), 'node_modules/@prisma/client');
if (fs.existsSync(clientDir)) {
  const files = fs.readdirSync(clientDir);
  files.forEach(file => {
    if (file.includes('.wasm') && !file.includes('postgresql')) {
      const fullPath = path.join(clientDir, file);
      console.log(`Removing ${file}`);
      fs.rmSync(fullPath, { force: true });
    }
  });
}

// Aggressively prune googleapis (200MB+) - we ONLY need calendar and oauth2
const googleApisDir = path.join(process.cwd(), 'node_modules/googleapis/build/src/apis');
if (fs.existsSync(googleApisDir)) {
  const apis = fs.readdirSync(googleApisDir);
  let removedCount = 0;
  apis.forEach(api => {
    if (api !== 'calendar' && api !== 'oauth2' && api !== 'index.js' && api !== 'index.d.ts') {
      const apiPath = path.join(googleApisDir, api);
      fs.rmSync(apiPath, { recursive: true, force: true });
      removedCount++;
    }
  });
  console.log(`Pruned ${removedCount} unused Google APIs to save space`);
}

console.log('Pruning complete!');
