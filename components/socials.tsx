import { links, handles } from "@/lib/site-config";
import { YouTubeIcon, InstagramIcon, TikTokIcon } from "./icons";

const socials = [
  {
    name: "YouTube",
    href: links.youtube,
    icon: YouTubeIcon,
    handle: handles.youtube,
    sub: "Long-form jank & deck techs",
    color: "bg-pop-pink",
    text: "text-white",
    badge: "bg-white text-pop-pink",
    rotate: "rotate-1",
  },
  {
    name: "TikTok",
    href: links.tiktok,
    icon: TikTokIcon,
    handle: handles.tiktok,
    sub: "Quick hits & hot takes",
    color: "bg-pop-cyan",
    text: "text-ink",
    badge: "bg-ink text-white",
    rotate: "-rotate-1",
  },
  {
    name: "Instagram",
    href: links.instagram,
    icon: InstagramIcon,
    handle: handles.instagram,
    sub: "Clips, memes & reels",
    color: "bg-pop-yellow",
    text: "text-ink",
    badge: "bg-ink text-white",
    rotate: "rotate-2",
  },
];

export default function Socials() {
  return (
    <section id="socials" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="mb-10 text-center">
        <h2 className="font-display text-3xl font-black uppercase sm:text-5xl">
          Find me{" "}
          <span className="relative inline-block">
            <span className="relative z-10 text-pop-pink">everywhere</span>
            <span className="absolute inset-x-0 bottom-1 z-0 h-3 -rotate-1 bg-pop-yellow" aria-hidden="true" />
          </span>
        </h2>
        <p className="mt-3 font-body text-base font-medium text-ink/60 sm:text-lg">
          Same unhinged energy, three different platforms.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-3">
        {socials.map((s) => (
          <a
            key={s.name}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`card group relative flex flex-col gap-5 p-7 transition-transform hover:-translate-y-2 hover:shadow-pop-lg ${s.rotate}`}
          >
            {/* platform color blob */}
            <span
              className={`absolute -right-2 -top-2 h-8 w-8 rounded-full border-[3px] border-ink ${s.color}`}
              aria-hidden="true"
            />

            {/* icon */}
            <span
              className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl border-[3px] border-ink ${s.color} ${s.text}`}
            >
              <s.icon className="h-8 w-8" />
            </span>

            {/* name + handle */}
            <div>
              <p className="font-display text-2xl font-black uppercase leading-none">{s.name}</p>
              <p className={`mt-1 inline-block rounded-full border-2 border-ink px-2 py-0.5 font-display text-xs font-black uppercase ${s.badge}`}>
                {s.handle}
              </p>
              <p className="mt-2 font-body text-sm font-medium text-ink/60">{s.sub}</p>
            </div>

            <span className="mt-auto font-display text-sm font-black uppercase text-pop-pink group-hover:underline">
              Follow →
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
