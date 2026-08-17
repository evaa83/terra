const fs = require('fs');
const filePath = 'c:\\Antigravity\\writing\\agile_manifesto.html';
const content = fs.readFileSync(filePath, 'utf8');
const lines = content.split('\n');
lines.forEach((line, index) => {
  if (line.includes('</style>')) {
    console.log(`Line ${index + 1}: ${line}`);
  }
});
