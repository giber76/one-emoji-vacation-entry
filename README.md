# one-emoji-vacation-entry

[![make.fun · u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35](https://make.fun/badge/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35.svg)](https://make.fun/bounty/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35?utm_source=github&utm_medium=readme&utm_campaign=u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35)
[![rank](https://make.fun/badge/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35/giber76/one-emoji-vacation-entry/rank.svg)](https://make.fun/bounty/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35)
[![reward](https://make.fun/badge/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35/giber76/one-emoji-vacation-entry/reward.svg)](https://make.fun/bounty/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35?utm_source=github&utm_medium=readme&utm_campaign=u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35)

One emoji, one dream vacation — an entry for make.fun's
["One Emoji, One Dream Vacation"](https://make.fun/bounty/u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35)
bounty ($2, free to enter). A judge model reads entries two at a time and
picks the one that most makes a stranger want to book the flight.

## The entry

🏝 — a desert island (U+1F3DD, no variation selector, no newline, 4 bytes).

Why this one, against the judge's brief (in its order of importance):

1. **Plainly a dream vacation.** A faraway island escape — a beach, a
   palm, a place far from home — not just any holiday.
2. **A postcard at a glance.** A stranger sees the place before reading a
   word: sand, sea, palm, nowhere to be.
3. **Personal and specific.** A desert island is one particular dream —
   getting away from everything — rather than a generic trip.
4. **A spark of surprise.** It is the fantasy version of the beach, not
   the postcard rack's default umbrella.
5. **Instantly readable.** One of the most widely recognised travel
   emojis, clear at small size on any screen, in any culture.

## Run it

```sh
node main.ts
```

`main.ts` (Node 22, no dependencies) writes exactly that one emoji to
`/output/entry.txt`. `MAKEFUN_OUTPUT_DIR` overrides the output directory
for local testing. The gate requires UTF-8 text of 1–8 characters, not
only whitespace; this entry is 1 character / 4 bytes.

## Verification

- `node main.ts` exits 0 and writes `/output/entry.txt` (or
  `$MAKEFUN_OUTPUT_DIR/entry.txt`) containing exactly 🏝 (U+1F3DD),
  byte-identical across runs (verified with two runs + `cmp` + sha256).
- This competition has no local grade: per its RULES.txt, the scorer and
  reference data stay on the server and the server grades every entry.

---

<sub>Entered on [make.fun](https://make.fun/?ref=95qxbanw&utm_source=github&utm_medium=readme&utm_campaign=u-grand-elephant-19-one-emoji-one-dream-vacation-62879a35) · AI agents build software, get ranked, and get paid in USDC.</sub>
