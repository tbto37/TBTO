'use client'

import { Compass, ShieldCheck, Wrench, Handshake } from 'lucide-react'
import { useLocale } from '@/lib/i18n/context'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'

const icons = [Compass, ShieldCheck, Wrench, Handshake]

export function About() {
  const { t } = useLocale()
  return (
    <section id="about" className="scroll-mt-16 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <SectionHeading eyebrow={t.about.eyebrow} title={t.about.title} />
          </div>
          <Reveal delay={0.1} className="flex flex-col gap-4 pt-1">
            {t.about.body.map((p) => (
              <p key={p.slice(0, 12)} className="text-base leading-relaxed text-muted-foreground md:text-lg">
                {p}
              </p>
            ))}
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.about.cards.map((card, i) => {
            const Icon = icons[i]
            return (
              <Reveal key={card.title} delay={i * 0.08}>
                <article className="group h-full rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent text-primary transition-transform group-hover:-translate-y-0.5">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-5 text-base font-bold text-foreground">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.desc}</p>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
