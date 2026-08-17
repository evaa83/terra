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
        const remoteOut = execSync('git remote -v', { cwd: fullPath, encoding: 'utf8' });
        console.log(`Repo: ${dir}`);
        console.log(remoteOut.trim());
        console.log('-------------------');
      } catch (err) {
        // ignore
      }
    }
  }
} catch (err) {
  console.log('Error:', err.message);
}
