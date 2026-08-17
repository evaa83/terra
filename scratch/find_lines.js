const fs = require('fs');

const filePath = 'c:\\Antigravity\\writing\\agile_manifesto.html';
if (fs.existsSync(filePath)) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  lines.forEach((line, index) => {
    const lineNum = index + 1;
    if (line.includes('進度預測') || line.includes('部門牆') || line.includes('利益共同體') || line.includes('規格外') || line.includes('合約') || line.includes('廠商')) {
      console.log(`${lineNum}: ${line.trim()}`);
    }
  });
} else {
  console.log('File does not exist.');
}
