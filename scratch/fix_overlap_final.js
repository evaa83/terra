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

  // 1. Fix Hero Carousel Overlap (Set inline padding-top to 140px)
  content = content.replace(
    /id="hero-carousel" class="pt-32 pb-20 px-6 bg-\[#FFFDF8\] border-b border-stone-200\/50" style="background-image: radial-gradient\(circle at 80% 20%, rgba\(104, 120, 91, 0.05\) 0%, transparent 60%\);"/i,
    'id="hero-carousel" class="px-6 bg-[#FFFDF8] border-b border-stone-200/50" style="padding-top: 140px; padding-bottom: 80px; background-image: radial-gradient(circle at 80% 20%, rgba(104, 120, 91, 0.05) 0%, transparent 60%);"'
  );

  // 2. Fix Partners section logo grid container (use inline-style flexbox)
  content = content.replace(
    /<div class="flex flex-wrap items-center justify-center gap-x-12 gap-y-10 max-w-4xl mx-auto">/i,
    '<div style="display: flex; flex-wrap: wrap; align-items: center; justify-content: center; gap: 40px; max-width: 1000px; margin: 0 auto; padding: 20px 0;">'
  );

  // 3. Fix each logo wrapper div and image tags to use inline styles
  // We match <div class="h-16 w-48 flex items-center justify-center"><img src="..." ... /></div>
  // Let's use global regex to replace the wrapper divs and images
  const logoRegex = /<div class="h-16 w-48 flex items-center justify-center"><img src="([^"]+)" alt="([^"]+)" class="[^"]+" \/><\/div>/g;
  
  content = content.replace(logoRegex, (match, src, alt) => {
    return `<div style="width: 192px; height: 64px; display: flex; align-items: center; justify-content: center; overflow: hidden;"><img src="${src}" alt="${alt}" style="max-height: 100%; max-width: 100%; object-fit: contain;" class="filter grayscale hover:grayscale-0 opacity-75 hover:opacity-100 transition-all duration-300" /></div>`;
  });

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Successfully applied inline styles to Hero padding and Partner logos in ${file}`);
});
