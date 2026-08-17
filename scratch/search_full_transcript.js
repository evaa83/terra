const fs = require('fs');
const readline = require('readline');

const logPath = 'C:\\Users\\agile\\.gemini\\antigravity\\brain\\e7ba202a-a8df-438b-b7d5-71db789be506\\.system_generated\\logs\\transcript_full.jsonl';

if (fs.existsSync(logPath)) {
  const rl = readline.createInterface({
    input: fs.createReadStream(logPath),
    output: process.stdout,
    terminal: false
  });

  rl.on('line', (line) => {
    try {
      const obj = JSON.parse(line);
      if (obj.step_index >= 285 && obj.step_index <= 305) {
        console.log(`Step ${obj.step_index}:`);
        if (obj.tool_calls) {
          obj.tool_calls.forEach(tc => {
            console.log(`  Tool: ${tc.name}`);
            console.log(`  Args: ${JSON.stringify(tc.arguments)}`);
          });
        }
        if (obj.content) {
          console.log(`  Content: ${obj.content.substring(0, 300)}`);
        }
      }
    } catch (err) {}
  });
}
