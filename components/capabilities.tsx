'use client'

import { Layers, Server, Database, Cloud, Sparkles } from 'lucide-react'
import { useLocale } from '@/lib/i18n/context'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'

const icons = [Layers, Server, Database, Cloud, Sparkles]

export function Capabilities() {
  const { t } = useLocale()
  return (
    <section id="capabilities" className="scroll-mt-16 border-y border-border bg-card py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow={t.capabilities.eyebrow} title={t.capabilities.title} />

        <div className="mt-14 flex flex-col gap-4">
          {t.capabilities.groups.map((group, i) => {
            const Icon = icons[i]
            return (
              <Reveal key={group.name} delay={i * 0.06}>
                <article className="grid gap-5 rounded-xl border border-border bg-background p-6 md:grid-cols-[280px_1fr] md:items-center md:gap-8">
                  <div className="flex items-start gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent text-primary">
                      <Icon className="size-5" />
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-foreground">{group.name}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {group.desc}
                      </p>
                    </div>
                  </div>
                  <ul className="flex flex-wrap gap-2">
                    {group.items.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-md border border-border bg-muted/50 px-3 py-1.5 text-sm font-medium text-foreground/80"
                      >
                        {tech}
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
