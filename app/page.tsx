import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Marquee from "@/components/marquee";
import Socials from "@/components/socials";
import Videos from "@/components/videos";
import About from "@/components/about";
import Support from "@/components/support";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Marquee />
      <Socials />
      <Videos />
      <About />
      <Marquee color="bg-pop-cyan" />
      <Support />
      <Footer />
    </main>
  );
}
