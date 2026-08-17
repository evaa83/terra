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
        const authors = execSync('git log -n 50 --pretty=format:"%an <%ae>"', { cwd: fullPath, encoding: 'utf8' });
        const uniqueAuthors = Array.from(new Set(authors.trim().split('\n'))).join(', ');
        console.log(`Repo: ${dir} -> [${uniqueAuthors}]`);
      } catch (err) {
        // ignore
      }
    }
  }
} catch (err) {
  console.log('Error:', err.message);
}
