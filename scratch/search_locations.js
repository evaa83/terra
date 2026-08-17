const fs = require('fs');
const logPath = 'C:\\Users\\agile\\.gemini\\antigravity\\brain\\e7ba202a-a8df-438b-b7d5-71db789be506\\.system_generated\\logs\\transcript_full.jsonl';

if (fs.existsSync(logPath)) {
  const content = fs.readFileSync(logPath, 'utf8');
  const lines = content.split('\n');
  lines.forEach((line, index) => {
    if (line.includes('發布') || line.includes('發佈') || line.includes('github') || line.includes('位置') || line.includes('GitHub')) {
      try {
        const obj = JSON.parse(line);
        if (obj.content) {
          console.log(`Step ${obj.step_index} (${obj.source}): ${obj.content.substring(0, 200)}`);
        }
      } catch (err) {}
    }
  });
}
