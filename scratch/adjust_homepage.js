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

  // 1. Remove "青年營隊" / "Programs" / "青年キャンプ" link from top navigation
  content = content.replace(/<a href="#programs"[^>]*>.*?<\/a>/i, '');

  // 2. Remove "青年營隊計畫" / "Youth Programs" / "青年キャンプ計画" button from Hero section
  content = content.replace(/<a href="#programs" class="px-8 py-3.5 bg-white hover:bg-stone-50 text-\[#0F2A1C\] border border-\[#0F2A1C\]\/15 font-bold rounded-full shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5">.*?<\/a>/i, '');

  // 3. Remove infoAction footer from Venn Diagram card
  content = content.replace(/<div class="mt-8 pt-4 border-t border-stone-100">[\s\S]*?<a href="#programs" id="infoAction"[\s\S]*?<\/a>[\s\S]*?<\/div>/i, '');

  // 4. Remove Programs Section completely (both comments and content)
  content = content.replace(/<!-- Programs Section -->[\s\S]*?<!-- Partners Section -->/i, '<!-- Partners Section -->');
  content = content.replace(/<section id="programs"[\s\S]*?<\/section>/i, ''); // just in case

  // 5. Remove "實地營隊" / "Field Camps" / "フィールドキャンプ" link from Footer
  content = content.replace(/<a href="#programs" class="hover:text-white transition-colors">.*?<\/a>/i, '');

  // 6. Rewrite updateCardText and handleInteraction to be clean and simple
  // First, find the script block containing the functions
  const scriptRegex = /<script>([\s\S]*?)<\/script>/i;
  const scriptMatch = content.match(scriptRegex);
  if (scriptMatch) {
    let oldScript = scriptMatch[1];
    
    // Define the new script content
    let newScript = `
    const svg = document.getElementById('terraVenn');
    const infoCardContent = document.getElementById('infoCardContent');
    const infoKicker = document.getElementById('infoKicker');
    const infoTitle = document.getElementById('infoTitle');
    const infoDesc = document.getElementById('infoDesc');

    const circles = [
      { id: 'circleA', x: 380, y: 230, r: 205, name: '體驗自然', kicker: 'NATURE EXPERIENCE', desc: '走進土地、高山與海洋，重新打開被城市禁錮的感官。用聽覺、視覺、觸覺去親近真實的自然場域，建立人與地球母親最根本的共生感。' },
      { id: 'circleB', x: 255, y: 430, r: 205, name: '覺察自我', kicker: 'INNER AWARENESS', desc: '在喧囂的時代慢下腳步，將焦點由外在世界轉回內心。透過靜心、冥想與深度的自然觀察，聆聽身體與情緒的細微變化，與真實的內在對話。' },
      { id: 'circleC', x: 505, y: 430, r: 205, name: '理解創造', kicker: 'DESIGN & CREATION', desc: '回到人的處境，建立深刻的同理心，並運用設計思考的 4D 創新流程（Discover 理解、Define 解釋、Develop 共創、Deliver 實作）與現代科技工具，將創意轉化為可行的行動。' }
    ];

    if (document.documentElement.lang === 'en') {
      circles[0].name = 'Experience Nature';
      circles[0].desc = 'Step out into fields, mountains, and oceans to re-open the senses confined by urban environments. Hear, see, and touch the real natural habitats, building a core connection of co-existence with our Earth Mother.';
      circles[1].name = 'Aware of Self';
      circles[1].desc = 'Slow down in a noisy era and turn focus from the outer world back inwards. Through mindfulness, meditation, and deep nature observations, listen to subtle changes in body and emotion, engaging in dialogues with your true self.';
      circles[2].name = 'Understand & Create';
      circles[2].desc = 'Return to human-centric contexts to build deep empathy. Utilize the 4D design thinking workflow (Discover, Define, Develop, Deliver) paired with modern tech tools to transform creativity into actionable, local impact.';
    } else if (document.documentElement.lang === 'ja') {
      circles[0].name = '自然体験';
      circles[0].desc = '都市生活で凝り固まった五感を解放するため、田園、高山、そして海洋へ繰り出します。聴覚、視覚、触覚を通じて本物の自然の生息地を肌で感じ、母なる地球との共生のつながりを築きます。';
      circles[1].name = '自己内省';
      circles[1].desc = '喧騒にあふれる時代に歩みを緩め、意識を外の世界から内側へと向けます。マインドフルネス、瞑想、深い自然観察を通じて、身体や感情の微細な変化に耳を傾け、本当の自分と対話します。';
      circles[2].name = '理解と創造';
      circles[2].desc = '人間中心の文脈に立ち返り、深い共感を築きます。デザイン思考の4Dプロセス（Discover 理解、Define 定義、Develop 共創、Deliver 実装）と現代のテクノロジーを組み合わせ、アイデアを具体的かつ持続可能な行動へと転換します。';
    }

    const defaultContent = {
      name: '體驗自然、覺察自我與理解創造',
      kicker: 'CORE PILLARS',
      desc: '這是泰拉學校核心能力的三個圓圈。當三個圓圈在中心交會時，就構成了「泰拉學校」的主體學習精神。<br><br>請將滑鼠移到任一個圓圈，深入探索每一種能力。'
    };

    if (document.documentElement.lang === 'en') {
      defaultContent.name = 'Nature, Self & Creation';
      defaultContent.kicker = 'CORE PILLARS';
      defaultContent.desc = 'These are the three core circles of capability at Terra School. When they intersect in the center, they constitute the holistic learning spirit of Terra.<br><br>Hover over any circle to explore each capacity.';
    } else if (document.documentElement.lang === 'ja') {
      defaultContent.name = '自然、自己、そして創造';
      defaultContent.kicker = 'CORE PILLARS';
      defaultContent.desc = 'これらはテラ学校が提唱する3つのコア能力です。3つの円が中央で交わることで、テラ学校の全体的な学びの精神が形成されます。<br><br>いずれかの円にマウスを合わせて、それぞれの詳細を探求しましょう。';
    }

    function svgPoint(evt) {
      const pt = svg.createSVGPoint();
      pt.x = evt.clientX;
      pt.y = evt.clientY;
      return pt.matrixTransform(svg.getScreenCTM().inverse());
    }

    function updateCardText(kicker, title, desc) {
      infoCardContent.classList.remove('fade-in');
      infoCardContent.classList.add('fade-out');
      
      setTimeout(() => {
        infoKicker.textContent = kicker;
        infoTitle.textContent = title;
        infoDesc.innerHTML = desc;
        
        infoCardContent.classList.remove('fade-out');
        infoCardContent.classList.add('fade-in');
      }, 150);
    }

    function handleInteraction(point, isClick = false) {
      if (isClick) return;

      let activeCircle = null;
      let minDistance = Infinity;

      circles.forEach(circle => {
        const dx = point.x - circle.x;
        const dy = point.y - circle.y;
        const distSq = dx * dx + dy * dy;
        const rSq = circle.r * circle.r;

        if (distSq <= rSq) {
          if (distSq < minDistance) {
            minDistance = distSq;
            activeCircle = circle;
          }
        }
      });

      let insideCount = 0;
      circles.forEach(circle => {
        const dx = point.x - circle.x;
        const dy = point.y - circle.y;
        if (dx * dx + dy * dy <= circle.r * circle.r) {
          insideCount++;
        }
      });

      if (insideCount === 3) {
        circles.forEach(c => {
          const el = document.getElementById(c.id);
          el.classList.add('highlight');
          el.classList.remove('dimmed');
        });
        svg.style.cursor = 'default';
        
        if (infoTitle.textContent !== '泰拉 (Terra)' && infoTitle.textContent !== 'Terra' && infoTitle.textContent !== 'テラ') {
          let kicker = 'CENTRAL INTERSECTION';
          let title = '泰拉 (Terra)';
          let desc = '體驗自然 ╳ 覺察自我 ╳ 理解創造的三者核心交會。在原野大自然與設計創意的交融中，學習完整的生命素養與問題解決能力。';
          
          if (document.documentElement.lang === 'en') {
            title = 'Terra';
            desc = 'The central intersection of Nature, Self, and Creation. Cultivating holistic life qualities and real-world problem-solving in the fusion of the wild nature and creative design thinking.';
          } else if (document.documentElement.lang === 'ja') {
            title = 'テラ';
            desc = '「自然、自己、創造」の3つの要素の核心的な交差点。大自然の体験と創造的なデザインの融合を通じて、統合的なライフスキルと現実の課題解決能力を養います。';
          }
          
          updateCardText(kicker, title, desc);
        }
        return;
      }

      if (activeCircle) {
        circles.forEach(c => {
          const el = document.getElementById(c.id);
          if (c.id === activeCircle.id) {
            el.classList.add('highlight');
            el.classList.remove('dimmed');
          } else {
            el.classList.remove('highlight');
            el.classList.add('dimmed');
          }
        });
        svg.style.cursor = 'default';

        if (infoTitle.textContent !== activeCircle.name) {
          updateCardText(activeCircle.kicker, activeCircle.name, activeCircle.desc);
        }
      } else {
        circles.forEach(c => {
          const el = document.getElementById(c.id);
          el.classList.remove('highlight');
          el.classList.remove('dimmed');
        });
        svg.style.cursor = 'default';

        if (infoTitle.textContent !== defaultContent.name) {
          updateCardText(defaultContent.kicker, defaultContent.name, defaultContent.desc);
        }
      }
    }

    svg.addEventListener('pointermove', evt => {
      const pt = svgPoint(evt);
      handleInteraction(pt, false);
    });

    svg.addEventListener('pointerleave', () => {
      circles.forEach(c => {
        const el = document.getElementById(c.id);
        el.classList.remove('highlight');
        el.classList.remove('dimmed');
      });
      svg.style.cursor = 'default';
      if (infoTitle.textContent !== defaultContent.name) {
        updateCardText(defaultContent.kicker, defaultContent.name, defaultContent.desc);
      }
    });

    svg.addEventListener('click', evt => {
      const pt = svgPoint(evt);
      handleInteraction(pt, true);
    });
    `;
    
    content = content.replace(oldScript, newScript);
  }

  // 7. Adjust Partners logos size and layout
  const partnerMatch = content.match(/<!-- Partners Section -->[\s\S]*?<\/section>/i);
  if (partnerMatch) {
    let partnerSection = partnerMatch[0];
    const oldGridRegex = /<div class="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">[\s\S]*?<\/div>/i;
    const gridMatch = partnerSection.match(oldGridRegex);
    if (gridMatch) {
      const oldGridContent = gridMatch[0];
      const imgRegex = /<img[^>]*>/g;
      const images = oldGridContent.match(imgRegex);
      
      if (images) {
        let newGridContent = '<div class="flex flex-wrap items-center justify-center gap-x-12 gap-y-10 max-w-4xl mx-auto">';
        images.forEach(img => {
          let cleanImg = img.replace(/class="[^"]*"/, 'class="max-h-full max-w-full object-contain filter grayscale hover:grayscale-0 opacity-75 hover:opacity-100 transition-all duration-300"');
          newGridContent += `\n        <div class="h-16 w-48 flex items-center justify-center">${cleanImg}</div>`;
        });
        newGridContent += '\n      </div>';
        
        content = content.replace(oldGridContent, newGridContent);
      }
    }
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Adjusted layout and clean javascript in ${file}`);
});
