'use client'

import { motion, useReducedMotion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLocale } from '@/lib/i18n/context'
import { HeroFlow } from './hero-flow'

export function Hero() {
  const { t } = useLocale()
  const reduce = useReducedMotion()

  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

  const fade = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
        }

  return (
    <section className="relative overflow-hidden bg-black text-white">
      {/* subtle technical grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        aria-hidden="true"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(148,197,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,197,255,0.06) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 90% 70% at 50% 0%, #000 40%, transparent 100%)',
        }}
      />
      <div
        className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-primary/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 pt-28 pb-20 sm:px-6 md:pt-36 md:pb-28 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.span
            {...fade(0)}
            className="inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/10 px-3 py-1.5 text-xs font-medium tracking-wide text-cyan"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-cyan" aria-hidden="true" />
            {t.hero.eyebrow}
          </motion.span>

          <motion.h1
            {...fade(0.08)}
            className="mt-6 text-3xl leading-[1.15] font-bold tracking-tight text-balance text-white sm:text-4xl md:text-5xl"
          >
            {t.hero.headline[0]}
            <br />
            <span className="bg-gradient-to-r from-cyan to-primary bg-clip-text text-transparent">
              {t.hero.headline[1]}
            </span>
          </motion.h1>

          <motion.p
            {...fade(0.16)}
            className="mt-6 max-w-xl text-base leading-relaxed text-gray-300 md:text-lg"
          >
            {t.hero.desc}
          </motion.p>

          <motion.div {...fade(0.24)} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground shadow-sm hover:bg-primary/90"
              onClick={() => go('contact')}
            >
              {t.cta.consult}
              <ArrowRight className="size-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white"
              onClick={() => go('services')}
            >
              {t.cta.viewWork}
            </Button>
          </motion.div>

          <motion.ul {...fade(0.32)} className="mt-10 flex flex-wrap gap-2" aria-label="핵심 역량">
            {t.hero.badges.map((b) => (
              <li
                key={b}
                className="rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-gray-300"
              >
                {b}
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          {...(reduce
            ? {}
            : {
                initial: { opacity: 0, scale: 0.96 },
                animate: { opacity: 1, scale: 1 },
                transition: { duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] as const },
              })}
          className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 md:p-7 shadow-2xl shadow-black/50"
        >
          <HeroFlow />
        </motion.div>
      </div>
    </section>
  )
}
