"use client";
import { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  CheckCircle2,
  Cpu,
  GitCommit,
  PlayCircle,
  MonitorCheck,
} from "lucide-react";

const PIPELINE_NODES = [
  { icon: GitCommit, label: "Commit", pass: false },
  { icon: PlayCircle, label: "Build", pass: false },
  { icon: MonitorCheck, label: "Test", pass: false },
  { icon: Cpu, label: "Deploy", pass: false },
  { icon: CheckCircle2, label: "✓ PASS", pass: true },
];

const PROJECTS = [
  {
    title: "E-Commerce QA Framework",
    desc: "Full regression suite for a React e-commerce app: 80+ Cypress UI specs, 50 Postman API assertions, JMeter load tests at 500 RPS, and a GitHub Actions pipeline that blocks PRs on failure.",
    chips: ["Cypress", "Postman", "JMeter", "GitHub Actions", "TypeScript"],
    status: "complete",
    href: "https://github.com/khadijatmuh",
  },
  {
    title: "API Contract Testing Suite",
    desc: "Newman-based contract tests for a REST API, auto-generating HTML reports on every CI run. Catches breaking changes before they reach staging.",
    chips: ["Postman", "Newman", "GitHub Actions", "JSON Schema"],
    status: "complete",
    href: "https://github.com/khadijatmuh",
  },
  {
    title: "Bug Report Automation",
    desc: "Python script that parses Cypress JSON output and auto-files JIRA tickets with severity, steps to reproduce, and screenshot attachments.",
    chips: ["Python", "JIRA API", "Cypress", "Automation"],
    status: "wip",
    href: "https://github.com/khadijatmuh",
  },
];

function PipelineNode({
  icon: Icon,
  label,
  lit,
  isPass,
}: {
  icon: React.ElementType;
  label: string;
  lit: boolean;
  isPass: boolean;
}) {
  return (
    <div className="flex flex-col items-center gap-2 flex-shrink-0">
      <div
        className={`pipe-node-icon${lit ? (isPass ? " pass-lit" : " lit") : ""}`}
      >
        <Icon size={22} />
      </div>
      <span
        className={`font-mono text-[11px] ${isPass && lit ? "text-green" : "text-muted"}`}
      >
        {label}
      </span>
    </div>
  );
}

export default function Projects() {
  const pipeRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [litIdx, setLitIdx] = useState(-1);

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

  useEffect(() => {
    const el = pipeRef.current;
    if (!el) return;
    const pipeObs = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        pipeObs.disconnect();
        let cur = 0;
        const step = () => {
          setLitIdx(cur);
          cur++;
          if (cur < PIPELINE_NODES.length) setTimeout(step, 650);
          else
            setTimeout(() => {
              setLitIdx(-1);
              setTimeout(() => {
                cur = 0;
                step();
              }, 400);
            }, 2800);
        };
        step();
      },
      { threshold: 0.3 },
    );
    pipeObs.observe(el);
    return () => pipeObs.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-24">
      <div className="max-w-[1200px] mx-auto px-10">
        <p className="section-label rv">Projects</p>
        <h2
          className="font-grotesk font-extrabold text-[clamp(32px,4vw,48px)] text-[#F1F5F9] mb-14 rv"
          style={{ "--d": 1 } as React.CSSProperties}
        >
          Things I've{" "}
          <em className="grad-text not-italic">Built &amp; Tested</em>
        </h2>

        {/* Featured project */}
        <div
          className="rv grid grid-cols-1 lg:grid-cols-2 bg-ink-2 border border-line rounded-[20px] overflow-hidden mb-8 hover:border-[rgba(0,194,255,.35)] hover:shadow-[0_24px_80px_rgba(0,0,0,.4)] transition-all duration-300"
          style={{ "--d": 2 } as React.CSSProperties}
        >
          {/* Left */}
          <div className="p-12 flex flex-col gap-4">
            <span className="font-mono text-[11px] font-bold uppercase tracking-[.1em] text-cyan">
              Featured Project
            </span>
            <h3 className="font-grotesk text-[28px] font-extrabold text-[#F1F5F9]">
              QA Framework — Full Stack
            </h3>
            <p className="text-[15px] text-dim leading-[1.7]">
              A production-ready, 4-layer testing framework:{" "}
              <strong className="text-[#F1F5F9]">UI automation</strong>{" "}
              (Cypress),{" "}
              <strong className="text-[#F1F5F9]">API validation</strong>{" "}
              (Postman/Newman),{" "}
              <strong className="text-[#F1F5F9]">performance testing</strong>{" "}
              (JMeter), and{" "}
              <strong className="text-[#F1F5F9]">CI/CD integration</strong>{" "}
              (GitHub Actions) — all wired together and deployable in minutes.
            </p>
            <ul className="flex flex-col gap-2">
              {[
                "Blocks PRs on failing tests automatically",
                "Newman generates HTML reports on every run",
                "Zero-config setup — clone, install, run",
              ].map((f) => (
                <li
                  key={f}
                  className="flex items-center gap-2 text-sm text-dim"
                >
                  <CheckCircle2
                    size={15}
                    className="text-green flex-shrink-0"
                  />
                  {f}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 mt-2">
              {[
                "Cypress",
                "Postman",
                "JMeter",
                "GitHub Actions",
                "TypeScript",
              ].map((c) => (
                <Badge key={c}>{c}</Badge>
              ))}
            </div>
            <a
              href="https://github.com/khadijatmuh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-dim hover:text-cyan transition-colors mt-auto self-start"
            >
              <Github size={16} /> View on GitHub
            </a>
          </div>

          {/* Right — CI/CD pipeline visual */}
          <div
            ref={pipeRef}
            id="pipeline"
            className="bg-ink border-t lg:border-t-0 lg:border-l border-line flex flex-col items-center justify-center gap-5 p-10"
          >
            {/* Pipeline nodes + connectors */}
            <div className="flex items-center gap-0 flex-wrap justify-center row-gap-3">
              {PIPELINE_NODES.map((node, i) => (
                <div key={i} className="flex items-center">
                  <PipelineNode
                    icon={node.icon}
                    label={node.label}
                    isPass={node.pass}
                    lit={litIdx >= i}
                  />
                  {i < PIPELINE_NODES.length - 1 && (
                    <div
                      className={`flex items-center w-11 flex-shrink-0 ${litIdx >= i + 1 ? "pc-lit" : ""}`}
                    >
                      <svg
                        width="44"
                        height="4"
                        className="pc-svg overflow-visible"
                      >
                        <line
                          className="pc-track"
                          x1="0"
                          y1="2"
                          x2="44"
                          y2="2"
                        />
                        <line
                          className="pc-dash"
                          x1="0"
                          y1="2"
                          x2="44"
                          y2="2"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <p className="font-mono text-[11px] text-muted text-center">
              CI/CD pipeline · auto-gates on every commit
            </p>
          </div>
        </div>

        {/* Other projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROJECTS.map((p, i) => (
            <div
              key={p.title}
              className="rv proj-card relative bg-ink-2 border border-line rounded-[var(--r)] p-7 flex flex-col gap-3 overflow-hidden hover:-translate-y-1.5 hover:border-[rgba(0,194,255,.3)] hover:shadow-[0_16px_60px_rgba(0,0,0,.4)] transition-all duration-200"
              style={{ "--d": i + 3 } as React.CSSProperties}
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-grotesk text-[18px] font-bold text-[#F1F5F9]">
                  {p.title}
                </h3>
                <Badge
                  variant={p.status === "complete" ? "success" : "warning"}
                >
                  {p.status === "complete" ? "Live" : "WIP"}
                </Badge>
              </div>
              <p className="text-sm text-dim leading-[1.65] flex-1">{p.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {p.chips.map((c) => (
                  <Badge key={c}>{c}</Badge>
                ))}
              </div>
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-muted hover:text-cyan transition-colors mt-auto"
              >
                <Github size={14} /> View Repo
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
