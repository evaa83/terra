"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const pillars = [
  {
    id: "experience",
    number: "01",
    title: "體驗自然",
    en: "Experience Nature",
    description:
      "走進田野、山林與海岸，打開五感，從氣候、植物和身體的變化開始認識環境。",
    spec: "直式 4:5 · 1600 × 2000 px",
    tone: "tone-earth",
    image: "/photos/pillar-experience.webp",
    alt: "泰拉學校學員走進蓮田體驗自然環境",
  },
  {
    id: "awareness",
    number: "02",
    title: "覺察自我",
    en: "Self-Awareness",
    description:
      "透過靜坐、觀察、書寫與對話放慢腳步，辨認感受，找到自己與世界相處的位置。",
    spec: "直式 4:5 · 1600 × 2000 px",
    tone: "tone-mist",
    image: "/photos/pillar-awareness.webp",
    alt: "泰拉學校學員在樹林中圍坐進行覺察練習",
  },
  {
    id: "create",
    number: "03",
    title: "理解創造",
    en: "Understand & Create",
    description:
      "運用設計思考與 AI 整理現場資料，理解人與問題，提出方案並動手驗證。",
    spec: "直式 4:5 · 1600 × 2000 px",
    tone: "tone-clay",
    image: "/photos/pillar-create.webp",
    alt: "泰拉學校學員運用簡報與數位工具共同理解地方問題",
  },
];

const schools = [
  {
    marker: "EARTH",
    title: "地之校",
    subtitle: "農村・食農・地方共創",
    description: "走進土地與生產現場，理解農業、生活和地方關係。",
    status: "2026 成果展",
    href: "/earth/index.html",
    action: "查看活動成果",
    tone: "school-earth",
    spec: "橫式 4:3",
    image: "/photos/school-earth.webp",
    alt: "成熟稻穗與藍天構成的地之校田野景觀",
  },
  {
    marker: "SKY",
    title: "天之校",
    subtitle: "高山・步行・山旅共生",
    description: "沿著山徑前進，在高度、氣候與團隊協作中練習判斷。",
    status: "2027 招募中",
    href: "#activity",
    action: "查看最新活動",
    tone: "school-sky",
    spec: "橫式 4:3",
    image: "/photos/school-sky.webp",
    alt: "雲海與山巒構成的天之校高山景觀",
  },
  {
    marker: "OCEAN",
    title: "海之校",
    subtitle: "海洋・沿岸・水域行動",
    description: "從沿岸與海洋環境出發，觀察水域生態和人類生活。",
    status: "籌備中",
    href: "",
    action: "",
    tone: "school-ocean",
    spec: "橫式 4:3",
    image: "/photos/school-ocean.webp",
    alt: "海浪與藍天構成的海之校水域景觀",
  },
];

const registrationUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSe9AM-LzN7eu8j-Yiwv4LAGDlfsu-gGI_K4Gn0m4GL0Y6vw5Q/viewform";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePillar, setActivePillar] = useState(0);

  const closeMenu = () => setMenuOpen(false);

  // Auto-rotate active pillar every 3 seconds, resets on manual interaction
  useEffect(() => {
    const timer = setTimeout(() => {
      setActivePillar((prev) => (prev + 1) % pillars.length);
    }, 3000);
    return () => clearTimeout(timer);
  }, [activePillar]);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="泰拉學校首頁" onClick={closeMenu}>
          <Image src="/terra-logo.png" alt="泰拉學校" width={56} height={56} priority />
          <span>
            <strong>泰拉學校</strong>
            <small>TERRA SCHOOL</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="主要導覽">
          <a href="#pillars">核心理念</a>
          <a href="#schools">三大分校</a>
          <a href="#activity">最新活動</a>
        </nav>

        <a className="button button-small header-cta" href={registrationUrl} target="_blank" rel="noreferrer">
          立即報名
        </a>

        <button
          className={`menu-button ${menuOpen ? "is-open" : ""}`}
          type="button"
          aria-label={menuOpen ? "關閉選單" : "開啟選單"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
      </header>

      <div className={`mobile-menu ${menuOpen ? "is-open" : ""}`} id="mobile-menu">
        <nav aria-label="手機導覽">
          <a href="#pillars" onClick={closeMenu}>核心理念 <span>01</span></a>
          <a href="#schools" onClick={closeMenu}>三大分校 <span>02</span></a>
          <a href="#activity" onClick={closeMenu}>最新活動 <span>03</span></a>
        </nav>
        <a className="button" href={registrationUrl} target="_blank" rel="noreferrer">
          預定登記報名 <span aria-hidden="true">↗</span>
        </a>
      </div>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">A SCHOOL WITHOUT WALLS</p>
          <h1>
            以自然為師，
            <span>向地球學習。</span>
          </h1>
          <p className="hero-intro">
            Terra 是拉丁文的「地球」。泰拉學校是一所沒有圍牆的學校。我們與學習者一起走進自然，從體驗中覺察自己、理解他人、回應世界，培養 AI 時代真正需要的理解力與創造力。
          </p>
          <div className="hero-actions">
            <a className="button" href="#activity">查看最新活動 <span aria-hidden="true">↓</span></a>
          </div>
        </div>

        <div className="hero-visual">
          <Image
            className="hero-image"
            src="/photos/hero-field-walk.webp"
            alt="泰拉學校學員列隊走進蓮田與稻田進行田野學習"
            fill
            priority
            sizes="(max-width: 820px) calc(100vw - 40px), 54vw"
          />
          <div className="hero-image-wash" aria-hidden="true" />
        </div>
      </section>



      <section className="pillars section-pad" id="pillars">
        <div className="section-heading">
          <div>
            <div className="section-label light"><span>01</span> HOW WE LEARN</div>
            <h2>三大核心</h2>
          </div>
          <p>從身體的感受出發，逐步走向理解與創造。</p>
        </div>

        <div className="pillar-layout">
          <div className="pillar-tabs" role="tablist" aria-label="三大核心">
            {pillars.map((pillar, index) => (
              <button
                key={pillar.id}
                className={activePillar === index ? "active" : ""}
                role="tab"
                aria-selected={activePillar === index}
                aria-controls={`panel-${pillar.id}`}
                id={`tab-${pillar.id}`}
                onClick={() => setActivePillar(index)}
              >
                <span>{pillar.number}</span>
                <strong>{pillar.title}</strong>
                <small>{pillar.en}</small>
              </button>
            ))}
          </div>

          <div
            key={activePillar}
            className="pillar-panel"
            id={`panel-${pillars[activePillar].id}`}
            role="tabpanel"
            aria-labelledby={`tab-${pillars[activePillar].id}`}
          >
            <div className={`photo-placeholder pillar-photo ${pillars[activePillar].tone} ${pillars[activePillar].image ? "has-image" : ""}`}>
              {pillars[activePillar].image ? (
                <Image
                  className="pillar-real-image"
                  src={pillars[activePillar].image}
                  alt={pillars[activePillar].alt}
                  fill
                  sizes="(max-width: 560px) calc(100vw - 40px), (max-width: 1060px) 42vw, 31vw"
                />
              ) : (
                <PlaceholderLabel
                  number={`PHOTO 0${activePillar + 2}`}
                  title={`${pillars[activePillar].title}照片`}
                  spec={pillars[activePillar].spec}
                  dark
                />
              )}
            </div>
            <div className="pillar-detail">
              <span className="pillar-number">{pillars[activePillar].number}</span>
              <p>{pillars[activePillar].description}</p>
              {activePillar === 2 && (
                <div className="four-steps" aria-label="理解創造四步驟">
                  {["理", "解", "創", "造"].map((step, index) => (
                    <span key={step}><b>{step}</b><small>{["整理資訊", "理解問題", "提出方案", "動手驗證"][index]}</small></span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="schools section-pad" id="schools">
        <div className="section-heading dark-heading">
          <div>
            <div className="section-label"><span>02</span> THREE SCHOOLS</div>
            <h2>地・天・海</h2>
          </div>
          <p>進入不同自然場域，練習觀看、感受與回應。</p>
        </div>

        <div className="school-grid">
          {schools.map((school, index) => (
            <article className="school-card" key={school.title}>
              <div className={`photo-placeholder school-photo ${school.tone} ${school.image ? "has-image" : ""}`}>
                {school.image ? (
                  <Image
                    className="school-real-image"
                    src={school.image}
                    alt={school.alt}
                    fill
                    sizes="(max-width: 560px) calc(100vw - 40px), (max-width: 820px) 45vw, 29vw"
                  />
                ) : (
                  <PlaceholderLabel number={`PHOTO 0${index + 5}`} title={`${school.title}代表照`} spec={`${school.spec} · 1600 × 1200 px`} dark />
                )}
                <span className="school-marker">{school.marker}</span>
              </div>
              <div className="school-info">
                <div className="school-title-row">
                  <div><h3>{school.title}</h3><p>{school.subtitle}</p></div>
                  <span className="status">{school.status}</span>
                </div>
                <p className="school-description">{school.description}</p>
                {school.href && (
                  <a href={school.href} target={school.href.startsWith("http") ? "_blank" : undefined} rel={school.href.startsWith("http") ? "noreferrer" : undefined}>
                    {school.action} <span aria-hidden="true">→</span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="activity section-pad" id="activity">
        <div className="activity-card">
          <div className="activity-copy">
            <div className="activity-kicker"><span>NOW OPEN</span> 2027 天之校</div>
            <h2>山旅共生，<br />永續高山</h2>
            <p className="activity-intro">五日高山移動學習，從花蓮走向關雲山莊，在步行與協作中理解山林。</p>
            <dl>
              <div><dt>日期</dt><dd>2027.01.03 — 01.07</dd></div>
              <div><dt>路線</dt><dd>花蓮 <span>→</span> 天祥 <span>→</span> 關雲山莊</dd></div>
            </dl>
            <a className="button button-light" href={registrationUrl} target="_blank" rel="noreferrer">
              預定登記報名 <span aria-hidden="true">↗</span>
            </a>
            <small className="registration-note">開啟 Google 表單，實際錄取資訊以後續通知為準。</small>
          </div>
          <div className="photo-placeholder activity-photo has-image">
            <Image
              className="activity-real-image"
              src="/photos/activity-sky-2027.webp"
              alt="雲霧穿越高山稜線的2027天之校主視覺"
              fill
              sizes="(max-width: 820px) calc(100vw - 40px), 55vw"
            />
          </div>
        </div>
      </section>

      <section className="organizers section-pad" id="organizers">
        <div className="section-label"><span>03</span> ORGANIZERS</div>
        <div className="organizer-row">
          <h2>主辦單位</h2>
          <div className="organizer-logos">
            <div className="organizer-logo-wrapper logo-1221-wrapper">
              <Image src="/logo-1221feda.png" alt="社團法人1221未來教育發展協會" width={300} height={100} className="organizer-logo-img" />
            </div>
            <div className="organizer-logo-wrapper">
              <Image src="/logo-agile.png" alt="社團法人敏捷專家協會" width={300} height={100} className="organizer-logo-img" />
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-brand">
          <Image src="/terra-logo.png" alt="" width={72} height={72} />
          <div><strong>泰拉學校</strong><span>TERRA SCHOOL</span></div>
        </div>
        <a href="#top" className="back-top">回到頂端 <span aria-hidden="true">↑</span></a>
        <p>© 2026 Terra School. All rights reserved.</p>
      </footer>
    </main>
  );
}

function PlaceholderLabel({ number, title, spec, dark = false }: { number: string; title: string; spec: string; dark?: boolean }) {
  return (
    <div className={`placeholder-tag ${dark ? "tag-dark" : ""}`}>
      <span>{number}</span>
      <strong>{title}</strong>
      <small>{spec}</small>
    </div>
  );
}
