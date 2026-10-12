import { Download } from "lucide-react";

export default function Resume() {

  return (
    <div className="flex flex-col gap-6 pt-4 pb-16">
      {/* Page Header & Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Resume
          </h1>
        </div>

        <div className="flex flex-wrap items-center gap-2.5 print:hidden">
          {/* Download PDF button */}
          <a
            href="/MyCV.pdf"
            download="Moamal_Hussin_CV.pdf"
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-foreground text-background hover:opacity-90 transition-opacity text-xs sm:text-sm font-medium"
          >
            <Download className="w-4 h-4" />
            <span>Download CV</span>
          </a>
        </div>
      </div>

      {/* Embedded PDF Viewer */}
      <div className="rounded-xl border border-border bg-surface overflow-hidden shadow-sm">
        <div className="p-3.5 bg-surface-card border-b border-border flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-mono text-text-muted">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span>MyCV.pdf</span>
          </div>
        </div>

        {/* PDF iframe / object */}
        <div className="w-full h-[650px] sm:h-[850px] bg-neutral-900">
          <iframe
            src="/MyCV.pdf#toolbar=0"
            className="w-full h-full border-none"
            title="Moamal Hussin Resume"
          />
        </div>
      </div>
    </div>
  );
}
