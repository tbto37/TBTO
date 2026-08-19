'use client'

import { useLocale } from '@/lib/i18n/context'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'

export function Process() {
  const { t } = useLocale()
  return (
    <section className="border-y border-border bg-card py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow={t.process.eyebrow} title={t.process.title} />

        <ol className="mt-14 grid gap-y-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-x-4">
          {t.process.steps.map((step, i) => (
            <Reveal as="li" key={step.num} delay={i * 0.08} className="relative">
              <div className="flex items-center gap-3 lg:block">
                <span className="font-mono text-sm font-semibold text-cyan">{step.num}</span>
                <div className="mt-0 h-px flex-1 bg-border lg:mt-4 lg:w-full" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-base font-bold text-foreground">{step.title}</h3>
              <p className="mt-2 max-w-[15rem] text-sm leading-relaxed text-muted-foreground lg:pr-4">
                {step.desc}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
