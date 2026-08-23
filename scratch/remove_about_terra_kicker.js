const fs = require('fs');
const path = require('path');

const basePath = 'c:\\Antigravity\\exhibition';

const files = [
  'index.html',
  'index-en.html',
  'index-ja.html'
];

files.forEach(file => {
  const filePath = path.join(basePath, file);
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');

  // Remove the ABOUT TERRA kicker above the main section header of #capacities
  content = content.replace(
    /<p class="text-\[#C87952\] text-xs font-bold tracking-widest uppercase mb-2">ABOUT TERRA<\/p>\s*<h2 class="text-3xl font-extrabold text-\[#0F2A1C\] font-serif">/i,
    '<h2 class="text-3xl font-extrabold text-[#0F2A1C] font-serif">'
  );
  
  // Also clean up any extra spacing if the header was written slightly differently
  content = content.replace(
    /<p class="text-\[#C87952\] text-xs font-bold tracking-widest uppercase mb-2">ABOUT TERRA<\/p>\s*<h2 class="text-3xl font-extrabold text-\[#0F2A1C\] font-serif">泰拉學校 \(Terra School\)<\/h2>/i,
    '<h2 class="text-3xl font-extrabold text-[#0F2A1C] font-serif">泰拉學校 (Terra School)</h2>'
  );
  content = content.replace(
    /<p class="text-\[#C87952\] text-xs font-bold tracking-widest uppercase mb-2">ABOUT TERRA<\/p>\s*<h2 class="text-3xl font-extrabold text-\[#0F2A1C\] font-serif">Terra School<\/h2>/i,
    '<h2 class="text-3xl font-extrabold text-[#0F2A1C] font-serif">Terra School</h2>'
  );
  content = content.replace(
    /<p class="text-\[#C87952\] text-xs font-bold tracking-widest uppercase mb-2">ABOUT TERRA<\/p>\s*<h2 class="text-3xl font-extrabold text-\[#0F2A1C\] font-serif">テラ学校 \(Terra School\)<\/h2>/i,
    '<h2 class="text-3xl font-extrabold text-[#0F2A1C] font-serif">テラ学校 (Terra School)</h2>'
  );

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Successfully removed ABOUT TERRA kicker from ${file}`);
});
