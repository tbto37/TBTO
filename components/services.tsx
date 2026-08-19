'use client'

import { Server, MonitorSmartphone, Workflow, Bot, Globe2, Check } from 'lucide-react'
import { useLocale } from '@/lib/i18n/context'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'

const icons = [Server, MonitorSmartphone, Workflow, Bot, Globe2]

export function Services() {
  const { t } = useLocale()
  return (
    <section id="services" className="scroll-mt-16 border-y border-border bg-card py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow={t.services.eyebrow} title={t.services.title} />

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((item, i) => {
            const Icon = icons[i]
            // Make the last card span to fill the 3-col grid nicely.
            const wide = i === t.services.items.length - 1
            return (
              <Reveal
                key={item.tag}
                delay={(i % 3) * 0.08}
                className={wide ? 'lg:col-span-1' : ''}
              >
                <article className="flex h-full flex-col rounded-xl border border-border bg-background p-6 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[0_12px_40px_-24px_rgba(37,99,235,0.5)]">
                  <div className="flex items-center justify-between gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy text-navy-foreground">
                      <Icon className="size-5" />
                    </span>
                    <span className="text-xs font-semibold tracking-wide text-primary">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                  <ul className="mt-5 flex flex-col gap-2 border-t border-border pt-4">
                    {item.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2 text-sm text-foreground/80">
                        <Check className="mt-0.5 size-4 shrink-0 text-cyan" aria-hidden="true" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
