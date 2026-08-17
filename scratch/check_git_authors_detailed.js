const fs = require('fs');
const path = require('path');
const execSync = require('child_process').execSync;

const rootDir = 'c:\\Antigravity';

try {
  const dirs = fs.readdirSync(rootDir);
  for (const dir of dirs) {
    const fullPath = path.join(rootDir, dir);
    if (fs.existsSync(path.join(fullPath, '.git'))) {
      try {
        const authors = execSync('git log --all --pretty=format:"%an <%ae>"', { cwd: fullPath, encoding: 'utf8' });
        const lines = Array.from(new Set(authors.trim().split('\n')));
        lines.forEach(line => {
          if (line.toLowerCase().includes('eva')) {
            console.log(`Repo: ${dir} has author matching 'eva': ${line}`);
          }
        });
      } catch (err) {
        // ignore
      }
    }
  }
} catch (err) {
  console.log('Error:', err.message);
}

console.log('Finished author check.');
