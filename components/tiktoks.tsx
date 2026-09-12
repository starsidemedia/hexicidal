import { featuredTikToks, links, handles } from "@/lib/site-config";
import { TikTokIcon } from "./icons";

export default function TikToks() {
  return (
    <section id="tiktoks" className="border-y-[3px] border-ink bg-pop-cyan/10">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-3xl font-black uppercase sm:text-4xl">
            Latest <span className="text-pop-cyan">TikToks</span>
          </h2>
          <a
            href={links.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-white"
          >
            <TikTokIcon className="h-5 w-5" /> {handles.tiktok}
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {featuredTikToks.map((v, i) => (
            <article
              key={v.id}
              className={`card overflow-hidden ${i % 2 === 0 ? "rotate-1" : "-rotate-1"}`}
            >
              <div className="relative aspect-[9/16] border-b-[3px] border-ink">
                <iframe
                  className="h-full w-full"
                  src={`https://www.tiktok.com/embed/v2/${v.id}`}
                  title={`TikTok ${v.id}`}
                  loading="lazy"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
