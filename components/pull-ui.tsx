import Link from "next/link";
import { money, signed, type Opening, type PullCard } from "@/lib/openings";

export function StatTile({
  label,
  value,
  color = "bg-white",
  tilt = "rotate-1",
  note,
}: {
  label: string;
  value: string;
  color?: string;
  tilt?: string;
  note?: string;
}) {
  return (
    <div className={`card ${color} ${tilt} p-5`}>
      <p className="font-display text-xs font-black uppercase tracking-wider text-ink/60">{label}</p>
      <p className="mt-1 font-display text-3xl font-black sm:text-4xl">{value}</p>
      {note && <p className="mt-1 font-body text-sm font-medium text-ink/60">{note}</p>}
    </div>
  );
}

export function ProfitBadge({ profit, big = false }: { profit: number | null; big?: boolean }) {
  if (profit === null) return null;
  const up = profit >= 0;
  return (
    <span
      className={`inline-block rounded-lg border-[3px] border-ink px-2 py-0.5 font-display font-black uppercase ${
        up ? "bg-pop-lime" : "bg-pop-pink text-white"
      } ${big ? "text-xl sm:text-2xl" : "text-xs"}`}
    >
      {up ? "Profit" : "Loss"} {signed(profit)}
    </span>
  );
}

export function KindPill({ o }: { o: Pick<Opening, "kind" | "foil"> }) {
  return (
    <span className={`pill ${o.kind === "secret-lair" ? "bg-pop-purple text-white" : "bg-pop-cyan"} text-xs`}>
      {o.kind === "secret-lair" ? "Secret Lair" : "Pack"}
      {o.foil ? " · Foil" : ""}
    </span>
  );
}

export function CardTile({ card, opening, index = 0 }: { card: PullCard; opening?: Opening; index?: number }) {
  const tilt = index % 3 === 0 ? "rotate-1" : index % 3 === 1 ? "-rotate-1" : "rotate-0";
  return (
    <figure className={`card relative overflow-hidden p-2 ${tilt} ${card.hit ? "bg-pop-yellow" : "bg-white"}`}>
      {card.hit && (
        <span className="absolute left-3 top-3 z-10 rounded-md border-[3px] border-ink bg-pop-pink px-2 py-0.5 font-display text-[10px] font-black uppercase text-white">
          Big hit
        </span>
      )}
      <a href={card.scryfall || undefined} target="_blank" rel="noopener noreferrer">
        {card.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={card.image}
            alt={card.name}
            loading="lazy"
            className="aspect-[488/680] w-full rounded-lg border-2 border-ink object-cover"
          />
        ) : (
          <div className="flex aspect-[488/680] w-full items-center justify-center rounded-lg border-2 border-ink bg-cream p-3 text-center font-display text-sm font-black uppercase">
            {card.name}
          </div>
        )}
      </a>
      <figcaption className="px-1 pb-1 pt-2">
        <p className="font-display text-sm font-black uppercase leading-tight">{card.name}</p>
        <p className="mt-0.5 truncate font-body text-xs font-medium text-ink/60" title={card.printing}>
          {card.printing}
        </p>
        <div className="mt-1 flex items-center justify-between gap-2">
          <span className="font-display text-lg font-black">{card.price !== null ? money(card.price) : "—"}</span>
          {opening && (
            <Link href={`/pulls/${opening.slug}`} className="truncate font-body text-xs font-bold text-pop-pink hover:underline">
              {opening.title}
            </Link>
          )}
        </div>
      </figcaption>
    </figure>
  );
}

export function PricesNote({ asOf }: { asOf?: string }) {
  return (
    <p className="font-body text-xs font-medium text-ink/50">
      Prices are TCGplayer market values via Scryfall{asOf ? `, captured ${asOf}` : ""}. They move daily. Not financial
      advice. Card images © Wizards of the Coast, via Scryfall.
    </p>
  );
}
