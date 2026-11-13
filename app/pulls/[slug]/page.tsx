import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { YouTubeIcon, TikTokIcon, InstagramIcon } from "@/components/icons";
import { CardTile, KindPill, PricesNote, ProfitBadge, StatTile } from "@/components/pull-ui";
import { getOpening, getOpenings, money, prettyDate } from "@/lib/openings";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return getOpenings().map((o) => ({ slug: o.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const o = getOpening(params.slug);
  if (!o) return {};
  const verdict =
    o.profit === null ? `worth ${money(o.total)}` : `${money(o.total)} pulled vs ${money(o.paid ?? 0)} paid`;
  return {
    title: o.title,
    description: `${o.title}: ${o.cards.length} cards, ${verdict}. Every card priced.`,
  };
}

export default function OpeningPage({ params }: Props) {
  const o = getOpening(params.slug);
  if (!o) notFound();
  const cards = [...o.cards].sort((a, b) => (b.price ?? -1) - (a.price ?? -1));

  return (
    <main>
      <Navbar />

      <section className="dots border-b-[3px] border-ink">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <Link href="/pulls" className="font-display text-sm font-black uppercase text-pop-pink hover:underline">
            ← Pull Tracker
          </Link>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <KindPill o={o} />
            <span className="pill bg-white text-xs">Opened {prettyDate(o.date)}</span>
          </div>
          <h1 className="mt-4 font-display text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl">
            {o.title}
          </h1>
          <div className="mt-5">
            <ProfitBadge profit={o.profit} big />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1fr_320px]">
          <div className="grid grid-cols-2 content-start gap-5 sm:grid-cols-3">
            <StatTile label="Cards" value={String(o.cards.length)} color="bg-pop-cyan" tilt="-rotate-1" />
            <StatTile label="Pulled" value={money(o.total)} color="bg-pop-yellow" tilt="rotate-1" />
            <StatTile label="Paid" value={o.paid !== null ? money(o.paid) : "—"} tilt="-rotate-1" />
            <div className="col-span-2 flex flex-wrap gap-3 sm:col-span-3">
              {o.posts.youtube && (
                <a href={o.posts.youtube} target="_blank" rel="noopener noreferrer" className="btn bg-pop-pink text-white">
                  <YouTubeIcon className="h-5 w-5" /> YouTube
                </a>
              )}
              {o.posts.tiktok && (
                <a href={o.posts.tiktok} target="_blank" rel="noopener noreferrer" className="btn bg-pop-cyan">
                  <TikTokIcon className="h-5 w-5" /> TikTok
                </a>
              )}
              {o.posts.instagram && (
                <a href={o.posts.instagram} target="_blank" rel="noopener noreferrer" className="btn bg-pop-yellow">
                  <InstagramIcon className="h-5 w-5" /> Instagram
                </a>
              )}
            </div>
          </div>

          {(o.youtubeId || o.tiktokId) && (
            <div className="card mx-auto w-full max-w-[320px] overflow-hidden -rotate-1">
              <div className="relative aspect-[9/16]">
                <iframe
                  className="h-full w-full"
                  src={
                    o.youtubeId
                      ? `https://www.youtube-nocookie.com/embed/${o.youtubeId}`
                      : `https://www.tiktok.com/embed/v2/${o.tiktokId}`
                  }
                  title={o.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="border-t-[3px] border-ink bg-pop-purple/15">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="font-display text-3xl font-black uppercase sm:text-4xl">
            Every <span className="text-pop-pink">card</span>
          </h2>
          <p className="mt-2 font-body font-medium text-ink/60">Most valuable first. Tap a card for its Scryfall page.</p>
          <div className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
            {cards.map((c, i) => (
              <CardTile key={`${c.name}-${i}`} card={c} index={i} />
            ))}
          </div>
          <div className="mt-10">
            <PricesNote asOf={o.pricesAsOf} />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
