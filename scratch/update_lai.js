const fs = require('fs');
const path = require('path');

const basePath = 'c:\\Antigravity\\exhibition';

// Update index.html
const cnPath = path.join(basePath, 'index.html');
if (fs.existsSync(cnPath)) {
  let cnContent = fs.readFileSync(cnPath, 'utf8');
  cnContent = cnContent.replace(
    /<span class="text-orange-400 text-xs font-bold mt-0\.5 block truncate">計劃主持人<\/span>/g,
    '<span class="text-orange-400 text-xs font-bold mt-0.5 block truncate">清華大學立德領導人才培育計劃導師</span>'
  );
  fs.writeFileSync(cnPath, cnContent, 'utf8');
  console.log('Updated index.html');
}

// Update index-en.html
const enPath = path.join(basePath, 'index-en.html');
if (fs.existsSync(enPath)) {
  let enContent = fs.readFileSync(enPath, 'utf8');
  enContent = enContent.replace(
    /<span class="text-orange-400 text-xs font-bold mt-0\.5 block truncate">Project\s+Leader<\/span>/g,
    '<span class="text-orange-400 text-xs font-bold mt-0.5 block truncate">Mentor, Tsing Hua University Leader Program</span>'
  );
  fs.writeFileSync(enPath, enContent, 'utf8');
  console.log('Updated index-en.html');
}

// Update index-ja.html
const jaPath = path.join(basePath, 'index-ja.html');
if (fs.existsSync(jaPath)) {
  let jaContent = fs.readFileSync(jaPath, 'utf8');
  jaContent = jaContent.replace(
    /<span class="text-orange-400 text-xs font-bold mt-0\.5 block truncate">プロジェクトリーダー<\/span>/g,
    '<span class="text-orange-400 text-xs font-bold mt-0.5 block truncate">清華大学立徳リーダーシップ育成プログラム メンター</span>'
  );
  fs.writeFileSync(jaPath, jaContent, 'utf8');
  console.log('Updated index-ja.html');
}
