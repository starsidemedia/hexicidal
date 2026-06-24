const items = [
  "NEW VIDEO EVERY WEEK",
  "JANK > WINNING",
  "MTG MEMES",
  "SUBSCRIBE OR GET MILLED",
  "TAP OUT FOR CONTENT",
  "DEGENERATE DECKS ONLY",
];

export default function Marquee({ color = "bg-pop-pink" }: { color?: string }) {
  return (
    <div className={`${color} overflow-hidden border-y-[3px] border-ink py-3`}>
      <div className="flex w-max animate-marquee">
        {[0, 1].map((dup) => (
          <ul key={dup} className="flex items-center" aria-hidden={dup === 1}>
            {items.map((item, i) => (
              <li key={`${dup}-${i}`} className="flex items-center font-display text-lg font-black uppercase tracking-wide text-white sm:text-2xl">
                <span className="px-6">{item}</span>
                <span className="text-2xl">✦</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
