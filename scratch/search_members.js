const fs = require('fs');
const path = require('path');

const filePath = 'c:\\Antigravity\\terra-challenges\\challenges_site\\members.html';
if (fs.existsSync(filePath)) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  lines.forEach((line, index) => {
    if (line.toLowerCase().includes('eva') || line.includes('83') || line.includes('宜') || line.includes('蓁')) {
      console.log(`Line ${index + 1}: ${line.trim()}`);
    }
  });
} else {
  console.log('File does not exist.');
}
