import { ShieldCheck, Zap, GitMerge } from "lucide-react";

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Catch bugs before users do",
    desc: "Comprehensive test suites that cover edge cases your team hasn't thought of yet.",
  },
  {
    icon: Zap,
    title: "Ship faster with confidence",
    desc: "CI/CD pipelines that block bad code automatically — no more broken releases on Friday.",
  },
  {
    icon: GitMerge,
    title: "Quality baked into every sprint",
    desc: "Embedded in Agile workflows, writing test plans alongside developers from day one.",
  },
];

export default function ValueStrip() {
  return (
    <div className="section-bg border-y border-[var(--color-line)]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[var(--color-line)]">
          {VALUES.map((v, i) => (
            <div
              key={i}
              className="section-bg px-8 py-10 flex flex-col gap-4 group hover:bg-[var(--color-alt)] transition-colors duration-200"
            >
              <div className="w-10 h-10 rounded-[10px] bg-[rgba(0,194,255,.07)] border border-[rgba(0,194,255,.15)] flex items-center justify-center text-cyan group-hover:bg-[rgba(0,194,255,.12)] transition-colors duration-200">
                <v.icon size={18} />
              </div>
              <h3 className="font-grotesk font-bold text-[16px] section-heading leading-snug">
                {v.title}
              </h3>
              <p className="text-[14px] text-[var(--color-dim)] leading-relaxed">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
