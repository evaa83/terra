const fs = require('fs');
const path = require('path');

const basePath = 'c:\\Antigravity\\exhibition';

// 1. Chinese Template (No title header, inline style constraints)
const zhCapacities = `  <section id="capacities" class="pt-28 pb-20 px-6 bg-stone-50 border-b border-stone-200/50" style="background-image: radial-gradient(circle at 80% 20%, rgba(104, 120, 91, 0.08) 0%, transparent 60%);">
    <div class="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
      <!-- Left: Interactive Venn SVG -->
      <div class="w-full flex justify-center" style="max-width: 480px; flex-shrink: 0;">
        <svg id="terraVenn" viewBox="0 0 760 680" role="img" aria-label="泰拉三個能力文氏圖" style="width: 100%; height: auto;">
          <defs>
            <!-- SVG Circles -->
            <circle id="shapeA" cx="380" cy="230" r="205"></circle>
            <circle id="shapeB" cx="255" cy="430" r="205"></circle>
            <circle id="shapeC" cx="505" cy="430" r="205"></circle>
          </defs>

          <!-- Transparent Overlapping Circles (using mix-blend-mode for natural theory color blending) -->
          <g style="isolation: isolate;">
            <!-- Circle A: 體驗自然 (Green) -->
            <use href="#shapeA" id="circleA" class="venn-circle" fill="#68785B" style="mix-blend-mode: multiply;" />
            <!-- Circle B: 覺察自我 (Blue) -->
            <use href="#shapeB" id="circleB" class="venn-circle" fill="#64748B" style="mix-blend-mode: multiply;" />
            <!-- Circle C: 理解創造 (Orange) -->
            <use href="#shapeC" id="circleC" class="venn-circle" fill="#C87952" style="mix-blend-mode: multiply;" />
          </g>

          <!-- Main Labels inside Circles -->
          <g fill="#FFFDF8" text-anchor="middle" font-family="'Noto Sans TC', sans-serif" font-weight="700" pointer-events="none" style="text-shadow: 0 2px 4px rgba(0,0,0,0.15);">
            <text x="380" y="155" font-size="28">體驗自然</text>
            <text x="210" y="520" font-size="28">覺察自我</text>
            <text x="550" y="520" font-size="28">理解創造</text>
            <text x="380" y="352" font-size="44" font-weight="800">泰拉</text>
          </g>
        </svg>
      </div>

      <!-- Right: Dynamic Text Card -->
      <div class="w-full" style="max-width: 440px; flex-grow: 1;">
        <div class="bg-white border border-stone-200/80 rounded-3xl p-8 shadow-xl min-h-[320px] flex flex-col justify-between">
          <div id="infoCardContent" class="info-card-text fade-in">
            <span id="infoKicker" class="text-xs font-bold uppercase tracking-widest text-[#68785B] mb-2 block">CORE PILLAR</span>
            <h3 id="infoTitle" class="text-2xl font-extrabold text-[#0F2A1C] font-serif mb-4">體驗自然、覺察自我與理解創造</h3>
            <p id="infoDesc" class="text-stone-600 text-sm leading-relaxed">
              這是泰拉學校核心能力的三個圓圈。當三個圓圈在中心交會時，就構成了「泰拉學校」的主體學習精神。<br><br>請將滑鼠移到任一個圓圈，深入探索每一種能力。
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>`;

// 2. English Template
const enCapacities = `  <section id="capacities" class="pt-28 pb-20 px-6 bg-stone-50 border-b border-stone-200/50" style="background-image: radial-gradient(circle at 80% 20%, rgba(104, 120, 91, 0.08) 0%, transparent 60%);">
    <div class="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
      <!-- Left: Interactive Venn SVG -->
      <div class="w-full flex justify-center" style="max-width: 480px; flex-shrink: 0;">
        <svg id="terraVenn" viewBox="0 0 760 680" role="img" aria-label="Terra 3-Circle Venn Diagram" style="width: 100%; height: auto;">
          <defs>
            <!-- SVG Circles -->
            <circle id="shapeA" cx="380" cy="230" r="205"></circle>
            <circle id="shapeB" cx="255" cy="430" r="205"></circle>
            <circle id="shapeC" cx="505" cy="430" r="205"></circle>
          </defs>

          <!-- Transparent Overlapping Circles -->
          <g style="isolation: isolate;">
            <!-- Circle A: Experience Nature (Green) -->
            <use href="#shapeA" id="circleA" class="venn-circle" fill="#68785B" style="mix-blend-mode: multiply;" />
            <!-- Circle B: Aware of Self (Blue) -->
            <use href="#shapeB" id="circleB" class="venn-circle" fill="#64748B" style="mix-blend-mode: multiply;" />
            <!-- Circle C: Understand & Create (Orange) -->
            <use href="#shapeC" id="circleC" class="venn-circle" fill="#C87952" style="mix-blend-mode: multiply;" />
          </g>

          <!-- Main Labels inside Circles -->
          <g fill="#FFFDF8" text-anchor="middle" font-family="'Outfit', 'Noto Sans TC', sans-serif" font-weight="700" pointer-events="none" style="text-shadow: 0 2px 4px rgba(0,0,0,0.15);">
            <text x="380" y="150" font-size="24">Experience Nature</text>
            <text x="210" y="520" font-size="24">Aware of Self</text>
            <text x="550" y="520" font-size="24">Understand & Create</text>
            <text x="380" y="352" font-size="44" font-weight="800">Terra</text>
          </g>
        </svg>
      </div>

      <!-- Right: Dynamic Text Card -->
      <div class="w-full" style="max-width: 440px; flex-grow: 1;">
        <div class="bg-white border border-stone-200/80 rounded-3xl p-8 shadow-xl min-h-[320px] flex flex-col justify-between">
          <div id="infoCardContent" class="info-card-text fade-in">
            <span id="infoKicker" class="text-xs font-bold uppercase tracking-widest text-[#68785B] mb-2 block">CORE PILLAR</span>
            <h3 id="infoTitle" class="text-2xl font-extrabold text-[#0F2A1C] font-serif mb-4">Nature, Self & Creation</h3>
            <p id="infoDesc" class="text-stone-600 text-sm leading-relaxed">
              These are the three core circles of capability at Terra School. When they intersect in the center, they constitute the holistic learning spirit of Terra.<br><br>Hover over any circle to explore each capacity.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>`;

// 3. Japanese Template
const jaCapacities = `  <section id="capacities" class="pt-28 pb-20 px-6 bg-stone-50 border-b border-stone-200/50" style="background-image: radial-gradient(circle at 80% 20%, rgba(104, 120, 91, 0.08) 0%, transparent 60%);">
    <div class="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
      <!-- Left: Interactive Venn SVG -->
      <div class="w-full flex justify-center" style="max-width: 480px; flex-shrink: 0;">
        <svg id="terraVenn" viewBox="0 0 760 680" role="img" aria-label="テラの3つの能力ベン図" style="width: 100%; height: auto;">
          <defs>
            <!-- SVG Circles -->
            <circle id="shapeA" cx="380" cy="230" r="205"></circle>
            <circle id="shapeB" cx="255" cy="430" r="205"></circle>
            <circle id="shapeC" cx="505" cy="430" r="205"></circle>
          </defs>

          <!-- Transparent Overlapping Circles -->
          <g style="isolation: isolate;">
            <!-- Circle A: 自然体験 (Green) -->
            <use href="#shapeA" id="circleA" class="venn-circle" fill="#68785B" style="mix-blend-mode: multiply;" />
            <!-- Circle B: 自己内省 (Blue) -->
            <use href="#shapeB" id="circleB" class="venn-circle" fill="#64748B" style="mix-blend-mode: multiply;" />
            <!-- Circle C: 理解と創造 (Orange) -->
            <use href="#shapeC" id="circleC" class="venn-circle" fill="#C87952" style="mix-blend-mode: multiply;" />
          </g>

          <!-- Main Labels inside Circles -->
          <g fill="#FFFDF8" text-anchor="middle" font-family="'Noto Sans TC', sans-serif" font-weight="700" pointer-events="none" style="text-shadow: 0 2px 4px rgba(0,0,0,0.15);">
            <text x="380" y="155" font-size="28">自然体験</text>
            <text x="210" y="520" font-size="28">自己内省</text>
            <text x="550" y="520" font-size="28">理解と創造</text>
            <text x="380" y="352" font-size="44" font-weight="800">テラ</text>
          </g>
        </svg>
      </div>

      <!-- Right: Dynamic Text Card -->
      <div class="w-full" style="max-width: 440px; flex-grow: 1;">
        <div class="bg-white border border-stone-200/80 rounded-3xl p-8 shadow-xl min-h-[320px] flex flex-col justify-between">
          <div id="infoCardContent" class="info-card-text fade-in">
            <span id="infoKicker" class="text-xs font-bold uppercase tracking-widest text-[#68785B] mb-2 block">CORE PILLAR</span>
            <h3 id="infoTitle" class="text-2xl font-extrabold text-[#0F2A1C] font-serif mb-4">自然、自己、そして創造</h3>
            <p id="infoDesc" class="text-stone-600 text-sm leading-relaxed">
              これらはテラ学校が提唱する3つのコア能力です。3つの円が中央で交わることで、テラ学校の全体的な学びの精神が形成されます。<br><br>いずれかの円にマウスを合わせて、それぞれの詳細を探求しましょう。
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>`;

const targets = [
  { file: 'index.html', template: zhCapacities },
  { file: 'index-en.html', template: enCapacities },
  { file: 'index-ja.html', template: jaCapacities }
];

targets.forEach(t => {
  const filePath = path.join(basePath, t.file);
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');

  // 1. Remove Hero Section
  content = content.replace(/<section class="min-h-screen[\s\S]*?<\/section>/i, '');

  // 2. Replace Capacities Section with our clean template
  content = content.replace(/<section id="capacities"[\s\S]*?<\/section>/i, t.template);

  // 3. Update the header navigation links order to: 三個能力, 關於泰拉, 合作夥伴
  if (t.file === 'index.html') {
    content = content.replace(
      /<nav class="hidden md:flex items-center gap-8 text-sm font-bold text-\[#0F2A1C\]\/80">[\s\S]*?<\/nav>/i,
      `<nav class="hidden md:flex items-center gap-8 text-sm font-bold text-[#0F2A1C]/80">
        <a href="#capacities" class="hover:text-[#C87952] transition-colors">三個能力</a>
        <a href="#about" class="hover:text-[#C87952] transition-colors">關於泰拉</a>
        <a href="#partners" class="hover:text-[#C87952] transition-colors">合作夥伴</a>
      </nav>`
    );
  } else if (t.file === 'index-en.html') {
    content = content.replace(
      /<nav class="hidden md:flex items-center gap-8 text-sm font-bold text-\[#0F2A1C\]\/80">[\s\S]*?<\/nav>/i,
      `<nav class="hidden md:flex items-center gap-8 text-sm font-bold text-[#0F2A1C]/80">
        <a href="#capacities" class="hover:text-[#C87952] transition-colors">Capacities</a>
        <a href="#about" class="hover:text-[#C87952] transition-colors">About</a>
        <a href="#partners" class="hover:text-[#C87952] transition-colors">Partners</a>
      </nav>`
    );
  } else if (t.file === 'index-ja.html') {
    content = content.replace(
      /<nav class="hidden md:flex items-center gap-8 text-sm font-bold text-\[#0F2A1C\]\/80">[\s\S]*?<\/nav>/i,
      `<nav class="hidden md:flex items-center gap-8 text-sm font-bold text-[#0F2A1C]/80">
        <a href="#capacities" class="hover:text-[#C87952] transition-colors">3つの能力</a>
        <a href="#about" class="hover:text-[#C87952] transition-colors">テラについて</a>
        <a href="#partners" class="hover:text-[#C87952] transition-colors">パートナー</a>
      </nav>`
    );
  }

  // 4. Remove Hero buttons & extra sections removed in previous turn (just in case)
  content = content.replace(/<!-- Programs Section -->[\s\S]*?<!-- Partners Section -->/i, '<!-- Partners Section -->');
  content = content.replace(/<section id="programs"[\s\S]*?<\/section>/i, '');
  content = content.replace(/<a href="#programs" class="hover:text-white transition-colors">.*?<\/a>/i, '');

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Successfully rewrote ${t.file} layout`);
});
