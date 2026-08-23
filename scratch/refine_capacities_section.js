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

  // ==========================================
  // CHINESE REPLACEMENTS (index.html)
  // ==========================================
  if (file === 'index.html') {
    // 1. Replace section title
    content = content.replace(
      /<p class="text-\[#C87952\] text-xs font-bold tracking-widest uppercase mb-2">THREE CAPACITIES<\/p>\s*<h2 class="text-3xl font-extrabold text-\[#0F2A1C\] font-serif">三個核心能力<\/h2>/i,
      `<p class="text-[#C87952] text-xs font-bold tracking-widest uppercase mb-2">ABOUT TERRA</p>
        <h2 class="text-3xl font-extrabold text-[#0F2A1C] font-serif">泰拉學校 (Terra School)</h2>`
    );

    // 2. Replace HTML card markup
    content = content.replace(
      /<span id="infoKicker" class="text-xs font-bold uppercase tracking-widest text-\[#68785B\] mb-2 block">ABOUT TERRA<\/span>\s*<h3 id="infoTitle" class="text-2xl font-extrabold text-\[#0F2A1C\] font-serif mb-4">泰拉學校 \(Terra School\)<\/h3>\s*<p id="infoDesc" class="text-stone-600 text-sm leading-relaxed">\s*<strong>泰拉（Terra）<\/strong>是拉丁文的「地球」，代表帶著人們重新走回地球母親的懷抱，真實地體驗與認識祂。<br><br>當 AI 快速改變知識取得與工作的方式，我們深刻反思：傳統教育教的真的以後有用嗎？在這個時代，人們需要的學習到底是什麼？因此有了泰拉學校——一所沒有圍牆的學校。我們帶領人們走進現場，認識真實的世界與問題。\s*<\/p>/i,
      `<span id="infoKicker" class="text-xs font-bold uppercase tracking-widest text-[#68785B] mb-2 block">CORE PILLARS</span>
              <h3 id="infoTitle" class="text-2xl font-extrabold text-[#0F2A1C] font-serif mb-4">三個核心能力</h3>
              <p id="infoDesc" class="text-stone-600 text-sm leading-relaxed">
                <strong>泰拉（Terra）</strong>是拉丁文的「地球」，代表帶著人們重新走回地球母親的懷抱，真實地體驗與認識祂。<br><br>當 AI 快速改變知識取得與工作的方式，我們深刻思考：在這個時代，人們最需要的學習到底是什麼？因此有了泰拉學校——一所沒有圍牆的學校。我們帶領人們走進現場，認識真實的世界與問題。
              </p>`
    );

    // 3. Replace JS defaultContent
    content = content.replace(
      /const defaultContent = \{\s*name: '泰拉學校 \(Terra School\)',\s*kicker: 'ABOUT TERRA',\s*desc: '<strong>泰拉（Terra）<\/strong>是拉丁文的「地球」，代表帶著人們重新走回地球母親的懷抱，真實地體驗與認識祂。<br><br>當 AI 快速改變知識取得與工作的方式，我們深刻反思：傳統教育教的真的以後有用嗎？在這個時代，人們需要的學習到底是什麼？因此有了泰拉學校——一所沒有圍牆的學校。我們帶領人們走進現場，認識真實的世界與問題。'\s*\};/i,
      `const defaultContent = {
      name: '三個核心能力',
      kicker: 'CORE PILLARS',
      desc: '<strong>泰拉（Terra）</strong>是拉丁文的「地球」，代表帶著人們重新走回地球母親的懷抱，真實地體驗與認識祂。<br><br>當 AI 快速改變知識取得與工作的方式，我們深刻思考：在這個時代，人們最需要的學習到底是什麼？因此有了泰拉學校——一所沒有圍牆的學校。我們帶領人們走進現場，認識真實的世界與問題。'
    };`
    );
  }

  // ==========================================
  // ENGLISH REPLACEMENTS (index-en.html)
  // ==========================================
  else if (file === 'index-en.html') {
    // 1. Replace section title
    content = content.replace(
      /<p class="text-\[#C87952\] text-xs font-bold tracking-widest uppercase mb-2">THREE CAPACITIES<\/p>\s*<h2 class="text-3xl font-extrabold text-\[#0F2A1C\] font-serif">Three Core Capacities<\/h2>/i,
      `<p class="text-[#C87952] text-xs font-bold tracking-widest uppercase mb-2">ABOUT TERRA</p>
        <h2 class="text-3xl font-extrabold text-[#0F2A1C] font-serif">Terra School</h2>`
    );

    // 2. Replace HTML card markup
    content = content.replace(
      /<span id="infoKicker" class="text-xs font-bold uppercase tracking-widest text-\[#68785B\] mb-2 block">ABOUT TERRA<\/span>\s*<h3 id="infoTitle" class="text-2xl font-extrabold text-\[#0F2A1C\] font-serif mb-4">Terra School<\/h3>\s*<p id="infoDesc" class="text-stone-600 text-sm leading-relaxed">\s*<strong>Terra<\/strong> means "Earth" in Latin, symbolizing our mission to guide people back to Earth Mother's embrace, allowing them to experience and understand Her in a deep, real way.<br><br>As artificial intelligence continues to redefine knowledge acquisition and how we work, we ask ourselves: Does traditional education still prepare us for tomorrow\? What kind of learning do we really need in this era\? Terra School was born as a school without walls to answer this. We guide people into real-world sites to discover real issues\.\s*<\/p>/i,
      `<span id="infoKicker" class="text-xs font-bold uppercase tracking-widest text-[#68785B] mb-2 block">CORE PILLARS</span>
              <h3 id="infoTitle" class="text-2xl font-extrabold text-[#0F2A1C] font-serif mb-4">Three Core Capacities</h3>
              <p id="infoDesc" class="text-stone-600 text-sm leading-relaxed">
                <strong>Terra</strong> means "Earth" in Latin, symbolizing our mission to guide people back to Earth Mother's embrace, allowing them to experience and understand Her in a deep, real way.<br><br>As artificial intelligence continues to redefine knowledge acquisition and how we work, we deeply contemplate: What kind of learning do people need most in this era? Terra School was born as a school without walls to answer this. We guide people into real-world sites to discover real issues.
              </p>`
    );

    // 3. Replace JS defaultContent
    content = content.replace(
      /const defaultContent = \{\s*name: 'Terra School',\s*kicker: 'ABOUT TERRA',\s*desc: '<strong>Terra<\/strong> means "Earth" in Latin, symbolizing our mission to guide people back to Earth Mother\\\\'s embrace, allowing them to experience and understand Her in a deep, real way\.<br><br>As artificial intelligence continues to redefine knowledge acquisition and how we work, we ask ourselves: Does traditional education still prepare us for tomorrow\? What kind of learning do we really need in this era\? Terra School was born as a school without walls to answer this\. We guide people into real-world sites to discover real issues\.'\s*\};/i,
      `const defaultContent = {
      name: 'Three Core Capacities',
      kicker: 'CORE PILLARS',
      desc: '<strong>Terra</strong> means "Earth" in Latin, symbolizing our mission to guide people back to Earth Mother\\'s embrace, allowing them to experience and understand Her in a deep, real way.<br><br>As artificial intelligence continues to redefine knowledge acquisition and how we work, we deeply contemplate: What kind of learning do people need most in this era? Terra School was born as a school without walls to answer this. We guide people into real-world sites to discover real issues.'
    };`
    );
  }

  // ==========================================
  // JAPANESE REPLACEMENTS (index-ja.html)
  // ==========================================
  else if (file === 'index-ja.html') {
    // 1. Replace section title
    content = content.replace(
      /<p class="text-\[#C87952\] text-xs font-bold tracking-widest uppercase mb-2">THREE CAPACITIES<\/p>\s*<h2 class="text-3xl font-extrabold text-\[#0F2A1C\] font-serif">3つのコア能力<\/h2>/i,
      `<p class="text-[#C87952] text-xs font-bold tracking-widest uppercase mb-2">ABOUT TERRA</p>
        <h2 class="text-3xl font-extrabold text-[#0F2A1C] font-serif">テラ学校 (Terra School)</h2>`
    );

    // 2. Replace HTML card markup
    content = content.replace(
      /<span id="infoKicker" class="text-xs font-bold uppercase tracking-widest text-\[#68785B\] mb-2 block">ABOUT TERRA<\/span>\s*<h3 id="infoTitle" class="text-2xl font-extrabold text-\[#0F2A1C\] font-serif mb-4">テラ學校 \(Terra School\)<\/h3>\s*<p id="infoDesc" class="text-stone-600 text-sm leading-relaxed">\s*<strong>テラ（Terra）<\/strong>とはラテン語で「地球」を意味し、人々が地球という母なる存在の胸に再び戻り、実際に体験し深く理解することを目指しています。<br><br>AIが知識の習得や働き方を急速に変える中、私たちは深く問い直しました。「従来の教育は将来本当に役立つのか？」「この時代に本当に必要な学びとは何か？」その答えとして誕生したのが、壁のない学校「テラ学校」です。私たちは人々を現場へ連れ出し、リアルな世界と問題に向き合わせます。\s*<\/p>/i,
      `<span id="infoKicker" class="text-xs font-bold uppercase tracking-widest text-[#68785B] mb-2 block">CORE PILLARS</span>
              <h3 id="infoTitle" class="text-2xl font-extrabold text-[#0F2A1C] font-serif mb-4">3つのコア能力</h3>
              <p id="infoDesc" class="text-stone-600 text-sm leading-relaxed">
                <strong>テラ（Terra）</strong>とはラテン語で「地球」を意味し、人々が地球という母なる存在の胸に再び戻り、実際に体験し深く理解することを目指しています。<br><br>AIが知識の習得や働き方を急速に変える中、私たちは深く考えました。「この時代において、人々に最も必要な学びとは何か？」その答えとして誕生したのが、壁のない学校「テラ学校」です。私たちは人々を現場へ連れ出し、リアルな世界と問題に向き合わせます。
              </p>`
    );

    // 3. Replace JS defaultContent
    content = content.replace(
      /const defaultContent = \{\s*name: 'テラ学校 \(Terra School\)',\s*kicker: 'ABOUT TERRA',\s*desc: '<strong>テラ（Terra）<\/strong>とはラテン語で「地球」を意味し、人々が地球という母なる存在の胸に再び戻り、実際に体験し深く理解することを目指しています。<br><br>AIが知識の習得や働き方を急速に変える中、私たちは深く問い直しました。「従来の教育は将来本当に役立つのか？」「この時代に本当に必要な学びとは何か？」その答えとして誕生したのが、壁のない学校「テラ学校」です。私たちは人々を現場へ連れ出し、リアルな世界と問題に向き合わせます。'\s*\};/i,
      `const defaultContent = {
      name: '3つのコア能力',
      kicker: 'CORE PILLARS',
      desc: '<strong>テラ（Terra）</strong>とはラテン語で「地球」を意味し、人々が地球という母なる存在の胸に再び戻り、実際に体験し深く理解することを目指しています。<br><br>AIが知識の習得や働き方を急速に変える中、私たちは深く考えました。「この時代において、人々に最も必要な学びとは何か？」その答えとして誕生したのが、壁のない学校「テラ学校」です。私たちは人々を現場へ連れ出し、リアルな世界と問題に向き合わせます。'
    };`
    );
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Refined header and description for capacities section in ${file}`);
});
