'use client'

import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { Plus, Minus, Check } from 'lucide-react'
import { useLocale } from '@/lib/i18n/context'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'
import { cn } from '@/lib/utils'

import { ClientMarquee } from './client-marquee'

export function Projects() {
  const { t } = useLocale()
  const reduce = useReducedMotion()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="projects" className="scroll-mt-16 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow={t.projects.eyebrow} title={t.projects.title} />
        <Reveal delay={0.1} className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          {t.projects.note}
        </Reveal>

        <div className="mt-12 flex flex-col gap-3">
          {t.projects.items.map((project, i) => {
            const isOpen = openIndex === i
            return (
              <Reveal key={project.title} delay={i * 0.05}>
                <article
                  className={cn(
                    'overflow-hidden rounded-xl border bg-card transition-colors',
                    isOpen ? 'border-primary/40' : 'border-border',
                  )}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center gap-4 px-5 py-5 text-left focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none sm:px-6"
                  >
                    <span className="hidden font-mono text-sm text-muted-foreground sm:block">
                      0{i + 1}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-xs font-semibold tracking-wide text-primary">
                        {project.industry}
                      </span>
                      <span className="mt-1 block text-base font-bold text-foreground sm:text-lg">
                        {project.title}
                      </span>
                    </span>
                    <span
                      className={cn(
                        'flex h-9 items-center gap-1.5 rounded-full border px-3 text-xs font-semibold transition-colors',
                        isOpen
                          ? 'border-primary bg-primary text-primary-foreground'
                          : 'border-border text-muted-foreground',
                      )}
                    >
                      {isOpen ? <Minus className="size-3.5" /> : <Plus className="size-3.5" />}
                      <span className="hidden sm:inline">{t.cta.details}</span>
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={reduce ? false : { height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={reduce ? undefined : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-border px-5 py-5 sm:px-6">
                          <p className="mb-3 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                            {t.projects.scopeLabel}
                          </p>
                          <ul className="grid gap-2 sm:grid-cols-2">
                            {project.points.map((point) => (
                              <li key={point} className="flex items-start gap-2 text-sm text-foreground/80">
                                <Check className="mt-0.5 size-4 shrink-0 text-cyan" aria-hidden="true" />
                                {point}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>

      {/* Corporate Client & Partner Logos Infinite Rightward Marquee */}
      <ClientMarquee />
    </section>
  )
}

