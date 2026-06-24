// ============================================================================
//  HEXICIDAL — SITE CONFIG
//  Edit everything here. This is the single source of truth for the whole site.
//  Replace the TODO placeholders with your real links/handles.
// ============================================================================

export const site = {
  name: "HEXICIDAL",
  tagline: "MTG chaos, memes, and content that should probably be banned.",
  // Short blurb used in the hero + page metadata.
  description:
    "Hexicidal is a Magic: The Gathering content creator making YouTube, " +
    "Instagram, and TikTok videos packed with memes, jank, and questionable life choices.",
  // Used for <meta> tags + canonical URLs. Update to your real domain later.
  url: "https://hexicidal.vercel.app",
  // Shows under the name in the hero. Set to your real first name or leave "".
  creatorName: "",
  email: "TODO: your-public-email@example.com",
};

// ---------------------------------------------------------------------------
//  SOCIAL / PLATFORM LINKS  — replace the "#" / TODO values
// ---------------------------------------------------------------------------
export const links = {
  youtube: "https://youtube.com/@hexicidal", // TODO: real channel URL
  instagram: "https://instagram.com/hexicidal", // TODO: real handle URL
  tiktok: "https://tiktok.com/@hexicidal", // TODO: real handle URL
  patreon: "https://patreon.com/hexicidal", // TODO: real patreon URL
  // Donations: swap to your Ko-fi / PayPal / Buy Me a Coffee link.
  donate: "https://ko-fi.com/hexicidal", // TODO
  // Optional: Twitch / Discord / Twitter-X. Leave "" to hide them.
  twitch: "",
  discord: "",
  twitter: "",
};

// ---------------------------------------------------------------------------
//  FEATURED VIDEOS  — paste YouTube video IDs (the part after watch?v=)
//  Example URL https://www.youtube.com/watch?v=dQw4w9WgXcQ  ->  id: "dQw4w9WgXcQ"
//  Leave the array as-is for now; replace with your real video IDs.
// ---------------------------------------------------------------------------
export const featuredVideos: { id: string; title: string }[] = [
  { id: "dQw4w9WgXcQ", title: "TODO: Replace with a real video" },
  { id: "dQw4w9WgXcQ", title: "TODO: Replace with a real video" },
  { id: "dQw4w9WgXcQ", title: "TODO: Replace with a real video" },
];

// ---------------------------------------------------------------------------
//  PATREON / SUPPORT TIERS  — edit freely
// ---------------------------------------------------------------------------
export const supportTiers = [
  {
    name: "Mana Dork",
    price: "$3",
    color: "bg-pop-cyan",
    perks: ["Name in the credits", "Patron-only Discord role", "My eternal gratitude"],
  },
  {
    name: "Planeswalker",
    price: "$7",
    color: "bg-pop-yellow",
    featured: true,
    perks: ["Everything below", "Early access to videos", "Vote on deck builds", "Monthly Q&A"],
  },
  {
    name: "Eldrazi Patron",
    price: "$15",
    color: "bg-pop-pink",
    perks: ["Everything below", "Shout-out in a video", "Submit your jankiest decks", "Exclusive streams"],
  },
];

// ---------------------------------------------------------------------------
//  ABOUT  — bullet facts shown on the about section
// ---------------------------------------------------------------------------
export const aboutBullets = [
  "Magic: The Gathering degenerate since [TODO year].",
  "I build the decks your LGS warned you about.",
  "Memes first, win-cons... eventually.",
  "New videos every week across YouTube, TikTok & Insta.",
];
