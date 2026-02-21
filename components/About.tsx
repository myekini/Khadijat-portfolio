"use client";
import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";

const STATS = [
  { num: 200, suffix: "+", label: "Test Cases Written" },
  { num: 98, suffix: "%", label: "Average Pass Rate" },
  { num: 3, suffix: "+", label: "QA Frameworks Built" },
  { num: 50, suffix: "+", label: "Bugs Caught in Staging" },
];

function StatCard({
  num,
  suffix,
  label,
}: {
  num: number;
  suffix: string;
  label: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        obs.unobserve(el);
        const dur = 1500,
          start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / dur, 1);
          el.textContent = Math.round((1 - Math.pow(1 - p, 3)) * num) + suffix;
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.5 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [num, suffix]);
  return (
    <Card className="border-t-2 border-t-cyan hover:border-t-purple hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,.3)] transition-all duration-200 p-7">
      <span
        ref={ref}
        className="block font-grotesk text-[42px] font-extrabold text-cyan leading-none mb-2"
      >
        0{suffix}
      </span>
      <p className="text-[13px] text-dim">{label}</p>
    </Card>
  );
}

export default function About() {
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
    <section id="about" ref={sectionRef} className="section-alt py-24">
      <div className="max-w-[1200px] mx-auto px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_.8fr] gap-20 items-start">
          {/* Left — story */}
          <div>
            <p className="section-label rv">About Me</p>
            <h2
              className="font-grotesk font-extrabold text-[clamp(32px,4vw,48px)] text-[#F1F5F9] mb-8 rv"
              style={{ "--d": 1 } as React.CSSProperties}
            >
              I build <em className="grad-text not-italic">quality</em> into
              every layer.
            </h2>
            <p
              className="text-[17px] text-dim leading-[1.75] mb-5 rv"
              style={{ "--d": 2 } as React.CSSProperties}
            >
              I&apos;m a{" "}
              <strong className="text-[#F1F5F9] font-semibold">
                Software QA Engineer
              </strong>{" "}
              with hands-on experience in both manual and automation testing.
              I&apos;m adept at writing test plans, executing comprehensive test
              case documents, and skilled in automation with Postman and Cypress
              — with a solid understanding of the SDLC and a track record of
              managing bugs efficiently throughout their lifecycle.
            </p>

            <div
              className="code-comment rv"
              style={{ "--d": 3 } as React.CSSProperties}
            >
              <span className="cc-slash">{"//"} </span>
              <span className="cc-text">
                {"// background: Biosciences → Education → QA Engineering"}
              </span>
            </div>

            <p
              className="text-[17px] text-dim leading-[1.75] mb-5 rv"
              style={{ "--d": 4 } as React.CSSProperties}
            >
              My background in{" "}
              <strong className="text-[#F1F5F9] font-semibold">
                Human Physiology (B.Sc., University of Ilorin)
              </strong>{" "}
              and{" "}
              <strong className="text-[#F1F5F9] font-semibold">
                Education (PGDE, Lagos State University)
              </strong>{" "}
              trained me to run controlled experiments, document findings with
              precision, and communicate complex information clearly — skills
              that map{" "}
              <strong className="text-[#F1F5F9] font-semibold">directly</strong>{" "}
              onto software testing and bug reporting.
            </p>
            <p
              className="text-[17px] text-dim leading-[1.75] rv"
              style={{ "--d": 5 } as React.CSSProperties}
            >
              I&apos;ve worked across{" "}
              <strong className="text-[#F1F5F9] font-semibold">
                Waya Multi Links, Trevotech Academy, and Storebridger
              </strong>
              , delivering automated Cypress test suites, API validation with
              Postman &amp; Newman, load testing with JMeter, and CI/CD
              integration via GitHub Actions — all in Agile environments.
            </p>
          </div>

          {/* Right — stats */}
          <div className="rv" style={{ "--d": 3 } as React.CSSProperties}>
            <div className="grid grid-cols-2 gap-3">
              {STATS.map((s) => (
                <StatCard key={s.label} {...s} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
