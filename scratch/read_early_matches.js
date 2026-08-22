const fs = require('fs');
const path = require('path');

const logPath = 'C:\\Users\\agile\\.gemini\\antigravity\\brain\\e7ba202a-a8df-438b-b7d5-71db789be506\\.system_generated\\logs\\transcript.jsonl';

if (!fs.existsSync(logPath)) {
  console.log('Log file does not exist');
  process.exit(0);
}

const lines = fs.readFileSync(logPath, 'utf8').split('\n');
let matchCount = 0;

for (let line of lines) {
  if (line.includes('天之校') || line.includes('棲蘭') || line.includes('2027')) {
    matchCount++;
    if (matchCount <= 9) {
      console.log(`=== MATCH ${matchCount} ===`);
      try {
        const obj = JSON.parse(line);
        console.log(`Source: ${obj.source} | Type: ${obj.type}`);
        if (obj.content) {
          console.log(obj.content);
        } else if (obj.tool_calls) {
          console.log(JSON.stringify(obj.tool_calls, null, 2));
        }
      } catch (e) {
        console.log(line);
      }
    }
  }
}
