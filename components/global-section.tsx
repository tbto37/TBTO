'use client'

import { ArrowRight, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLocale } from '@/lib/i18n/context'
import { Reveal } from './reveal'

export function GlobalSection() {
  const { t } = useLocale()
  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

  return (
    <section id="global" className="scroll-mt-16 bg-navy py-20 text-navy-foreground md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
          <div>
            <Reveal className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-cyan uppercase">
              <Globe className="size-4" />
              {t.global.eyebrow}
            </Reveal>
            <Reveal delay={0.06} className="mt-4">
              <h2 className="max-w-xl text-2xl leading-tight font-bold tracking-tight text-balance sm:text-3xl md:text-4xl">
                {t.global.title}
              </h2>
            </Reveal>
            {t.global.body.map((p, i) => (
              <Reveal key={p.slice(0, 12)} delay={0.12 + i * 0.06}>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-navy-foreground/70">
                  {p}
                </p>
              </Reveal>
            ))}
            <Reveal delay={0.3} className="mt-8">
              <Button
                size="lg"
                className="bg-cyan text-navy hover:bg-cyan/90"
                onClick={() => go('contact')}
              >
                {t.cta.globalInquiry}
                <ArrowRight className="size-4" />
              </Button>
            </Reveal>
          </div>

          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:content-center">
            {t.global.items.map((item, i) => (
              <Reveal as="li" key={item} delay={i * 0.06}>
                <div className="flex items-center gap-3 rounded-lg border border-navy-foreground/10 bg-navy-foreground/[0.04] px-4 py-4 transition-colors hover:border-cyan/40">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" aria-hidden="true" />
                  <span className="text-sm font-medium text-navy-foreground/85">{item}</span>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
