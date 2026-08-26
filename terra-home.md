Please act as an elite UX/UI designer and senior frontend developer. Build a modern, high-conversion, highly responsive single-page landing page for "Terra School (泰拉學校)", ensuring strict visual and stylistic consistency with the existing "2026 Terra Earth School (地之校成果展)" web design and branding.

### 🚫 Copywriting & Tone Rules (CRITICAL):
- **Strictly prohibit** robotic AI phrasing, cliché marketing transitions, and pseudo-philosophical contrasts (e.g., Avoid sentences like "這不只是...而是...", "不僅...更...").
- Keep all copy extremely direct, grounded, natural, and concise. Write like a human brand strategist and professional copywriter.

### 🎨 Visual Identity & Style Guide (Inheriting Earth School):
- **Logo**: Use the official Terra Earth School logo in the top navbar.
- **Color Palette**: Earthy, sustainable, and tactile tones—deep forest/moss green (#1A3A2F), warm stone/beige neutrals (#F8F7F4), crisp white accents, and dark charcoal text.
- **Vibe**: Clean, minimalist, professional, organic, and human-centric. Generous whitespace, soft organic shadows, and rounded cards (rounded-2xl).

### 📱 RWD & Layout Architecture (Mobile-First):
- Mobile-first approach. Ensure touch targets are at least 48x48px, text scales fluidly using Tailwind responsive utility classes, and layout gracefully collapses from multi-column desktop grids into stacked single-column mobile flows. No horizontal overflow.
- **Core Photo Strategy**: The three core sections must utilize **Portrait (Vertical) Photos** exclusively. Use a fixed aspect ratio container (e.g., aspect-[3/4] or aspect-[4/5] with `object-cover`) to ensure the user's upcoming vertical images display with pristine framing across all screen sizes.

### 🧱 Page Sections to Implement:
1. **Sticky Header**: 
   - Terra Earth School Logo on the left.
   - Clean navigation links (三大分校, 核心理念, 最新活動) collapsing into a smooth mobile hamburger menu.
   - Primary CTA button "立即報名" on the right.
2. **Hero Section**: 
   - Direct, powerful headline establishing Terra School's mission of returning to the Earth for authentic learning in the AI era.
3. **Core Pillars Carousel / Card Showcase (三大核心)**:
   - Fixed main heading, accompanied by a smooth interactive card rotator or tab system showcasing the three pillars using **vertical photos**:
     1. 體驗自然 (Experience Nature)
     2. 覺察自我 (Self-Awareness)
     3. 理解創造 (Understand & Create - featuring the 4 steps: 理、解、創、造).
   - Designed for seamless swiping or clicking on mobile devices.
4. **Three Schools & Spotlight Banner (三大分校與最新活動)**:
   - Display the 3 branches: 地之校 (Earth School), 天之校 (Sky School), 海績效 (Ocean School).
   - **Spotlight Feature for 2027 天之校**:
     - Theme / Slogan: 「山旅共生，永續高山」
     - Details: Jan 3 - Jan 7, 2027 | Route: 花蓮 ➔ 天祥 ➔ 關雲山莊
     - CTA Button: 「預定登記報名」 (Links to booking/registration form).
5. **Organizers & Footer**:
   - Core organizers: 台灣未來發展協會, 敏捷專家協會.
   - Clean, minimal footer matching the earthy aesthetic.

Please output clean, well-commented, production-ready code (HTML/Tailwind CSS/Alpine.js or Vanilla JS) that matches the 2026 Earth School design system precisely.