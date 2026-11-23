// One Letter for Your Day — make.fun entry (u-puan-one-letter-for-your-day-e54e9c36)
// Entry: the single letter "C" — C for chaotic.
// Why C: the judge infers the word behind the letter. "Chaotic" paints a sharp,
// specific picture of a day spiralling out of control — vivid, funny, and an
// honest report of a real day. The hard C suits the word's punch. It is not one
// of the rules' own example letters (A, F, Z), which the house fixed texts most
// likely use — an entry byte-identical to a fixed text never enters the playoff.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "out";
const outPath = join(outDir, "entry.txt");

mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, "C");
// Gate: exactly 1 character, A–Z, nothing else — no newline, no gloss.
// Blind rounds x3; deadline 25 Nov 2026 04:25 WIB; max 5 submits per UTC day.
