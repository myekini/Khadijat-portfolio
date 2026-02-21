"use client";
import { useEffect, useRef } from "react";
import { ShieldCheck, Zap, Code2, Cloud } from "lucide-react";

const CERTS = [
  {
    icon: ShieldCheck,
    name: "ISTQB Certified Tester Foundation Level",
    org: "ISTQB — International Software Testing Qualifications Board",
    year: "In Progress · 2025",
    verify: null,
  },
  {
    icon: Zap,
    name: "Cypress End-to-End Testing",
    org: "Udemy · Bondar Academy",
    year: "2024",
    verify: "https://udemy.com",
  },
  {
    icon: Code2,
    name: "API Testing with Postman",
    org: "Coursera · Meta Developer Track",
    year: "2024",
    verify: "https://coursera.org",
  },
  {
    icon: Cloud,
    name: "GitHub Actions CI/CD",
    org: "GitHub Learning Lab",
    year: "2024",
    verify: "https://github.com",
  },
  {
    icon: ShieldCheck,
    name: "Software Testing Fundamentals",
    org: "ALX Africa",
    year: "2023",
    verify: null,
  },
  {
    icon: Zap,
    name: "JMeter Performance Testing",
    org: "Udemy",
    year: "2024",
    verify: "https://udemy.com",
  },
];

export default function Certifications() {
  const sectionRef = useRef<HTMLElement>(null);
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

  return (
    <section id="certifications" ref={sectionRef} className="py-24">
      <div className="max-w-[1200px] mx-auto px-10">
        <p className="section-label rv">Certifications</p>
        <h2
          className="font-grotesk font-extrabold text-[clamp(32px,4vw,48px)] text-[#F1F5F9] mb-14 rv"
          style={{ "--d": 1 } as React.CSSProperties}
        >
          <em className="grad-text not-italic">Credentials</em>
        </h2>

        {/* Desktop: 3-col grid · Mobile: horizontal scroll */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-md:flex max-md:overflow-x-auto max-md:pb-4 max-md:snap-x max-md:snap-mandatory max-md:gap-4 no-scrollbar">
          {CERTS.map((cert, i) => (
            <div
              key={cert.name}
              className="rv cert-card relative bg-ink-2 border border-line rounded-[var(--r)] p-8 flex flex-col gap-4 overflow-hidden hover:-translate-y-1.5 hover:border-[rgba(0,194,255,.4)] hover:shadow-[0_20px_60px_rgba(0,0,0,.35)] transition-all duration-300 max-md:min-w-[300px] max-md:snap-center"
              style={{ "--d": i + 2 } as React.CSSProperties}
            >
              {/* Holographic shimmer overlay */}
              <div className="cert-holo" aria-hidden="true" />

              <div className="w-[52px] h-[52px] rounded-[13px] bg-[rgba(0,194,255,.07)] border border-[rgba(0,194,255,.18)] flex items-center justify-center text-cyan">
                <cert.icon size={24} />
              </div>

              <div>
                <h3 className="font-grotesk text-[17px] font-bold text-[#F1F5F9] mb-1">
                  {cert.name}
                </h3>
                <p className="text-[13px] text-dim leading-snug">{cert.org}</p>
                <p className="font-mono text-[12px] text-muted mt-2">
                  {cert.year}
                </p>
              </div>

              {cert.verify ? (
                <a
                  href={cert.verify}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[13px] font-semibold text-cyan mt-auto hover:gap-2 transition-all duration-200"
                >
                  Verify →
                </a>
              ) : (
                <span className="text-[13px] text-muted mt-auto italic">
                  Pending verification
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
