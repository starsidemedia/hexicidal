import { links } from "@/lib/site-config";
import { YouTubeIcon, InstagramIcon, TikTokIcon } from "./icons";

const socials = [
  { name: "YouTube", href: links.youtube, icon: YouTubeIcon, color: "bg-pop-pink", text: "text-white", handle: "Long-form jank & deck techs" },
  { name: "TikTok", href: links.tiktok, icon: TikTokIcon, color: "bg-pop-cyan", text: "text-ink", handle: "Quick hits & hot takes" },
  { name: "Instagram", href: links.instagram, icon: InstagramIcon, color: "bg-pop-yellow", text: "text-ink", handle: "Clips, memes & reels" },
];

export default function Socials() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h2 className="mb-8 text-center font-display text-3xl font-black uppercase sm:text-4xl">
        Find me <span className="text-pop-pink">everywhere</span>
      </h2>
      <div className="grid gap-5 sm:grid-cols-3">
        {socials.map((s, i) => (
          <a
            key={s.name}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`card group flex flex-col gap-4 p-6 transition-transform hover:-translate-y-1 ${
              i % 2 === 0 ? "rotate-1" : "-rotate-1"
            }`}
          >
            <span className={`inline-flex h-14 w-14 items-center justify-center rounded-xl border-[3px] border-ink ${s.color} ${s.text}`}>
              <s.icon className="h-7 w-7" />
            </span>
            <div>
              <p className="font-display text-xl font-black uppercase">{s.name}</p>
              <p className="font-body text-sm font-medium text-ink/70">{s.handle}</p>
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
