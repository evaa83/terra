const fs = require('fs');
const path = require('path');

const files = [
  'index.html',
  'index-en.html',
  'index-ja.html',
  'methodology/discover.html',
  'methodology/discover-en.html',
  'methodology/discover-ja.html',
  'methodology/define.html',
  'methodology/define-en.html',
  'methodology/define-ja.html',
  'methodology/develop.html',
  'methodology/develop-en.html',
  'methodology/develop-ja.html',
  'methodology/deliver.html',
  'methodology/deliver-en.html',
  'methodology/deliver-ja.html'
];

const basePath = 'c:\\Antigravity\\exhibition';

files.forEach(file => {
  const filePath = path.join(basePath, file);
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');

  // Regex 1: Find the end of the header flex container and inject the closing tag for glass-header early.
  // We look for </button>, close inner div, close max-w div, and right before the Mobile Drawer Menu comment, we close the glass-header div.
  const regex1 = /(<\/button>\s*<\/div>\s*<\/div>)(\s*<!--\s*Mobile Drawer Menu\s*-->)/;
  
  if (!regex1.test(content)) {
    console.log(`Pattern 1 not found in ${file}`);
    return;
  }

  // We replace it by adding </div> to close the glass-header container
  content = content.replace(regex1, (match, p1, p2) => {
    return p1 + '\n    </div>' + p2;
  });

  // Regex 2: Find the trailing </div> of the glass-header container that was placed after the script.
  // It is right after the toggleMobileAccordion function's </script>.
  const regex2 = /(function\s+toggleMobileAccordion[\s\S]*?<\/script>)\s*<\/div>/;

  if (!regex2.test(content)) {
    console.log(`Pattern 2 not found in ${file}`);
    return;
  }

  content = content.replace(regex2, (match, p1) => {
    return p1;
  });

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Successfully fixed mobile menu structure in ${file}`);
});
