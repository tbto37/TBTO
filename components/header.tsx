'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useLocale } from '@/lib/i18n/context'
import { locales, type Locale } from '@/lib/i18n/content'

export function Header() {
  const { locale, setLocale, t } = useLocale()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItems = [
    { id: 'about', label: t.nav.about },
    { id: 'services', label: t.nav.services },
    { id: 'capabilities', label: t.nav.tech },
    { id: 'projects', label: t.nav.projects },
    { id: 'global', label: t.nav.global },
  ]

  const go = (id: string) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  // Solid header (dark text on light bg) once scrolled or mobile menu open.
  // Otherwise the header floats over the navy hero and uses light text.
  const solid = scrolled || open

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        solid
          ? 'border-b border-border bg-background/85 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="group flex items-center gap-2 rounded-md focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
          aria-label="To Be The One — 맨 위로"
        >
          <span
            className={cn(
              'flex h-7 w-7 items-center justify-center rounded-md text-[11px] font-bold transition-colors',
              solid
                ? 'bg-navy text-navy-foreground'
                : 'bg-navy-foreground text-navy',
            )}
          >
            T1
          </span>
          <span
            className={cn(
              'text-sm font-bold tracking-[0.16em] transition-colors',
              solid ? 'text-foreground' : 'text-navy-foreground',
            )}
          >
            TO BE THE ONE
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="주요 메뉴">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => go(item.id)}
              className={cn(
                'rounded-md px-3 py-2 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none',
                solid
                  ? 'text-muted-foreground hover:text-foreground'
                  : 'text-navy-foreground/70 hover:text-navy-foreground',
              )}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div
            className={cn(
              'hidden items-center rounded-full border p-0.5 transition-colors sm:flex',
              solid
                ? 'border-border bg-card'
                : 'border-navy-foreground/25 bg-navy-foreground/10',
            )}
            role="group"
            aria-label="언어 선택"
          >
            {locales.map((l) => (
              <button
                key={l.code}
                onClick={() => setLocale(l.code as Locale)}
                aria-pressed={locale === l.code}
                className={cn(
                  'rounded-full px-2.5 py-1 text-xs font-semibold transition-colors',
                  locale === l.code
                    ? solid
                      ? 'bg-navy text-navy-foreground'
                      : 'bg-navy-foreground text-navy'
                    : solid
                      ? 'text-muted-foreground hover:text-foreground'
                      : 'text-navy-foreground/70 hover:text-navy-foreground',
                )}
              >
                {l.label}
              </button>
            ))}
          </div>

          <Button
            size="lg"
            className="hidden bg-primary text-primary-foreground hover:bg-primary/90 sm:inline-flex"
            onClick={() => go('contact')}
          >
            {t.nav.contact}
          </Button>

          <button
            className={cn(
              'flex h-9 w-9 items-center justify-center rounded-md transition-colors lg:hidden',
              solid ? 'text-foreground' : 'text-navy-foreground',
            )}
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? '메뉴 닫기' : '메뉴 열기'}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4" aria-label="모바일 메뉴">
            {[...navItems, { id: 'contact', label: t.nav.contact }].map((item) => (
              <button
                key={item.id}
                onClick={() => go(item.id)}
                className="rounded-md px-3 py-3 text-left text-base font-medium text-foreground transition-colors hover:bg-muted"
              >
                {item.label}
              </button>
            ))}
            <div className="mt-3 flex items-center gap-2 px-3">
              {locales.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLocale(l.code as Locale)}
                  aria-pressed={locale === l.code}
                  className={cn(
                    'rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors',
                    locale === l.code
                      ? 'border-navy bg-navy text-navy-foreground'
                      : 'border-border text-muted-foreground',
                  )}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
