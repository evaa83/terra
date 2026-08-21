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

  // 1. Increase top padding of capacities section to pt-44 to avoid header overlap
  content = content.replace(
    /class="pt-32 pb-24 px-6 bg-stone-50 border-b border-stone-200\/50"/i,
    'class="pt-44 pb-24 px-6 bg-stone-50 border-b border-stone-200/50"'
  );

  // 2. Remove the cursor guide subtitle paragraph completely
  content = content.replace(/<p class="text-stone-500 text-sm mt-3">.*?<\/p>/gi, '');

  // 3. Update container width from max-w-5xl to max-w-6xl for the capacities section
  // Let's do it specifically inside the capacities section
  const capacitiesMatch = content.match(/<section id="capacities"[\s\S]*?<\/section>/i);
  if (capacitiesMatch) {
    let originalCapacities = capacitiesMatch[0];
    let updatedCapacities = originalCapacities;

    // Replace container max-width
    updatedCapacities = updatedCapacities.replace(
      /<div class="max-w-5xl mx-auto">/i,
      '<div class="max-w-6xl mx-auto">'
    );

    // Replace the grid structure with flexbox side-by-side layout (guaranteed no overlap)
    // Find the grid structure and replace it
    const oldGridRegex = /<div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">([\s\S]*?)<\/div>\s*<\/div>\s*<\/section>/i;
    // Let's capture the SVG and Card contents
    const svgMatch = updatedCapacities.match(/<svg id="terraVenn"[\s\S]*?<\/svg>/i);
    const cardMatch = updatedCapacities.match(/<div class="bg-white border border-stone-200\/80 rounded-3xl p-8 shadow-xl min-h-\[320px\] flex flex-col justify-between">([\s\S]*?)<\/div>\s*<\/div>/i);

    if (svgMatch && cardMatch) {
      const svgContent = svgMatch[0];
      const cardContent = cardMatch[0];

      const newFlexLayout = `
      <div class="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 mt-12">
        <!-- Left: Interactive Venn SVG -->
        <div class="w-full max-w-[460px] lg:max-w-[480px] shrink-0 flex justify-center">
          ${svgContent}
        </div>

        <!-- Right: Dynamic Text Card -->
        <div class="w-full lg:max-w-[440px] flex-grow">
          ${cardContent}
        </div>
      </div>
      `;

      // Replace the grid container
      // The grid starts with <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      // and ends before the closing of the container and section
      const oldGridStart = updatedCapacities.indexOf('<div class="grid grid-cols-1 lg:grid-cols-12');
      const oldGridEnd = updatedCapacities.indexOf('</svg>', oldGridStart);
      const cardEndIndex = updatedCapacities.indexOf('</div>', updatedCapacities.indexOf('flex-col justify-between', oldGridStart)) + 6;
      const outerCardDivEnd = updatedCapacities.indexOf('</div>', cardEndIndex) + 6;

      if (oldGridStart !== -1 && outerCardDivEnd !== -1) {
        const oldGridPart = updatedCapacities.substring(oldGridStart, outerCardDivEnd);
        updatedCapacities = updatedCapacities.replace(oldGridPart, newFlexLayout);
      }
    }

    // 4. Update the card HTML markup description to remove "以及點擊定位"
    updatedCapacities = updatedCapacities.replace(/以及點擊定位。/g, '。');
    updatedCapacities = updatedCapacities.replace(/and find related details\./g, '.');
    updatedCapacities = updatedCapacities.replace(/、 crumbs とプログラムのつながりを探求しましょう。/g, 'を探求しましょう。');
    updatedCapacities = updatedCapacities.replace(/、そしてプログラムのつながりを探求しましょう。/g, 'を探求しましょう。');

    content = content.replace(originalCapacities, updatedCapacities);
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Fixed layout, margins, and text in ${file}`);
});
