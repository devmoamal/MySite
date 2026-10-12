import { Mail } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="py-6">
      {/* Header */}
      <div className="mb-4">
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
          Let's Connect
        </h2>
      </div>

      {/* Clean minimal card with just email */}
      <div className="p-5 sm:p-6 rounded-xl border border-border bg-surface flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
        <p className="text-sm text-text-secondary leading-relaxed max-w-md">
          Building something new, have an open-source idea, or just want to talk tech?
          My inbox is always open.
        </p>

        <a
          href="mailto:dev.moamal@gmail.com"
          className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-foreground text-background font-medium text-xs sm:text-sm hover:opacity-90 transition-opacity shrink-0"
        >
          <Mail className="w-4 h-4" />
          <span>dev.moamal@gmail.com</span>
        </a>
      </div>
    </section>
  );
}
