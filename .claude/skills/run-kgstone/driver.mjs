#!/usr/bin/env node
// Minimal chromium-cli-alike REPL for driving the KG Stone Hospital Next.js
// site with Playwright, for use when the `chromium-cli` tool isn't
// available in the environment. Reads one command per line from stdin.
//
// Commands:
//   nav <url>                    go to a URL (relative URLs resolve against BASE_URL)
//   wait-for text=<text>         wait until text appears on the page
//   wait-for <selector>          wait until a CSS selector is visible
//   click <selector>             click an element
//   fill <selector> <text...>    fill a form field (fires React onChange)
//   press <key>                  press a key on the currently focused element
//   screenshot [name]            save a screenshot to screenshots/<name>.png
//   screenshot-element <selector> [name]  crop a screenshot to one element
//   eval <js>                    evaluate JS in the page and print the result
//   console --errors             print any console.error / pageerror seen so far
//   sleep <ms>                   pause (avoid unless nothing else works)
//   quit                         close the browser and exit
//
// Usage:
//   node driver.mjs <<'EOF'
//   nav /
//   wait-for text=Book Appointment
//   screenshot home
//   EOF

import { chromium } from "playwright";
import { createInterface } from "node:readline";
import { mkdirSync } from "node:fs";
import { join } from "node:path";

const BASE_URL = process.env.BASE_URL ?? "http://localhost:3000";
const SCREENSHOT_DIR = process.env.SCREENSHOT_DIR ?? join(process.cwd(), "screenshots");
mkdirSync(SCREENSHOT_DIR, { recursive: true });

const browser = await chromium.launch({ args: ["--no-sandbox"] });
const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await context.newPage();

const consoleLog = [];
page.on("console", (msg) => {
  if (msg.type() === "error") consoleLog.push(`[console.error] ${msg.text()}`);
});
page.on("pageerror", (err) => consoleLog.push(`[pageerror] ${err.message}`));

function resolveUrl(url) {
  return /^https?:\/\//.test(url) ? url : new URL(url, BASE_URL).toString();
}

async function runCommand(line) {
  const trimmed = line.trim();
  if (!trimmed || trimmed.startsWith("#")) return;
  const [cmd, ...rest] = trimmed.split(/\s+/);
  const arg = rest.join(" ");

  switch (cmd) {
    case "nav": {
      const url = resolveUrl(rest[0]);
      await page.goto(url, { waitUntil: "domcontentloaded" });
      console.log(`nav -> ${url}`);
      break;
    }
    case "wait-for": {
      if (arg.startsWith("text=")) {
        await page.getByText(arg.slice(5), { exact: false }).first().waitFor({ timeout: 15000 });
      } else {
        await page.locator(arg).first().waitFor({ state: "visible", timeout: 15000 });
      }
      console.log(`wait-for ok: ${arg}`);
      break;
    }
    case "click": {
      await page.locator(arg).first().click();
      console.log(`click ok: ${arg}`);
      break;
    }
    case "fill": {
      const [selector, ...text] = rest;
      await page.locator(selector).first().fill(text.join(" "));
      console.log(`fill ok: ${selector}`);
      break;
    }
    case "press": {
      await page.keyboard.press(arg);
      console.log(`press ok: ${arg}`);
      break;
    }
    case "screenshot": {
      const name = arg || `screenshot-${Date.now()}`;
      const path = join(SCREENSHOT_DIR, `${name}.png`);
      await page.screenshot({ path, fullPage: true });
      console.log(`screenshot -> ${path}`);
      break;
    }
    case "screenshot-element": {
      const [selector, name] = rest;
      const path = join(SCREENSHOT_DIR, `${name || selector.replace(/\W+/g, "-")}.png`);
      await page.locator(selector).first().screenshot({ path });
      console.log(`screenshot-element -> ${path}`);
      break;
    }
    case "eval": {
      const result = await page.evaluate(arg);
      console.log(`eval -> ${JSON.stringify(result)}`);
      break;
    }
    case "console": {
      if (arg.includes("--errors")) {
        console.log(consoleLog.length ? consoleLog.join("\n") : "no console errors");
      }
      break;
    }
    case "scroll": {
      await page.mouse.wheel(0, Number(arg) || 800);
      console.log(`scroll ok: ${arg}`);
      break;
    }
    case "sleep": {
      await new Promise((r) => setTimeout(r, Number(arg) || 500));
      break;
    }
    case "quit": {
      await browser.close();
      process.exit(0);
      break;
    }
    default:
      console.log(`unknown command: ${cmd}`);
  }
}

const rl = createInterface({ input: process.stdin });
for await (const line of rl) {
  try {
    await runCommand(line);
  } catch (err) {
    console.error(`error running "${line}": ${err.message}`);
  }
}
await browser.close();
