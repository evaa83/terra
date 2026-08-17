const fs = require('fs');
const readline = require('readline');

const logPath = 'C:\\Users\\agile\\.gemini\\antigravity\\brain\\e7ba202a-a8df-438b-b7d5-71db789be506\\.system_generated\\logs\\transcript.jsonl';

if (fs.existsSync(logPath)) {
  const rl = readline.createInterface({
    input: fs.createReadStream(logPath),
    output: process.stdout,
    terminal: false
  });

  rl.on('line', (line) => {
    if (line.includes('github') || line.includes('git push') || line.includes('git remote') || line.includes('發布') || line.includes('部署')) {
      // Find matches
      try {
        const obj = JSON.parse(line);
        if (obj.tool_calls) {
          obj.tool_calls.forEach(tc => {
            if (tc.name === 'run_command') {
              console.log(`Tool call in step ${obj.step_index}: ${tc.arguments.CommandLine}`);
            }
          });
        }
        if (obj.content && (obj.content.includes('github') || obj.content.includes('git push') || obj.content.includes('發布'))) {
          console.log(`Content in step ${obj.step_index}: ${obj.content.substring(0, 150)}...`);
        }
      } catch (err) {
        // ignore JSON parse error
      }
    }
  });
} else {
  console.log('Transcript log not found.');
}
