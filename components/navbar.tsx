"use client";

import { useState } from "react";
import { site, links } from "@/lib/site-config";

const navItems = [
  { label: "Videos", href: "#videos" },
  { label: "About", href: "#about" },
  { label: "Support", href: "#support" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-[3px] border-ink bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a href="#top" className="font-display text-xl font-black uppercase tracking-tight sm:text-2xl">
          <span className="text-pop-pink">HEX</span>
          <span>ICIDAL</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-4 py-2 font-display text-sm font-black uppercase tracking-wide transition-colors hover:bg-pop-yellow"
            >
              {item.label}
            </a>
          ))}
          <a href={links.patreon} target="_blank" rel="noopener noreferrer" className="btn ml-2 bg-pop-pink text-white">
            Patreon
          </a>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="rounded-lg border-[3px] border-ink bg-white p-2 shadow-pop md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <div className="flex h-5 w-6 flex-col justify-between">
            <span className="h-[3px] w-full bg-ink" />
            <span className="h-[3px] w-full bg-ink" />
            <span className="h-[3px] w-full bg-ink" />
          </div>
        </button>
      </div>

      {open && (
        <div className="border-t-[3px] border-ink bg-cream md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg border-[3px] border-ink bg-white px-4 py-3 font-display text-sm font-black uppercase shadow-pop"
              >
                {item.label}
              </a>
            ))}
            <a
              href={links.patreon}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="btn bg-pop-pink text-white"
            >
              Join the Patreon
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
