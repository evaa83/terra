const fs = require('fs');
const path = require('path');

const basePath = 'c:\\Antigravity\\exhibition';

const files = [
  'index.html',
  'index-en.html',
  'index-ja.html'
];

const cssBlock = `
  <style>
    /* UI/UX Director Styles - Ensures robust responsive layout regardless of Tailwind precompile limits */
    .terra-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2.5rem;
      width: 100%;
    }
    @media (max-width: 1023px) {
      .hero-container-mobile {
        flex-direction: column-reverse !important;
      }
    }
    @media (min-width: 1024px) {
      .terra-container {
        flex-direction: row !important;
        justify-content: space-between !important;
        gap: 4rem !important;
        text-align: left !important;
      }
      .terra-container.reverse {
        flex-direction: row-reverse !important;
      }
    }
    .terra-w-half {
      width: 100%;
    }
    @media (min-width: 1024px) {
      .terra-w-half {
        width: 50% !important;
        flex-shrink: 0 !important;
      }
      .terra-w-grow {
        flex-grow: 1 !important;
        width: auto !important;
      }
    }
    
    /* Hero Carousel Slide Transitions - Fixed overlapping bug */
    .hero-slide-text {
      opacity: 0 !important;
      position: absolute !important;
      pointer-events: none !important;
      transform: translateX(15px) !important;
      transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out !important;
      width: 100%;
    }
    .hero-slide-text.active {
      opacity: 1 !important;
      position: relative !important;
      pointer-events: auto !important;
      transform: translateX(0) !important;
    }
  </style>
`;

files.forEach(file => {
  const filePath = path.join(basePath, file);
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');

  // 1. Insert CSS block inside head (just before </head>)
  if (!content.includes('UI/UX Director Styles')) {
    content = content.replace('</head>', `${cssBlock}\n</head>`);
  }

  // 2. Adjust Hero Section HTML to use custom classes
  content = content.replace(
    /class="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16"/i,
    'class="max-w-6xl mx-auto terra-container hero-container-mobile"'
  );
  content = content.replace(
    /class="w-full" style="max-width: 500px; min-h: 380px; display: flex; flex-col; justify-content: space-between;"/i,
    'class="terra-w-half" style="max-width: 500px; min-h: 380px; display: flex; flex-direction: column; justify-content: space-between;"'
  );
  // Simplify slide list
  content = content.replace('class="hero-slide-text transition-all duration-700 opacity-100 transform translate-x-0"', 'class="hero-slide-text active"');
  content = content.replace('class="hero-slide-text transition-all duration-700 opacity-0 absolute transform translate-x-8 pointer-events-none"', 'class="hero-slide-text"');
  content = content.replace('class="hero-slide-text transition-all duration-700 opacity-0 absolute transform translate-x-8 pointer-events-none"', 'class="hero-slide-text"'); // second one
  
  // Replace image wrapper
  content = content.replace(
    /class="w-full flex-grow relative overflow-hidden rounded-3xl shadow-xl aspect-video" style="max-width: 540px; max-height: 360px;"/i,
    'class="terra-w-half flex justify-center" style="max-width: 540px; flex-shrink: 0;"'
  );
  // Remove wrapping div inner element if needed, let's keep it clean
  content = content.replace(
    /<div class="terra-w-half flex justify-center" style="max-width: 540px; flex-shrink: 0;">\s*<img src="assets\/yilan_field_1.jpg"/i,
    '<div class="terra-w-half flex justify-center" style="max-width: 540px; flex-shrink: 0;"><div class="w-full aspect-video relative overflow-hidden rounded-3xl shadow-xl"><img src="assets/yilan_field_1.jpg"'
  );
  content = content.replace(
    `        <img src="assets/terra-earth-school.jpg" alt="理解創造" class="w-full h-full object-cover absolute inset-0 transition-opacity duration-1000 opacity-0" id="slide-img-2" />
      </div>
    </div>
  </section>`,
    `        <img src="assets/terra-earth-school.jpg" alt="理解創造" class="w-full h-full object-cover absolute inset-0 transition-opacity duration-1000 opacity-0" id="slide-img-2" />
      </div></div>
    </div>
  </section>`
  );
  content = content.replace(
    `        <img src="assets/terra-earth-school.jpg" alt="Understand & Create" class="w-full h-full object-cover absolute inset-0 transition-opacity duration-1000 opacity-0" id="slide-img-2" />
      </div>
    </div>
  </section>`,
    `        <img src="assets/terra-earth-school.jpg" alt="Understand & Create" class="w-full h-full object-cover absolute inset-0 transition-opacity duration-1000 opacity-0" id="slide-img-2" />
      </div></div>
    </div>
  </section>`
  );
  content = content.replace(
    `        <img src="assets/terra-earth-school.jpg" alt="理解と創造" class="w-full h-full object-cover absolute inset-0 transition-opacity duration-1000 opacity-0" id="slide-img-2" />
      </div>
    </div>
  </section>`,
    `        <img src="assets/terra-earth-school.jpg" alt="理解と創造" class="w-full h-full object-cover absolute inset-0 transition-opacity duration-1000 opacity-0" id="slide-img-2" />
      </div></div>
    </div>
  </section>`
  );

  // 3. Adjust Upcoming Event Section HTML
  content = content.replace(
    /class="bg-\[#FAF5F0\] border border-orange-200\/40 rounded-3xl p-8 md:p-12 shadow-lg relative overflow-hidden transition-all duration-300 hover:shadow-xl flex flex-col md:flex-row items-center gap-10"/i,
    'class="bg-[#FAF5F0] border border-orange-200/40 rounded-3xl p-8 md:p-12 shadow-lg relative overflow-hidden transition-all duration-300 hover:shadow-xl terra-container"'
  );
  content = content.replace(
    /class="w-full md:w-1\/2 aspect-video rounded-2xl overflow-hidden bg-stone-100 shadow-sm shrink-0"/i,
    'class="terra-w-half aspect-video rounded-2xl overflow-hidden bg-stone-100 shadow-sm"'
  );
  content = content.replace(
    /class="flex-grow"/i,
    'class="terra-w-grow terra-align-left"'
  );

  // 4. Adjust Venn Capacities Section HTML
  content = content.replace(
    /class="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16"/i,
    'class="terra-container"'
  );
  content = content.replace(
    /class="w-full flex justify-center" style="max-width: 480px; flex-shrink: 0;"/i,
    'class="terra-w-half flex justify-center" style="max-width: 480px;"'
  );
  content = content.replace(
    /class="w-full" style="max-width: 440px; flex-grow: 1;"/i,
    'class="terra-w-half" style="max-width: 440px;"'
  );

  // 5. Adjust Past Footprints Section HTML
  content = content.replace(
    /class="bg-stone-50 border border-stone-200\/60 rounded-3xl p-8 md:p-12 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row-reverse items-center gap-10"/i,
    'class="bg-stone-50 border border-stone-200/60 rounded-3xl p-8 md:p-12 shadow-md hover:shadow-lg transition-all duration-300 terra-container reverse"'
  );
  content = content.replace(
    /class="w-full md:w-1\/2 aspect-video rounded-2xl overflow-hidden bg-stone-100 shadow-sm shrink-0"/i,
    'class="terra-w-half aspect-video rounded-2xl overflow-hidden bg-stone-100 shadow-sm"'
  );

  // 6. Rewrite JavaScript Update Carousel function
  const oldUpdateCarouselJS = `    function updateHeroCarousel() {
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
    }`;

  const newUpdateCarouselJS = `    function updateHeroCarousel() {
      for (let i = 0; i < totalHeroSlides; i++) {
        const textEl = document.getElementById(\`slide-text-\${i}\`);
        const imgEl = document.getElementById(\`slide-img-\${i}\`);
        const dotEl = document.getElementById(\`dot-\${i}\`);
        
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
    }`;

  content = content.replace(oldUpdateCarouselJS, newUpdateCarouselJS);

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Successfully fixed CSS and JS bugs in ${file}`);
});
