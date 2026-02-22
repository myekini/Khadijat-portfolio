import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-line)]">
      {/* Glowing top line */}
      <div className="footer-glow" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-8 flex items-center justify-between gap-6 flex-wrap">
        <p className="text-[13px] text-[var(--color-muted)]">
          © 2026 Khadijat Muhammad &nbsp;·&nbsp; Built with ☕ and a passion for
          quality
        </p>

        <div className="flex gap-3">
          {[
            {
              href: "https://linkedin.com/in/khadijat-muhammad",
              icon: Linkedin,
              label: "LinkedIn",
            },
            {
              href: "https://github.com/myekini",
              icon: Github,
              label: "GitHub",
            },
            {
              href: "mailto:muhammadkhadijato@gmail.com",
              icon: Mail,
              label: "Email",
            },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={link.label}
              className="w-9 h-9 rounded-[9px] border border-[var(--color-line)] flex items-center justify-center text-[var(--color-muted)] hover:border-cyan hover:text-cyan hover:shadow-[0_0_12px_rgba(0,194,255,.2)] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan"
            >
              <link.icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
