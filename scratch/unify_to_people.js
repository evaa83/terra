const fs = require('fs');
const path = require('path');

const basePath = 'c:\\Antigravity\\exhibition';

// 1. Update index.html
const zhPath = path.join(basePath, 'index.html');
if (fs.existsSync(zhPath)) {
  let content = fs.readFileSync(zhPath, 'utf8');
  content = content.replace('我們帶領參與者走進現場', '我們帶領人們走進現場');
  fs.writeFileSync(zhPath, content, 'utf8');
  console.log('Updated index.html to use "人們"');
}

// 2. Update index-en.html
const enPath = path.join(basePath, 'index-en.html');
if (fs.existsSync(enPath)) {
  let content = fs.readFileSync(enPath, 'utf8');
  content = content.replace(
    'We guide participants into real-world sites to discover real issues.',
    'We guide people into real-world sites to discover real issues.'
  );
  content = content.replace(
    'Participants slow down to connect with themselves',
    'People slow down to connect with themselves'
  );
  fs.writeFileSync(enPath, content, 'utf8');
  console.log('Updated index-en.html to use "people"');
}

// 3. Update index-ja.html
const jaPath = path.join(basePath, 'index-ja.html');
if (fs.existsSync(jaPath)) {
  let content = fs.readFileSync(jaPath, 'utf8');
  content = content.replace(
    '私たちは参加者を現場へ連れ出し、リアルな世界と問題に向き合わせます。',
    '私たちは人々を現場へ連れ出し、リアルな世界と問題に向き合わせます。'
  );
  fs.writeFileSync(jaPath, content, 'utf8');
  console.log('Updated index-ja.html to use "人々"');
}
