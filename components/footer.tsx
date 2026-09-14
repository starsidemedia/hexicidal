import { site, links } from "@/lib/site-config";
import { YouTubeIcon, InstagramIcon, TikTokIcon, PatreonIcon } from "./icons";

const socialIcons = [
  { href: links.youtube, icon: YouTubeIcon, label: "YouTube" },
  { href: links.tiktok, icon: TikTokIcon, label: "TikTok" },
  { href: links.instagram, icon: InstagramIcon, label: "Instagram" },
  { href: links.patreon, icon: PatreonIcon, label: "Patreon" },
];

export default function Footer() {
  return (
    <footer className="border-t-[3px] border-ink bg-ink text-cream">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col items-center gap-6 text-center">
          <a href="#top" className="font-display text-3xl font-black uppercase tracking-tight">
            <span className="text-pop-pink">HEX</span>ICIDAL
          </a>

          <div className="flex gap-3">
            {socialIcons.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border-[3px] border-cream bg-transparent transition-colors hover:bg-pop-pink hover:border-pop-pink"
              >
                <s.icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          {site.email && !site.email.startsWith("TODO") && (
            <a href={`mailto:${site.email}`} className="font-body text-sm text-cream/70 hover:text-pop-yellow">
              {site.email}
            </a>
          )}

          <p className="font-body text-xs text-cream/50">
            © {new Date().getFullYear()} {site.name}. Not affiliated with Wizards of the Coast.
          </p>
        </div>
      </div>
    </footer>
  );
}
