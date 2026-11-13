import Link from "next/link";
import { getOpenings, money, signed, totals } from "@/lib/openings";

// Homepage strip: only renders once there's at least one opening on the tracker.
export default function PullTeaser() {
  const openings = getOpenings();
  if (openings.length === 0) return null;
  const t = totals(openings);
  const latest = openings[0];

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="card dots grid items-center gap-6 bg-pop-yellow p-6 sm:p-10 md:grid-cols-[1.3fr_1fr]">
        <div>
          <span className="pill mb-4 -rotate-2 bg-white">Pull Tracker</span>
          <h2 className="font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
            Is it worth <span className="text-pop-pink">cracking?</span>
          </h2>
          <p className="mt-3 max-w-md font-body text-lg font-medium">
            Every opening, priced card by card. Latest: <span className="font-bold">{latest.title}</span> —{" "}
            {money(latest.total)} pulled.
          </p>
          <Link href="/pulls" className="btn mt-6 bg-pop-pink text-white">
            See the receipts →
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="card rotate-1 bg-white p-4">
            <p className="font-display text-xs font-black uppercase text-ink/60">Openings</p>
            <p className="font-display text-3xl font-black">{t.count}</p>
          </div>
          <div className={`card -rotate-1 p-4 ${t.net >= 0 ? "bg-pop-lime" : "bg-pop-pink"}`}>
            <p className="font-display text-xs font-black uppercase text-ink/60">Net</p>
            <p className="font-display text-3xl font-black">{signed(t.net)}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
