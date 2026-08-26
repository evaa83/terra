import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const indexHtmlPath = new URL("../dist/client/index.html", import.meta.url);
const notFoundHtmlPath = new URL("../dist/client/404.html", import.meta.url);

test("index.html contains expected Terra School branding and elements", async () => {
  const html = await readFile(indexHtmlPath, "utf8");

  // Verify Title and Meta
  assert.match(html, /泰拉學校/);
  
  // Verify Core Copywriting
  assert.match(html, /以自然為師/);
  assert.match(html, /向地球學習/);
  
  // Verify Three Core Pillars
  assert.match(html, /體驗自然/);
  assert.match(html, /覺察自我/);
  assert.match(html, /理解創造/);

  // Verify Three Schools
  assert.match(html, /地之校/);
  assert.match(html, /天之校/);
  assert.match(html, /海之校/);

  // Verify Organizers
  assert.match(html, /社團法人1221未來教育發展協會/);
  assert.match(html, /社團法人敏捷專家協會/);
});

test("404.html was successfully generated", async () => {
  const html = await readFile(notFoundHtmlPath, "utf8");
  assert.ok(html.length > 0);
});
