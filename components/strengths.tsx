'use client'

import { ArrowRight } from 'lucide-react'
import { useLocale } from '@/lib/i18n/context'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'

export function Strengths() {
  const { t } = useLocale()
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow={t.strengths.eyebrow} title={t.strengths.title} />
        <Reveal delay={0.1} className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          {t.strengths.note}
        </Reveal>

        <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-card">
          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 border-b border-border bg-muted/60 px-4 py-3 text-xs font-semibold tracking-wide text-muted-foreground sm:px-6">
            <span>{t.strengths.fromLabel}</span>
            <span aria-hidden="true" className="px-2" />
            <span className="text-primary">{t.strengths.toLabel}</span>
          </div>
          {t.strengths.rows.map((row, i) => (
            <Reveal
              key={row.to}
              delay={i * 0.05}
              className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 border-b border-border px-4 py-4 last:border-b-0 sm:px-6"
            >
              <span className="text-sm text-muted-foreground line-through decoration-border">
                {row.from}
              </span>
              <ArrowRight className="size-4 shrink-0 text-cyan" aria-hidden="true" />
              <span className="text-sm font-semibold text-foreground">{row.to}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
