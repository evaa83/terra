const fs = require('fs');
const path = require('path');

const rootDir = 'c:\\Antigravity';

function searchGitFolder(dir) {
  const gitDir = path.join(dir, '.git');
  if (!fs.existsSync(gitDir)) return;

  // Recursively read all files in .git and search for 'eva'
  function walk(currentDir) {
    let files;
    try {
      files = fs.readdirSync(currentDir);
    } catch (e) {
      return;
    }
    for (const file of files) {
      const fullPath = path.join(currentDir, file);
      let stat;
      try {
        stat = fs.statSync(fullPath);
      } catch (e) {
        continue;
      }
      if (stat.isDirectory()) {
        walk(fullPath);
      } else if (stat.isFile()) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          if (content.toLowerCase().includes('eva')) {
            console.log(`Found "eva" in Git file: ${fullPath}`);
            // print lines
            const lines = content.split('\n');
            lines.forEach((line, idx) => {
              if (line.toLowerCase().includes('eva')) {
                console.log(`  Line ${idx + 1}: ${line.trim()}`);
              }
            });
          }
        } catch (e) {}
      }
    }
  }

  walk(gitDir);
}

try {
  const dirs = fs.readdirSync(rootDir);
  for (const dir of dirs) {
    const fullPath = path.join(rootDir, dir);
    searchGitFolder(fullPath);
  }
} catch (err) {
  console.log('Error:', err.message);
}

console.log('Finished search.');
