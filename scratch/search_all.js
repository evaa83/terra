const fs = require('fs');
const path = require('path');

const rootDir = 'c:\\Antigravity';
const searchTerms = ['利益共同體', '進度預測', '部門牆', 'the best, the worst', '合約'];

function walkDir(dir) {
  let files;
  try {
    files = fs.readdirSync(dir);
  } catch (err) {
    return;
  }
  for (const file of files) {
    if (file === 'node_modules' || file === '.git' || file === 'exhibition' || file.endsWith('.zip')) {
      continue;
    }
    const fullPath = path.join(dir, file);
    let stat;
    try {
      stat = fs.statSync(fullPath);
    } catch (err) {
      continue;
    }
    if (stat.isDirectory()) {
      walkDir(fullPath);
    } else if (stat.isFile()) {
      const ext = path.extname(fullPath).toLowerCase();
      if (['.html', '.md', '.txt', '.js', '.json', '.xml', '.css'].includes(ext)) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          for (const term of searchTerms) {
            if (content.includes(term)) {
              console.log(`Found "${term}" in: ${fullPath}`);
            }
          }
        } catch (err) {
          // ignore read errors
        }
      }
    }
  }
}

walkDir(rootDir);
console.log('Search finished.');
