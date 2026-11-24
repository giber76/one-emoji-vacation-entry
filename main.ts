// One Emoji, One Dream Vacation — make.fun entry
// u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35
//
// Writes exactly one emoji to /output/entry.txt: U+1F3DD DESERT ISLAND.
// No variation selector, no newline, no words — 4 bytes, 1 code point.
// Why this emoji: it plainly names a dream vacation (a faraway island
// escape), reads as a postcard at a glance, is more specific and dreamlike
// than a generic beach, and is instantly readable across cultures/screens.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EMOJI = "\u{1F3DD}"; // desert island
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), EMOJI, "utf8");
