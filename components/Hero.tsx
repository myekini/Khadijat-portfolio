"use client";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Code2, Webhook, Github, Activity, CheckSquare } from "lucide-react";

const TOOLS = [
  { icon: Code2, label: "Cypress" },
  { icon: Webhook, label: "Postman" },
  { icon: Github, label: "GitHub Actions" },
  { icon: Activity, label: "JMeter" },
  { icon: CheckSquare, label: "ClickUp" },
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
  const cvmRef = useRef<HTMLCanvasElement>(null);
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

  // ── Particle Canvas ───────────────────────────────────────
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
    const draw = () => {
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
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize, { passive: true });
    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener("resize", resize);
    };
  }, []);

  // ── Matrix Canvas ─────────────────────────────────────────
  useEffect(() => {
    const canvas = cvmRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    const CHARS = "01{}[]()<>/*+-=!?;:.@#&%";
    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      return Array.from({ length: Math.floor(canvas.width / 18) }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * -canvas.height,
        vy: Math.random() * 0.4 + 0.1,
        chr: CHARS[Math.floor(Math.random() * CHARS.length)],
        tick: 0,
        interval: Math.floor(Math.random() * 40 + 20),
      }));
    };
    let cols = init(),
      id2: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.font = '13px "JetBrains Mono",monospace';
      ctx.fillStyle = "rgba(0,194,255,1)";
      for (const c of cols) {
        ctx.fillText(c.chr, c.x, c.y);
        c.y += c.vy;
        c.tick++;
        if (c.tick % c.interval === 0)
          c.chr = CHARS[Math.floor(Math.random() * CHARS.length)];
        if (c.y > canvas.height + 20) {
          c.y = Math.random() * -200;
          c.x = Math.random() * canvas.width;
        }
      }
      id2 = requestAnimationFrame(draw);
    };
    draw();
    const resize = () => {
      cols = init();
    };
    window.addEventListener("resize", resize, { passive: true });
    return () => {
      cancelAnimationFrame(id2);
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

  const WORDS = [
    { text: "The", wi: 0 },
    { text: "eyes", wi: 1, grad: true },
    { text: "between", wi: 2 },
    { text: "the developers", wi: 3 },
    { text: "and users.", wi: 4 },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-[72px] overflow-hidden"
      style={{
        background:
          "linear-gradient(145deg,#050910 0%,#0D0620 52%,#08040F 100%)",
      }}
    >
      {/* Canvas + orbs + noise */}
      <canvas
        ref={cvpRef}
        id="cv-particles"
        aria-hidden="true"
        style={{ opacity: 0.5 }}
      />
      <canvas
        ref={cvmRef}
        id="cv-matrix"
        aria-hidden="true"
        style={{ opacity: 0.018, mixBlendMode: "screen" }}
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

            {/* Headline */}
            <h1 className="font-grotesk font-extrabold text-[clamp(48px,6.5vw,76px)] text-[#F1F5F9] leading-[1.05] mb-6">
              {WORDS.map((w, i) => (
                <span
                  key={i}
                  className="line-wrap"
                  style={i === 0 || i === 2 ? {} : { display: "inline" }}
                >
                  {i === 2 && <span className="line-wrap" />}
                  <span
                    className={`h1-word${wordsIn ? " in" : ""}`}
                    style={{ "--wi": w.wi } as React.CSSProperties}
                  >
                    {w.grad ? (
                      <em className="grad-text not-italic">{w.text}</em>
                    ) : (
                      w.text
                    )}
                  </span>
                </span>
              ))}
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
                <a href="/resume.pdf" download>
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
                    <t.icon size={18} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT — Live Test Terminal ── */}
          <div className="relative hidden lg:block">
            <div className="terminal-card">
              {/* Traffic lights */}
              <div className="flex items-center gap-[7px] px-5 py-[14px] bg-[rgba(255,255,255,.03)] border-b border-line">
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
                    <span className="flex-1 text-[#F1F5F9]">{l.name}</span>
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
              className="absolute -bottom-5 -left-7 bg-[rgba(26,34,53,.9)] border border-line rounded-xl px-4 py-3 backdrop-blur-md animate-float shadow-xl"
              style={{ animationDelay: "-2s" }}
            >
              <div className="font-grotesk text-[22px] font-extrabold text-cyan">
                98%
              </div>
              <div className="text-[11px] text-dim">Pass Rate</div>
            </div>
            <div
              className="absolute -top-4 -right-6 bg-[rgba(26,34,53,.9)] border border-line rounded-xl px-4 py-3 backdrop-blur-md animate-float shadow-xl"
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
          className="fixed z-[9999] pointer-events-none bg-ink-3 border border-line text-[#F1F5F9] text-xs font-semibold px-3 py-1 rounded-lg font-mono shadow-xl transition-opacity duration-150"
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
