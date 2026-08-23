const fs = require('fs');
const content = fs.readFileSync('c:\\Antigravity\\exhibition\\index.html', 'utf8');

const scriptStart = content.indexOf('<script>') + '<script>'.length;
const scriptEnd = content.lastIndexOf('</script>');

const scriptText = content.substring(scriptStart, scriptEnd);
fs.writeFileSync('c:\\Antigravity\\exhibition\\scratch\\extracted_test.js', scriptText, 'utf8');
console.log('Script extracted successfully!');
