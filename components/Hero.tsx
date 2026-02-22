"use client";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

// Brand SVG logos for tool icons — real logos, not generic Lucide icons
const CypressIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M11.998 0C5.366 0 0 5.367 0 12c0 6.634 5.366 12 11.998 12C18.633 24 24 18.634 24 12c0-6.633-5.367-12-12.002-12zM6.37 14.575c.392.523.916.742 1.544.742.35 0 .74-.074 1.063-.26l1.283 1.963c-.609.392-1.567.653-2.391.653-2.695 0-4.588-1.893-4.588-4.641 0-2.74 1.893-4.641 4.588-4.641.824 0 1.782.26 2.391.652L9.977 10.046c-.323-.185-.713-.26-1.063-.26-.628 0-1.152.218-1.544.742-.35.477-.523 1.108-.523 1.472 0 .364.173.993.523 1.575zm11.27 1.588c0 2.5-1.5 3.64-3.9 3.64-1.566 0-2.717-.436-3.544-1.262l1.458-1.457c.346.436.87.653 1.587.653.697 0 1.13-.26 1.13-.956v-6.24h2.27v5.622z"/>
  </svg>
);
const PostmanIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M13.527.099C6.955-.744.942 3.9.099 10.473c-.843 6.572 3.8 12.584 10.373 13.428 6.573.843 12.587-3.801 13.428-10.374C24.744 6.955 20.101.943 13.527.099zm2.471 7.485a.855.855 0 0 0-.593.25l-4.453 4.453-.307-.307-.643-.643c4.389-4.376 5.18-4.418 5.996-3.753zm-4.863 4.861l4.44-4.44a.62.62 0 1 1 .847.903l-4.699 3.844-.588-.307zm.33.532l-1.032-.534 4.083-4.083.223.223zM8.766 12.3c.06 0 4.695 4.72 4.695 4.72l-1.731.22-3.13-3.434.166-1.506zm-1.962 5.275a.158.158 0 0 1-.024-.025l-.006-.007a3.044 3.044 0 0 1-.477-1.445l1.961-1.806 1.592 1.75-3.046 1.533zm3.637-.637l-.185-.204 1.65-.209.02.018-1.485.395zm1.96-.52l-.482-.528.002-.002.48.53zm.586-.155l-2.218-2.435 4.778-3.908.207.205-2.767 6.138z"/>
  </svg>
);
const GitHubActionsIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M10.984 13.836a.5.5 0 0 1-.353-.146l-3.819-3.819a.5.5 0 1 1 .706-.706l3.466 3.466 6.35-6.35a.5.5 0 1 1 .707.707l-6.704 6.703a.5.5 0 0 1-.353.145Z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/>
  </svg>
);
const JMeterIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2a10 10 0 1 1 0 20A10 10 0 0 1 12 2zm-1 5v6l5 3-1 1.73-6-3.5V7h2z"/>
  </svg>
);
const ClickUpIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M.7 17.39l2.63-2.02c1.73 2.25 3.5 3.28 5.53 3.28 2.01 0 3.74-1.01 5.44-3.25l2.65 1.99C14.59 20.5 11.9 22 8.86 22 5.84 22 3.1 20.52.7 17.39zM8.85 2l6.65 5.96-1.8 2-4.85-4.35L3.99 9.96l-1.8-2L8.85 2z"/>
  </svg>
);

const TOOLS = [
  { icon: CypressIcon, label: "Cypress" },
  { icon: PostmanIcon, label: "Postman" },
  { icon: GitHubActionsIcon, label: "GitHub Actions" },
  { icon: JMeterIcon, label: "JMeter" },
  { icon: ClickUpIcon, label: "ClickUp" },
];

const TERM_LINES = [
  { name: "login_flow.cy.ts", ms: "312ms" },
  { name: "checkout_validation.cy.ts", ms: "487ms" },
  { name: "api_endpoints.cy.ts", ms: "156ms" },
  { name: "regression_suite.cy.ts", ms: "891ms" },
];

const MARQUEE = [
  "Cypress",
  "Playwright",
  "Postman",
  "JIRA",
  "ClickUp",
  "JMeter",
  "GitHub Actions",
  "REST API",
  "SQL",
  "TypeScript",
  "Selenium",
  "TestRail",
];

export default function Hero() {
  const cvpRef = useRef<HTMLCanvasElement>(null);
  const [wordsIn, setWordsIn] = useState(false);
  const [subIn, setSubIn] = useState(false);
  const [capIn, setCapIn] = useState(false);
  const [ctasIn, setCtasIn] = useState(false);
  const [toolsIn, setToolsIn] = useState(false);
  const [termLines, setTermLines] = useState<boolean[]>([
    false,
    false,
    false,
    false,
  ]);
  const [summaryIn, setSummaryIn] = useState(false);
  const [progW, setProgW] = useState(0);
  const [progPct, setProgPct] = useState(0);
  const [tooltip, setTooltip] = useState({
    label: "",
    x: 0,
    y: 0,
    show: false,
  });

  // ── Particle Canvas (pauses when hero scrolls out of view) ───────────────────────────────────────
  useEffect(() => {
    const canvas = cvpRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const pts = Array.from({ length: 70 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.2 + 0.2,
      vx: (Math.random() - 0.5) * 0.15,
      vy: -Math.random() * 0.15 - 0.04,
      a: Math.random() * 0.4 + 0.06,
    }));
    let id: number;
    let active = true;
    const draw = () => {
      if (!active) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of pts) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,194,255,${p.a})`;
        ctx.fill();
        p.x += p.vx;
        p.y += p.vy;
        if (p.y < -4) p.y = canvas.height + 4;
        if (p.x < -4) p.x = canvas.width + 4;
        if (p.x > canvas.width + 4) p.x = -4;
      }
      id = requestAnimationFrame(draw);
    };
    draw();
    // Pause when hero section is not visible
    const heroSection = canvas.closest("section");
    const visObs = heroSection
      ? new IntersectionObserver(
          ([e]) => {
            if (e.isIntersecting) {
              active = true;
              draw();
            } else {
              active = false;
              cancelAnimationFrame(id);
            }
          },
          { threshold: 0 },
        )
      : null;
    if (heroSection && visObs) visObs.observe(heroSection);
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize, { passive: true });
    return () => {
      active = false;
      cancelAnimationFrame(id);
      visObs?.disconnect();
      window.removeEventListener("resize", resize);
    };
  }, []);

  // ── Hero entrance sequence ────────────────────────────────
  useEffect(() => {
    const t1 = setTimeout(() => setWordsIn(true), 200);
    const t2 = setTimeout(() => setSubIn(true), 700);
    const t3 = setTimeout(() => setCapIn(true), 860);
    const t4 = setTimeout(() => {
      setCtasIn(true);
      setToolsIn(true);
    }, 1020);
    // Terminal lines at 200ms intervals
    const lt = [1400, 1600, 1800, 2000].map((ms, i) =>
      setTimeout(() => {
        setTermLines((prev) => {
          const n = [...prev];
          n[i] = true;
          return n;
        });
      }, ms),
    );
    const t5 = setTimeout(() => setSummaryIn(true), 2300);
    const t6 = setTimeout(() => {
      setProgW(100);
    }, 2600);
    let n = 0;
    const pId = setInterval(() => {
      n = Math.min(n + 2, 100);
      setProgPct(n);
      if (n >= 100) clearInterval(pId);
    }, 16);
    return () => {
      [t1, t2, t3, t4, t5, t6, ...lt].forEach(clearTimeout);
      clearInterval(pId);
    };
  }, []);

  // Headline split into two clear lines
  const LINE1 = [
    { text: "The", wi: 0 },
    { text: "eyes", wi: 1, grad: true },
    { text: "between", wi: 2 },
  ];
  const LINE2 = [
    { text: "developers", wi: 3 },
    { text: "and", wi: 4 },
    { text: "users.", wi: 5 },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-[72px] overflow-hidden"
      style={{ background: "var(--hero-bg)" }}
    >
      {/* Canvas + orbs + noise */}
      <canvas
        ref={cvpRef}
        id="cv-particles"
        aria-hidden="true"
        style={{ opacity: 0.5 }}
      />
      <div className="orb orb-1" aria-hidden="true" />
      <div className="orb orb-2" aria-hidden="true" />
      <div className="orb orb-3" aria-hidden="true" />
      <div className="noise" aria-hidden="true" />
      <div className="hero-grid" aria-hidden="true" />

      <div className="max-w-[1200px] mx-auto px-10 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_.95fr] gap-16 items-center py-20">
          {/* ── LEFT ── */}
          <div>
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-4 py-[7px] rounded-full border border-[rgba(16,185,129,.35)] bg-[rgba(16,185,129,.06)] text-green text-[13px] font-semibold mb-8">
              <span
                className="w-2 h-2 rounded-full bg-green flex-shrink-0"
                style={{ animation: "pulseDot 2s infinite" }}
              />
              ✦ Available for QA Roles
            </div>

            {/* Headline — two clean lines */}
            <h1 className="font-grotesk font-extrabold text-[clamp(48px,6.5vw,76px)] section-heading leading-[1.05] mb-6">
              <span className="line-wrap block">
                {LINE1.map((w) => (
                  <span
                    key={w.wi}
                    className={`h1-word${wordsIn ? " in" : ""}`}
                    style={{ "--wi": w.wi } as React.CSSProperties}
                  >
                    {w.grad ? (
                      <em className="grad-text not-italic">{w.text}</em>
                    ) : (
                      w.text
                    )}
                  </span>
                ))}
              </span>
              <span className="line-wrap block">
                {LINE2.map((w) => (
                  <span
                    key={w.wi}
                    className={`h1-word${wordsIn ? " in" : ""}`}
                    style={{ "--wi": w.wi } as React.CSSProperties}
                  >
                    {w.text}
                  </span>
                ))}
              </span>
            </h1>

            {/* Sub + caption */}
            <p
              className={`text-[17px] text-dim mb-[10px] rv${subIn ? " in" : ""}`}
            >
              QA Engineer · Automation Tester · Quality Strategist
            </p>
            <p
              className={`text-[15px] text-muted mb-9 rv${capIn ? " in" : ""}`}
            >
              I find the bugs before your users do — then build the systems to
              prevent them.
            </p>

            {/* CTAs */}
            <div
              className={`flex flex-wrap gap-3 mb-11 rv${ctasIn ? " in" : ""}`}
            >
              <Button asChild variant="default">
                <a href="#projects">View My Projects →</a>
              </Button>
              <Button asChild variant="ghost">
                {/* Replace /resume.pdf with your actual resume file in /public */}
                <a href="/resume.pdf" download="Khadijat_Muhammad_QA_Resume.pdf">
                  Download Resume ↓
                </a>
              </Button>
            </div>

            {/* Tool icons */}
            <div
              className={`flex flex-wrap gap-3 rv${toolsIn ? " in" : ""}`}
              role="list"
              aria-label="Tech stack"
            >
              {TOOLS.map((t, i) => (
                <div key={t.label} className="relative group">
                  <button
                    className={`tool-icon-wrap w-11 h-11 rounded-full bg-ink-3 border border-line flex items-center justify-center text-muted cursor-pointer hover:border-cyan hover:text-cyan hover:shadow-[0_0_14px_rgba(0,194,255,.25)] hover:-translate-y-1 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan${toolsIn ? " in" : ""}`}
                    style={{ "--ti": i } as React.CSSProperties}
                    role="listitem"
                    aria-label={t.label}
                    onMouseEnter={(e) => {
                      const r = (
                        e.target as HTMLElement
                      ).getBoundingClientRect();
                      setTooltip({
                        label: t.label,
                        x: r.left + r.width / 2,
                        y: r.top - 8,
                        show: true,
                      });
                    }}
                    onMouseLeave={() =>
                      setTooltip((p) => ({ ...p, show: false }))
                    }
                  >
                    <t.icon />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT — Live Test Terminal ── */}
          <div className="relative hidden lg:block">
            <div className="terminal-card">
              {/* Traffic lights */}
              <div className="flex items-center gap-[7px] px-5 py-[14px] bg-ink-3 border-b border-line">
                <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
                <span className="font-mono text-xs text-muted ml-2">
                  cypress · qa-framework · run
                </span>
              </div>
              {/* Test lines */}
              <div className="p-6 font-mono text-[13px]">
                {TERM_LINES.map((l, i) => (
                  <div
                    key={i}
                    className={`term-line flex items-center gap-2 py-[5px]${termLines[i] ? " in" : ""}`}
                  >
                    <span className="text-green font-bold flex-shrink-0">
                      ✓
                    </span>
                    <span className="flex-1 section-heading">{l.name}</span>
                    <span className="text-muted">{l.ms}</span>
                  </div>
                ))}
                {/* Summary bar */}
                <div
                  className={`term-line mt-4 pt-3 border-t border-line${summaryIn ? " in" : ""}`}
                >
                  <div className="flex justify-between mb-3">
                    <span>
                      <span className="text-green font-semibold">
                        4 passing
                      </span>
                      <span className="text-muted ml-2">(1.85s)</span>
                    </span>
                    <span className="text-muted text-[11px] font-mono">
                      {progPct}%
                    </span>
                  </div>
                  <div className="term-progress">
                    <div
                      className="term-progress-fill"
                      style={{ width: `${progW}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Floating stat chips */}
            <div
              className="absolute -bottom-5 -left-7 bg-ink-2 border border-line rounded-xl px-4 py-3 backdrop-blur-md animate-float shadow-xl"
              style={{ animationDelay: "-2s" }}
            >
              <div className="font-grotesk text-[22px] font-extrabold text-cyan">
                98%
              </div>
              <div className="text-[11px] text-dim">Pass Rate</div>
            </div>
            <div
              className="absolute -top-4 -right-6 bg-ink-2 border border-line rounded-xl px-4 py-3 backdrop-blur-md animate-float shadow-xl"
              style={{ animationDelay: "-1s" }}
            >
              <div className="font-grotesk text-[22px] font-extrabold text-cyan">
                200+
              </div>
              <div className="text-[11px] text-dim">Tests Written</div>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative z-10 marquee-wrap border-t border-line py-[18px]">
        <div className="marquee-track">
          {[...MARQUEE, ...MARQUEE].map((m, i) => (
            <span
              key={i}
              className="text-[13px] font-semibold text-muted font-mono tracking-[.05em]"
            >
              {m} &nbsp; · &nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* Tooltip */}
      {tooltip.show && (
        <div
          role="tooltip"
          className="fixed z-[9999] pointer-events-none bg-ink-3 border border-line section-heading text-xs font-semibold px-3 py-1 rounded-lg font-mono shadow-xl transition-opacity duration-150"
          style={{
            left: tooltip.x,
            top: tooltip.y,
            transform: "translateX(-50%) translateY(-100%)",
          }}
        >
          {tooltip.label}
        </div>
      )}
    </section>
  );
}
