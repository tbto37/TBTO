'use client'

import Image from 'next/image'
import { useLocale } from '@/lib/i18n/context'
import { company } from '@/lib/company'

export function Footer() {
  const { t, locale } = useLocale()
  const f = t.footer
  const companyName = locale === 'ko' ? company.name : company.nameEn
  const ceo = locale === 'ko' ? company.ceo : company.ceoEn
  const location = locale === 'ko' ? company.location : company.locationEn

  const rows: { label: string; value: string }[] = [
    { label: f.labels.ceo, value: ceo },
    { label: f.labels.founded, value: locale === 'ko' ? company.foundedLabel : company.founded },
    { label: f.labels.location, value: location },
    { label: f.labels.email, value: company.email },
    { label: f.labels.phone, value: company.phone },
    { label: f.labels.biz, value: company.bizNumber },
  ]

  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.1fr_1.4fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <Image
                src="/logo.png"
                alt="TOBETHEONE 로고"
                width={32}
                height={32}
                className="h-8 w-8 object-contain"
              />
              <span className="text-sm font-bold tracking-[0.16em] text-white">
                TOBETHEONE
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-400">
              {f.tagline}
            </p>
            <p className="mt-4 text-sm font-semibold text-white">{companyName}</p>
          </div>

          <dl className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {rows.map((row) => (
              <div key={row.label} className="flex flex-col gap-0.5">
                <dt className="text-xs font-medium tracking-wide text-gray-400">
                  {row.label}
                </dt>
                <dd className="text-sm text-gray-200">{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <a
            href="#"
            className="text-xs font-medium text-gray-400 transition-colors hover:text-white"
          >
            {f.privacy}
          </a>
          <p className="text-xs text-gray-400">{f.rights}</p>
        </div>
      </div>
    </footer>
  )
}
