'use client'

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
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.1fr_1.4fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-navy text-[11px] font-bold text-navy-foreground">
                T1
              </span>
              <span className="text-sm font-bold tracking-[0.16em] text-foreground">
                TO BE THE ONE
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {f.tagline}
            </p>
            <p className="mt-4 text-sm font-semibold text-foreground">{companyName}</p>
          </div>

          <dl className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {rows.map((row) => (
              <div key={row.label} className="flex flex-col gap-0.5">
                <dt className="text-xs font-medium tracking-wide text-muted-foreground">
                  {row.label}
                </dt>
                <dd className="text-sm text-foreground">{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <a
            href="#"
            className="text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            {f.privacy}
          </a>
          <p className="text-xs text-muted-foreground">{f.rights}</p>
        </div>
      </div>
    </footer>
  )
}
