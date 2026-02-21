"use client";
import { useEffect, useRef } from "react";
import { Badge } from "@/components/ui/badge";

const XP = [
  {
    company: "Freelance QA",
    date: "2024 – Present",
    role: "QA Engineer",
    bullets: [
      "Built end-to-end <strong>Cypress test suite</strong> covering 40+ UI flows, cutting regression time by 60%.",
      "Authored <strong>Postman + Newman</strong> API collections with 200+ assertions across REST endpoints.",
      "Integrated GitHub Actions CI pipeline — test gates block merges on any failing spec.",
      "Produced detailed bug reports with severity mapping, helping teams prioritise fixes faster.",
    ],
    chips: ["Cypress", "Postman", "GitHub Actions", "JIRA", "TypeScript"],
  },
  {
    company: "Self-Directed Projects",
    date: "2023 – 2024",
    role: "QA Automation Learner",
    bullets: [
      "Completed <strong>ISTQB-aligned</strong> self-study curriculum covering manual and automated testing fundamentals.",
      "Designed and executed test plans for personal web app projects with documented test suites.",
      "Ran <strong>JMeter load tests</strong> simulating 500 concurrent users, identified two performance bottlenecks.",
      "Practiced exploratory testing using mind-mapping techniques and structured checklists.",
    ],
    chips: ["Selenium", "JMeter", "TestRail", "Manual Testing", "Python"],
  },
  {
    company: "Science Education (Background)",
    date: "2020 – 2023",
    role: "Bioscience Educator",
    bullets: [
      "Applied <strong>hypothesis-driven testing mindset</strong> to lab experiments — directly transferable to QA.",
      "Documented procedures with precision and clarity, mirroring how bug reports and test cases are written.",
      "Managed complex multi-step workflows, teaching the same structured thinking used in CI/CD pipelines.",
      "Built stakeholder communication skills that now translate to clear, cross-functional QA reporting.",
    ],
    chips: [
      "Documentation",
      "Root Cause Analysis",
      "Communication",
      "Process Design",
    ],
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const svgFillRef = useRef<SVGLineElement>(null);

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

    // SVG line draw on scroll
    const timeline = sectionRef.current;
    const fill = svgFillRef.current;
    if (!timeline || !fill) return () => obs.disconnect();

    const updateLine = () => {
      const rect = timeline.getBoundingClientRect();
      const totalH = timeline.offsetHeight;
      const visible =
        Math.min(window.innerHeight, rect.bottom) - Math.max(0, rect.top);
      const frac = Math.max(
        0,
        Math.min(1, visible / Math.max(window.innerHeight, 1)),
      );
      fill.setAttribute("y2", String(Math.max(0, frac * totalH)));
    };
    window.addEventListener("scroll", updateLine, { passive: true });
    window.addEventListener("resize", updateLine, { passive: true });
    updateLine();

    return () => {
      obs.disconnect();
      window.removeEventListener("scroll", updateLine);
      window.removeEventListener("resize", updateLine);
    };
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="section-alt py-24">
      <div className="max-w-[1200px] mx-auto px-10">
        <p className="section-label rv">Experience</p>
        <h2
          className="font-grotesk font-extrabold text-[clamp(32px,4vw,48px)] text-[#F1F5F9] mb-14 rv"
          style={{ "--d": 1 } as React.CSSProperties}
        >
          My <em className="grad-text not-italic">Journey</em>
        </h2>

        <div className="relative" id="xp-timeline">
          {/* Vertical SVG line (desktop) */}
          <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-1 z-0 hidden lg:block">
            <svg className="w-1 h-full" style={{ display: "block" }}>
              <line className="xp-svg-track" x1="2" y1="0" x2="2" y2="100%" />
              <line
                ref={svgFillRef}
                className="xp-svg-fill"
                x1="2"
                y1="0"
                x2="2"
                y2="0"
              />
            </svg>
          </div>

          <div className="flex flex-col gap-14">
            {XP.map((job, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={i}
                  className={`rv relative lg:w-[calc(50%-40px)] ${isLeft ? "lg:self-start" : "lg:self-end"}`}
                  style={{ "--d": i + 1 } as React.CSSProperties}
                >
                  {/* Connector dot (desktop) */}
                  <div
                    className={`absolute top-7 w-5 h-5 rounded-full bg-ink border-2 border-line hidden lg:flex items-center justify-center z-10
                      ${isLeft ? "right-[-50px] translate-x-1/2" : "left-[-50px] -translate-x-1/2"}`}
                  >
                    <span className="w-2 h-2 rounded-full bg-cyan opacity-60" />
                  </div>

                  <div className="bg-ink-2 border border-line rounded-[var(--r)] p-8 hover:border-[rgba(0,194,255,.3)] hover:shadow-[0_12px_40px_rgba(0,0,0,.4)] transition-all duration-200">
                    <div className="flex items-baseline justify-between flex-wrap gap-2 mb-2">
                      <span className="text-[13px] font-bold text-cyan">
                        {job.company}
                      </span>
                      <span className="font-mono text-[11px] text-muted">
                        {job.date}
                      </span>
                    </div>
                    <h3 className="font-grotesk text-[20px] font-bold text-[#F1F5F9] mb-4">
                      {job.role}
                    </h3>
                    <ul className="flex flex-col gap-2 mb-5">
                      {job.bullets.map((b, bi) => (
                        <li
                          key={bi}
                          className="text-sm text-dim leading-relaxed pl-4 relative before:absolute before:left-0 before:content-['—'] before:text-[rgba(0,194,255,.4)]"
                          dangerouslySetInnerHTML={{ __html: b }}
                        />
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {job.chips.map((c) => (
                        <Badge key={c}>{c}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
