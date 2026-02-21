"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    close();
    const el = document.querySelector(href);
    if (!el) return;
    window.scrollTo({
      top: (el as HTMLElement).offsetTop - 72,
      behavior: "smooth",
    });
  };

  return (
    <>
      <header
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-50 h-[72px] border-b transition-[background,border-color] duration-300 animate-[navIn_.6s_.15s_both] ${
          scrolled
            ? "bg-[rgba(7,11,22,.88)] backdrop-blur-xl border-line"
            : "bg-transparent border-transparent"
        }`}
      >
        <nav
          className="max-w-[1200px] mx-auto px-10 h-full flex items-center justify-between"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <a
            href="#hero"
            className="flex items-center gap-3 group"
            aria-label="Home"
            onClick={(e) => handleNav(e, "#hero")}
          >
            <span className="w-[38px] h-[38px] grid place-items-center border border-[rgba(0,194,255,.5)] rounded-[9px] font-mono font-bold text-[13px] text-cyan flex-shrink-0 group-hover:border-cyan group-hover:shadow-[0_0_14px_rgba(0,194,255,.25)] transition-[border-color,box-shadow] duration-200">
              KM
            </span>
            <span className="font-grotesk font-bold text-[15px] text-[#F1F5F9] hidden sm:block">
              Khadijat Muhammad
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden lg:flex gap-8" role="list">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm font-medium text-dim hover:text-[#F1F5F9] transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:h-px after:w-0 after:bg-grad after:bg-[image:var(--grad)] hover:after:w-full after:transition-[width] after:duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:rounded-sm"
                  onClick={(e) => handleNav(e, l.href)}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Hire Me CTA */}
          <Button variant="hire" asChild className="hidden lg:inline-flex">
            <a href="#contact" onClick={(e) => handleNav(e, "#contact")}>
              Hire Me →
            </a>
          </Button>

          {/* Hamburger */}
          <button
            id="hamburger-btn"
            className="lg:hidden flex flex-col gap-[6px] p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan rounded"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <X size={20} className="text-[#F1F5F9]" />
            ) : (
              <Menu size={20} className="text-[#F1F5F9]" />
            )}
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      {open && (
        <div className="fixed top-[72px] left-0 right-0 z-40 bg-[rgba(7,11,22,.97)] backdrop-blur-2xl border-b border-line px-5 pb-10 pt-8 flex flex-col gap-8">
          <ul className="flex flex-col gap-5">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-2xl font-bold text-dim hover:text-[#F1F5F9] transition-colors"
                  onClick={(e) => handleNav(e, l.href)}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <Button variant="hire" asChild className="self-start">
            <a href="#contact" onClick={(e) => handleNav(e, "#contact")}>
              Hire Me →
            </a>
          </Button>
        </div>
      )}
    </>
  );
}
