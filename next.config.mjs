import fs from "node:fs";
import path from "node:path";

// Pull Tracker pages that were renamed keep working: each opening's data file
// lists its old addresses ("aliases"), and they redirect to the current one.
function pullRedirects() {
  const dir = path.join(process.cwd(), "data", "openings");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".json"))
    .flatMap((f) => {
      const o = JSON.parse(fs.readFileSync(path.join(dir, f), "utf8"));
      return (o.aliases || [])
        .filter((a) => a && a !== o.slug)
        .map((a) => ({ source: `/pulls/${a}`, destination: `/pulls/${o.slug}`, permanent: true }));
    });
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "i.ytimg.com" },
      { protocol: "https", hostname: "img.youtube.com" },
    ],
  },
  async redirects() {
    return pullRedirects();
  },
};

export default nextConfig;
