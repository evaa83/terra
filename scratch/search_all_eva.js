const fs = require('fs');
const path = require('path');

const rootDir = 'c:\\Antigravity\\exhibition';

function walkDir(dir) {
  let files;
  try {
    files = fs.readdirSync(dir);
  } catch (err) {
    return;
  }
  for (const file of files) {
    if (file === 'node_modules' || file === '.git' || file.endsWith('.zip')) {
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
      if (['.html', '.md', '.txt', '.js', '.json', '.sh', '.bat', '.css'].includes(ext)) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          if (content.toLowerCase().includes('eva')) {
            console.log(`Found "eva" in: ${fullPath}`);
            const lines = content.split('\n');
            lines.forEach((line, index) => {
              if (line.toLowerCase().includes('eva')) {
                console.log(`  Line ${index + 1}: ${line.trim()}`);
              }
            });
          }
        } catch (err) {
          // ignore
        }
      }
    }
  }
}

walkDir(rootDir);
console.log('Search finished.');
