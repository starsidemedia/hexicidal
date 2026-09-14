import { links, supportTiers } from "@/lib/site-config";
import { PatreonIcon, HeartIcon } from "./icons";

export default function Support() {
  return (
    <section id="support" className="border-y-[3px] border-ink bg-pop-yellow/30">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="mb-10 text-center">
          <span className="pill mb-4 rotate-1 bg-pop-pink text-white">Support the channel</span>
          <h2 className="font-display text-3xl font-black uppercase sm:text-4xl">
            Keep the <span className="text-pop-pink">content</span> coming
          </h2>
          <p className="mx-auto mt-3 max-w-xl font-body text-lg font-medium">
            Every patron and donation funds more videos, more product, and more market breakdowns.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {supportTiers.map((tier, i) => (
            <div
              key={tier.name}
              className={`card relative flex flex-col p-6 ${tier.featured ? "md:-translate-y-3 shadow-pop-lg" : ""} ${
                i % 2 === 0 ? "rotate-1" : "-rotate-1"
              }`}
            >
              {tier.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border-[3px] border-ink bg-pop-pink px-3 py-0.5 font-display text-xs font-black uppercase text-white">
                  Most popular
                </span>
              )}
              <span className={`mb-3 inline-block w-fit rounded-lg border-[3px] border-ink ${tier.color} px-3 py-1 font-display text-sm font-black uppercase`}>
                {tier.name}
              </span>
              <p className="font-display text-4xl font-black">
                {tier.price}
                <span className="font-body text-base font-medium text-ink/60">/mo</span>
              </p>
              <ul className="mt-4 flex-1 space-y-2">
                {tier.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-2 font-body text-sm font-medium">
                    <span className="text-pop-pink">✦</span> {perk}
                  </li>
                ))}
              </ul>
              <a href={links.patreon} target="_blank" rel="noopener noreferrer" className="btn mt-6 bg-pop-pink text-white">
                <PatreonIcon className="h-5 w-5" /> Join
              </a>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 text-center">
          <p className="font-body font-medium">Not into subscriptions? Toss a one-time tip in the jar.</p>
          <a href={links.donate} target="_blank" rel="noopener noreferrer" className="btn bg-white">
            <HeartIcon className="h-5 w-5 text-pop-pink" /> One-time donation
          </a>
        </div>
      </div>
    </section>
  );
}
