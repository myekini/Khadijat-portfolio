"use client";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github, MapPin, Copy, Send } from "lucide-react";

const MSG = "Are you looking for a QA Engineer? You found one. Let's talk.";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const termRef = useRef<HTMLDivElement>(null);
  const [typed, setTyped] = useState("");
  const [hasTyped, setHasTyped] = useState(false);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Scroll reveal
  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll(".rv");
    if (!els) return;
    const obs = new IntersectionObserver(
      (es) => {
        es.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  // Typewriter on scroll into view — 80ms/char
  useEffect(() => {
    const el = termRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting || hasTyped) return;
        setHasTyped(true);
        let i = 0;
        const type = () => {
          i++;
          setTyped(MSG.slice(0, i));
          if (i < MSG.length) setTimeout(type, 80);
        };
        setTimeout(type, 400);
      },
      { threshold: 0.5 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [hasTyped]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setTimeout(() => setSent(false), 3500);
    }, 2000);
  };

  const copyEmail = async () => {
    await navigator.clipboard.writeText("khadijatmuh@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="contact-diag py-24 relative bg-ink"
    >
      <div className="max-w-[1200px] mx-auto px-10 relative z-10">
        <p className="section-label rv">Contact</p>
        <h2
          className="font-grotesk font-extrabold text-[clamp(32px,4vw,48px)] text-[#F1F5F9] mb-3 rv"
          style={{ "--d": 1 } as React.CSSProperties}
        >
          Let&apos;s Work <em className="grad-text not-italic">Together</em>
        </h2>
        <p
          className="text-[16px] text-dim mb-8 rv"
          style={{ "--d": 2 } as React.CSSProperties}
        >
          Open to QA Engineer · Automation Tester · QA Analyst roles — remote or
          hybrid.
        </p>

        {/* Terminal prompt */}
        <div
          ref={termRef}
          className="rv inline-flex items-center gap-3 bg-ink-2 border border-line rounded-lg px-6 py-4 font-mono text-[15px] mb-14 max-w-2xl"
          style={{ "--d": 2 } as React.CSSProperties}
        >
          <span className="text-cyan font-bold">&gt;</span>
          <span className="text-green">{typed}</span>
          <span className="text-cyan blink-cursor">█</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_.85fr] gap-16">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="rv flex flex-col gap-5"
            style={{ "--d": 3 } as React.CSSProperties}
          >
            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] font-semibold text-[#F1F5F9]">
                Name
              </label>
              <Input placeholder="Your name" required />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] font-semibold text-[#F1F5F9]">
                Email
              </label>
              <Input type="email" placeholder="your@email.com" required />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[13px] font-semibold text-[#F1F5F9]">
                Message
              </label>
              <Textarea
                placeholder="Tell me about the role or project..."
                required
              />
            </div>
            <Button
              type="submit"
              disabled={sending || sent}
              className="self-start flex items-center gap-2"
              variant={(sent ? "ghost" : "default") as "ghost" | "default"}
            >
              {sent ? (
                "Sent ✓"
              ) : sending ? (
                "Sending…"
              ) : (
                <>
                  <Send size={15} /> Send Message
                </>
              )}
            </Button>
          </form>

          {/* Info */}
          <div
            className="rv flex flex-col pt-[2px]"
            style={{ "--d": 4 } as React.CSSProperties}
          >
            {[
              {
                icon: Mail,
                label: "Email",
                value: "khadijatmuh@gmail.com",
                href: "mailto:khadijatmuh@gmail.com",
                action: { icon: Copy, fn: copyEmail, done: copiedEmail },
              },
              {
                icon: Linkedin,
                label: "LinkedIn",
                value: "linkedin.com/in/khadijat-muhammad",
                href: "https://linkedin.com/in/khadijat-muhammad",
              },
              {
                icon: Github,
                label: "GitHub",
                value: "github.com/khadijatmuh",
                href: "https://github.com/khadijatmuh",
              },
              {
                icon: MapPin,
                label: "Location",
                value: "Lagos, Nigeria · Open to Remote 🌍",
                href: null,
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-4 py-5 border-b border-line first:border-t first:border-line"
              >
                <div className="w-10 h-10 rounded-[10px] bg-[rgba(0,194,255,.07)] border border-[rgba(0,194,255,.15)] flex items-center justify-center text-cyan flex-shrink-0">
                  <item.icon size={17} />
                </div>
                <div className="flex-1 flex flex-col gap-0.5">
                  <span className="text-[11px] font-semibold uppercase tracking-[.07em] text-muted">
                    {item.label}
                  </span>
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[#F1F5F9] hover:text-cyan transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-sm text-[#F1F5F9]">{item.value}</span>
                  )}
                </div>
                {item.action && (
                  <button
                    onClick={item.action.fn}
                    className={`p-1.5 rounded-lg transition-all duration-200 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan ${item.action.done ? "text-green" : "text-muted hover:text-cyan"}`}
                    aria-label="Copy email"
                  >
                    <Copy size={16} />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
