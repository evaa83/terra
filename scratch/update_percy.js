const fs = require('fs');
const path = require('path');

const basePath = 'c:\\Antigravity\\exhibition';

const cnFiles = [
  'index.html',
  'methodology/discover.html',
  'methodology/define.html',
  'methodology/develop.html',
  'methodology/deliver.html'
];

const enFiles = [
  'index-en.html',
  'methodology/discover-en.html',
  'methodology/define-en.html',
  'methodology/develop-en.html',
  'methodology/deliver-en.html'
];

const jaFiles = [
  'index-ja.html',
  'methodology/discover-ja.html',
  'methodology/define-ja.html',
  'methodology/develop-ja.html',
  'methodology/deliver-ja.html'
];

// Update Chinese Files
cnFiles.forEach(file => {
  const filePath = path.join(basePath, file);
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace links in dropdowns and mobile menu
  // Matches: href="index.html#quote7" ... >徐柏峯</a>
  const linkRegex = /href="([^"]*?index\.html)?#quote7"([^>]*?)>徐柏峯<\/a>/g;
  content = content.replace(linkRegex, (match, p1, p2) => {
    const href = p1 ? p1 + '#quote7' : '#quote7';
    return `href="${href}"${p2}>徐柏峯(Percy老師)</a>`;
  });

  if (file === 'index.html') {
    // Replace title name on card
    content = content.replace(
      /<h3 class="font-extrabold text-base md:text-lg text-\[\#0F2A1C\] tracking-wide group-hover:text-\[\#B35C24\] transition-colors truncate">徐柏峯<\/h3>/g,
      '<h3 class="font-extrabold text-base md:text-lg text-[#0F2A1C] tracking-wide group-hover:text-[#B35C24] transition-colors truncate">徐柏峯(Percy老師)</h3>'
    );
    // Replace job title on card
    content = content.replace(
      /<span class="text-orange-400 text-xs font-bold mt-0\.5 block truncate">引導教練<\/span>/g,
      '<span class="text-orange-400 text-xs font-bold mt-0.5 block truncate">敏捷教練、引導師</span>'
    );
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated Chinese file: ${file}`);
});

// Update English Files
enFiles.forEach(file => {
  const filePath = path.join(basePath, file);
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace links in dropdowns and mobile menu
  // Matches: href="index-en.html#quote7" ... >Hsu Po-Feng</a>
  const linkRegex = /href="([^"]*?index-en\.html)?#quote7"([^>]*?)>Hsu\s+Po-Feng<\/a>/g;
  content = content.replace(linkRegex, (match, p1, p2) => {
    const href = p1 ? p1 + '#quote7' : '#quote7';
    return `href="${href}"${p2}>Hsu Po-Feng (Percy)</a>`;
  });

  if (file === 'index-en.html') {
    // Replace title name on card
    content = content.replace(
      /<h3 class="font-extrabold text-base md:text-lg text-\[\#0F2A1C\] tracking-wide group-hover:text-\[\#B35C24\] transition-colors truncate">Coach\s+Xu<\/h3>/g,
      '<h3 class="font-extrabold text-base md:text-lg text-[#0F2A1C] tracking-wide group-hover:text-[#B35C24] transition-colors truncate">Coach Xu (Percy)</h3>'
    );
    // Replace job title on card
    content = content.replace(
      /<span class="text-orange-400 text-xs font-bold mt-0\.5 block truncate">Agile\s+Coach<\/span>/g,
      '<span class="text-orange-400 text-xs font-bold mt-0.5 block truncate">Agile Coach & Facilitator</span>'
    );
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated English file: ${file}`);
});

// Update Japanese Files
jaFiles.forEach(file => {
  const filePath = path.join(basePath, file);
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace links in dropdowns and mobile menu
  // Matches: href="index-ja.html#quote7" ... >徐柏峯</a>
  const linkRegex = /href="([^"]*?index-ja\.html)?#quote7"([^>]*?)>徐柏峯<\/a>/g;
  content = content.replace(linkRegex, (match, p1, p2) => {
    const href = p1 ? p1 + '#quote7' : '#quote7';
    return `href="${href}"${p2}>徐柏峯(Percy先生)</a>`;
  });

  if (file === 'index-ja.html') {
    // Replace title name on card
    content = content.replace(
      /<h3 class="font-extrabold text-base md:text-lg text-\[\#0F2A1C\] tracking-wide group-hover:text-\[\#B35C24\] transition-colors truncate">徐\s*柏\s*峯<\/h3>/g,
      '<h3 class="font-extrabold text-base md:text-lg text-[#0F2A1C] tracking-wide group-hover:text-[#B35C24] transition-colors truncate">徐柏峯(Percy先生)</h3>'
    );
    // Replace job title on card
    content = content.replace(
      /<span class="text-orange-400 text-xs font-bold mt-0\.5 block truncate">アジャイルコーチ<\/span>/g,
      '<span class="text-orange-400 text-xs font-bold mt-0.5 block truncate">アジャイルコーチ、ファシリテーター</span>'
    );
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated Japanese file: ${file}`);
});
