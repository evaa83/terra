const fs = require('fs');
const path = require('path');

const basePath = 'c:\\Antigravity\\exhibition';

const files = [
  'index.html',
  'index-en.html',
  'index-ja.html'
];

const zhAboutHTML = `    <!-- Part 1: About Terra (Text Only, Centered & Premium) -->
    <div class="max-w-3xl mx-auto text-center mb-20">
      <h1 class="text-3xl md:text-5xl font-extrabold text-[#0F2A1C] font-serif leading-tight mb-8">泰拉學校 Terra School</h1>
      <div class="text-stone-600 space-y-6 leading-relaxed text-base md:text-lg">
        <p class="font-medium text-stone-800">
          「Terra」在拉丁文中意為「地球」。
        </p>
        <p>
          在 AI 快速改變學習與工作的時代，我們相信，有些知識仍需要親身走進世界，才能真正理解。
        </p>
        <p>
          泰拉學校是一所沒有圍牆的學校。我們帶領人們回到土地、走入現場，在真實的感受與探索中，重新認識地球，也找到屬於自己的答案。
        </p>
      </div>
    </div>`;

const enAboutHTML = `    <!-- Part 1: About Terra (Text Only, Centered & Premium) -->
    <div class="max-w-3xl mx-auto text-center mb-20">
      <h1 class="text-3xl md:text-5xl font-extrabold text-[#0F2A1C] font-serif leading-tight mb-8">Terra School</h1>
      <div class="text-stone-600 space-y-6 leading-relaxed text-base md:text-lg">
        <p class="font-medium text-stone-800">
          "Terra" means "Earth" in Latin.
        </p>
        <p>
          In an era where AI is rapidly changing how we learn and work, we believe that some knowledge can only be truly understood by stepping into the world ourselves.
        </p>
        <p>
          Terra School is a school without walls. We guide people back to the land and into real-world sites, rediscovering the Earth and finding their own answers through genuine experience and exploration.
        </p>
      </div>
    </div>`;

const jaAboutHTML = `    <!-- Part 1: About Terra (Text Only, Centered & Premium) -->
    <div class="max-w-3xl mx-auto text-center mb-20">
      <h1 class="text-3xl md:text-5xl font-extrabold text-[#0F2A1C] font-serif leading-tight mb-8">テラ学校 Terra School</h1>
      <div class="text-stone-600 space-y-6 leading-relaxed text-base md:text-lg">
        <p class="font-medium text-stone-800">
          「Terra（テラ）」とはラテン語で「地球」を意味します。
        </p>
        <p>
          AIが学びや働き方を急速に変える時代において、私たちは信じています。本当に理解するためには、自ら世界へ踏み出して得なければならない知識があるということを。
        </p>
        <p>
          テラ学校は、壁のない学校です。私たちは人々を土地へと連れ戻し、現場へと連れ出し、リアルな体感と探索の中で、地球を再認識し、自分だけの答えを見つける手助けをします。
        </p>
      </div>
    </div>`;

files.forEach(file => {
  const filePath = path.join(basePath, file);
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace Part 1 div
  const chosenAbout = file === 'index.html' ? zhAboutHTML : (file === 'index-en.html' ? enAboutHTML : jaAboutHTML);
  content = content.replace(
    /<!-- Part 1: About Terra \(Text Only, Centered & Premium\) -->[\s\S]*?<\/div>\s*<\/div>/i,
    chosenAbout
  );

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Successfully updated simplified About text in ${file}`);
});
