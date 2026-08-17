const fs = require('fs');
const path = require('path');

const basePath = 'c:\\Antigravity\\exhibition';

const cnFiles = [
  'methodology/discover.html',
  'methodology/define.html',
  'methodology/develop.html',
  'methodology/deliver.html'
];

const enFiles = [
  'methodology/discover-en.html',
  'methodology/define-en.html',
  'methodology/develop-en.html',
  'methodology/deliver-en.html'
];

const jaFiles = [
  'methodology/discover-ja.html',
  'methodology/define-ja.html',
  'methodology/develop-ja.html',
  'methodology/deliver-ja.html'
];

// Fix Chinese files
cnFiles.forEach(file => {
  const filePath = path.join(basePath, file);
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');

  content = content.replace(/\.\.\/discover\.html/g, 'discover.html');
  content = content.replace(/\.\.\/define\.html/g, 'define.html');
  content = content.replace(/\.\.\/develop\.html/g, 'develop.html');
  content = content.replace(/\.\.\/deliver\.html/g, 'deliver.html');

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Fixed links in ${file}`);
});

// Fix English files
enFiles.forEach(file => {
  const filePath = path.join(basePath, file);
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');

  content = content.replace(/\.\.\/discover-en\.html/g, 'discover-en.html');
  content = content.replace(/\.\.\/define-en\.html/g, 'define-en.html');
  content = content.replace(/\.\.\/develop-en\.html/g, 'develop-en.html');
  content = content.replace(/\.\.\/deliver-en\.html/g, 'deliver-en.html');

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Fixed links in ${file}`);
});

// Fix Japanese files
jaFiles.forEach(file => {
  const filePath = path.join(basePath, file);
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');

  content = content.replace(/\.\.\/discover-ja\.html/g, 'discover-ja.html');
  content = content.replace(/\.\.\/define-ja\.html/g, 'define-ja.html');
  content = content.replace(/\.\.\/develop-ja\.html/g, 'develop-ja.html');
  content = content.replace(/\.\.\/deliver-ja\.html/g, 'deliver-ja.html');

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Fixed links in ${file}`);
});
