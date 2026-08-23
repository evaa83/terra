const fs = require('fs');
const path = require('path');

const basePath = 'c:\\Antigravity\\exhibition';

const files = [
  'index.html',
  'index-en.html',
  'index-ja.html'
];

const newCSS = `    /* Hero Carousel Slide Transitions - Fixed using CSS Grid */
    .hero-text-grid {
      display: grid !important;
      grid-template-columns: 1fr !important;
      grid-template-rows: 1fr !important;
      width: 100% !important;
      min-height: 280px !important;
      position: relative !important;
    }
    .hero-slide-text {
      grid-column: 1 !important;
      grid-row: 1 !important;
      opacity: 0 !important;
      pointer-events: none !important;
      transform: translateX(15px) !important;
      transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out !important;
      width: 100% !important;
      display: flex !important;
      flex-direction: column !important;
      justify-content: center !important;
    }
    .hero-slide-text.active {
      opacity: 1 !important;
      pointer-events: auto !important;
      transform: translateX(0) !important;
    }`;

files.forEach(file => {
  const filePath = path.join(basePath, file);
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');

  // 1. Replace the CSS block
  content = content.replace(
    /\/\* Hero Carousel Slide Transitions - Fixed overlapping and positioning bugs \*\/[\s\S]*?\.hero-slide-text\.active \{[\s\S]*?\}/i,
    newCSS
  );

  // 2. Replace the HTML wrapper div for slide texts
  content = content.replace(
    /<div class="relative overflow-hidden flex-grow flex items-center" style="min-h: 280px;">/i,
    '<div class="hero-text-grid">'
  );

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Successfully implemented CSS Grid Carousel in ${file}`);
});
