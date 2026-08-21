const fs = require('fs');
const path = require('path');

const files = [
  'index.html',
  'index-en.html',
  'index-ja.html'
];

const basePath = 'c:\\Antigravity\\exhibition';

files.forEach(file => {
  const filePath = path.join(basePath, file);
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace capacities section padding with inline style (140px) to clear the header
  content = content.replace(
    /class="pt-28 pb-20 px-6 bg-stone-50 border-b border-stone-200\/50" style="background-image: radial-gradient\(circle at 80% 20%, rgba\(104, 120, 91, 0.08\) 0%, transparent 60%\);"/i,
    'class="px-6 bg-stone-50 border-b border-stone-200/50" style="padding-top: 140px; padding-bottom: 80px; background-image: radial-gradient(circle at 80% 20%, rgba(104, 120, 91, 0.08) 0%, transparent 60%);"'
  );

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated padding-top to 140px using inline style in ${file}`);
});
