const fs = require('fs');
const path = require('path');

const basePath = 'c:\\Antigravity\\exhibition';

const files = [
  'index.html',
  'index-en.html',
  'index-ja.html'
];

const zhHeroStructure = `  <!-- Hero Section -->
  <section id="hero-carousel" class="px-6 bg-[#FFFDF8] border-b border-stone-200/50" style="padding-top: 140px; padding-bottom: 80px; background-image: radial-gradient(circle at 80% 20%, rgba(104, 120, 91, 0.05) 0%, transparent 60%);">
    <!-- Part 1: About Terra (Text Only, Centered & Premium) -->
    <div class="max-w-3xl mx-auto text-center mb-20">
      <h1 class="text-3xl md:text-5xl font-extrabold text-[#0F2A1C] font-serif leading-tight mb-8">泰拉學校 (Terra School)</h1>
      <div class="text-stone-600 space-y-6 leading-relaxed text-base md:text-lg">
        <p>
          <strong>「泰拉（Terra）」</strong>在拉丁文中意為「地球」，寓意著帶領人們重回地球母親的懷抱，真實地感受並認識她。
        </p>
        <p>
          當 AI 正在快速改變知識獲取與工作的方式，我們不禁深刻思考：在這個時代，人們真正需要的學習到底是什麼？於是，「泰拉學校」誕生了——這是一所沒有圍牆的學校，我們帶領人們走入現場，在真實的世界中尋找答案。
        </p>
      </div>
    </div>

    <!-- Part 2: Split-Screen Carousel (3 Slides for the 3 Capabilities) -->
    <div class="max-w-6xl mx-auto terra-container hero-container-mobile pt-16 border-t border-stone-200/40">
      <!-- Left: Text Slides -->
      <div class="terra-w-half" style="max-width: 500px; min-h: 380px; display: flex; flex-direction: column; justify-content: space-between;">
        <div class="relative overflow-hidden flex-grow flex items-center" style="min-h: 280px;">
          <!-- Slide Text 0: Nature -->
          <div class="hero-slide-text active" id="slide-text-0">
            <span class="text-xs font-bold uppercase tracking-widest text-[#68785B] mb-3 block">NATURE EXPERIENCE</span>
            <h2 class="text-3xl md:text-4xl font-extrabold text-[#0F2A1C] font-serif leading-tight mb-6">體驗自然，<br>與地球共生</h2>
            <p class="text-stone-600 text-sm md:text-base leading-relaxed">走進土地、高山與海洋，重新打開被城市禁錮的感官。用聽覺、視覺、觸覺去親近真實的自然場域，建立人與地球最根本的共生感。</p>
          </div>
          <!-- Slide Text 1: Self -->
          <div class="hero-slide-text" id="slide-text-1">
            <span class="text-xs font-bold uppercase tracking-widest text-[#64748B] mb-3 block">INNER AWARENESS</span>
            <h2 class="text-3xl md:text-4xl font-extrabold text-[#0F2A1C] font-serif leading-tight mb-6">覺察自我，<br>與內心對話</h2>
            <p class="text-stone-600 text-sm md:text-base leading-relaxed">在喧囂的時代慢下腳步，將焦點由外在世界轉回內心。透過靜心、冥想與深度的自然觀察，聆聽身體與情緒變化，與真實的自我對話。</p>
          </div>
          <!-- Slide Text 2: Creation -->
          <div class="hero-slide-text" id="slide-text-2">
            <span class="text-xs font-bold uppercase tracking-widest text-[#C87952] mb-3 block">DESIGN & CREATION</span>
            <h2 class="text-3xl md:text-4xl font-extrabold text-[#0F2A1C] font-serif leading-tight mb-6">理解創造，<br>用行動改變</h2>
            <p class="text-stone-600 text-sm md:text-base leading-relaxed">回到人的處境建立同理心，運用設計思考的 4D 創新流程（Discover、Define、Develop、Deliver）與現代科技工具，將創意轉化為可行的行動。</p>
          </div>
        </div>
        
        <!-- Controls -->
        <div class="flex items-center gap-6 mt-8">
          <div class="flex gap-2">
            <button onclick="prevHeroSlide()" class="w-10 h-10 rounded-full border border-stone-300 hover:border-[#68785B] flex items-center justify-center text-stone-600 hover:text-[#68785B] transition-colors focus:outline-none" aria-label="Previous Slide">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7"/></svg>
            </button>
            <button onclick="nextHeroSlide()" class="w-10 h-10 rounded-full border border-stone-300 hover:border-[#68785B] flex items-center justify-center text-stone-600 hover:text-[#68785B] transition-colors focus:outline-none" aria-label="Next Slide">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/></svg>
            </button>
          </div>
          <div class="flex gap-2">
            <span onclick="setHeroSlide(0)" id="dot-0" class="w-2.5 h-2.5 rounded-full bg-[#68785B] cursor-pointer transition-colors"></span>
            <span onclick="setHeroSlide(1)" id="dot-1" class="w-2.5 h-2.5 rounded-full bg-stone-300 cursor-pointer transition-colors"></span>
            <span onclick="setHeroSlide(2)" id="dot-2" class="w-2.5 h-2.5 rounded-full bg-stone-300 cursor-pointer transition-colors"></span>
          </div>
        </div>
      </div>

      <!-- Right: Image Slider -->
      <div class="terra-w-half flex justify-center" style="max-width: 540px; flex-shrink: 0;">
        <div class="w-full aspect-video relative overflow-hidden rounded-3xl shadow-xl">
          <img src="assets/yilan_field_1.jpg" alt="體驗自然" class="w-full h-full object-cover absolute inset-0 transition-opacity duration-1000 opacity-100" id="slide-img-0" />
          <img src="assets/yilan_field_2.jpg" alt="覺察自我" class="w-full h-full object-cover absolute inset-0 transition-opacity duration-1000 opacity-0" id="slide-img-1" />
          <img src="assets/terra-earth-school.jpg" alt="理解創造" class="w-full h-full object-cover absolute inset-0 transition-opacity duration-1000 opacity-0" id="slide-img-2" />
        </div>
      </div>
    </div>
  </section>`;

const enHeroStructure = `  <!-- Hero Section -->
  <section id="hero-carousel" class="px-6 bg-[#FFFDF8] border-b border-stone-200/50" style="padding-top: 140px; padding-bottom: 80px; background-image: radial-gradient(circle at 80% 20%, rgba(104, 120, 91, 0.05) 0%, transparent 60%);">
    <!-- Part 1: About Terra (Text Only, Centered & Premium) -->
    <div class="max-w-3xl mx-auto text-center mb-20">
      <h1 class="text-3xl md:text-5xl font-extrabold text-[#0F2A1C] font-serif leading-tight mb-8">Terra School</h1>
      <div class="text-stone-600 space-y-6 leading-relaxed text-base md:text-lg">
        <p>
          <strong>Terra</strong> means "Earth" in Latin, symbolizing our mission to guide people back to Earth Mother's embrace, allowing them to experience and understand Her in a deep, real way.
        </p>
        <p>
          As artificial intelligence continues to redefine knowledge acquisition and how we work, we deeply contemplate: What kind of learning do people need most in this era? Terra School was born as a school without walls to answer this. We guide people into real-world sites to discover real issues.
        </p>
      </div>
    </div>

    <!-- Part 2: Split-Screen Carousel (3 Slides for the 3 Capabilities) -->
    <div class="max-w-6xl mx-auto terra-container hero-container-mobile pt-16 border-t border-stone-200/40">
      <!-- Left: Text Slides -->
      <div class="terra-w-half" style="max-width: 500px; min-h: 380px; display: flex; flex-direction: column; justify-content: space-between;">
        <div class="relative overflow-hidden flex-grow flex items-center" style="min-h: 280px;">
          <!-- Slide Text 0: Nature -->
          <div class="hero-slide-text active" id="slide-text-0">
            <span class="text-xs font-bold uppercase tracking-widest text-[#68785B] mb-3 block">NATURE EXPERIENCE</span>
            <h2 class="text-3xl md:text-4xl font-extrabold text-[#0F2A1C] font-serif leading-tight mb-6">Experience Nature, <br>Co-exist with Earth</h2>
            <p class="text-stone-600 text-sm md:text-base leading-relaxed">Step out into fields, mountains, and oceans to re-open the senses confined by urban environments. Hear, see, and touch the real natural habitats, building a core connection of co-existence with our Earth Mother.</p>
          </div>
          <!-- Slide Text 1: Self -->
          <div class="hero-slide-text" id="slide-text-1">
            <span class="text-xs font-bold uppercase tracking-widest text-[#64748B] mb-3 block">INNER AWARENESS</span>
            <h2 class="text-3xl md:text-4xl font-extrabold text-[#0F2A1C] font-serif leading-tight mb-6">Aware of Self, <br>Dialogue with Inside</h2>
            <p class="text-stone-600 text-sm md:text-base leading-relaxed">Slow down in a noisy era and turn focus from the outer world back inwards. Through mindfulness, meditation, and deep nature observations, listen to subtle changes in body and emotion, engaging in dialogues with your true self.</p>
          </div>
          <!-- Slide Text 2: Creation -->
          <div class="hero-slide-text" id="slide-text-2">
            <span class="text-xs font-bold uppercase tracking-widest text-[#C87952] mb-3 block">DESIGN & CREATION</span>
            <h2 class="text-3xl md:text-4xl font-extrabold text-[#0F2A1C] font-serif leading-tight mb-6">Understand & Create, <br>Change with Action</h2>
            <p class="text-stone-600 text-sm md:text-base leading-relaxed">Return to human-centric contexts to build deep empathy. Utilize the 4D design thinking workflow (Discover, Define, Develop, Deliver) paired with modern tech tools to transform creativity into actionable, local impact.</p>
          </div>
        </div>
        
        <!-- Controls -->
        <div class="flex items-center gap-6 mt-8">
          <div class="flex gap-2">
            <button onclick="prevHeroSlide()" class="w-10 h-10 rounded-full border border-stone-300 hover:border-[#68785B] flex items-center justify-center text-stone-600 hover:text-[#68785B] transition-colors focus:outline-none" aria-label="Previous Slide">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7"/></svg>
            </button>
            <button onclick="nextHeroSlide()" class="w-10 h-10 rounded-full border border-stone-300 hover:border-[#68785B] flex items-center justify-center text-stone-600 hover:text-[#68785B] transition-colors focus:outline-none" aria-label="Next Slide">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/></svg>
            </button>
          </div>
          <div class="flex gap-2">
            <span onclick="setHeroSlide(0)" id="dot-0" class="w-2.5 h-2.5 rounded-full bg-[#68785B] cursor-pointer transition-colors"></span>
            <span onclick="setHeroSlide(1)" id="dot-1" class="w-2.5 h-2.5 rounded-full bg-stone-300 cursor-pointer transition-colors"></span>
            <span onclick="setHeroSlide(2)" id="dot-2" class="w-2.5 h-2.5 rounded-full bg-stone-300 cursor-pointer transition-colors"></span>
          </div>
        </div>
      </div>

      <!-- Right: Image Slider -->
      <div class="terra-w-half flex justify-center" style="max-width: 540px; flex-shrink: 0;">
        <div class="w-full aspect-video relative overflow-hidden rounded-3xl shadow-xl">
          <img src="assets/yilan_field_1.jpg" alt="Experience Nature" class="w-full h-full object-cover absolute inset-0 transition-opacity duration-1000 opacity-100" id="slide-img-0" />
          <img src="assets/yilan_field_2.jpg" alt="Aware of Self" class="w-full h-full object-cover absolute inset-0 transition-opacity duration-1000 opacity-0" id="slide-img-1" />
          <img src="assets/terra-earth-school.jpg" alt="Understand & Create" class="w-full h-full object-cover absolute inset-0 transition-opacity duration-1000 opacity-0" id="slide-img-2" />
        </div>
      </div>
    </div>
  </section>`;

const jaHeroStructure = `  <!-- Hero Section -->
  <section id="hero-carousel" class="px-6 bg-[#FFFDF8] border-b border-stone-200/50" style="padding-top: 140px; padding-bottom: 80px; background-image: radial-gradient(circle at 80% 20%, rgba(104, 120, 91, 0.05) 0%, transparent 60%);">
    <!-- Part 1: About Terra (Text Only, Centered & Premium) -->
    <div class="max-w-3xl mx-auto text-center mb-20">
      <h1 class="text-3xl md:text-5xl font-extrabold text-[#0F2A1C] font-serif leading-tight mb-8">テラ学校</h1>
      <div class="text-stone-600 space-y-6 leading-relaxed text-base md:text-lg">
        <p>
          <strong>テラ（Terra）</strong>とはラテン語で「地球」を意味し、人々が地球という母なる存在の胸に再び戻り、実際に体験し深く理解することを目指しています。
        </p>
        <p>
          AIが知識の習得や働き方を急速に変える中、私たちは深く考えました。「この時代において、人々に最も必要な学びとは何か？」その答えとして誕生したのが、壁のない学校「テラ学校」です。私たちは人々を現場へ連れ出し、リアルな世界と問題に向き合わせます。
        </p>
      </div>
    </div>

    <!-- Part 2: Split-Screen Carousel (3 Slides for the 3 Capabilities) -->
    <div class="max-w-6xl mx-auto terra-container hero-container-mobile pt-16 border-t border-stone-200/40">
      <!-- Left: Text Slides -->
      <div class="terra-w-half" style="max-width: 500px; min-h: 380px; display: flex; flex-direction: column; justify-content: space-between;">
        <div class="relative overflow-hidden flex-grow flex items-center" style="min-h: 280px;">
          <!-- Slide Text 0: Nature -->
          <div class="hero-slide-text active" id="slide-text-0">
            <span class="text-xs font-bold uppercase tracking-widest text-[#68785B] mb-3 block">NATURE EXPERIENCE</span>
            <h2 class="text-3xl md:text-4xl font-extrabold text-[#0F2A1C] font-serif leading-tight mb-6">自然を体験し、<br>地球と共生する</h2>
            <p class="text-stone-600 text-sm md:text-base leading-relaxed">都市生活で凝り固まった五感を解放するため、田園、高山、そして海洋へ繰り出します。聴覚、視覚、触覚を通じて本物の自然の生息地を肌で感じ、母なる地球との共生のつながりを築きます。</p>
          </div>
          <!-- Slide Text 1: Self -->
          <div class="hero-slide-text" id="slide-text-1">
            <span class="text-xs font-bold uppercase tracking-widest text-[#64748B] mb-3 block">INNER AWARENESS</span>
            <h2 class="text-3xl md:text-4xl font-extrabold text-[#0F2A1C] font-serif leading-tight mb-6">自己を内省し、<br>心と対話する</h2>
            <p class="text-stone-600 text-sm md:text-base leading-relaxed">喧騒にあふれる時代に歩みを緩め、意識を外の世界から内側へと向けます。マインドフルネス、瞑想、深い自然観察を通じて、身体や感情の微細な変化に耳を傾け、本当の自分と対話します。</p>
          </div>
          <!-- Slide Text 2: Creation -->
          <div class="hero-slide-text" id="slide-text-2">
            <span class="text-xs font-bold uppercase tracking-widest text-[#C87952] mb-3 block">DESIGN & CREATION</span>
            <h2 class="text-3xl md:text-4xl font-extrabold text-[#0F2A1C] font-serif leading-tight mb-6">理解と創造で、<br>行動を起こす</h2>
            <p class="text-stone-600 text-sm md:text-base leading-relaxed">人間中心の文脈に立ち返り、深い共感を築きます。デザイン思考の4Dプロセス（Discover、Define、Develop、Deliver）と現代のテクノロジーを組み合わせ、アイデアを具体的かつ持続可能な行動へと轉換します。</p>
          </div>
        </div>
        
        <!-- Controls -->
        <div class="flex items-center gap-6 mt-8">
          <div class="flex gap-2">
            <button onclick="prevHeroSlide()" class="w-10 h-10 rounded-full border border-stone-300 hover:border-[#68785B] flex items-center justify-center text-stone-600 hover:text-[#68785B] transition-colors focus:outline-none" aria-label="Previous Slide">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7"/></svg>
            </button>
            <button onclick="nextHeroSlide()" class="w-10 h-10 rounded-full border border-stone-300 hover:border-[#68785B] flex items-center justify-center text-stone-600 hover:text-[#68785B] transition-colors focus:outline-none" aria-label="Next Slide">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/></svg>
            </button>
          </div>
          <div class="flex gap-2">
            <span onclick="setHeroSlide(0)" id="dot-0" class="w-2.5 h-2.5 rounded-full bg-[#68785B] cursor-pointer transition-colors"></span>
            <span onclick="setHeroSlide(1)" id="dot-1" class="w-2.5 h-2.5 rounded-full bg-stone-300 cursor-pointer transition-colors"></span>
            <span onclick="setHeroSlide(2)" id="dot-2" class="w-2.5 h-2.5 rounded-full bg-stone-300 cursor-pointer transition-colors"></span>
          </div>
        </div>
      </div>

      <!-- Right: Image Slider -->
      <div class="terra-w-half flex justify-center" style="max-width: 540px; flex-shrink: 0;">
        <div class="w-full aspect-video relative overflow-hidden rounded-3xl shadow-xl">
          <img src="assets/yilan_field_1.jpg" alt="自然体験" class="w-full h-full object-cover absolute inset-0 transition-opacity duration-1000 opacity-100" id="slide-img-0" />
          <img src="assets/yilan_field_2.jpg" alt="自己内省" class="w-full h-full object-cover absolute inset-0 transition-opacity duration-1000 opacity-0" id="slide-img-1" />
          <img src="assets/terra-earth-school.jpg" alt="理解と創造" class="w-full h-full object-cover absolute inset-0 transition-opacity duration-1000 opacity-0" id="slide-img-2" />
        </div>
      </div>
    </div>
  </section>`;

// ==========================================
// 3-Slide JS Carousel Logic
// ==========================================
const js3Slides = `
    // Hero Carousel Logic (3-Slide)
    let currentHeroSlide = 0;
    const totalHeroSlides = 3;
    let heroAutoplayTimer = setInterval(nextHeroSlide, 5000);

    function updateHeroCarousel() {
      for (let i = 0; i < totalHeroSlides; i++) {
        const textEl = document.getElementById('slide-text-' + i);
        const imgEl = document.getElementById('slide-img-' + i);
        const dotEl = document.getElementById('dot-' + i);
        
        if (!textEl || !imgEl || !dotEl) continue;

        if (i === currentHeroSlide) {
          textEl.classList.add('active');
          imgEl.style.opacity = '1';
          imgEl.style.zIndex = '10';
          dotEl.style.backgroundColor = getDotColor(i);
        } else {
          textEl.classList.remove('active');
          imgEl.style.opacity = '0';
          imgEl.style.zIndex = '0';
          dotEl.style.backgroundColor = '#d6d3d1';
        }
      }
    }

    function getDotColor(index) {
      if (index === 0) return '#68785B'; // green (Nature)
      if (index === 1) return '#64748B'; // blue-grey (Self)
      if (index === 2) return '#C87952'; // orange (Creation)
      return '#68785B';
    }

    function nextHeroSlide() {
      currentHeroSlide = (currentHeroSlide + 1) % totalHeroSlides;
      updateHeroCarousel();
      resetAutoplay();
    }

    function prevHeroSlide() {
      currentHeroSlide = (currentHeroSlide - 1 + totalHeroSlides) % totalHeroSlides;
      updateHeroCarousel();
      resetAutoplay();
    }

    function setHeroSlide(index) {
      currentHeroSlide = index;
      updateHeroCarousel();
      resetAutoplay();
    }

    function resetAutoplay() {
      clearInterval(heroAutoplayTimer);
      heroAutoplayTimer = setInterval(nextHeroSlide, 5000);
    }
`;

files.forEach(file => {
  const filePath = path.join(basePath, file);
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace Hero Section with 3-slide and Intro text
  const chosenStructure = file === 'index.html' ? zhHeroStructure : (file === 'index-en.html' ? enHeroStructure : jaHeroStructure);
  content = content.replace(
    /<!-- Hero Carousel Section[\s\S]*?<\/section>/i,
    chosenStructure
  );
  content = content.replace(
    /<section id="hero-carousel"[\s\S]*?<\/section>/i,
    chosenStructure
  );

  // Replace Javascript logic back to 3-Slide
  content = content.replace(
    /\/\/ Hero Carousel Logic \(4-Slide\)[\s\S]*?resetAutoplay\(\);\s*\}\s*<\/script>/i,
    js3Slides.trim() + '\n</script>'
  );
  content = content.replace(
    /\/\/ Hero Carousel Logic \(4-Slide\)[\s\S]*?resetAutoplay\(\);\s*\}/i,
    js3Slides.trim()
  );
  
  content = content.replace(
    /\/\/ Hero Carousel Logic[\s\S]*?resetAutoplay\(\);\s*\}\s*<\/script>/i,
    js3Slides.trim() + '\n</script>'
  );
  content = content.replace(
    /\/\/ Hero Carousel Logic[\s\S]*?resetAutoplay\(\);\s*\}/i,
    js3Slides.trim()
  );

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Successfully separated About Terra and 3-Slide Carousel in ${file}`);
});
