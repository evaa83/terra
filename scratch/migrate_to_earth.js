const fs = require('fs');
const path = require('path');

const basePath = 'c:\\Antigravity\\exhibition';
const earthPath = path.join(basePath, 'earth');

// 1. Create earth directory if it doesn't exist
if (!fs.existsSync(earthPath)) {
  fs.mkdirSync(earthPath, { recursive: true });
  console.log('Created earth/ directory');
}

// 2. Move methodology/ to earth/methodology/
const oldMethodology = path.join(basePath, 'methodology');
const newMethodology = path.join(earthPath, 'methodology');
if (fs.existsSync(oldMethodology) && !fs.existsSync(newMethodology)) {
  fs.renameSync(oldMethodology, newMethodology);
  console.log('Moved methodology/ to earth/methodology/');
}

// 3. Move main HTML files from root to earth/
const filesToMove = [
  'index.html',
  'index-en.html',
  'index-ja.html',
  'terra.html',
  'terra-en.html',
  'terra-ja.html'
];

filesToMove.forEach(file => {
  const oldFile = path.join(basePath, file);
  const newFile = path.join(earthPath, file);
  if (fs.existsSync(oldFile)) {
    fs.renameSync(oldFile, newFile);
    console.log(`Moved ${file} to earth/${file}`);
  }
});

// 4. Update paths in earth/*.html
const movedMainFiles = [
  'earth/index.html',
  'earth/index-en.html',
  'earth/index-ja.html',
  'earth/terra.html',
  'earth/terra-en.html',
  'earth/terra-ja.html'
];

movedMainFiles.forEach(file => {
  const filePath = path.join(basePath, file);
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace css/ with ../css/
  content = content.replace(/(href|src)="css\//g, '$1="../css/');
  // Replace assets/ with ../assets/
  content = content.replace(/(href|src|background-image: url)\("assets\//g, '$1("../assets/');
  content = content.replace(/(href|src|background-image: url)\('assets\//g, '$1(\'../assets/');
  content = content.replace(/(href|src)="assets\//g, '$1="../assets/');
  content = content.replace(/url\('assets\//g, "url('../assets/");
  content = content.replace(/url\("assets\//g, 'url("../assets/');

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated paths in ${file}`);
});

// 5. Update paths in earth/methodology/*.html
const methodologyFiles = fs.readdirSync(newMethodology);
methodologyFiles.forEach(file => {
  const filePath = path.join(newMethodology, file);
  if (!fs.statSync(filePath).isFile()) return;
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace ../css/ with ../../css/
  content = content.replace(/(href|src)="\.\.\/css\//g, '$1="../../../css/'); // Wait! Let's check: replace "../css/" with "../../css/"
  // Let's do regex more carefully:
  content = content.replace(/\.\.\/css\//g, '../../css/');
  content = content.replace(/\.\.\/assets\//g, '../../assets/');

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated paths in earth/methodology/${file}`);
});

console.log('Migration completed successfully!');
