const fs = require('fs');
const path = require('path');

const basePath = 'c:\\Antigravity\\exhibition';

const files = [
  'index.html',
  'index-en.html',
  'index-ja.html'
];

const newCSS = `    /* Hero Carousel Slide Transitions - Fixed overlapping and positioning bugs */
    .hero-slide-text {
      opacity: 0 !important;
      position: absolute !important;
      top: 0 !important;
      left: 0 !important;
      width: 100% !important;
      height: 100% !important;
      pointer-events: none !important;
      transform: translateX(15px) !important;
      transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out !important;
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

  // Replace the old CSS rules with the new pure-absolute ones
  content = content.replace(
    /\/\* Hero Carousel Slide Transitions - Fixed overlapping bug \*\/[\s\S]*?\.hero-slide-text\.active \{[\s\S]*?\}/i,
    newCSS
  );

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Successfully updated to pure-absolute slide transitions in ${file}`);
});
