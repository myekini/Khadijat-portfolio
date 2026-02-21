"use client";
import { useEffect, useRef } from "react";
import { Badge } from "@/components/ui/badge";

const XP = [
  {
    company: "Waya Multi Links",
    location: "Hybrid",
    date: "Jan 2025 – Nov 2025",
    role: "QA Analyst",
    bullets: [
      "Designed and executed <strong>manual and automated test cases</strong> for mobile and web-based applications, improving bug detection rate.",
      "Planned and executed <strong>API testing</strong> using Postman and Swagger across core endpoints.",
      "Reported and tracked bugs using <strong>Excel</strong> with detailed severity mapping and reproduction steps.",
      "Collaborated with the engineering team to ensure timely bug fixes and quality product releases.",
    ],
    chips: ["Postman", "Swagger", "Manual Testing", "Excel", "API Testing"],
  },
  {
    company: "Trevotech Academy",
    location: "Remote",
    date: "Jun 2024 – Nov 2024",
    role: "QA Intern",
    bullets: [
      "Created <strong>test scenarios and scripts</strong> from user stories and business requirements.",
      "Automated e-commerce websites using <strong>Cypress with Cucumber-BDD framework</strong> following Gherkin syntax.",
      "Generated test scripts in JavaScript covering end-to-end user journeys.",
      "Performed <strong>cross-browser testing</strong> and assisted in CI/CD integration with GitHub Actions.",
    ],
    chips: [
      "Cypress",
      "Cucumber BDD",
      "GitHub Actions",
      "JavaScript",
      "Cross-browser",
    ],
  },
  {
    company: "Storebridger",
    location: "Remote",
    date: "Sep 2023 – Jan 2025",
    role: "Junior QA Tester",
    bullets: [
      "Performed <strong>Manual, Ad Hoc, Monkey, and Exploratory testing</strong> on SaaS web applications.",
      "Ensured cross-browser and cross-device compatibility on desktop and mobile devices.",
      "Provided detailed <strong>defect/bug reports via ClickUp</strong> with descriptions, screenshots, and video recordings.",
      "Participated in daily <strong>Agile Scrum</strong> activities and collaborated with developers on Slack and Google Meet.",
    ],
    chips: [
      "ClickUp",
      "Manual Testing",
      "Agile/Scrum",
      "Exploratory Testing",
      "Mobile Testing",
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
      <div className="max-w-[1200px] mx-auto px-6 md:px-10">
        <p className="section-label rv">Experience</p>
        <h2
          className="font-grotesk font-extrabold text-[clamp(32px,4vw,48px)] section-heading mb-14 rv"
          style={{ "--d": 1 } as React.CSSProperties}
        >
          My <em className="grad-text not-italic">Journey</em>
        </h2>

        <div className="relative" id="xp-timeline">
          {/* Vertical SVG line */}
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
                  {/* Connector dot */}
                  <div
                    className={`absolute top-7 w-5 h-5 rounded-full bg-[var(--color-bg)] border-2 border-[var(--color-line)] hidden lg:flex items-center justify-center z-10
                      ${isLeft ? "right-[-50px] translate-x-1/2" : "left-[-50px] -translate-x-1/2"}`}
                  >
                    <span className="w-2 h-2 rounded-full bg-cyan opacity-60" />
                  </div>

                  <div className="card-bg border border-[var(--color-line)] rounded-[var(--r)] p-8 hover:border-[rgba(0,194,255,.3)] hover:shadow-[0_12px_40px_rgba(0,0,0,.15)] transition-all duration-200">
                    <div className="flex items-start justify-between flex-wrap gap-2 mb-1">
                      <span className="text-[13px] font-bold text-cyan">
                        {job.company}
                      </span>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-mono text-[11px] text-[var(--color-muted)]">
                          {job.location}
                        </span>
                        <span className="font-mono text-[11px] text-[var(--color-muted)]">
                          ·
                        </span>
                        <span className="font-mono text-[11px] text-[var(--color-muted)]">
                          {job.date}
                        </span>
                      </div>
                    </div>
                    <h3 className="font-grotesk text-[20px] font-bold section-heading mb-4">
                      {job.role}
                    </h3>
                    <ul className="flex flex-col gap-2 mb-5">
                      {job.bullets.map((b, bi) => (
                        <li
                          key={bi}
                          className="text-sm text-[var(--color-dim)] leading-relaxed pl-4 relative before:absolute before:left-0 before:content-['—'] before:text-[rgba(0,194,255,.4)]"
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
