const fs = require('fs');
const path = require('path');

const basePath = 'c:\\Antigravity\\exhibition';

// ==========================================
// 1. CHINESE TEMPLATES (index.html)
// ==========================================

const zhHeaderNav = `<nav class="hidden md:flex items-center gap-8 text-sm font-bold text-[#0F2A1C]/80">
        <a href="#hero-carousel" class="hover:text-[#C87952] transition-colors">核心概念</a>
        <a href="#upcoming-event" class="hover:text-[#C87952] transition-colors">最新活動</a>
        <a href="#capacities" class="hover:text-[#C87952] transition-colors">三個能力</a>
        <a href="#past-footprints" class="hover:text-[#C87952] transition-colors">實踐足跡</a>
        <a href="#about" class="hover:text-[#C87952] transition-colors">關於泰拉</a>
        <a href="#partners" class="hover:text-[#C87952] transition-colors">合作夥伴</a>
      </nav>`;

const zhHeroCarousel = `  <!-- Hero Carousel Section (Option A - Split Screen) -->
  <section id="hero-carousel" class="pt-32 pb-20 px-6 bg-[#FFFDF8] border-b border-stone-200/50" style="background-image: radial-gradient(circle at 80% 20%, rgba(104, 120, 91, 0.05) 0%, transparent 60%);">
    <div class="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
      <!-- Left: Text Slides -->
      <div class="w-full" style="max-width: 500px; min-h: 380px; display: flex; flex-col; justify-content: space-between;">
        <div class="relative overflow-hidden flex-grow flex items-center" style="min-h: 280px;">
          <!-- Slide Text 0: Nature -->
          <div class="hero-slide-text transition-all duration-700 opacity-100 transform translate-x-0" id="slide-text-0">
            <span class="text-xs font-bold uppercase tracking-widest text-[#68785B] mb-3 block">NATURE EXPERIENCE</span>
            <h1 class="text-3xl md:text-5xl font-extrabold text-[#0F2A1C] font-serif leading-tight mb-6">體驗自然，<br>與地球共生</h1>
            <p class="text-stone-600 text-sm md:text-base leading-relaxed">走進土地、高山與海洋，重新打開被城市禁錮的感官。用聽覺、視覺、觸覺去親近真實的自然場域，建立人與地球最根本的共生感。</p>
          </div>
          <!-- Slide Text 1: Self -->
          <div class="hero-slide-text transition-all duration-700 opacity-0 absolute transform translate-x-8 pointer-events-none" id="slide-text-1">
            <span class="text-xs font-bold uppercase tracking-widest text-[#64748B] mb-3 block">INNER AWARENESS</span>
            <h1 class="text-3xl md:text-5xl font-extrabold text-[#0F2A1C] font-serif leading-tight mb-6">覺察自我，<br>與內心對話</h1>
            <p class="text-stone-600 text-sm md:text-base leading-relaxed">在喧囂的時代慢下腳步，將焦點由外在世界轉回內心。透過靜心、冥想與深度的自然觀察，聆聽身體與情緒變化，與真實的自我對話。</p>
          </div>
          <!-- Slide Text 2: Creation -->
          <div class="hero-slide-text transition-all duration-700 opacity-0 absolute transform translate-x-8 pointer-events-none" id="slide-text-2">
            <span class="text-xs font-bold uppercase tracking-widest text-[#C87952] mb-3 block">DESIGN & CREATION</span>
            <h1 class="text-3xl md:text-5xl font-extrabold text-[#0F2A1C] font-serif leading-tight mb-6">理解創造，<br>用行動改變</h1>
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
      <div class="w-full flex-grow relative overflow-hidden rounded-3xl shadow-xl aspect-video" style="max-width: 540px; max-height: 360px;">
        <img src="assets/yilan_field_1.jpg" alt="體驗自然" class="w-full h-full object-cover absolute inset-0 transition-opacity duration-1000 opacity-100" id="slide-img-0" />
        <img src="assets/yilan_field_2.jpg" alt="覺察自我" class="w-full h-full object-cover absolute inset-0 transition-opacity duration-1000 opacity-0" id="slide-img-1" />
        <img src="assets/terra-earth-school.jpg" alt="理解創造" class="w-full h-full object-cover absolute inset-0 transition-opacity duration-1000 opacity-0" id="slide-img-2" />
      </div>
    </div>
  </section>`;

const zhUpcomingEvent = `  <!-- Upcoming Event Section -->
  <section id="upcoming-event" class="py-24 px-6 bg-white">
    <div class="max-w-5xl mx-auto">
      <div class="text-center mb-16">
        <p class="text-[#C87952] text-xs font-bold tracking-widest uppercase mb-2">UPCOMING PROGRAM</p>
        <h2 class="text-3xl font-extrabold text-[#0F2A1C] font-serif">最新活動招募</h2>
      </div>
      
      <div class="bg-[#FAF5F0] border border-orange-200/40 rounded-3xl p-8 md:p-12 shadow-lg relative overflow-hidden transition-all duration-300 hover:shadow-xl flex flex-col md:flex-row items-center gap-10">
        <div class="w-full md:w-1/2 aspect-video rounded-2xl overflow-hidden bg-stone-100 shadow-sm shrink-0">
          <img src="assets/yilan_field_4.jpg" alt="天之校招生" class="w-full h-full object-cover" />
        </div>
        <div class="flex-grow">
          <span class="inline-block px-3 py-1 bg-[#68785B] text-white text-xs font-bold rounded-full mb-4">2027 冬季招募中</span>
          <h3 class="text-2xl font-bold text-[#0F2A1C] font-serif mb-3">天之校 ｜ 山旅共生．永續高山</h3>
          <div class="space-y-2 text-stone-600 text-sm mb-6 leading-relaxed">
            <p>📅 <strong>活動時間</strong>：2027 年 1 月 3 日 至 1 月 7 日 (五天四夜)</p>
            <p>📍 <strong>活動地點</strong>：花蓮天祥 ╳ 觀雲山莊</p>
            <p>🌲 <strong>課程簡介</strong>：引導人們進入大自然，探索高山生態與環境。在原野體驗中放慢腳步，認識真實世界，並與夥伴們攜手共創高山旅遊與永續環境和諧共存的實踐方案。</p>
          </div>
          <div class="flex justify-start">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSe9AM-LzN7eu8j-Yiwv4LAGDlfsu-gGI_K4Gn0m4GL0Y6vw5Q/viewform" target="_blank" rel="noopener noreferrer" class="bg-[#0F2A1C] hover:bg-[#C87952] text-white font-bold text-sm px-8 py-3.5 rounded-full shadow-md transition-all transform hover:-translate-y-0.5 inline-block">
              立即報名 / 填寫意願表單
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>`;

const zhCapacities = `  <!-- Venn capacities Section -->
  <section id="capacities" class="py-24 px-6 bg-stone-50 border-t border-b border-stone-200/50" style="background-image: radial-gradient(circle at 80% 20%, rgba(104, 120, 91, 0.05) 0%, transparent 60%);">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16">
        <p class="text-[#C87952] text-xs font-bold tracking-widest uppercase mb-2">THREE CAPACITIES</p>
        <h2 class="text-3xl font-extrabold text-[#0F2A1C] font-serif">三個核心能力</h2>
      </div>

      <div class="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
        <!-- Left: Interactive Venn SVG -->
        <div class="w-full flex justify-center" style="max-width: 480px; flex-shrink: 0;">
          <svg id="terraVenn" viewBox="0 0 760 680" role="img" aria-label="泰拉三個能力文氏圖" style="width: 100%; height: auto;">
            <defs>
              <circle id="shapeA" cx="380" cy="230" r="205"></circle>
              <circle id="shapeB" cx="255" cy="430" r="205"></circle>
              <circle id="shapeC" cx="505" cy="430" r="205"></circle>
            </defs>
            <g style="isolation: isolate;">
              <use href="#shapeA" id="circleA" class="venn-circle" fill="#68785B" style="mix-blend-mode: multiply;" />
              <use href="#shapeB" id="circleB" class="venn-circle" fill="#64748B" style="mix-blend-mode: multiply;" />
              <use href="#shapeC" id="circleC" class="venn-circle" fill="#C87952" style="mix-blend-mode: multiply;" />
            </g>
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
    </div>
  </section>`;

const zhPastFootprints = `  <!-- Past Footprints Section -->
  <section id="past-footprints" class="py-24 px-6 bg-white">
    <div class="max-w-5xl mx-auto">
      <div class="text-center mb-16">
        <p class="text-[#C87952] text-xs font-bold tracking-widest uppercase mb-2">PAST PORTFOLIO</p>
        <h2 class="text-3xl font-extrabold text-[#0F2A1C] font-serif">實踐足跡與成果</h2>
      </div>
      
      <div class="bg-stone-50 border border-stone-200/60 rounded-3xl p-8 md:p-12 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row-reverse items-center gap-10">
        <div class="w-full md:w-1/2 aspect-video rounded-2xl overflow-hidden bg-stone-100 shadow-sm shrink-0">
          <img src="assets/terra-earth-school.jpg" alt="地之校成果展" class="w-full h-full object-cover" />
        </div>
        <div class="flex-grow">
          <span class="inline-block px-3 py-1 bg-[#C87952] text-white text-xs font-bold rounded-full mb-4">2026 第一屆成果</span>
          <h3 class="text-2xl font-bold text-[#0F2A1C] font-serif mb-3">地之校 ｜ 宜蘭員山．南澳食農成果展</h3>
          <p class="text-stone-600 text-sm leading-relaxed mb-6">
            以農村與田野為場域，國立清華大學立德計畫與早稻田大學跨國共創合作。人們透過勞動親身體驗自然，在靜思中覺察內在，並透過設計思考，為小農格外品與地方推廣共創出四組溫暖的解決方案。
          </p>
          <div class="flex justify-start">
            <a href="earth/index.html" class="bg-white hover:bg-stone-100 text-[#0F2A1C] border border-[#0F2A1C]/20 hover:border-[#0F2A1C]/50 font-bold text-sm px-8 py-3.5 rounded-full shadow-sm transition-all transform hover:-translate-y-0.5 inline-block">
              進入地之校成果展 ➜
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>`;

// ==========================================
// 2. ENGLISH TEMPLATES (index-en.html)
// ==========================================

const enHeaderNav = `<nav class="hidden md:flex items-center gap-8 text-sm font-bold text-[#0F2A1C]/80">
        <a href="#hero-carousel" class="hover:text-[#C87952] transition-colors">Concept</a>
        <a href="#upcoming-event" class="hover:text-[#C87952] transition-colors">Upcoming</a>
        <a href="#capacities" class="hover:text-[#C87952] transition-colors">Capacities</a>
        <a href="#past-footprints" class="hover:text-[#C87952] transition-colors">Footprints</a>
        <a href="#about" class="hover:text-[#C87952] transition-colors">About</a>
        <a href="#partners" class="hover:text-[#C87952] transition-colors">Partners</a>
      </nav>`;

const enHeroCarousel = `  <!-- Hero Carousel Section -->
  <section id="hero-carousel" class="pt-32 pb-20 px-6 bg-[#FFFDF8] border-b border-stone-200/50" style="background-image: radial-gradient(circle at 80% 20%, rgba(104, 120, 91, 0.05) 0%, transparent 60%);">
    <div class="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
      <!-- Left: Text Slides -->
      <div class="w-full" style="max-width: 500px; min-h: 380px; display: flex; flex-col; justify-content: space-between;">
        <div class="relative overflow-hidden flex-grow flex items-center" style="min-h: 280px;">
          <!-- Slide Text 0: Nature -->
          <div class="hero-slide-text transition-all duration-700 opacity-100 transform translate-x-0" id="slide-text-0">
            <span class="text-xs font-bold uppercase tracking-widest text-[#68785B] mb-3 block">NATURE EXPERIENCE</span>
            <h1 class="text-3xl md:text-5xl font-extrabold text-[#0F2A1C] font-serif leading-tight mb-6">Experience Nature, <br>Co-exist with Earth</h1>
            <p class="text-stone-600 text-sm md:text-base leading-relaxed">Step out into fields, mountains, and oceans to re-open the senses confined by urban environments. Hear, see, and touch the real natural habitats, building a core connection of co-existence with our Earth Mother.</p>
          </div>
          <!-- Slide Text 1: Self -->
          <div class="hero-slide-text transition-all duration-700 opacity-0 absolute transform translate-x-8 pointer-events-none" id="slide-text-1">
            <span class="text-xs font-bold uppercase tracking-widest text-[#64748B] mb-3 block">INNER AWARENESS</span>
            <h1 class="text-3xl md:text-5xl font-extrabold text-[#0F2A1C] font-serif leading-tight mb-6">Aware of Self, <br>Dialogue with Inside</h1>
            <p class="text-stone-600 text-sm md:text-base leading-relaxed">Slow down in a noisy era and turn focus from the outer world back inwards. Through mindfulness, meditation, and deep nature observations, listen to subtle changes in body and emotion, engaging in dialogues with your true self.</p>
          </div>
          <!-- Slide Text 2: Creation -->
          <div class="hero-slide-text transition-all duration-700 opacity-0 absolute transform translate-x-8 pointer-events-none" id="slide-text-2">
            <span class="text-xs font-bold uppercase tracking-widest text-[#C87952] mb-3 block">DESIGN & CREATION</span>
            <h1 class="text-3xl md:text-5xl font-extrabold text-[#0F2A1C] font-serif leading-tight mb-6">Understand & Create, <br>Change with Action</h1>
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
      <div class="w-full flex-grow relative overflow-hidden rounded-3xl shadow-xl aspect-video" style="max-width: 540px; max-height: 360px;">
        <img src="assets/yilan_field_1.jpg" alt="Experience Nature" class="w-full h-full object-cover absolute inset-0 transition-opacity duration-1000 opacity-100" id="slide-img-0" />
        <img src="assets/yilan_field_2.jpg" alt="Aware of Self" class="w-full h-full object-cover absolute inset-0 transition-opacity duration-1000 opacity-0" id="slide-img-1" />
        <img src="assets/terra-earth-school.jpg" alt="Understand & Create" class="w-full h-full object-cover absolute inset-0 transition-opacity duration-1000 opacity-0" id="slide-img-2" />
      </div>
    </div>
  </section>`;

const enUpcomingEvent = `  <!-- Upcoming Event Section -->
  <section id="upcoming-event" class="py-24 px-6 bg-white">
    <div class="max-w-5xl mx-auto">
      <div class="text-center mb-16">
        <p class="text-[#C87952] text-xs font-bold tracking-widest uppercase mb-2">UPCOMING PROGRAM</p>
        <h2 class="text-3xl font-extrabold text-[#0F2A1C] font-serif">Upcoming Program</h2>
      </div>
      
      <div class="bg-[#FAF5F0] border border-orange-200/40 rounded-3xl p-8 md:p-12 shadow-lg relative overflow-hidden transition-all duration-300 hover:shadow-xl flex flex-col md:flex-row items-center gap-10">
        <div class="w-full md:w-1/2 aspect-video rounded-2xl overflow-hidden bg-stone-100 shadow-sm shrink-0">
          <img src="assets/yilan_field_4.jpg" alt="Sky School Program" class="w-full h-full object-cover" />
        </div>
        <div class="flex-grow">
          <span class="inline-block px-3 py-1 bg-[#68785B] text-white text-xs font-bold rounded-full mb-4">Winter 2027 Enrolling</span>
          <h3 class="text-2xl font-bold text-[#0F2A1C] font-serif mb-3">Sky School ｜ Mountain Symbiosis & Sustainable Alpine</h3>
          <div class="space-y-2 text-stone-600 text-sm mb-6 leading-relaxed">
            <p>📅 <strong>Date</strong>: Jan 3, 2027 - Jan 7, 2027 (5 Days & 4 Nights)</p>
            <p>📍 <strong>Location</strong>: Tianxiang, Hualien ╳ Guanyuan Villa</p>
            <p>🌲 <strong>Description</strong>: Guide people into high-altitude forests to experience alpine climates and ecosystems. In this wilderness journey, slow down to connect with the inner self and work with peers to co-create sustainable tourism solutions that harmoniously protect high mountain environments.</p>
          </div>
          <div class="flex justify-start">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSe9AM-LzN7eu8j-Yiwv4LAGDlfsu-gGI_K4Gn0m4GL0Y6vw5Q/viewform" target="_blank" rel="noopener noreferrer" class="bg-[#0F2A1C] hover:bg-[#C87952] text-white font-bold text-sm px-8 py-3.5 rounded-full shadow-md transition-all transform hover:-translate-y-0.5 inline-block">
              Apply Now / Express Interest
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>`;

const enCapacities = `  <!-- Venn capacities Section -->
  <section id="capacities" class="py-24 px-6 bg-stone-50 border-t border-b border-stone-200/50" style="background-image: radial-gradient(circle at 80% 20%, rgba(104, 120, 91, 0.05) 0%, transparent 60%);">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16">
        <p class="text-[#C87952] text-xs font-bold tracking-widest uppercase mb-2">THREE CAPACITIES</p>
        <h2 class="text-3xl font-extrabold text-[#0F2A1C] font-serif">Three Core Capacities</h2>
      </div>

      <div class="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
        <!-- Left: Interactive Venn SVG -->
        <div class="w-full flex justify-center" style="max-width: 480px; flex-shrink: 0;">
          <svg id="terraVenn" viewBox="0 0 760 680" role="img" aria-label="Terra 3-Circle Venn Diagram" style="width: 100%; height: auto;">
            <defs>
              <circle id="shapeA" cx="380" cy="230" r="205"></circle>
              <circle id="shapeB" cx="255" cy="430" r="205"></circle>
              <circle id="shapeC" cx="505" cy="430" r="205"></circle>
            </defs>
            <g style="isolation: isolate;">
              <use href="#shapeA" id="circleA" class="venn-circle" fill="#68785B" style="mix-blend-mode: multiply;" />
              <use href="#shapeB" id="circleB" class="venn-circle" fill="#64748B" style="mix-blend-mode: multiply;" />
              <use href="#shapeC" id="circleC" class="venn-circle" fill="#C87952" style="mix-blend-mode: multiply;" />
            </g>
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
    </div>
  </section>`;

const enPastFootprints = `  <!-- Past Footprints Section -->
  <section id="past-footprints" class="py-24 px-6 bg-white">
    <div class="max-w-5xl mx-auto">
      <div class="text-center mb-16">
        <p class="text-[#C87952] text-xs font-bold tracking-widest uppercase mb-2">PAST PORTFOLIO</p>
        <h2 class="text-3xl font-extrabold text-[#0F2A1C] font-serif">Past Footprints</h2>
      </div>
      
      <div class="bg-stone-50 border border-stone-200/60 rounded-3xl p-8 md:p-12 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row-reverse items-center gap-10">
        <div class="w-full md:w-1/2 aspect-video rounded-2xl overflow-hidden bg-stone-100 shadow-sm shrink-0">
          <img src="assets/terra-earth-school.jpg" alt="Earth School Exhibition" class="w-full h-full object-cover" />
        </div>
        <div class="flex-grow">
          <span class="inline-block px-3 py-1 bg-[#C87952] text-white text-xs font-bold rounded-full mb-4">First Cohort 2026</span>
          <h3 class="text-2xl font-bold text-[#0F2A1C] font-serif mb-3">Earth School ｜ Yilan Agrifood & Local Revitalization</h3>
          <p class="text-stone-600 text-sm leading-relaxed mb-6">
            Centered in rural fields, co-organized by NTHU Leadership Program and Waseda University. Through hands-on farm labor, people experience nature, reflect inwards, and apply design thinking workflows to co-create warm solutions for local growers and agrifood promotion.
          </p>
          <div class="flex justify-start">
            <a href="earth/index.html" class="bg-white hover:bg-stone-100 text-[#0F2A1C] border border-[#0F2A1C]/20 hover:border-[#0F2A1C]/50 font-bold text-sm px-8 py-3.5 rounded-full shadow-sm transition-all transform hover:-translate-y-0.5 inline-block">
              Enter Earth School Exhibition ➜
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>`;

// ==========================================
// 3. JAPANESE TEMPLATES (index-ja.html)
// ==========================================

const jaHeaderNav = `<nav class="hidden md:flex items-center gap-8 text-sm font-bold text-[#0F2A1C]/80">
        <a href="#hero-carousel" class="hover:text-[#C87952] transition-colors">コンセプト</a>
        <a href="#upcoming-event" class="hover:text-[#C87952] transition-colors">最新活動</a>
        <a href="#capacities" class="hover:text-[#C87952] transition-colors">3つの能力</a>
        <a href="#past-footprints" class="hover:text-[#C87952] transition-colors">活動実績</a>
        <a href="#about" class="hover:text-[#C87952] transition-colors">テラについて</a>
        <a href="#partners" class="hover:text-[#C87952] transition-colors">パートナー</a>
      </nav>`;

const jaHeroCarousel = `  <!-- Hero Carousel Section -->
  <section id="hero-carousel" class="pt-32 pb-20 px-6 bg-[#FFFDF8] border-b border-stone-200/50" style="background-image: radial-gradient(circle at 80% 20%, rgba(104, 120, 91, 0.05) 0%, transparent 60%);">
    <div class="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
      <!-- Left: Text Slides -->
      <div class="w-full" style="max-width: 500px; min-h: 380px; display: flex; flex-col; justify-content: space-between;">
        <div class="relative overflow-hidden flex-grow flex items-center" style="min-h: 280px;">
          <!-- Slide Text 0: Nature -->
          <div class="hero-slide-text transition-all duration-700 opacity-100 transform translate-x-0" id="slide-text-0">
            <span class="text-xs font-bold uppercase tracking-widest text-[#68785B] mb-3 block">NATURE EXPERIENCE</span>
            <h1 class="text-3xl md:text-5xl font-extrabold text-[#0F2A1C] font-serif leading-tight mb-6">自然を体験し、<br>地球と共生する</h1>
            <p class="text-stone-600 text-sm md:text-base leading-relaxed">都市生活で凝り固まった五感を解放するため、田園、高山、そして海洋へ繰り出します。聴覚、視覚、触覚を通じて本物の自然の生息地を肌で感じ、母なる地球との共生のつながりを築きます。</p>
          </div>
          <!-- Slide Text 1: Self -->
          <div class="hero-slide-text transition-all duration-700 opacity-0 absolute transform translate-x-8 pointer-events-none" id="slide-text-1">
            <span class="text-xs font-bold uppercase tracking-widest text-[#64748B] mb-3 block">INNER AWARENESS</span>
            <h1 class="text-3xl md:text-5xl font-extrabold text-[#0F2A1C] font-serif leading-tight mb-6">自己を内省し、<br>心と対話する</h1>
            <p class="text-stone-600 text-sm md:text-base leading-relaxed">喧騒にあふれる時代に歩みを緩め、意識を外の世界から内側へと向けます。マインドフルネス、瞑想、深い自然観察を通じて、身体や感情の微細な変化に耳を傾け、本当の自分と対話します。</p>
          </div>
          <!-- Slide Text 2: Creation -->
          <div class="hero-slide-text transition-all duration-700 opacity-0 absolute transform translate-x-8 pointer-events-none" id="slide-text-2">
            <span class="text-xs font-bold uppercase tracking-widest text-[#C87952] mb-3 block">DESIGN & CREATION</span>
            <h1 class="text-3xl md:text-5xl font-extrabold text-[#0F2A1C] font-serif leading-tight mb-6">理解と創造で、<br>行動を起こす</h1>
            <p class="text-stone-600 text-sm md:text-base leading-relaxed">人間中心の文脈に立ち返り、深い共感を築きます。デザイン思考の4Dプロセス（Discover、Define、Develop、Deliver）と現代のテクノロジーを組み合わせ、アイデアを具体的かつ持続可能な行動へと転換します。</p>
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
      <div class="w-full flex-grow relative overflow-hidden rounded-3xl shadow-xl aspect-video" style="max-width: 540px; max-height: 360px;">
        <img src="assets/yilan_field_1.jpg" alt="自然体験" class="w-full h-full object-cover absolute inset-0 transition-opacity duration-1000 opacity-100" id="slide-img-0" />
        <img src="assets/yilan_field_2.jpg" alt="自己内省" class="w-full h-full object-cover absolute inset-0 transition-opacity duration-1000 opacity-0" id="slide-img-1" />
        <img src="assets/terra-earth-school.jpg" alt="理解と創造" class="w-full h-full object-cover absolute inset-0 transition-opacity duration-1000 opacity-0" id="slide-img-2" />
      </div>
    </div>
  </section>`;

const jaUpcomingEvent = `  <!-- Upcoming Event Section -->
  <section id="upcoming-event" class="py-24 px-6 bg-white">
    <div class="max-w-5xl mx-auto">
      <div class="text-center mb-16">
        <p class="text-[#C87952] text-xs font-bold tracking-widest uppercase mb-2">UPCOMING PROGRAM</p>
        <h2 class="text-3xl font-extrabold text-[#0F2A1C] font-serif">最新活動の募集</h2>
      </div>
      
      <div class="bg-[#FAF5F0] border border-orange-200/40 rounded-3xl p-8 md:p-12 shadow-lg relative overflow-hidden transition-all duration-300 hover:shadow-xl flex flex-col md:flex-row items-center gap-10">
        <div class="w-full md:w-1/2 aspect-video rounded-2xl overflow-hidden bg-stone-100 shadow-sm shrink-0">
          <img src="assets/yilan_field_4.jpg" alt="天之校募集" class="w-full h-full object-cover" />
        </div>
        <div class="flex-grow">
          <span class="inline-block px-3 py-1 bg-[#68785B] text-white text-xs font-bold rounded-full mb-4">2027年冬季 募集中</span>
          <h3 class="text-2xl font-bold text-[#0F2A1C] font-serif mb-3">天之校 ｜ 山旅共生・持続可能な高山</h3>
          <div class="space-y-2 text-stone-600 text-sm mb-6 leading-relaxed">
            <p>📅 <strong>開催日程</strong>：2027 年 1 月 3 日 〜 1 月 7 日 (4泊5日)</p>
            <p>📍 <strong>開催場所</strong>：花蓮天祥 ╳ 観雲山荘</p>
            <p>🌲 <strong>コース概要</strong>：人々を大自然へと誘い、高山生態系と環境を探求します。野生での体験を通じて歩みを緩め、リアルな世界を知り、持続可能な高山観光と自然環境保護が共存する実用的なソリューションを仲間と共に共創します。</p>
          </div>
          <div class="flex justify-start">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSe9AM-LzN7eu8j-Yiwv4LAGDlfsu-gGI_K4Gn0m4GL0Y6vw5Q/viewform" target="_blank" rel="noopener noreferrer" class="bg-[#0F2A1C] hover:bg-[#C87952] text-white font-bold text-sm px-8 py-3.5 rounded-full shadow-md transition-all transform hover:-translate-y-0.5 inline-block">
              今すぐ申し込む / 参加意向の登録
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>`;

const jaCapacities = `  <!-- Venn capacities Section -->
  <section id="capacities" class="py-24 px-6 bg-stone-50 border-t border-b border-stone-200/50" style="background-image: radial-gradient(circle at 80% 20%, rgba(104, 120, 91, 0.05) 0%, transparent 60%);">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16">
        <p class="text-[#C87952] text-xs font-bold tracking-widest uppercase mb-2">THREE CAPACITIES</p>
        <h2 class="text-3xl font-extrabold text-[#0F2A1C] font-serif">3つのコア能力</h2>
      </div>

      <div class="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
        <!-- Left: Interactive Venn SVG -->
        <div class="w-full flex justify-center" style="max-width: 480px; flex-shrink: 0;">
          <svg id="terraVenn" viewBox="0 0 760 680" role="img" aria-label="テラの3つの能力ベン図" style="width: 100%; height: auto;">
            <defs>
              <circle id="shapeA" cx="380" cy="230" r="205"></circle>
              <circle id="shapeB" cx="255" cy="430" r="205"></circle>
              <circle id="shapeC" cx="505" cy="430" r="205"></circle>
            </defs>
            <g style="isolation: isolate;">
              <use href="#shapeA" id="circleA" class="venn-circle" fill="#68785B" style="mix-blend-mode: multiply;" />
              <use href="#shapeB" id="circleB" class="venn-circle" fill="#64748B" style="mix-blend-mode: multiply;" />
              <use href="#shapeC" id="circleC" class="venn-circle" fill="#C87952" style="mix-blend-mode: multiply;" />
            </g>
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
    </div>
  </section>`;

const jaPastFootprints = `  <!-- Past Footprints Section -->
  <section id="past-footprints" class="py-24 px-6 bg-white">
    <div class="max-w-5xl mx-auto">
      <div class="text-center mb-16">
        <p class="text-[#C87952] text-xs font-bold tracking-widest uppercase mb-2">PAST PORTFOLIO</p>
        <h2 class="text-3xl font-extrabold text-[#0F2A1C] font-serif">これまでの活動実績</h2>
      </div>
      
      <div class="bg-stone-50 border border-stone-200/60 rounded-3xl p-8 md:p-12 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row-reverse items-center gap-10">
        <div class="w-full md:w-1/2 aspect-video rounded-2xl overflow-hidden bg-stone-100 shadow-sm shrink-0">
          <img src="assets/terra-earth-school.jpg" alt="地之校成果展" class="w-full h-full object-cover" />
        </div>
        <div class="flex-grow">
          <span class="inline-block px-3 py-1 bg-[#C87952] text-white text-xs font-bold rounded-full mb-4">2026年 第一回実績</span>
          <h3 class="text-2xl font-bold text-[#0F2A1C] font-serif mb-3">地之校 ｜ 宜蘭員山・南澳食農成果展</h3>
          <p class="text-stone-600 text-sm leading-relaxed mb-6">
            農村と田野を舞台に、国立清華大学立徳計画と早稲田大学による共同プロジェクト。人々は農作業を通じて自然を直接体験し、瞑想の中で自己を内省し、デザイン思考を活用して地方生産者や食農普及のための4つの心温まる解決策を共創しました。
          </p>
          <div class="flex justify-start">
            <a href="earth/index.html" class="bg-white hover:bg-stone-100 text-[#0F2A1C] border border-[#0F2A1C]/20 hover:border-[#0F2A1C]/50 font-bold text-sm px-8 py-3.5 rounded-full shadow-sm transition-all transform hover:-translate-y-0.5 inline-block">
              地之校成果展を見る ➜
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>`;

// ==========================================
// JS Carousel Logic
// ==========================================

const carouselScript = `
    // Hero Carousel Logic
    let currentHeroSlide = 0;
    const totalHeroSlides = 3;
    let heroAutoplayTimer = setInterval(nextHeroSlide, 5000);

    function updateHeroCarousel() {
      for (let i = 0; i < totalHeroSlides; i++) {
        const textEl = document.getElementById(\`slide-text-\${i}\`);
        const imgEl = document.getElementById(\`slide-img-\${i}\`);
        const dotEl = document.getElementById(\`dot-\${i}\`);
        
        if (!textEl || !imgEl || !dotEl) continue;

        if (i === currentHeroSlide) {
          textEl.classList.remove('opacity-0', 'absolute', 'translate-x-8', 'pointer-events-none');
          textEl.classList.add('opacity-100', 'translate-x-0');
          imgEl.style.opacity = '1';
          imgEl.style.zIndex = '10';
          dotEl.style.backgroundColor = getDotColor(i);
        } else {
          textEl.classList.remove('opacity-100', 'translate-x-0');
          textEl.classList.add('opacity-0', 'absolute', 'translate-x-8', 'pointer-events-none');
          imgEl.style.opacity = '0';
          imgEl.style.zIndex = '0';
          dotEl.style.backgroundColor = '#d6d3d1'; // bg-stone-300
        }
      }
    }

    function getDotColor(index) {
      if (index === 0) return '#68785B'; // green
      if (index === 1) return '#64748B'; // blue-grey
      if (index === 2) return '#C87952'; // orange
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

// ==========================================
// PROCESSING FILES
// ==========================================

const targets = [
  { 
    file: 'index.html', 
    header: zhHeaderNav, 
    hero: zhHeroCarousel, 
    upcoming: zhUpcomingEvent, 
    capacities: zhCapacities, 
    past: zhPastFootprints 
  },
  { 
    file: 'index-en.html', 
    header: enHeaderNav, 
    hero: enHeroCarousel, 
    upcoming: enUpcomingEvent, 
    capacities: enCapacities, 
    past: enPastFootprints 
  },
  { 
    file: 'index-ja.html', 
    header: jaHeaderNav, 
    hero: jaHeroCarousel, 
    upcoming: jaUpcomingEvent, 
    capacities: jaCapacities, 
    past: jaPastFootprints 
  }
];

targets.forEach(t => {
  const filePath = path.join(basePath, t.file);
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');

  // 1. Update Header Navigation Links
  content = content.replace(
    /<nav class="hidden md:flex items-center gap-8 text-sm font-bold text-\[#0F2A1C\]\/80">[\s\S]*?<\/nav>/i,
    t.header
  );

  // 2. Replace everything between </header> and <!-- Partners Section --> with our structured sections
  const headerEndStr = '</header>';
  const headerEndIndex = content.indexOf(headerEndStr) + headerEndStr.length;
  
  const partnersSectionStr = '<!-- Partners Section -->';
  const partnersIndex = content.indexOf(partnersSectionStr);

  if (headerEndIndex > headerEndStr.length && partnersIndex !== -1) {
    const mainSectionPart = `\n\n${t.hero}\n\n${t.upcoming}\n\n${t.capacities}\n\n${t.past}\n\n  <!-- About Section -->
  <section id="about" class="py-24 px-6 border-t border-stone-200/50 bg-[#FFFDF8]">
    <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
      <div class="md:col-span-5 relative">
        <div class="aspect-square rounded-3xl overflow-hidden shadow-2xl">
          <img src="assets/terra-earth-school.jpg" alt="泰拉學校現場照片" class="w-full h-full object-cover" />
        </div>
        <div class="absolute -bottom-6 -right-6 w-32 h-32 rounded-3xl bg-[#68785B]/10 -z-10"></div>
      </div>
      <div class="md:col-span-7 flex flex-col justify-center">
        <h2 class="text-3xl font-bold text-[#0F2A1C] font-serif border-l-4 border-[#68785B] pl-4 mb-6">` + 
        (t.file === 'index.html' ? '關於泰拉學校' : (t.file === 'index-en.html' ? 'About Terra School' : 'テラ学校について')) + 
        `</h2>
        <div class="text-stone-600 space-y-4 leading-relaxed text-base">
          ` + (t.file === 'index.html' ? `
          <p>
            <strong>泰拉（Terra）</strong>是拉丁文的「地球」，代表帶著人們重新走回地球母親的懷抱，真實地體驗與認識祂。
          </p>
          <p>
            當 AI 快速改變知識取得與工作的方式，我們深刻反思：傳統教育教的真的以後有用嗎？在這個時代，人們需要的學習到底是什麼？因此有了泰拉學校——一所沒有圍牆的學校。我們帶領人們走進現場，認識真實的世界與問題。
          </p>
          <p>
            我們以「地、天、海」三所學校為架構，引導人們進入農村、高山與海洋。每一段學習都從走入大自然開始，打開五感，在體驗中放慢腳步，學習與自己連結，並透過設計思考與 AI 工具解決地方議題，重新建立人與自然、自己與他人之間的深刻連結。
          </p>
          ` : (t.file === 'index-en.html' ? `
          <p>
            <strong>Terra</strong> means "Earth" in Latin, symbolizing our mission to guide people back to Earth Mother's embrace, allowing them to experience and understand Her in a deep, real way.
          </p>
          <p>
            As artificial intelligence continues to redefine knowledge acquisition and how we work, we ask ourselves: Does traditional education still prepare us for tomorrow? What kind of learning do we really need in this era? Terra School was born as a school without walls to answer this. We guide people into real-world sites to discover real issues.
          </p>
          <p>
            Structured around three thematic domains—Earth, Sky, and Ocean—we guide people into farming villages, high mountains, and deep seas. Each learning journey begins with immersive nature experiences to open up all five senses. People slow down to connect with themselves, then apply design thinking and AI tools to co-create warm solutions for local challenges.
          </p>
          ` : `
          <p>
            <strong>テラ（Terra）</strong>とはラテン語で「地球」を意味し、人々が地球という母なる存在の胸に再び戻り、実際に体験し深く理解することを目指しています。
          </p>
          <p>
            AIが知識の習得や働き方を急速に変える中、私たちは深く問い直しました。「従来の教育は将来本当に役立つのか？」「この時代に本当に必要な学びとは何か？」その答えとして誕生したのが、壁のない学校「テラ学校」です。私たちは人々を現場へ連れ出し、リアルな世界と問題に向き合わせます。
          </p>
          <p>
            「地・天・海」の3つの学校の枠組みを通じて、人々を農村、高山、海洋へと導きます。すべての学びは大自然に入ることから始まり、五感を開放し、自然の体験の中で歩みを緩め、自己と向き合います。そして、デザイン思考とAIツールを活用して地方の課題にアプローチし、人と自然、自分と他者との深いつながりを再構築します。
          </p>
          `)) + `
        </div>
      </div>
    </div>
  </section>\n\n  `;

    content = content.slice(0, headerEndIndex) + mainSectionPart + content.slice(partnersIndex);
  }

  // 3. Insert Carousel JS Logic into the bottom script tag
  const scriptRegex = /<\/script>/i;
  const scriptEndIndex = content.lastIndexOf('</script>');
  if (scriptEndIndex !== -1) {
    content = content.slice(0, scriptEndIndex) + '\n\n' + carouselScript + '\n' + content.slice(scriptEndIndex);
  }

  // 4. In JS: update current script code to prevent old capacities click handlers from searching for elements that don't exist
  // Replace references to #programs in handleInteraction
  content = content.replace(/'#programs'/g, "'#past-footprints'");

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Successfully completed restructuring for ${t.file}`);
});
