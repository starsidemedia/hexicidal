import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Marquee from "@/components/marquee";
import { CardTile, KindPill, PricesNote, ProfitBadge, StatTile } from "@/components/pull-ui";
import { biggestHits, getOpenings, money, prettyDate, seriesStats, signed, totals } from "@/lib/openings";

export const metadata: Metadata = {
  title: "Pull Tracker",
  description:
    "Every pack and Secret Lair Hexicidal opens, priced card by card. Is the product worth it? Here's the running math.",
};

export default function PullsPage() {
  const openings = getOpenings();
  const t = totals(openings);
  const series = seriesStats(openings);
  const hits = biggestHits(openings, 8);

  return (
    <main>
      <Navbar />

      <section className="dots border-b-[3px] border-ink">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
          <span className="pill mb-5 -rotate-2 bg-pop-yellow">★ Receipts, not vibes ★</span>
          <h1 className="font-display text-5xl font-black uppercase leading-[0.9] tracking-tight sm:text-7xl">
            <span className="block">Pull</span>
            <span className="block text-pop-pink stroke-ink">Tracker</span>
          </h1>
          <p className="mt-5 max-w-xl font-body text-lg font-medium">
            Every opening on the channel, priced card by card. Paid vs. pulled, product by product — so you can see
            what&apos;s actually worth cracking.
          </p>
        </div>
      </section>

      {openings.length === 0 ? (
        <section className="mx-auto max-w-6xl px-4 py-20 text-center sm:px-6">
          <p className="font-display text-2xl font-black uppercase">First openings landing soon.</p>
        </section>
      ) : (
        <>
          <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
            <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
              <StatTile label="Openings" value={String(t.count)} color="bg-pop-cyan" tilt="-rotate-1" />
              <StatTile label="Spent" value={money(t.spent)} tilt="rotate-1" />
              <StatTile label="Pulled" value={money(t.value)} color="bg-pop-yellow" tilt="-rotate-1" />
              <StatTile
                label="Net"
                value={signed(t.net)}
                color={t.net >= 0 ? "bg-pop-lime" : "bg-pop-pink"}
                tilt="rotate-1"
                note={t.tracked < t.count ? `across ${t.tracked} with a known price` : undefined}
              />
            </div>
          </section>

          <section className="border-y-[3px] border-ink bg-pop-purple/15">
            <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
              <h2 className="font-display text-3xl font-black uppercase sm:text-4xl">
                By <span className="text-pop-pink">product</span>
              </h2>
              <p className="mt-2 font-body font-medium text-ink/60">Average opening, and how often it beats its price.</p>
              <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {series.map((s, i) => (
                  <div key={s.series} className={`card flex flex-col p-6 ${i % 2 ? "-rotate-1" : "rotate-1"}`}>
                    <div className="flex items-start justify-between gap-3">
                      <p className="font-display text-xl font-black uppercase leading-tight">{s.series}</p>
                      <KindPill o={{ kind: s.kind, foil: false }} />
                    </div>
                    <p className="mt-1 font-body text-sm font-medium text-ink/60">
                      {s.count} opening{s.count === 1 ? "" : "s"}
                    </p>
                    <dl className="mt-4 grid grid-cols-2 gap-3 font-body">
                      <div>
                        <dt className="text-xs font-bold uppercase text-ink/50">Avg value</dt>
                        <dd className="font-display text-2xl font-black">{money(s.avgValue)}</dd>
                      </div>
                      <div>
                        <dt className="text-xs font-bold uppercase text-ink/50">Avg paid</dt>
                        <dd className="font-display text-2xl font-black">{s.avgPaid !== null ? money(s.avgPaid) : "—"}</dd>
                      </div>
                    </dl>
                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      <ProfitBadge profit={s.avgProfit} />
                      {s.winRate !== null && (
                        <span className="font-body text-sm font-bold">
                          Beat the price {Math.round(s.winRate * 100)}% of the time
                        </span>
                      )}
                    </div>
                    {s.best && (
                      <p className="mt-auto pt-4 font-body text-sm font-medium">
                        Best pull: <span className="font-bold">{s.best.card.name}</span> ·{" "}
                        {money(s.best.card.price ?? 0)}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {hits.length > 0 && (
            <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
              <h2 className="font-display text-3xl font-black uppercase sm:text-4xl">
                Biggest <span className="text-pop-pink">hits</span>
              </h2>
              <div className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
                {hits.map(({ card, opening }, i) => (
                  <CardTile key={`${opening.slug}-${card.name}-${i}`} card={card} opening={opening} index={i} />
                ))}
              </div>
            </section>
          )}

          <Marquee color="bg-pop-cyan" />

          <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
            <h2 className="font-display text-3xl font-black uppercase sm:text-4xl">
              Every <span className="text-pop-pink">opening</span>
            </h2>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {openings.map((o, i) => {
                const top = [...o.cards].filter((c) => c.price !== null).sort((a, b) => (b.price ?? 0) - (a.price ?? 0))[0];
                return (
                  <Link
                    key={o.slug}
                    href={`/pulls/${o.slug}`}
                    className={`card group flex gap-4 p-4 transition-transform hover:-translate-y-1 hover:shadow-pop-lg ${
                      i % 2 ? "-rotate-1" : "rotate-1"
                    }`}
                  >
                    {top?.image && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={top.image}
                        alt=""
                        loading="lazy"
                        className="aspect-[488/680] w-20 shrink-0 rounded-md border-2 border-ink object-cover"
                      />
                    )}
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <KindPill o={o} />
                        <span className="font-body text-xs font-bold text-ink/50">{prettyDate(o.date)}</span>
                      </div>
                      <p className="mt-2 font-display text-lg font-black uppercase leading-tight group-hover:text-pop-pink">
                        {o.title}
                      </p>
                      <p className="mt-1 font-body text-sm font-medium">
                        {o.cards.length} cards · worth <span className="font-bold">{money(o.total)}</span>
                        {o.paid !== null && <> · paid {money(o.paid)}</>}
                      </p>
                      <div className="mt-2">
                        <ProfitBadge profit={o.profit} />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
            <div className="mt-10">
              <PricesNote />
            </div>
          </section>
        </>
      )}

      <Footer />
    </main>
  );
}
