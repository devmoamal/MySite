import { useState } from "react";
import { Github, Send, Instagram, Mail, Check, Copy, MapPin, Linkedin } from "lucide-react";
import MyAvatar from "@/assets/avatar.jpg";

export default function About() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("dev.moamal@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = "mailto:dev.moamal@gmail.com";
    }
  };

  return (
    <section className="flex flex-col gap-6 pt-4 pb-8">
      {/* Top row: Avatar + Profile details */}
      <div className="flex items-center gap-4 sm:gap-5">
        <img
          src={MyAvatar}
          alt="Moamal Hussin"
          className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-2 border-border shadow-sm shrink-0"
        />
        <div className="flex flex-col">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Moamal Hussin
          </h1>
          <p className="text-xs sm:text-sm font-mono text-text-muted mt-0.5">
            Full Stack Developer • @devmoamal
          </p>
          <div className="flex items-center gap-1.5 text-xs text-text-dim mt-1.5 font-mono">
            <MapPin className="w-3.5 h-3.5" />
            <span>Iraq • Remote</span>
          </div>
        </div>
      </div>

      {/* Bio text */}
      <div className="space-y-3">
        <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
          Full stack developer engineering high-performance web systems,
          developer tooling, and open-source applications. Passionate about the
          Bun ecosystem, React 19, TypeScript, Drizzle ORM, and clean, type-safe
          architectures.
        </p>
      </div>

      {/* Action buttons & Socials */}
      <div className="flex flex-wrap items-center gap-2.5 pt-1">
        {/* Email action with copy feature */}
        <button
          onClick={handleCopyEmail}
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-border bg-surface text-foreground hover:border-border-hover hover:bg-surface-hover transition-all text-xs sm:text-sm font-medium cursor-pointer"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-400 font-mono">Copied email!</span>
            </>
          ) : (
            <>
              <Mail className="w-4 h-4 text-text-muted" />
              <span>dev.moamal@gmail.com</span>
              <Copy className="w-3 h-3 text-text-dim ml-1" />
            </>
          )}
        </button>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/devmoamal"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-border bg-surface text-foreground hover:border-border-hover hover:bg-surface-hover transition-all text-xs sm:text-sm font-medium"
        >
          <Linkedin className="w-4 h-4 text-text-muted" />
          <span>LinkedIn</span>
        </a>

        {/* GitHub link */}
        <a
          href="https://github.com/devmoamal"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-border bg-surface text-foreground hover:border-border-hover hover:bg-surface-hover transition-all text-xs sm:text-sm font-medium"
        >
          <Github className="w-4 h-4 text-text-muted" />
          <span>GitHub</span>
        </a>

        {/* Telegram link */}
        <a
          href="https://t.me/moamalhussin"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-border bg-surface text-foreground hover:border-border-hover hover:bg-surface-hover transition-all text-xs sm:text-sm font-medium"
        >
          <Send className="w-4 h-4 text-text-muted" />
          <span>Telegram</span>
        </a>

        {/* Instagram link */}
        <a
          href="https://instagram.com/mqgx"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-border bg-surface text-foreground hover:border-border-hover hover:bg-surface-hover transition-all text-xs sm:text-sm font-medium"
        >
          <Instagram className="w-4 h-4 text-text-muted" />
          <span>Instagram</span>
        </a>
      </div>
    </section>
  );
}
