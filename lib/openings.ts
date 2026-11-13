// ============================================================================
//  PULL TRACKER DATA
//  One JSON file per opening lives in /data/openings. They're written by the
//  Hexicidal Studio dashboard ("Publish to website") - don't hand-edit them.
// ============================================================================
import fs from "node:fs";
import path from "node:path";
import { featuredVideos, featuredTikToks } from "@/lib/site-config";

export type PullCard = {
  name: string;
  printing: string;
  set: string;
  cn: string;
  price: number | null;
  image: string;
  scryfall: string;
  hit: boolean;
};

export type Opening = {
  slug: string;
  title: string;
  series: string;
  kind: "pack" | "secret-lair";
  foil: boolean;
  date: string; // YYYY-MM-DD opened
  pricesAsOf: string; // YYYY-MM-DD prices captured
  paid: number | null;
  total: number;
  profit: number | null;
  cards: PullCard[];
  posts: { youtube?: string; tiktok?: string; instagram?: string };
  youtubeId?: string;
  tiktokId?: string;
};

const DIR = path.join(process.cwd(), "data", "openings");

export function getOpenings(): Opening[] {
  if (!fs.existsSync(DIR)) return [];
  return fs
    .readdirSync(DIR)
    .filter((f) => f.endsWith(".json"))
    .map((f) => JSON.parse(fs.readFileSync(path.join(DIR, f), "utf8")) as Opening)
    .sort((a, b) => b.date.localeCompare(a.date) || a.title.localeCompare(b.title));
}

export function getOpening(slug: string): Opening | undefined {
  return getOpenings().find((o) => o.slug === slug);
}

// ---------------------------------------------------------------------------
//  Stats
// ---------------------------------------------------------------------------
export type Totals = { count: number; spent: number; value: number; net: number; tracked: number };

export function totals(list: Opening[]): Totals {
  const paidOnes = list.filter((o) => o.paid !== null);
  const spent = paidOnes.reduce((s, o) => s + (o.paid ?? 0), 0);
  const valueOfPaid = paidOnes.reduce((s, o) => s + o.total, 0);
  return {
    count: list.length,
    spent,
    value: list.reduce((s, o) => s + o.total, 0),
    net: valueOfPaid - spent,
    tracked: paidOnes.length,
  };
}

export type SeriesStats = {
  series: string;
  kind: Opening["kind"];
  count: number;
  avgValue: number;
  avgPaid: number | null;
  avgProfit: number | null;
  winRate: number | null; // share of openings that beat their price
  best: { card: PullCard; opening: Opening } | null;
};

export function seriesStats(list: Opening[]): SeriesStats[] {
  const groups = new Map<string, Opening[]>();
  for (const o of list) groups.set(o.series, [...(groups.get(o.series) ?? []), o]);
  return [...groups.entries()]
    .map(([series, os]) => {
      const paid = os.filter((o) => o.paid !== null);
      let best: SeriesStats["best"] = null;
      for (const o of os)
        for (const c of o.cards)
          if (c.price !== null && (!best || c.price > (best.card.price ?? 0))) best = { card: c, opening: o };
      return {
        series,
        kind: os[0].kind,
        count: os.length,
        avgValue: os.reduce((s, o) => s + o.total, 0) / os.length,
        avgPaid: paid.length ? paid.reduce((s, o) => s + (o.paid ?? 0), 0) / paid.length : null,
        avgProfit: paid.length ? paid.reduce((s, o) => s + (o.profit ?? 0), 0) / paid.length : null,
        winRate: paid.length ? paid.filter((o) => (o.profit ?? 0) >= 0).length / paid.length : null,
        best,
      };
    })
    .sort((a, b) => b.count - a.count || a.series.localeCompare(b.series));
}

export function biggestHits(list: Opening[], n: number) {
  return list
    .flatMap((o) => o.cards.filter((c) => c.price !== null).map((card) => ({ card, opening: o })))
    .sort((a, b) => (b.card.price ?? 0) - (a.card.price ?? 0))
    .slice(0, n);
}

// ---------------------------------------------------------------------------
//  Latest videos: newest posted openings first, then the hand-picked IDs
// ---------------------------------------------------------------------------
export function latestYouTube(n: number): { id: string; title: string }[] {
  const fromPulls = getOpenings()
    .filter((o) => o.youtubeId)
    .map((o) => ({ id: o.youtubeId as string, title: o.title }));
  return dedupe([...fromPulls, ...featuredVideos], (v) => v.id).slice(0, n);
}

export function latestTikToks(n: number): { id: string }[] {
  const fromPulls = getOpenings()
    .filter((o) => o.tiktokId)
    .map((o) => ({ id: o.tiktokId as string }));
  return dedupe([...fromPulls, ...featuredTikToks], (v) => v.id).slice(0, n);
}

function dedupe<T>(items: T[], key: (t: T) => string): T[] {
  const seen = new Set<string>();
  return items.filter((t) => (seen.has(key(t)) ? false : (seen.add(key(t)), true)));
}

// ---------------------------------------------------------------------------
//  Formatting
// ---------------------------------------------------------------------------
export const money = (v: number) =>
  "$" + v.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export const signed = (v: number) => (v >= 0 ? "+" : "−") + money(Math.abs(v));

export const prettyDate = (iso: string) =>
  new Date(iso + "T12:00:00").toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
