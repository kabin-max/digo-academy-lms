const fs = require('fs');
const path = require('path');

const dirsToRemove = [
  // NOTE: .next/cache is NOT listed here — amplify.yml moves it out to .next-cache
  // BEFORE this script runs (excludes it from the artifact, keeps it for caching).
  // .next/standalone is not produced (next.config has no `output: 'standalone'`).

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
  'node_modules/eslint'
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

console.log('Pruning complete!');
