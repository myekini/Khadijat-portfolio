"use client";
import { useEffect, useRef } from "react";
import { ShieldCheck, Zap, Award } from "lucide-react";

const CERTS = [
  {
    icon: ShieldCheck,
    name: "Foundations of Software Testing and Validation",
    org: "University of Leeds",
    year: "2024",
    detail:
      "Software Testing, Functional & Non-functional Testing, SDLC, STLC, Test Case Development.",
    verify: "https://www.coursera.org",
  },
  {
    icon: Zap,
    name: "Automation Software Testing Certification",
    org: "Trevotech Academy",
    year: "2024",
    detail:
      "Cypress, BDD (Cucumber + Gherkin), CI/CD pipelines, API and Performance Testing, Test Optimisation.",
    verify: null,
  },
  {
    icon: Award,
    name: "HNG Finalist Certificate",
    org: "HNG13 Internship",
    year: "2024",
    detail:
      "Test plan execution, API & functional tests on Storytime4kids app, bug tracking in ClickUp, Newman CLI automation.",
    verify: null,
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
    <section id="certifications" ref={sectionRef} className="section-alt py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <p className="section-label rv">Certifications</p>
        <h2
          className="font-grotesk font-extrabold text-[clamp(32px,4vw,48px)] section-heading mb-14 rv"
          style={{ "--d": 1 } as React.CSSProperties}
        >
          My <em className="grad-text not-italic">Credentials</em>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTS.map((cert, i) => (
            <div
              key={cert.name}
              className="rv cert-card relative card-bg border border-[var(--color-line)] rounded-[var(--r)] p-8 flex flex-col gap-4 overflow-hidden hover:-translate-y-1.5 hover:border-[rgba(0,194,255,.4)] hover:shadow-[0_20px_60px_rgba(0,0,0,.2)] transition-all duration-300"
              style={{ "--d": i + 2 } as React.CSSProperties}
            >
              {/* Holographic shimmer */}
              <div className="cert-holo" aria-hidden="true" />

              <div className="w-[52px] h-[52px] rounded-[13px] bg-[rgba(0,194,255,.07)] border border-[rgba(0,194,255,.18)] flex items-center justify-center text-cyan flex-shrink-0">
                <cert.icon size={24} />
              </div>

              <div className="flex flex-col gap-1 flex-1">
                <h3 className="font-grotesk text-[17px] font-bold section-heading leading-snug">
                  {cert.name}
                </h3>
                <p className="text-[13px] font-semibold text-cyan mt-1">
                  {cert.org}
                </p>
                <p className="font-mono text-[12px] text-[var(--color-muted)]">
                  {cert.year}
                </p>
                <p className="text-[13px] text-[var(--color-dim)] leading-snug mt-2">
                  {cert.detail}
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
                <span className="text-[13px] text-[var(--color-muted)] mt-auto italic">
                  Certificate issued · verification link pending
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Education */}
        <div className="mt-16 rv" style={{ "--d": 5 } as React.CSSProperties}>
          <p className="section-label mb-6">Education</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                degree: "B.Sc. Human Physiology",
                school: "University of Ilorin",
                year: "Graduated 2017",
              },
              {
                degree: "Postgraduate Diploma in Education (Natural Sciences)",
                school: "Lagos State University, Ojo",
                year: "Graduated 2023",
              },
            ].map((edu) => (
              <div
                key={edu.degree}
                className="card-bg border border-[var(--color-line)] rounded-[var(--r)] p-7 hover:border-[rgba(0,194,255,.25)] transition-all duration-200"
              >
                <h3 className="font-grotesk text-[17px] font-bold section-heading mb-1">
                  {edu.degree}
                </h3>
                <p className="text-sm text-cyan font-medium">{edu.school}</p>
                <p className="font-mono text-[12px] text-[var(--color-muted)] mt-1">
                  {edu.year}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
