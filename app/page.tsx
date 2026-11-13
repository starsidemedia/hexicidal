import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Marquee from "@/components/marquee";
import Socials from "@/components/socials";
import Videos from "@/components/videos";
import TikToks from "@/components/tiktoks";
import About from "@/components/about";
import Support from "@/components/support";
import Footer from "@/components/footer";
import PullTeaser from "@/components/pull-teaser";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Marquee />
      <Socials />
      <PullTeaser />
      <Videos />
      <TikToks />
      <About />
      <Marquee color="bg-pop-cyan" />
      <Support />
      <Footer />
    </main>
  );
}
