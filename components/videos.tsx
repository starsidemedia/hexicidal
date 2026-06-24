import { featuredVideos, links } from "@/lib/site-config";
import { YouTubeIcon } from "./icons";

export default function Videos() {
  return (
    <section id="videos" className="border-y-[3px] border-ink bg-pop-purple/15">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-3xl font-black uppercase sm:text-4xl">
            Latest <span className="text-pop-pink">chaos</span>
          </h2>
          <a href={links.youtube} target="_blank" rel="noopener noreferrer" className="btn bg-white">
            <YouTubeIcon className="h-5 w-5 text-pop-pink" /> All videos
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {featuredVideos.map((v, i) => (
            <article key={i} className="card overflow-hidden">
              <div className="relative aspect-video border-b-[3px] border-ink">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube-nocookie.com/embed/${v.id}`}
                  title={v.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-4">
                <p className="font-display text-base font-black uppercase leading-tight">{v.title}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
