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

  // 1. Update HTML Markup of the card to hide kicker and title on load
  if (file === 'index.html') {
    content = content.replace(
      `<span id="infoKicker" class="text-xs font-bold uppercase tracking-widest text-[#68785B] mb-2 block">CORE PILLARS</span>
              <h3 id="infoTitle" class="text-2xl font-extrabold text-[#0F2A1C] font-serif mb-4">三個核心能力</h3>`,
      `<span id="infoKicker" class="text-xs font-bold uppercase tracking-widest text-[#68785B] mb-2 block" style="display: none;"></span>
              <h3 id="infoTitle" class="text-2xl font-extrabold text-[#0F2A1C] font-serif mb-4" style="display: none;"></h3>`
    );
  } else if (file === 'index-en.html') {
    content = content.replace(
      `<span id="infoKicker" class="text-xs font-bold uppercase tracking-widest text-[#68785B] mb-2 block">CORE PILLARS</span>
              <h3 id="infoTitle" class="text-2xl font-extrabold text-[#0F2A1C] font-serif mb-4">Three Core Capacities</h3>`,
      `<span id="infoKicker" class="text-xs font-bold uppercase tracking-widest text-[#68785B] mb-2 block" style="display: none;"></span>
              <h3 id="infoTitle" class="text-2xl font-extrabold text-[#0F2A1C] font-serif mb-4" style="display: none;"></h3>`
    );
  } else if (file === 'index-ja.html') {
    content = content.replace(
      `<span id="infoKicker" class="text-xs font-bold uppercase tracking-widest text-[#68785B] mb-2 block">CORE PILLARS</span>
              <h3 id="infoTitle" class="text-2xl font-extrabold text-[#0F2A1C] font-serif mb-4">3つのコア能力</h3>`,
      `<span id="infoKicker" class="text-xs font-bold uppercase tracking-widest text-[#68785B] mb-2 block" style="display: none;"></span>
              <h3 id="infoTitle" class="text-2xl font-extrabold text-[#0F2A1C] font-serif mb-4" style="display: none;"></h3>`
    );
  }

  // 2. Update defaultContent in JS to have empty kicker and name
  if (file === 'index.html') {
    content = content.replace(
      `const defaultContent = {
      name: '三個核心能力',
      kicker: 'CORE PILLARS',`,
      `const defaultContent = {
      name: '',
      kicker: '',`
    );
  } else if (file === 'index-en.html') {
    content = content.replace(
      `const defaultContent = {
      name: 'Three Core Capacities',
      kicker: 'CORE PILLARS',`,
      `const defaultContent = {
      name: '',
      kicker: '',`
    );
  } else if (file === 'index-ja.html') {
    content = content.replace(
      `const defaultContent = {
      name: '3つのコア能力',
      kicker: 'CORE PILLARS',`,
      `const defaultContent = {
      name: '',
      kicker: '',`
    );
  }

  // Also remove potential overrides in document.documentElement.lang conditions
  content = content.replace(/defaultContent\.name = 'Three Core Capacities';/g, "defaultContent.name = '';");
  content = content.replace(/defaultContent\.kicker = 'CORE PILLARS';/g, "defaultContent.kicker = '';");
  content = content.replace(/defaultContent\.name = '自然、自己、そして創造';/g, "defaultContent.name = '';"); // old default
  content = content.replace(/defaultContent\.name = '3つのコア能力';/g, "defaultContent.name = '';");
  content = content.replace(/defaultContent\.name = 'Nature, Self & Creation';/g, "defaultContent.name = '';"); // old default

  // 3. Update updateCardText function in JS to toggle element display styles
  const oldUpdateCardText = `    function updateCardText(kicker, title, desc) {
      infoCardContent.classList.remove('fade-in');
      infoCardContent.classList.add('fade-out');
      
      setTimeout(() => {
        infoKicker.textContent = kicker;
        infoTitle.textContent = title;
        infoDesc.innerHTML = desc;
        
        infoCardContent.classList.remove('fade-out');
        infoCardContent.classList.add('fade-in');
      }, 150);
    }`;

  const newUpdateCardText = `    function updateCardText(kicker, title, desc) {
      infoCardContent.classList.remove('fade-in');
      infoCardContent.classList.add('fade-out');
      
      setTimeout(() => {
        if (kicker) {
          infoKicker.textContent = kicker;
          infoKicker.style.display = 'block';
        } else {
          infoKicker.style.display = 'none';
        }

        if (title) {
          infoTitle.textContent = title;
          infoTitle.style.display = 'block';
        } else {
          infoTitle.style.display = 'none';
        }

        infoDesc.innerHTML = desc;
        
        infoCardContent.classList.remove('fade-out');
        infoCardContent.classList.add('fade-in');
      }, 150);
    }`;

  content = content.replace(oldUpdateCardText, newUpdateCardText);

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Successfully removed resting kicker & title from card in ${file}`);
});
