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

  // 1. Delete About Section completely
  content = content.replace(/<!-- About Section -->[\s\S]*?<\/section>/i, '');

  // 2. Update Header Navigation Links to have only 4 links
  if (file === 'index.html') {
    content = content.replace(
      /<nav class="hidden md:flex items-center gap-8 text-sm font-bold text-\[#0F2A1C\]\/80">[\s\S]*?<\/nav>/i,
      `<nav class="hidden md:flex items-center gap-8 text-sm font-bold text-[#0F2A1C]/80">
        <a href="#capacities" class="hover:text-[#C87952] transition-colors">關於泰拉</a>
        <a href="#upcoming-event" class="hover:text-[#C87952] transition-colors">最新活動</a>
        <a href="#past-footprints" class="hover:text-[#C87952] transition-colors">實踐足跡</a>
        <a href="#partners" class="hover:text-[#C87952] transition-colors">合作夥伴</a>
      </nav>`
    );
  } else if (file === 'index-en.html') {
    content = content.replace(
      /<nav class="hidden md:flex items-center gap-8 text-sm font-bold text-\[#0F2A1C\]\/80">[\s\S]*?<\/nav>/i,
      `<nav class="hidden md:flex items-center gap-8 text-sm font-bold text-[#0F2A1C]/80">
        <a href="#capacities" class="hover:text-[#C87952] transition-colors">About Terra</a>
        <a href="#upcoming-event" class="hover:text-[#C87952] transition-colors">Upcoming</a>
        <a href="#past-footprints" class="hover:text-[#C87952] transition-colors">Footprints</a>
        <a href="#partners" class="hover:text-[#C87952] transition-colors">Partners</a>
      </nav>`
    );
  } else if (file === 'index-ja.html') {
    content = content.replace(
      /<nav class="hidden md:flex items-center gap-8 text-sm font-bold text-\[#0F2A1C\]\/80">[\s\S]*?<\/nav>/i,
      `<nav class="hidden md:flex items-center gap-8 text-sm font-bold text-[#0F2A1C]/80">
        <a href="#capacities" class="hover:text-[#C87952] transition-colors">テラについて</a>
        <a href="#upcoming-event" class="hover:text-[#C87952] transition-colors">最新活動</a>
        <a href="#past-footprints" class="hover:text-[#C87952] transition-colors">活動実績</a>
        <a href="#partners" class="hover:text-[#C87952] transition-colors">パートナー</a>
      </nav>`
    );
  }

  // 3. Update the Card HTML Markup default content inside capacities section
  if (file === 'index.html') {
    content = content.replace(
      /<span id="infoKicker" class="text-xs font-bold uppercase tracking-widest text-\[#68785B\] mb-2 block">CORE PILLAR<\/span>\s*<h3 id="infoTitle" class="text-2xl font-extrabold text-\[#0F2A1C\] font-serif mb-4">體驗自然、覺察自我與理解創造<\/h3>\s*<p id="infoDesc" class="text-stone-600 text-sm leading-relaxed">\s*這是泰拉學校核心能力的三個圓圈。當三個圓圈在中心交會時，就構成了「泰拉學校」的主體學習精神。<br><br>請將滑鼠移到任一個圓圈，深入探索每一種能力。\s*<\/p>/i,
      `<span id="infoKicker" class="text-xs font-bold uppercase tracking-widest text-[#68785B] mb-2 block">ABOUT TERRA</span>
              <h3 id="infoTitle" class="text-2xl font-extrabold text-[#0F2A1C] font-serif mb-4">泰拉學校 (Terra School)</h3>
              <p id="infoDesc" class="text-stone-600 text-sm leading-relaxed">
                <strong>泰拉（Terra）</strong>是拉丁文的「地球」，代表帶著人們重新走回地球母親的懷抱，真實地體驗與認識祂。<br><br>當 AI 快速改變知識取得與工作的方式，我們深刻反思：傳統教育教的真的以後有用嗎？在這個時代，人們需要的學習到底是什麼？因此有了泰拉學校——一所沒有圍牆的學校。我們帶領人們走進現場，認識真實的世界與問題。
              </p>`
    );
  } else if (file === 'index-en.html') {
    content = content.replace(
      /<span id="infoKicker" class="text-xs font-bold uppercase tracking-widest text-\[#68785B\] mb-2 block">CORE PILLAR<\/span>\s*<h3 id="infoTitle" class="text-2xl font-extrabold text-\[#0F2A1C\] font-serif mb-4">Nature, Self & Creation<\/h3>\s*<p id="infoDesc" class="text-stone-600 text-sm leading-relaxed">\s*These are the three core circles of capability at Terra School. When they intersect in the center, they constitute the holistic learning spirit of Terra.<br><br>Hover over any circle to explore each capacity\.\s*<\/p>/i,
      `<span id="infoKicker" class="text-xs font-bold uppercase tracking-widest text-[#68785B] mb-2 block">ABOUT TERRA</span>
              <h3 id="infoTitle" class="text-2xl font-extrabold text-[#0F2A1C] font-serif mb-4">Terra School</h3>
              <p id="infoDesc" class="text-stone-600 text-sm leading-relaxed">
                <strong>Terra</strong> means "Earth" in Latin, symbolizing our mission to guide people back to Earth Mother's embrace, allowing them to experience and understand Her in a deep, real way.<br><br>As artificial intelligence continues to redefine knowledge acquisition and how we work, we ask ourselves: Does traditional education still prepare us for tomorrow? What kind of learning do we really need in this era? Terra School was born as a school without walls to answer this. We guide people into real-world sites to discover real issues.
              </p>`
    );
  } else if (file === 'index-ja.html') {
    content = content.replace(
      /<span id="infoKicker" class="text-xs font-bold uppercase tracking-widest text-\[#68785B\] mb-2 block">CORE PILLAR<\/span>\s*<h3 id="infoTitle" class="text-2xl font-extrabold text-\[#0F2A1C\] font-serif mb-4">自然、自己、そして創造<\/h3>\s*<p id="infoDesc" class="text-stone-600 text-sm leading-relaxed">\s*これらはテラ学校が提唱する3つのコア能力です。3つの円が中央で交わることで、テラ学校の全体的な学びの精神が形成されます。<br><br>いずれかの円にマウスを合わせて、それぞれの詳細を探求しましょう。\s*<\/p>/i,
      `<span id="infoKicker" class="text-xs font-bold uppercase tracking-widest text-[#68785B] mb-2 block">ABOUT TERRA</span>
              <h3 id="infoTitle" class="text-2xl font-extrabold text-[#0F2A1C] font-serif mb-4">テラ学校 (Terra School)</h3>
              <p id="infoDesc" class="text-stone-600 text-sm leading-relaxed">
                <strong>テラ（Terra）</strong>とはラテン語で「地球」を意味し、人々が地球という母なる存在の胸に再び戻り、実際に体験し深く理解することを目指しています。<br><br>AIが知識の習得や働き方を急速に変える中、私たちは深く問い直しました。「従来の教育は将来本当に役立つのか？」「この時代に本当に必要な学びとは何か？」その答えとして誕生したのが、壁のない学校「テラ学校」です。私たちは人々を現場へ連れ出し、リアルな世界と問題に向き合わせます。
              </p>`
    );
  }

  // 4. Update the defaultContent object in JS
  if (file === 'index.html') {
    content = content.replace(
      /const defaultContent = \{\s*name: '體驗自然、覺察自我與理解創造',\s*kicker: 'CORE PILLARS',\s*desc: '這是泰拉學校核心能力的三個圓圈。當三個圓圈在中心交會時，就構成了「泰拉學校」的主體學習精神。<br><br>請將滑鼠移到任一個圓圈，深入探索每一種能力。'\s*\};/i,
      `const defaultContent = {
      name: '泰拉學校 (Terra School)',
      kicker: 'ABOUT TERRA',
      desc: '<strong>泰拉（Terra）</strong>是拉丁文的「地球」，代表帶著人們重新走回地球母親的懷抱，真實地體驗與認識祂。<br><br>當 AI 快速改變知識取得與工作的方式，我們深刻反思：傳統教育教的真的以後有用嗎？在這個時代，人們需要的學習到底是什麼？因此有了泰拉學校——一所沒有圍牆的學校。我們帶領人們走進現場，認識真實的世界與問題。'
    };`
    );
  } else if (file === 'index-en.html') {
    content = content.replace(
      /const defaultContent = \{\s*name: 'Nature, Self & Creation',\s*kicker: 'CORE PILLARS',\s*desc: 'These are the three core circles of capability at Terra School. When they intersect in the center, they constitute the holistic learning spirit of Terra.<br><br>Hover over any circle to explore each capacity.'\s*\};/i,
      `const defaultContent = {
      name: 'Terra School',
      kicker: 'ABOUT TERRA',
      desc: '<strong>Terra</strong> means "Earth" in Latin, symbolizing our mission to guide people back to Earth Mother\\'s embrace, allowing them to experience and understand Her in a deep, real way.<br><br>As artificial intelligence continues to redefine knowledge acquisition and how we work, we ask ourselves: Does traditional education still prepare us for tomorrow? What kind of learning do we really need in this era? Terra School was born as a school without walls to answer this. We guide people into real-world sites to discover real issues.'
    };`
    );
  } else if (file === 'index-ja.html') {
    content = content.replace(
      /const defaultContent = \{\s*name: '自然、自己、そして創造',\s*kicker: 'CORE PILLARS',\s*desc: 'これらはテラ学校が提唱する3つのコア能力です。3つの円が中央で交わることで、テラ学校の全体的な学びの精神が形成されます。<br><br>いずれかの円にマウスを合わせて、それぞれの詳細を探求しましょう。'\s*\};/i,
      `const defaultContent = {
      name: 'テラ学校 (Terra School)',
      kicker: 'ABOUT TERRA',
      desc: '<strong>テラ（Terra）</strong>とはラテン語で「地球」を意味し、人々が地球という母なる存在の胸に再び戻り、実際に体験し深く理解することを目指しています。<br><br>AIが知識の習得や働き方を急速に変える中、私たちは深く問い直しました。「従来の教育は将来本当に役立つのか？」「この時代に本当に必要な学びとは何か？」その答えとして誕生したのが、壁のない学校「テラ学校」です。私たちは人々を現場へ連れ出し、リアルな世界と問題に向き合わせます。'
    };`
    );
  }

  // 5. Update central intersection text inside handleInteraction
  if (file === 'index.html') {
    content = content.replace(
      /let kicker = 'CENTRAL INTERSECTION';\s*let title = '泰拉 \(Terra\)';\s*let desc = '體驗自然 ╳ 覺察自我 ╳ 理解創造的三者核心交會。在原野大自然與設計創意的交融中，學習完整的生命素養與問題解決能力。';/i,
      `let kicker = 'THREE-CAMPUS FRAMEWORK';
          let title = '泰拉三校架構';
          let desc = '我們以<strong>「地、天、海」三所學校</strong>為實踐架構，引導人們進入農村、高山與海洋。<br><br>每一段學習都從走入大自然開始，打開五感，在體驗中放慢腳步，學習與自己連結，並透過設計思考與 AI 工具解決地方議題，重新建立人與自然、自己與他人之間的深刻連結。';`
    );
  } else if (file === 'index-en.html') {
    content = content.replace(
      /let kicker = 'CENTRAL INTERSECTION';\s*let title = 'Terra';\s*let desc = 'The central intersection of Nature, Self, and Creation. Cultivating holistic life qualities and real-world problem-solving in the fusion of the wild nature and creative design thinking.';/i,
      `let kicker = 'THREE-CAMPUS FRAMEWORK';
          let title = 'Terra Campuses';
          let desc = 'We guide people into farming villages, high mountains, and deep seas through our <strong>Earth, Sky, and Ocean Schools</strong>.<br><br>Each learning journey begins with immersive nature experiences to open up all five senses. People slow down to connect with themselves, then apply design thinking and AI tools to co-create solutions for local challenges, rebuilding deep connections with nature, self, and others.';`
    );
  } else if (file === 'index-ja.html') {
    content = content.replace(
      /let kicker = 'CENTRAL INTERSECTION';\s*let title = 'テラ';\s*let desc = '「自然、自己、創造」の3つの要素の核心的な交差点。大自然の体験と創造的なデザインの融合を通じて、統合的なライフスキルと現実の課題解決能力を養います。';/i,
      `let kicker = 'THREE-CAMPUS FRAMEWORK';
          let title = 'テラ三校の枠組み';
          let desc = '私たちは<strong>「地・天・海」の3つの学校</strong>の枠組みを通じて、人々を農村、高山、海洋へと導きます。<br><br>すべての学びは大自然に入ることから始まり、五感を開放し、自然の体験の中で歩みを緩め、自己と向き合います。そして、デザイン思考とAIツールを活用して地方の課題にアプローチし、人と自然、自分と他者との深いつながりを再構築します。';`
    );
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Successfully implemented Option B (merged About into Venn) in ${file}`);
});
