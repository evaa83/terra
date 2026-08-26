import type { Metadata } from "next";
import "./globals.css";

const title = "泰拉學校｜以自然為師，向地球學習";
const description =
  "Terra 是拉丁文的「地球」。泰拉學校是一所沒有圍牆的學校。我們與學習者一起走進自然，從體驗中覺察自己、理解他人、回應世界，培養 AI 時代真正需要的理解力與創造力。";

export async function generateMetadata(): Promise<Metadata> {
  const origin = "https://terrahan.tw";

  return {
    title,
    description,
    icons: { icon: "/terra-logo.png", shortcut: "/terra-logo.png" },
    openGraph: {
      title,
      description,
      type: "website",
      locale: "zh_TW",
      images: [{ url: `${origin}/og.png`, width: 1200, height: 630, alt: "泰拉學校｜走進真實世界，重新學習" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${origin}/og.png`],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}
