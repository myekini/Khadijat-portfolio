"use client";
import { useEffect, useRef } from "react";
import {
  Code2,
  Webhook,
  Activity,
  GitBranch,
  Bug,
  Terminal,
} from "lucide-react";

const CATEGORIES = [
  {
    icon: Code2,
    title: "Automation",
    items: [
      { name: "Cypress", level: 5 },
      { name: "Cucumber BDD", level: 5 },
      { name: "Gherkin", level: 4 },
      { name: "Mocha", level: 4 },
    ],
  },
  {
    icon: Webhook,
    title: "API Testing",
    items: [
      { name: "Postman", level: 5 },
      { name: "Newman CLI", level: 5 },
      { name: "REST APIs", level: 4 },
      { name: "Swagger", level: 4 },
    ],
  },
  {
    icon: Activity,
    title: "Performance",
    items: [
      { name: "JMeter", level: 4 },
      { name: "Load Testing", level: 4 },
      { name: "Non-functional", level: 4 },
      { name: "Smoke Testing", level: 5 },
    ],
  },
  {
    icon: GitBranch,
    title: "CI/CD & Version Control",
    items: [
      { name: "GitHub Actions", level: 4 },
      { name: "Git Bash", level: 4 },
      { name: "VS Code", level: 5 },
      { name: "CI Integration", level: 4 },
    ],
  },
  {
    icon: Bug,
    title: "Bug Tracking",
    items: [
      { name: "ClickUp", level: 5 },
      { name: "JIRA", level: 4 },
      { name: "Excel", level: 4 },
      { name: "Bug Lifecycle", level: 5 },
    ],
  },
  {
    icon: Terminal,
    title: "Languages & Frameworks",
    items: [
      { name: "JavaScript", level: 4 },
      { name: "HTML / CSS", level: 4 },
      { name: "TypeScript", level: 3 },
      { name: "Agile / Scrum", level: 5 },
    ],
  },
];

function Dots({ level }: { level: number }) {
  return (
    <div className="flex gap-1 items-center">
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={`skill-dot${i < level ? " on" : ""}`} />
      ))}
    </div>
  );
}

export default function Skills() {
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
    <section id="skills" ref={sectionRef} className="py-24 section-bg">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-6 mb-14">
          <div>
            <p className="section-label rv">Skills &amp; Tools</p>
            <h2
              className="font-grotesk font-extrabold text-[clamp(32px,4vw,48px)] section-heading rv"
              style={{ "--d": 1 } as React.CSSProperties}
            >
              My <em className="grad-text not-italic">Toolkit</em>
            </h2>
          </div>
          <div className="card-bg border border-[var(--color-line)] rounded-lg px-5 py-3 font-mono text-[13px] self-end rv">
            <span className="sc-kw">const </span>
            <span className="sc-var">qaStack</span>
            <span className="sc-op"> = </span>
            <span className="sc-brace">{"{"}</span>
            <span className="sc-key">tools</span>
            <span className="sc-op">: </span>
            <span className="sc-str">&quot;best-in-class&quot;</span>
            <span className="sc-brace">{"}"}</span>
          </div>
        </div>

        {/* 2×3 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {CATEGORIES.map((cat, ci) => (
            <div
              key={cat.title}
              className="rv card-bg border border-[var(--color-line)] rounded-[var(--r)] p-7 hover:border-[rgba(0,194,255,.3)] hover:shadow-[var(--card-shadow-sm)] transition-all duration-200"
              style={{ "--d": ci } as React.CSSProperties}
            >
              <div className="flex items-center gap-2 text-cyan text-xs font-bold uppercase tracking-[.09em] mb-5">
                <cat.icon size={14} />
                {cat.title}
              </div>
              <ul className="flex flex-col divide-y divide-[var(--color-line)]">
                {cat.items.map((skill) => (
                  <li
                    key={skill.name}
                    className="flex items-center justify-between py-[11px] first:pt-0 last:pb-0"
                  >
                    <span className="text-sm font-medium section-heading">
                      {skill.name}
                    </span>
                    <Dots level={skill.level} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
