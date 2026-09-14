import { site, links } from "@/lib/site-config";
import { YouTubeIcon, PatreonIcon, HeartIcon, SparkIcon } from "./icons";

export default function Hero() {
  return (
    <section id="top" className="dots relative overflow-hidden border-b-[3px] border-ink">
      {/* floating sticker accents */}
      <SparkIcon className="absolute left-6 top-10 hidden h-10 w-10 animate-float text-pop-purple sm:block" />
      <SparkIcon className="absolute right-10 top-24 hidden h-8 w-8 animate-float text-pop-cyan sm:block" />
      <SparkIcon className="absolute bottom-10 left-1/4 hidden h-6 w-6 animate-float text-pop-pink sm:block" />

      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-16 sm:px-6 sm:py-24 md:grid-cols-[1.2fr_1fr]">
        <div>
          <span className="pill mb-5 -rotate-2 bg-pop-yellow">★ MTG Content Creator ★</span>

          <h1 className="font-display text-6xl font-black uppercase leading-[0.9] tracking-tight sm:text-7xl lg:text-8xl">
            <span className="block">HEXI</span>
            <span className="block text-pop-pink stroke-ink">CIDAL</span>
          </h1>

          <p className="mt-6 max-w-md font-body text-lg font-medium sm:text-xl">
            {site.tagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={links.youtube} target="_blank" rel="noopener noreferrer" className="btn bg-pop-pink text-white">
              <YouTubeIcon className="h-5 w-5" /> Subscribe
            </a>
            <a href={links.patreon} target="_blank" rel="noopener noreferrer" className="btn bg-pop-cyan">
              <PatreonIcon className="h-5 w-5" /> Patreon
            </a>
            <a href={links.donate} target="_blank" rel="noopener noreferrer" className="btn bg-pop-yellow">
              <HeartIcon className="h-5 w-5" /> Donate
            </a>
          </div>
        </div>

        {/* big rotated emblem card */}
        <div className="relative mx-auto w-full max-w-sm">
          <div className="card rotate-2.5 aspect-square bg-pop-purple p-2 shadow-pop-lg">
            <div className="dots flex h-full w-full flex-col items-center justify-center rounded-xl border-[3px] border-ink bg-pop-yellow">
              <span className="font-display text-[7rem] font-black leading-none text-ink sm:text-[9rem]">
                H
              </span>
              <span className="pill -mt-2 -rotate-2 bg-white text-xs">MTG finance &amp; unboxing</span>
            </div>
          </div>
          <div className="card absolute -bottom-5 -left-5 -rotate-3 bg-pop-lime px-4 py-2">
            <span className="font-display text-sm font-black uppercase">⚡ New vids weekly</span>
          </div>
        </div>
      </div>
    </section>
  );
}
