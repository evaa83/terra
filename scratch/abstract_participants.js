const fs = require('fs');
const path = require('path');

const basePath = 'c:\\Antigravity\\exhibition';

// 1. Update index.html (Chinese)
const zhPath = path.join(basePath, 'index.html');
if (fs.existsSync(zhPath)) {
  let content = fs.readFileSync(zhPath, 'utf8');
  
  // Paragraph 2
  content = content.replace(
    '當 AI 快速改變知識取得與工作的方式，我們深刻反思：學校教的真的以後有用嗎？下一代需要的學習到底是什麼？因此有了泰拉學校——一所沒有圍牆的學校。我們帶領學員走進現場，認識真實的世界與問題。',
    '當 AI 快速改變知識取得與工作的方式，我們深刻反思：傳統教育教的真的以後有用嗎？在這個時代，人們需要的學習到底是什麼？因此有了泰拉學校——一所沒有圍牆的學校。我們帶領參與者走進現場，認識真實的世界與問題。'
  );
  
  // Paragraph 3
  content = content.replace(
    '我們以「地、天、海」三所學校為架構，帶領青年進入農村、高山與海洋。每一段學習都從走入大自然開始，打開五感，在體驗中放慢腳步，學習與自己連結，並透過設計思考與 AI 工具解決地方議題，重新建立人與自然、自己與他人之間的深刻連結。',
    '我們以「地、天、海」三所學校為架構，引導人們進入農村、高山與海洋。每一段學習都從走入大自然開始，打開五感，在體驗中放慢腳步，學習與自己連結，並透過設計思考與 AI 工具解決地方議題，重新建立人與自然、自己與他人之間的深刻連結。'
  );

  // Footer suggestion text
  content = content.replace(
    '如果您有任何建議、場域或是資源想與泰拉學校連結，歡迎告訴我們，一起為下一代的教育注入活水。',
    '如果您有任何建議、場域或是資源想與泰拉學校連結，歡迎告訴我們，一起為未來的教育與學習注入活水。'
  );

  fs.writeFileSync(zhPath, content, 'utf8');
  console.log('Updated index.html');
}

// 2. Update index-en.html (English)
const enPath = path.join(basePath, 'index-en.html');
if (fs.existsSync(enPath)) {
  let content = fs.readFileSync(enPath, 'utf8');
  
  // Paragraph 1
  content = content.replace(
    'Terra means "Earth" in Latin, symbolizing our mission to guide learners back to Earth Mother\'s embrace, allowing them to experience and understand Her in a deep, real way.',
    'Terra means "Earth" in Latin, symbolizing our mission to guide people back to Earth Mother\'s embrace, allowing them to experience and understand Her in a deep, real way.'
  );

  // Paragraph 2
  content = content.replace(
    'As artificial intelligence continues to redefine knowledge acquisition and how we work, we ask ourselves: Does what schools teach today still prepare us for tomorrow? What kind of learning does the next generation really need? Terra School was born as a school without walls to answer this. We guide learners into real-world sites to discover real issues.',
    'As artificial intelligence continues to redefine knowledge acquisition and how we work, we ask ourselves: Does traditional education still prepare us for tomorrow? What kind of learning do we really need in this era? Terra School was born as a school without walls to answer this. We guide participants into real-world sites to discover real issues.'
  );
  
  // Paragraph 3
  content = content.replace(
    'Structured around three thematic domains—Earth, Sky, and Ocean—we take youth into farming villages, high mountains, and deep seas. Each learning journey begins with immersive nature experiences to open up all five senses. Learners slow down to connect with themselves, then apply design thinking and AI tools to co-create warm solutions for local challenges.',
    'Structured around three thematic domains—Earth, Sky, and Ocean—we guide people into farming villages, high mountains, and deep seas. Each learning journey begins with immersive nature experiences to open up all five senses. Participants slow down to connect with themselves, then apply design thinking and AI tools to co-create warm solutions for local challenges.'
  );

  // Footer suggestion text
  content = content.replace(
    "If you have any suggestions, field sites, or resources you want to connect with Terra School, feel free to tell us. Let's nourish the education for our next generation together.",
    "If you have any suggestions, field sites, or resources you want to connect with Terra School, feel free to tell us. Let's nourish the future of education and learning together."
  );

  fs.writeFileSync(enPath, content, 'utf8');
  console.log('Updated index-en.html');
}

// 3. Update index-ja.html (Japanese)
const jaPath = path.join(basePath, 'index-ja.html');
if (fs.existsSync(jaPath)) {
  let content = fs.readFileSync(jaPath, 'utf8');
  
  // Paragraph 1
  content = content.replace(
    '<strong>テラ（Terra）</strong>とはラテン語で「地球」を意味し、地球という母なる存在の胸に再び戻り、実際に体験し深く理解することを目指しています。',
    '<strong>テラ（Terra）</strong>とはラテン語で「地球」を意味し、人々が地球という母なる存在の胸に再び戻り、実際に体験し深く理解することを目指しています。'
  );

  // Paragraph 2
  content = content.replace(
    'AIが知識の習得や働き方を急速に変える中、私たちは深く問い直しました。「学校で教えていることは将来本当に役立つのか？」「次世代に必要な学びとは何か？」その答えとして誕生したのが、壁のない学校「テラ学校」です。私たちは受講生を現場へ連れ出し、リアルな世界と問題に向き合わせます。',
    'AIが知識 of 習得や働き方を急速に変える中、私たちは深く問い直しました。「従来の教育は将来本当に役立つのか？」「この時代に本当に必要な学びとは何か？」その答えとして誕生したのが、壁のない学校「テラ学校」です。私たちは参加者を現場へ連れ出し、リアルな世界と問題に向き合わせます。'
  );
  // Also fallback replace for the actual raw text in case of differences:
  content = content.replace(
    'AIが知識の習得や働き方を急速に変える中、私たちは深く問い直しました。「学校で教えていることは将来本当に役立つのか？」「次世代に必要な学びとは何か？」その答えとして誕生したのが、壁のない学校「テラ学校」です。私たちは受講生を現場へ連れ出し、リアルな世界と問題に向き合わせます。',
    'AIが知識の習得や働き方を急速に変える中、私たちは深く問い直しました。「従来の教育は将来本当に役立つのか？」「この時代に本当に必要な学びとは何か？」その答えとして誕生したのが、壁のない学校「テラ学校」です。私たちは参加者を現場へ連れ出し、リアルな世界と問題に向き合わせます。'
  );
  
  // Paragraph 3
  content = content.replace(
    '「地・天・海」の3つの学校の枠組みを通じて、若者を農村、高山、そして海洋へと導きます。すべての学びは大自然に入ることから始まり、五感を開放し、自然の体験の中で歩みを緩め、自己と向き合います。そして、デザイン思考とAIツールを活用して地方の課題にアプローチし、人と自然、自分と他者との深いつながりを再構築します。',
    '「地・天・海」の3つの学校の枠組みを通じて、人々を農村、高山、海洋へと導きます。すべての学びは大自然に入ることから始まり、五感を開放し、自然の体験の中で歩みを緩め、自己と向き合います。そして、デザイン思考とAIツールを活用して地方の課題にアプローチし、人と自然、自分と他者との深いつながりを再構築します。'
  );

  // Footer suggestion text
  content = content.replace(
    'テラ学校へのご提案、フィールド提供、あるいはリソースの共有などのご相談がございましたら、お気軽にご連絡ください。次世代の教育を共に育みましょう。',
    'テラ学校へのご提案、フィールド提供、あるいはリソースの共有などのご相談がございましたら、お気軽にご連絡ください。これからの教育と学びを共に育みましょう。'
  );

  fs.writeFileSync(jaPath, content, 'utf8');
  console.log('Updated index-ja.html');
}
