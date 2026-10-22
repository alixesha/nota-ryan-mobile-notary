import { Scale } from "lucide-react";

import { disclaimer } from "@/data/site";

/** The required Pennsylvania notary advertising disclaimer, displayed verbatim. */
export function DisclaimerBand() {
  return (
    <aside
      className="bg-navy-deep px-4 py-8 sm:px-6"
      aria-label="Pennsylvania notary advertising disclaimer"
    >
      <div className="mx-auto flex max-w-4xl items-start gap-4 rounded-lg border border-gold/30 bg-white/[0.03] p-5 sm:items-center">
        <Scale className="size-6 shrink-0 text-gold" />
        <p className="text-sm leading-relaxed text-ivory/70 italic">{disclaimer}</p>
      </div>
    </aside>
  );
}
