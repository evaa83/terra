const fs = require('fs');
const path = require('path');

const files = [
  'index.html',
  'index-en.html',
  'index-ja.html',
  'earth/index.html',
  'earth/index-en.html',
  'earth/index-ja.html'
];

const basePath = 'c:\\Antigravity\\exhibition';

files.forEach(file => {
  const filePath = path.join(basePath, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.replace(/<title>[\s\S]*?<\/title>/i, '<title>泰拉學校 | Terra School</title>');
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Simplified title in ${file}`);
  } else {
    console.log(`File not found: ${file}`);
  }
});
