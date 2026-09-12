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
  youtube: "https://www.youtube.com/@hexicidal",
  youtubeshorts: "https://www.youtube.com/@hexicidal/shorts",
  instagram: "https://www.instagram.com/hex_icidal/",
  tiktok: "https://www.tiktok.com/@hexicidal",
  patreon: "https://patreon.com/hexicidal", // TODO: real patreon URL
  donate: "https://ko-fi.com/hexicidal", // TODO
  twitch: "",
  discord: "",
  twitter: "",
};

export const handles = {
  youtube: "@hexicidal",
  tiktok: "@hexicidal",
  instagram: "@hex_icidal",
};

// ---------------------------------------------------------------------------
//  FEATURED VIDEOS  — paste YouTube video IDs (the part after watch?v=)
//  Example URL https://www.youtube.com/watch?v=dQw4w9WgXcQ  ->  id: "dQw4w9WgXcQ"
//  Leave the array as-is for now; replace with your real video IDs.
// ---------------------------------------------------------------------------
export const featuredVideos: { id: string; title: string }[] = [
  { id: "kFhYe5fBDKI", title: "Latest Short" },
  { id: "75slmzp8lbY", title: "Latest Short" },
  { id: "JrOsWxw_oFw", title: "Latest Short" },
];

export const featuredTikToks: { id: string }[] = [
  { id: "7682302401134497037" },
  { id: "7682995025017359630" },
  { id: "7684503306277817614" },
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
