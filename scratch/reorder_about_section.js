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

  // 1. Extract About Section
  const aboutMatch = content.match(/<!-- About Section -->[\s\S]*?<\/section>/i);
  if (!aboutMatch) return;
  let aboutSection = aboutMatch[0];

  // 2. Remove About Section from its current place
  content = content.replace(/<!-- About Section -->[\s\S]*?<\/section>/i, '');

  // 3. Rewrite About Section using .terra-container and .terra-w-half for proper side-by-side alignment
  let updatedAbout = `<!-- About Section -->
  <section id="about" class="py-24 px-6 border-t border-stone-200/50 bg-[#FFFDF8]">
    <div class="max-w-6xl mx-auto terra-container">
      <!-- Left: Photo -->
      <div class="terra-w-half relative" style="max-width: 440px; flex-shrink: 0;">
        <div class="aspect-square rounded-3xl overflow-hidden shadow-2xl">
          <img src="assets/terra-earth-school.jpg" alt="${file === 'index.html' ? '泰拉學校現場照片' : (file === 'index-en.html' ? 'Terra School Site' : 'テラ学校の現場写真')}" class="w-full h-full object-cover" />
        </div>
        <div class="absolute -bottom-6 -right-6 w-32 h-32 rounded-3xl bg-[#68785B]/10 -z-10"></div>
      </div>
      <!-- Right: Text -->
      <div class="terra-w-half terra-w-grow terra-align-left">
        <h2 class="text-3xl font-bold text-[#0F2A1C] font-serif border-l-4 border-[#68785B] pl-4 mb-6">${file === 'index.html' ? '關於泰拉學校' : (file === 'index-en.html' ? 'About Terra School' : 'テラ学校について')}</h2>
        <div class="text-stone-600 space-y-4 leading-relaxed text-base">`;

  if (file === 'index.html') {
    updatedAbout += `
          <p>
            <strong>泰拉（Terra）</strong>是拉丁文的「地球」，代表帶著人們重新走回地球母親的懷抱，真實地體驗與認識祂。
          </p>
          <p>
            當 AI 快速改變知識取得與工作的方式，我們深刻反思：傳統教育教的真的以後有用嗎？在這個時代，人們需要的學習到底是什麼？因此有了泰拉學校——一所沒有圍牆的學校。我們帶領人們走進現場，認識真實的世界與問題。
          </p>
          <p>
            我們以「地、天、海」三所學校為架構，引導人們進入農村、高山與海洋。每一段學習都從走入大自然開始，打開五感，在體驗中放慢腳步，學習與自己連結，並透過設計思考與 AI 工具解決地方議題，重新建立人與自然、自己與他人之間的深刻連結。
          </p>`;
  } else if (file === 'index-en.html') {
    updatedAbout += `
          <p>
            <strong>Terra</strong> means "Earth" in Latin, symbolizing our mission to guide people back to Earth Mother's embrace, allowing them to experience and understand Her in a deep, real way.
          </p>
          <p>
            As artificial intelligence continues to redefine knowledge acquisition and how we work, we ask ourselves: Does traditional education still prepare us for tomorrow? What kind of learning do we really need in this era? Terra School was born as a school without walls to answer this. We guide people into real-world sites to discover real issues.
          </p>
          <p>
            Structured around three thematic domains—Earth, Sky, and Ocean—we guide people into farming villages, high mountains, and deep seas. Each learning journey begins with immersive nature experiences to open up all five senses. People slow down to connect with themselves, then apply design thinking and AI tools to co-create warm solutions for local challenges.
          </p>`;
  } else if (file === 'index-ja.html') {
    updatedAbout += `
          <p>
            <strong>テラ（Terra）</strong>とはラテン語で「地球」を意味し、人々が地球という母なる存在の胸に再び戻り、実際に体験し深く理解することを目指しています。
          </p>
          <p>
            AIが知識の習得や働き方を急速に変える中、私たちは深く問い直しました。「従来の教育は将来本当に役立つのか？」「この時代に本当に必要な学びとは何か？」その答えとして誕生したのが、壁のない学校「テラ学校」です。私たちは人々を現場へ連れ出し、リアルな世界と問題に向き合わせます。
          </p>
          <p>
            「地・天・海」の3つの学校の枠組みを通じて、人々を農村、高山、海洋へと導きます。すべての学びは大自然に入ることから始まり、五感を開放し、自然の体験の中で歩みを緩め、自己と向き合います。そして、デザイン思考とAIツールを活用して地方の課題にアプローチし、人と自然、自分と他者との深いつながりを再構築します。
          </p>`;
  }

  updatedAbout += `
        </div>
      </div>
    </div>
  </section>`;

  // 4. Insert the rewritten About section right below the hero-carousel section
  // Let's find the end of hero-carousel
  const heroCarouselEndStr = '</section> <!-- Hero Carousel Section -->';
  const heroCarouselEndIndex = content.indexOf(heroCarouselEndStr);
  
  if (heroCarouselEndIndex !== -1) {
    const insertPos = heroCarouselEndIndex + heroCarouselEndStr.length;
    content = content.slice(0, insertPos) + '\n\n  ' + updatedAbout + content.slice(insertPos);
  } else {
    // Fallback: search for </section> after id="hero-carousel"
    const heroStart = content.indexOf('id="hero-carousel"');
    if (heroStart !== -1) {
      const nextSectionEnd = content.indexOf('</section>', heroStart) + 10;
      content = content.slice(0, nextSectionEnd) + '\n\n  ' + updatedAbout + content.slice(nextSectionEnd);
    }
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Reordered and fixed About Section layout in ${file}`);
});
