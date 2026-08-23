const fs = require('fs');
const path = require('path');

const filePath = 'c:\\Antigravity\\exhibition\\index.html';

if (fs.existsSync(filePath)) {
  let content = fs.readFileSync(filePath, 'utf8');

  // 1. Replace default text in HTML Card markup
  const oldHtmlText = `<span id="infoKicker" class="text-xs font-bold uppercase tracking-widest text-\\[#68785B\\] mb-2 block">CORE PILLARS<\\/span>\\s*<h3 id="infoTitle" class="text-2xl font-extrabold text-\\[#0F2A1C\\] font-serif mb-4">三個核心能力<\\/h3>\\s*<p id="infoDesc" class="text-stone-600 text-sm leading-relaxed">\\s*<strong>泰拉（Terra）<\\/strong>是拉丁文的「地球」，代表帶著人們重新走回地球母親的懷抱，真實地體驗與認識祂。<br><br>當 AI 快速改變知識取得與工作的方式，我們深刻思考：在這個時代，人們最需要的學習到底是什麼？因此有了泰拉學校——一所沒有圍牆的學校。我們帶領人們走進現場，認識真實的世界與問題。\\s*<\\/p>`;
  
  // Let's do a direct text replace to be super safe
  content = content.replace(
    `              <span id="infoKicker" class="text-xs font-bold uppercase tracking-widest text-[#68785B] mb-2 block">CORE PILLARS</span>
              <h3 id="infoTitle" class="text-2xl font-extrabold text-[#0F2A1C] font-serif mb-4">三個核心能力</h3>
              <p id="infoDesc" class="text-stone-600 text-sm leading-relaxed">
                <strong>泰拉（Terra）</strong>是拉丁文的「地球」，代表帶著人們重新走回地球母親的懷抱，真實地體驗與認識祂。<br><br>當 AI 快速改變知識取得與工作的方式，我們深刻思考：在這個時代，人們最需要的學習到底是什麼？因此有了泰拉學校——一所沒有圍牆的學校。我們帶領人們走進現場，認識真實的世界與問題。
              </p>`,
    `              <span id="infoKicker" class="text-xs font-bold uppercase tracking-widest text-[#68785B] mb-2 block">CORE PILLARS</span>
              <h3 id="infoTitle" class="text-2xl font-extrabold text-[#0F2A1C] font-serif mb-4">三個核心能力</h3>
              <p id="infoDesc" class="text-stone-600 text-sm leading-relaxed">
                <strong>「泰拉（Terra）」</strong>在拉丁文中意為「地球」，寓意著帶領人們重回地球母親的懷抱，真實地感受並認識她。<br><br>當 AI 正在快速改變知識獲取與工作的方式，我們不禁深刻思考：在這個時代，人們真正需要的學習到底是什麼？於是，「泰拉學校」誕生了——這是一所沒有圍牆的學校，我們帶領人們走入現場，在真實的世界中尋找答案。
              </p>`
  );

  // 2. Replace defaultContent desc in JS
  content = content.replace(
    `      desc: '<strong>泰拉（Terra）</strong>是拉丁文的「地球」，代表帶著人們重新走回地球母親的懷抱，真實地體驗與認識祂。<br><br>當 AI 快速改變知識取得與工作的方式，我們深刻思考：在這個時代，人們最需要的學習到底是什麼？因此有了泰拉學校——一所沒有圍牆的學校。我們帶領人們走進現場，認識真實的世界與問題。'`,
    `      desc: '<strong>「泰拉（Terra）」</strong>在拉丁文中意為「地球」，寓意著帶領人們重回地球母親的懷抱，真實地感受並認識她。<br><br>當 AI 正在快速改變知識獲取與工作的方式，我們不禁深刻思考：在這個時代，人們真正需要的學習到底是什麼？於是，「泰拉學校」誕生了——這是一所沒有圍牆的學校，我們帶領人們走入現場，在真實的世界中尋找答案。'`
  );

  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Successfully updated Chinese text to Option A in index.html');
}
