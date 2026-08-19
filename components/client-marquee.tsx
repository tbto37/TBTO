'use client'

import { useLocale } from '@/lib/i18n/context'
import { Reveal } from './reveal'

interface LogoItem {
  id: string
  name: string
  nameKr: string
  category: string
  color: string
  accentBg: string
  logoSvg: React.ReactNode
}

const clientLogosData: LogoItem[] = [
  {
    id: 'hyundai',
    name: 'HYUNDAI',
    nameKr: '현대자동차그룹',
    category: 'Mobility · Enterprise SI',
    color: '#002C6C',
    accentBg: 'rgba(0, 44, 108, 0.12)',
    logoSvg: (
      <svg viewBox="0 0 160 40" className="h-6 w-auto" fill="currentColor">
        {/* Slanted oval H symbol */}
        <g transform="translate(4, 4)">
          <ellipse cx="16" cy="16" rx="15" ry="11" fill="none" stroke="currentColor" strokeWidth="2.8" transform="rotate(-15 16 16)" />
          <path d="M10 23 L13 9 M13 16 L20 16 M19 23 L22 9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </g>
        {/* HYUNDAI text */}
        <text x="44" y="26" fontFamily="var(--font-sans), sans-serif" fontWeight="900" fontSize="17" letterSpacing="1.5" fill="currentColor">
          HYUNDAI
        </text>
      </svg>
    ),
  },
  {
    id: 'samsung',
    name: 'SAMSUNG',
    nameKr: '삼성전자',
    category: 'Cloud · System Integration',
    color: '#1428A0',
    accentBg: 'rgba(20, 40, 160, 0.12)',
    logoSvg: (
      <svg viewBox="0 0 160 40" className="h-6 w-auto" fill="currentColor">
        {/* Slanted SAMSUNG Blue Oval outline */}
        <ellipse cx="80" cy="20" rx="76" ry="17" fill="currentColor" opacity="0.1" transform="rotate(-8 80 20)" />
        {/* SAMSUNG text */}
        <text x="80" y="26" textAnchor="middle" fontFamily="var(--font-sans), sans-serif" fontWeight="900" fontSize="18" letterSpacing="2" fill="currentColor">
          SAMSUNG
        </text>
      </svg>
    ),
  },
  {
    id: 'lg',
    name: 'LG CNS',
    nameKr: 'LG그룹',
    category: 'Smart Platform · SI',
    color: '#A50034',
    accentBg: 'rgba(165, 0, 52, 0.12)',
    logoSvg: (
      <svg viewBox="0 0 140 40" className="h-6 w-auto" fill="currentColor">
        {/* Circle L&G emblem */}
        <circle cx="18" cy="20" r="14" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <path d="M18 11 V20 H25" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="13" cy="15" r="2" fill="currentColor" />
        {/* LG CNS text */}
        <text x="40" y="26" fontFamily="var(--font-sans), sans-serif" fontWeight="800" fontSize="18" letterSpacing="1" fill="currentColor">
          LG CNS
        </text>
      </svg>
    ),
  },
  {
    id: 'sk',
    name: 'SK C&C',
    nameKr: 'SK그룹',
    category: 'AI DX · Cloud Platform',
    color: '#E61E25',
    accentBg: 'rgba(230, 30, 37, 0.12)',
    logoSvg: (
      <svg viewBox="0 0 140 40" className="h-6 w-auto" fill="currentColor">
        {/* SK wings emblem */}
        <path d="M6 24 C 10 12, 18 10, 22 14 C 16 18, 12 24, 6 24 Z" fill="#E61E25" />
        <path d="M12 26 C 18 16, 26 14, 30 18 C 22 22, 16 28, 12 26 Z" fill="#F7941D" />
        {/* SK text */}
        <text x="36" y="26" fontFamily="var(--font-sans), sans-serif" fontWeight="900" fontSize="19" letterSpacing="1" fill="currentColor">
          SK C&C
        </text>
      </svg>
    ),
  },
  {
    id: 'cj',
    name: 'CJ OliveNetworks',
    nameKr: 'CJ그룹',
    category: 'Retail & Duty Free DX',
    color: '#0054A6',
    accentBg: 'rgba(0, 84, 166, 0.12)',
    logoSvg: (
      <svg viewBox="0 0 160 40" className="h-6 w-auto" fill="currentColor">
        {/* CJ 3-petal swoosh emblem */}
        <circle cx="8" cy="18" r="4" fill="#E30613" />
        <circle cx="16" cy="14" r="4" fill="#FFD400" />
        <circle cx="20" cy="22" r="4" fill="#0054A6" />
        {/* CJ text */}
        <text x="30" y="26" fontFamily="var(--font-sans), sans-serif" fontWeight="900" fontSize="19" letterSpacing="0.5" fill="currentColor">
          CJ
        </text>
        <text x="60" y="25" fontFamily="var(--font-sans), sans-serif" fontWeight="600" fontSize="11" letterSpacing="0.5" fill="currentColor" opacity="0.85">
          OLIVENETWORKS
        </text>
      </svg>
    ),
  },
  {
    id: 'posco',
    name: 'POSCO DX',
    nameKr: '포스코 DX',
    category: 'Industrial DX · Data Integration',
    color: '#004B87',
    accentBg: 'rgba(0, 75, 135, 0.12)',
    logoSvg: (
      <svg viewBox="0 0 150 40" className="h-6 w-auto" fill="currentColor">
        <text x="4" y="26" fontFamily="var(--font-sans), sans-serif" fontWeight="900" fontSize="20" letterSpacing="2" fill="currentColor">
          POSCO
        </text>
        <text x="100" y="26" fontFamily="var(--font-sans), sans-serif" fontWeight="800" fontSize="15" letterSpacing="1" fill="#20c5e8">
          DX
        </text>
      </svg>
    ),
  },
  {
    id: 'lotte',
    name: 'LOTTE Data Communication',
    nameKr: '롯데정보통신',
    category: 'Commerce · Admin System',
    color: '#ED1C24',
    accentBg: 'rgba(237, 28, 36, 0.12)',
    logoSvg: (
      <svg viewBox="0 0 140 40" className="h-6 w-auto" fill="currentColor">
        {/* Lotte emblem */}
        <path d="M12 10 L12 28 L24 28 C24 28, 20 22, 16 22 C14 22, 12 20, 12 10 Z" fill="#ED1C24" />
        <text x="30" y="26" fontFamily="var(--font-sans), sans-serif" fontWeight="900" fontSize="19" letterSpacing="1.5" fill="currentColor">
          LOTTE
        </text>
      </svg>
    ),
  },
  {
    id: 'hanwha',
    name: 'Hanwha Systems',
    nameKr: '한화시스템',
    category: 'Enterprise Operations · SI',
    color: '#F37021',
    accentBg: 'rgba(243, 112, 33, 0.12)',
    logoSvg: (
      <svg viewBox="0 0 160 40" className="h-6 w-auto" fill="currentColor">
        {/* Hanwha 3-circles emblem */}
        <circle cx="10" cy="18" r="6" fill="none" stroke="#F37021" strokeWidth="2.5" />
        <circle cx="18" cy="14" r="6" fill="none" stroke="#F37021" strokeWidth="2.5" />
        <circle cx="22" cy="22" r="6" fill="none" stroke="#F37021" strokeWidth="2.5" />
        <text x="34" y="26" fontFamily="var(--font-sans), sans-serif" fontWeight="800" fontSize="17" letterSpacing="1" fill="currentColor">
          Hanwha
        </text>
      </svg>
    ),
  },
  {
    id: 'naver',
    name: 'NAVER Cloud',
    nameKr: '네이버클라우드',
    category: 'Cloud Service · AI DX',
    color: '#03C75A',
    accentBg: 'rgba(3, 199, 90, 0.12)',
    logoSvg: (
      <svg viewBox="0 0 150 40" className="h-6 w-auto" fill="currentColor">
        {/* Green N emblem */}
        <rect x="4" y="8" width="22" height="24" rx="4" fill="#03C75A" />
        <path d="M10 26 V14 L16 22 L20 14 V26" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <text x="34" y="26" fontFamily="var(--font-sans), sans-serif" fontWeight="900" fontSize="18" letterSpacing="1" fill="currentColor">
          NAVER
        </text>
      </svg>
    ),
  },
  {
    id: 'kakao',
    name: 'kakao enterprise',
    nameKr: '카카오엔터프라이즈',
    category: 'Work Automation · AI Agent',
    color: '#FEE500',
    accentBg: 'rgba(254, 229, 0, 0.15)',
    logoSvg: (
      <svg viewBox="0 0 160 40" className="h-6 w-auto" fill="currentColor">
        {/* Kakao yellow bubble */}
        <path d="M4 18 C4 11 10 7 18 7 C26 7 32 11 32 18 C32 23 27 27 21 28 L19 32 L16 29 C9 29 4 24 4 18 Z" fill="#FEE500" />
        <text x="18" y="21" textAnchor="middle" fontFamily="var(--font-sans), sans-serif" fontWeight="900" fontSize="13" fill="#191919">
          k
        </text>
        <text x="38" y="26" fontFamily="var(--font-sans), sans-serif" fontWeight="800" fontSize="18" letterSpacing="-0.5" fill="currentColor">
          kakao
        </text>
      </svg>
    ),
  },
  {
    id: 'shinhan',
    name: 'Shinhan Financial',
    nameKr: '신한금융그룹',
    category: 'Financial SI · API Integration',
    color: '#0046FF',
    accentBg: 'rgba(0, 70, 255, 0.12)',
    logoSvg: (
      <svg viewBox="0 0 150 40" className="h-6 w-auto" fill="currentColor">
        {/* Shinhan circle star */}
        <circle cx="18" cy="20" r="12" fill="#0046FF" />
        <path d="M18 12 L20 17 L25 18 L21 21 L22 26 L18 23 L14 26 L15 21 L11 18 L16 17 Z" fill="#FFD700" />
        <text x="36" y="26" fontFamily="var(--font-sans), sans-serif" fontWeight="800" fontSize="17" letterSpacing="0.5" fill="currentColor">
          Shinhan
        </text>
      </svg>
    ),
  },
  {
    id: 'kb',
    name: 'KB Financial Group',
    nameKr: 'KB국민은행',
    category: 'Banking System · B2B API',
    color: '#FFBC00',
    accentBg: 'rgba(255, 188, 0, 0.15)',
    logoSvg: (
      <svg viewBox="0 0 140 40" className="h-6 w-auto" fill="currentColor">
        {/* KB star emblem */}
        <rect x="4" y="10" width="20" height="20" rx="4" fill="#6B6259" />
        <path d="M14 13 L15.5 17.5 L20 17.5 L16.5 20 L18 24.5 L14 22 L10 24.5 L11.5 20 L8 17.5 L12.5 17.5 Z" fill="#FFBC00" />
        <text x="30" y="26" fontFamily="var(--font-sans), sans-serif" fontWeight="900" fontSize="20" letterSpacing="1" fill="currentColor">
          KB
        </text>
      </svg>
    ),
  },
]

export function ClientMarquee() {
  const { t } = useLocale()
  const logos = clientLogosData
  // Duplicate for seamless infinite loop rightwards
  const marqueeItems = [...logos, ...logos]

  return (
    <div className="mt-16 border-t border-border/60 pt-16">
      {/* Heading */}
      <Reveal delay={0.1} className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <span className="text-xs font-bold tracking-widest text-primary uppercase">
          {t.projects.clientLogos.eyebrow}
        </span>
        <h3 className="mt-2 text-xl font-bold tracking-tight text-foreground sm:text-2xl">
          {t.projects.clientLogos.title}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground max-w-2xl mx-auto">
          {t.projects.clientLogos.note}
        </p>
      </Reveal>

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
              className="group relative flex h-20 w-52 shrink-0 items-center justify-between rounded-xl border border-border/80 bg-card/60 px-5 py-3 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-card hover:shadow-md"
            >
              {/* Subtle brand color accent background glow on hover */}
              <div
                className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
                style={{ background: item.accentBg }}
              />

              <div className="relative z-10 flex flex-col justify-center gap-1 w-full">
                <div className="flex items-center justify-between text-foreground/90 transition-colors group-hover:text-foreground">
                  {item.logoSvg}
                </div>
                <div className="flex items-center justify-between text-[11px] font-medium text-muted-foreground mt-0.5">
                  <span className="truncate group-hover:text-foreground/80 transition-colors">
                    {item.nameKr}
                  </span>
                  <span className="text-[10px] text-primary/70 font-mono">
                    Enterprise
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
