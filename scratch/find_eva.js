const fs = require('fs');
const path = require('path');
const execSync = require('child_process').execSync;

const rootDir = 'c:\\Antigravity';

// 1. Search all git repos in c:\Antigravity for remotes containing 'eva'
try {
  const dirs = fs.readdirSync(rootDir);
  for (const dir of dirs) {
    const fullPath = path.join(rootDir, dir);
    if (fs.existsSync(path.join(fullPath, '.git'))) {
      try {
        const remoteOut = execSync('git remote -v', { cwd: fullPath, encoding: 'utf8' });
        if (remoteOut.toLowerCase().includes('eva')) {
          console.log(`[Git Remote] Found "eva" in repo "${dir}":`);
          console.log(remoteOut);
        }
      } catch (err) {
        // ignore error
      }
    }
  }
} catch (err) {
  console.log('Error listing directories:', err.message);
}

// 2. Search transcript for "eva"
const logPath = 'C:\\Users\\agile\\.gemini\\antigravity\\brain\\e7ba202a-a8df-438b-b7d5-71db789be506\\.system_generated\\logs\\transcript_full.jsonl';
if (fs.existsSync(logPath)) {
  const content = fs.readFileSync(logPath, 'utf8');
  const lines = content.split('\n');
  lines.forEach((line, index) => {
    if (line.toLowerCase().includes('eva')) {
      try {
        const obj = JSON.parse(line);
        if (obj.content) {
          console.log(`[Transcript Step ${obj.step_index}]: ${obj.content.substring(0, 300)}`);
        }
      } catch (err) {}
    }
  });
}

console.log('Search finished.');
