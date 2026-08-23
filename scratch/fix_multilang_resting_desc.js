const fs = require('fs');
const path = require('path');

const basePath = 'c:\\Antigravity\\exhibition';

const files = [
  'index.html',
  'index-en.html',
  'index-ja.html'
];

const enDesc = `<strong>Terra</strong> means "Earth" in Latin, symbolizing our mission to guide people back to Earth Mother's embrace, allowing them to experience and understand Her in a deep, real way.<br><br>As artificial intelligence continues to redefine knowledge acquisition and how we work, we deeply contemplate: What kind of learning do people need most in this era? Terra School was born as a school without walls to answer this. We guide people into real-world sites to discover real issues.`;

const jaDesc = `<strong>テラ（Terra）</strong>とはラテン語で「地球」を意味し、人々が地球という母なる存在の胸に再び戻り、実際に体験し深く理解することを目指しています。<br><br>AIが知識の習得や働き方を急速に変える中、私たちは深く考えました。「この時代において、人々に最も必要な学びとは何か？」その答えとして誕生したのが、壁のない学校「テラ学校」です。私たちは人々を現場へ連れ出し、リアルな世界と問題に向き合わせます。`;

files.forEach(file => {
  const filePath = path.join(basePath, file);
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace defaultContent.desc for 'en' lang override block
  content = content.replace(
    /defaultContent\.desc = 'These are the three core circles of capability at Terra School. When they intersect in the center, they constitute the holistic learning spirit of Terra.<br><br>Hover over any circle to explore each capacity.';/g,
    `defaultContent.desc = '${enDesc.replace(/'/g, "\\'")}';`
  );

  // Replace defaultContent.desc for 'ja' lang override block
  content = content.replace(
    /defaultContent\.desc = 'これらはテラ学校が提唱する3つのコア能力です。3つの円が中央で交わることで、テラ学校の全体的な学びの精神が形成されます。<br><br>いずれかの円にマウスを合わせて、それぞれの詳細を探求しましょう。';/g,
    `defaultContent.desc = '${jaDesc.replace(/'/g, "\\'")}';`
  );

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Successfully synced defaultContent desc override blocks in ${file}`);
});
