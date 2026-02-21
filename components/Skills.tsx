"use client";
import { useEffect, useRef } from "react";
import { Badge } from "@/components/ui/badge";
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
      { name: "Playwright", level: 3 },
      { name: "Selenium", level: 3 },
      { name: "TestRail", level: 4 },
    ],
  },
  {
    icon: Webhook,
    title: "API Testing",
    items: [
      { name: "Postman", level: 5 },
      { name: "Newman", level: 4 },
      { name: "REST API", level: 4 },
      { name: "GraphQL", level: 3 },
    ],
  },
  {
    icon: Activity,
    title: "Performance",
    items: [
      { name: "JMeter", level: 4 },
      { name: "k6", level: 2 },
      { name: "Gatling", level: 2 },
      { name: "LoadRunner", level: 2 },
    ],
  },
  {
    icon: GitBranch,
    title: "CI/CD",
    items: [
      { name: "GitHub Actions", level: 5 },
      { name: "Jenkins", level: 3 },
      { name: "Docker", level: 3 },
      { name: "CircleCI", level: 2 },
    ],
  },
  {
    icon: Bug,
    title: "Bug Tracking",
    items: [
      { name: "JIRA", level: 5 },
      { name: "ClickUp", level: 5 },
      { name: "Linear", level: 3 },
      { name: "Notion", level: 4 },
    ],
  },
  {
    icon: Terminal,
    title: "Languages",
    items: [
      { name: "TypeScript", level: 4 },
      { name: "JavaScript", level: 4 },
      { name: "Python", level: 3 },
      { name: "SQL", level: 3 },
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
    <section id="skills" ref={sectionRef} className="py-24">
      <div className="max-w-[1200px] mx-auto px-10">
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-6 mb-14">
          <div>
            <p className="section-label rv">Skills &amp; Tools</p>
            <h2
              className="font-grotesk font-extrabold text-[clamp(32px,4vw,48px)] text-[#F1F5F9] rv"
              style={{ "--d": 1 } as React.CSSProperties}
            >
              My <em className="grad-text not-italic">Toolkit</em>
            </h2>
          </div>
          <div className="bg-ink-2 border border-line rounded-lg px-5 py-3 font-mono text-[13px] self-end rv">
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
              className="rv bg-ink-2 border border-line rounded-[var(--r)] p-7 hover:border-[rgba(0,194,255,.3)] hover:shadow-[0_8px_40px_rgba(0,0,0,.3)] transition-all duration-200"
              style={{ "--d": ci } as React.CSSProperties}
            >
              <div className="flex items-center gap-2 text-cyan text-xs font-bold uppercase tracking-[.09em] mb-5">
                <cat.icon size={14} />
                {cat.title}
              </div>
              <ul className="flex flex-col divide-y divide-line">
                {cat.items.map((skill) => (
                  <li
                    key={skill.name}
                    className="flex items-center justify-between py-[11px] first:pt-0 last:pb-0"
                  >
                    <span className="text-sm font-medium text-[#F1F5F9]">
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
