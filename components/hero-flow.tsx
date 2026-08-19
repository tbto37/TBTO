'use client'

import { motion, useReducedMotion } from 'motion/react'
import { useLocale } from '@/lib/i18n/context'

export function HeroFlow() {
  const { t } = useLocale()
  const reduce = useReducedMotion()
  const f = t.heroFlow

  const left = [
    { label: f.business, y: 34 },
    { label: f.web, y: 132 },
    { label: f.si, y: 230 },
  ]
  const right = [
    { label: f.api, y: 34 },
    { label: f.ai, y: 132 },
    { label: f.global, y: 230 },
  ]

  return (
    <div className="relative w-full">
      <svg
        viewBox="0 0 540 300"
        className="w-full"
        role="img"
        aria-label="비즈니스 요구사항이 웹·모바일, 엔터프라이즈 SI, API·EAI·Batch, AI 자동화, 글로벌 확장으로 이어지는 시스템 플로우"
      >
        <defs>
          <linearGradient id="hub" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#20C5E8" />
          </linearGradient>
          <linearGradient id="fade" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#20C5E8" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#20C5E8" stopOpacity="0.7" />
          </linearGradient>
        </defs>

        {/* connecting lines */}
        {left.map((n, i) => (
          <path
            key={`l-${i}`}
            className="flow-line"
            d={`M148 ${n.y + 22} C 190 ${n.y + 22}, 200 150, 232 150`}
            fill="none"
            stroke="url(#fade)"
            strokeWidth="1.5"
          />
        ))}
        {right.map((n, i) => (
          <path
            key={`r-${i}`}
            className="flow-line"
            d={`M308 150 C 340 150, 350 ${n.y + 22}, 392 ${n.y + 22}`}
            fill="none"
            stroke="url(#fade)"
            strokeWidth="1.5"
          />
        ))}

        {/* left nodes */}
        {left.map((n, i) => (
          <g key={`ln-${i}`}>
            <rect x="12" y={n.y} width="136" height="44" rx="10" fill="#111827" stroke="#20C5E8" strokeOpacity="0.35" />
            <circle cx="30" cy={n.y + 22} r="3.5" fill="#20C5E8" />
            <text x="46" y={n.y + 26} fill="#f3f4f6" fontSize="12" fontWeight="600">
              {n.label}
            </text>
          </g>
        ))}

        {/* right nodes */}
        {right.map((n, i) => (
          <g key={`rn-${i}`}>
            <rect x="392" y={n.y} width="136" height="44" rx="10" fill="#111827" stroke="#20C5E8" strokeOpacity="0.35" />
            <circle cx="410" cy={n.y + 22} r="3.5" fill="#2563EB" />
            <text x="426" y={n.y + 26} fill="#f3f4f6" fontSize="12" fontWeight="600">
              {n.label}
            </text>
          </g>
        ))}

        {/* central hub */}
        <motion.g
          animate={reduce ? undefined : { scale: [1, 1.03, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '270px 150px' }}
        >
          <circle cx="270" cy="150" r="46" fill="url(#hub)" opacity="0.16" />
          <rect x="232" y="126" width="76" height="48" rx="12" fill="url(#hub)" />
          <text x="270" y="146" fill="#ffffff" fontSize="11" fontWeight="700" textAnchor="middle">
            Business
          </text>
          <text x="270" y="162" fill="#ffffff" fontSize="11" fontWeight="700" textAnchor="middle">
            System
          </text>
        </motion.g>

        {/* travelling pulse dots */}
        {!reduce &&
          left.map((n, i) => (
            <motion.circle
              key={`pl-${i}`}
              r="2.5"
              fill="#20C5E8"
              initial={{ offsetDistance: '0%' }}
              animate={{ offsetDistance: '100%' }}
              transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.5, ease: 'easeInOut' }}
              style={{ offsetPath: `path("M148 ${n.y + 22} C 190 ${n.y + 22}, 200 150, 232 150")` }}
            />
          ))}
      </svg>

      <p className="mt-4 text-center text-xs text-gray-400">{f.caption}</p>
    </div>
  )
}
