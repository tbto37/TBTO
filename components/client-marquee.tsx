'use client'

import Image from 'next/image'
import { useLocale } from '@/lib/i18n/context'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'

interface LogoConfig {
  logoPath: string
  accentBg: string
}

const logoConfigMap: Record<string, LogoConfig> = {
  'hyundai-motor': {
    logoPath: '/logos/hyundai.png',
    accentBg: 'rgba(0, 44, 108, 0.12)',
  },
  'hyundai-autoever': {
    logoPath: '/logos/hyundai-autoever.png',
    accentBg: 'rgba(0, 71, 146, 0.12)',
  },
  'shinsegae-df': {
    logoPath: '/logos/shinsegae-dutyfree.png',
    accentBg: 'rgba(211, 47, 47, 0.12)',
  },
  'lotte-innovate': {
    logoPath: '/logos/lotte-innovate.png',
    accentBg: 'rgba(237, 28, 36, 0.12)',
  },
  'samsung-eng': {
    logoPath: '/logos/samsung-engineering.png',
    accentBg: 'rgba(20, 40, 160, 0.12)',
  },
  'asan-medical': {
    logoPath: '/logos/asan-medical-center.png',
    accentBg: 'rgba(0, 135, 90, 0.12)',
  },
  'sungsimdang': {
    logoPath: '/logos/sungsimdang.png',
    accentBg: 'rgba(217, 119, 6, 0.15)',
  },
}

export function ClientMarquee() {
  const { t } = useLocale()
  const rawItems = t.projects.clientLogos.items

  const items = rawItems.map((item) => ({
    ...item,
    ...(logoConfigMap[item.id] || logoConfigMap['hyundai-motor']),
  }))

  // Duplicate list for a smooth, seamless infinite loop
  const marqueeItems = [...items, ...items]

  return (
    <div className="mt-16 border-t border-border/60 pt-16">
      {/* Unified Section Heading & Subnote */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          align="center"
          eyebrow={t.projects.clientLogos.eyebrow}
          title={t.projects.clientLogos.title}
        />
        <Reveal delay={0.1} className="mt-3 text-center">
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-muted-foreground">
            {t.projects.clientLogos.note}
          </p>
        </Reveal>
      </div>

      {/* Infinite Rightward Marquee Track Container */}
      <div className="relative mt-8 w-full overflow-hidden py-4">
        {/* Left & Right gradient edge masks for smooth fade effect */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent sm:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent sm:w-28" />

        {/* Marquee Track moving to the right */}
        <div className="animate-marquee-right flex gap-4 sm:gap-6">
          {marqueeItems.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="group relative flex h-24 w-64 shrink-0 items-center justify-between rounded-xl border border-border/80 bg-card/80 px-5 py-3.5 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-card hover:shadow-md"
            >
              {/* Subtle brand color accent background glow on hover */}
              <div
                className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
                style={{ background: item.accentBg }}
              />

              <div className="relative z-10 flex flex-col justify-between h-full w-full">
                <div className="flex h-10 w-full items-center justify-start">
                  <Image
                    src={item.logoPath}
                    alt={item.name}
                    width={180}
                    height={40}
                    className="h-8 w-auto max-w-[180px] object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="mt-2 flex items-center justify-between border-t border-border/50 pt-2 text-xs font-sans">
                  <span className="truncate font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors">
                    {item.name}
                  </span>
                  <span className="ml-2 truncate text-[11px] font-medium text-muted-foreground/90 max-w-[125px] text-right">
                    {item.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
