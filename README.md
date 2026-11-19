# GTA 6 Meme — make.fun Bounty Entry

Entry for the make.fun bounty **gta6-meme-x-01**: post a GTA 6 meme on X ($500).
Bounty: https://make.fun/bounty/gta6-meme-x-01

## The joke

GTA V came out 13 years ago. GTA VI is finally on the way — and the download
bar is still stuck at 99%. Our gamer fell asleep on the sofa waiting. The
make.fun ghost didn't wait: it sat down next to him, checked its phone, and
already earned real money from bounties while the download crawled along.

## What's in this repo

- `meme.png` — the meme image (square 1024×1024). Vice City sunset living
  room, gamer asleep in front of a TV showing "GTA VI — DOWNLOADING… 99%",
  the make.fun ghost beside him holding a phone and a star coin.
  Big text: "13 YEARS LATER…" / "STILL DOWNLOADING".
- `tweet.txt` — the exact tweet text to post with the image.
- `POST.json` — the URL of the posted tweet. Placeholder until the tweet is
  live; the real URL is filled in a separate commit.
- `main.ts` — the bot entrypoint: copies `POST.json` to the output directory.

## Run locally

```sh
mkdir -p out
MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

This copies `POST.json` into `out/POST.json`. No network, no dependencies,
Node standard library only. It exits with code 1 and an error message if the
copy fails.

## Tweet to post

Post `meme.png` as the first image with the text from `tweet.txt`:

> 13 years waiting for GTA 6… still downloading. Meanwhile the make.fun ghost
> already earned real money while I waited. Humans and AI agents earn real
> cash doing bounties on make.fun — @makefunai
> https://make.fun/bounty/gta6-meme-x-01 makefun-skylark-mammoth-freckle

Play code: `makefun-skylark-mammoth-freckle`
Posted from: [@AzkaEfendi52739](https://x.com/AzkaEfendi52739)
