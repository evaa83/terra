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

  // 1. Extract the capacities section
  const capacitiesMatch = content.match(/<section id="capacities"[\s\S]*?<\/section>/i);
  if (!capacitiesMatch) return;
  let capacitiesSection = capacitiesMatch[0];

  // 2. Remove the original capacities section and hero section
  content = content.replace(/<section class="min-h-screen[\s\S]*?<\/section>/i, '');
  content = content.replace(/<section id="capacities"[\s\S]*?<\/section>/i, '');

  // 3. Update the header navigation links order to: 三個能力, 關於泰拉, 合作夥伴
  if (file === 'index.html') {
    content = content.replace(
      /<nav class="hidden md:flex items-center gap-8 text-sm font-bold text-\[#0F2A1C\]\/80">[\s\S]*?<\/nav>/i,
      `<nav class="hidden md:flex items-center gap-8 text-sm font-bold text-[#0F2A1C]/80">
        <a href="#capacities" class="hover:text-[#C87952] transition-colors">三個能力</a>
        <a href="#about" class="hover:text-[#C87952] transition-colors">關於泰拉</a>
        <a href="#partners" class="hover:text-[#C87952] transition-colors">合作夥伴</a>
      </nav>`
    );
  } else if (file === 'index-en.html') {
    content = content.replace(
      /<nav class="hidden md:flex items-center gap-8 text-sm font-bold text-\[#0F2A1C\]\/80">[\s\S]*?<\/nav>/i,
      `<nav class="hidden md:flex items-center gap-8 text-sm font-bold text-[#0F2A1C]/80">
        <a href="#capacities" class="hover:text-[#C87952] transition-colors">Capacities</a>
        <a href="#about" class="hover:text-[#C87952] transition-colors">About</a>
        <a href="#partners" class="hover:text-[#C87952] transition-colors">Partners</a>
      </nav>`
    );
  } else if (file === 'index-ja.html') {
    content = content.replace(
      /<nav class="hidden md:flex items-center gap-8 text-sm font-bold text-\[#0F2A1C\]\/80">[\s\S]*?<\/nav>/i,
      `<nav class="hidden md:flex items-center gap-8 text-sm font-bold text-[#0F2A1C]/80">
        <a href="#capacities" class="hover:text-[#C87952] transition-colors">3つの能力</a>
        <a href="#about" class="hover:text-[#C87952] transition-colors">テラについて</a>
        <a href="#partners" class="hover:text-[#C87952] transition-colors">パートナー</a>
      </nav>`
    );
  }

  // 4. Update the capacities section to act as the Hero section
  // Add padding-top and background gradient
  capacitiesSection = capacitiesSection.replace(
    /class="py-24 px-6 bg-stone-50 border-t border-b border-stone-200\/50"/i,
    `class="pt-32 pb-24 px-6 bg-stone-50 border-b border-stone-200/50" style="background-image: radial-gradient(circle at 80% 20%, rgba(104, 120, 91, 0.08) 0%, transparent 60%);"`
  );

  // Update the title and subtitle in the capacities section
  if (file === 'index.html') {
    capacitiesSection = capacitiesSection.replace(
      /<div class="text-center mb-16">[\s\S]*?<\/div>/i,
      `<div class="text-center mb-16">
        <p class="text-[#C87952] text-sm font-extrabold tracking-[0.2em] uppercase mb-4">TERRA SCHOOL</p>
        <h1 class="font-extrabold text-3xl md:text-5xl text-[#0F2A1C] font-serif leading-tight tracking-wide mb-6">
          向外體驗自然，向內看見自己，<br class="hidden sm:inline" />從需求創造可能。
        </h1>
        <p class="text-stone-500 text-sm mt-3">移動游標至文氏圖的圓圈上，探索三個能力的交會與意涵。</p>
      </div>`
    );
  } else if (file === 'index-en.html') {
    capacitiesSection = capacitiesSection.replace(
      /<div class="text-center mb-16">[\s\S]*?<\/div>/i,
      `<div class="text-center mb-16">
        <p class="text-[#C87952] text-sm font-extrabold tracking-[0.2em] uppercase mb-4">TERRA SCHOOL</p>
        <h1 class="font-extrabold text-3xl md:text-5xl text-[#0F2A1C] font-serif leading-tight tracking-wide mb-6">
          Experience Nature Outwards, <br class="hidden sm:inline" />See Yourself Inwards, <br class="hidden sm:inline" />Create Possibilities from Needs.
        </h1>
        <p class="text-stone-500 text-sm mt-3">Hover over the circles in the Venn diagram to explore the core capacities.</p>
      </div>`
    );
  } else if (file === 'index-ja.html') {
    capacitiesSection = capacitiesSection.replace(
      /<div class="text-center mb-16">[\s\S]*?<\/div>/i,
      `<div class="text-center mb-16">
        <p class="text-[#C87952] text-sm font-extrabold tracking-[0.2em] uppercase mb-4">TERRA SCHOOL</p>
        <h1 class="font-extrabold text-3xl md:text-5xl text-[#0F2A1C] font-serif leading-tight tracking-wide mb-6">
          外に向かって自然を体験し、<br class="hidden sm:inline" />内に向かって自己を内省し、<br class="hidden sm:inline" />ニーズから可能性を創造する。
        </h1>
        <p class="text-stone-500 text-sm mt-3">ベン図の円にカーソルを合わせて、それぞれの能力と交点を探求してください。</p>
      </div>`
    );
  }

  // 5. Insert the updated capacities section right below the header
  const headerEndIndex = content.indexOf('</header>') + 9;
  if (headerEndIndex > 8) {
    content = content.slice(0, headerEndIndex) + '\n\n  ' + capacitiesSection + content.slice(headerEndIndex);
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Replaced hero with Venn diagram section in ${file}`);
});
