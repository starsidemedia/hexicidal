import { site, aboutBullets } from "@/lib/site-config";
import { SparkIcon } from "./icons";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="grid items-center gap-10 md:grid-cols-[1fr_1.2fr]">
        <div className="relative mx-auto w-full max-w-sm">
          <div className="card dots aspect-[4/5] rotate-2 bg-pop-cyan p-2">
            <div className="flex h-full w-full items-center justify-center rounded-xl border-[3px] border-ink bg-white">
              {/* Drop a real photo at /public/portrait.jpg and swap this block for <Image/> */}
              <span className="px-6 text-center font-display text-2xl font-black uppercase text-ink/40">
                your face<br />goes here
              </span>
            </div>
          </div>
          <div className="card absolute -right-4 -top-4 -rotate-6 bg-pop-pink px-3 py-1">
            <span className="font-display text-xs font-black uppercase text-white">100% jank</span>
          </div>
        </div>

        <div>
          <span className="pill mb-4 -rotate-1 bg-pop-lime">The Lore</span>
          <h2 className="font-display text-3xl font-black uppercase sm:text-4xl">
            Who is <span className="text-pop-pink">Hexicidal?</span>
          </h2>
          <p className="mt-4 font-body text-lg font-medium">
            {site.description}
            {site.creatorName ? ` I'm ${site.creatorName} — nice to meet you.` : ""}
          </p>

          <ul className="mt-6 space-y-3">
            {aboutBullets.map((b, i) => (
              <li key={i} className="flex items-start gap-3 font-body font-medium">
                <SparkIcon className="mt-1 h-5 w-5 shrink-0 text-pop-pink" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
