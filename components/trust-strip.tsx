'use client'

import { useLocale } from '@/lib/i18n/context'
import { Reveal } from './reveal'

export function TrustStrip() {
  const { t } = useLocale()
  return (
    <section className="border-b border-border bg-card" aria-label="핵심 사실">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px overflow-hidden px-4 sm:px-6 lg:grid-cols-4">
        {t.trust.map((item, i) => (
          <Reveal key={item.label} delay={i * 0.06} className="py-8 lg:px-6">
            <p className="text-base font-bold tracking-tight text-foreground sm:text-lg">
              {item.label}
            </p>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.sub}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
