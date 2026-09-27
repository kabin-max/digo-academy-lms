const fs = require('fs');
const path = require('path');

const dirsToRemove = [
  '.next/cache',
  '.next/standalone',
  'node_modules/prisma',
  'node_modules/@prisma/engines',
  'node_modules/@prisma/client/node_modules',
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
