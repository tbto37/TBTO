'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
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

  // Black / dark theme header styling for perfect integration with black-background logo
  const isDarkScrolled = scrolled || open

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black shadow-xl shadow-black/30 transition-all duration-300">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2.5 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
          aria-label="TOBETHEONE — 맨 위로"
        >
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
        </button>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="주요 메뉴">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => go(item.id)}
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 transition-colors hover:bg-white/10 hover:text-white focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div
            className="hidden items-center rounded-full border border-white/15 bg-white/5 p-0.5 transition-colors sm:flex"
            role="group"
            aria-label="언어 선택"
          >
            {locales.map((l) => (
              <button
                key={l.code}
                onClick={() => setLocale(l.code as Locale)}
                aria-pressed={locale === l.code}
                className={cn(
                  'rounded-full px-2.5 py-1 text-xs font-semibold transition-all',
                  locale === l.code
                    ? 'bg-white text-black shadow-sm'
                    : 'text-gray-300 hover:text-white',
                )}
              >
                {l.label}
              </button>
            ))}
          </div>

          <Button
            size="lg"
            className="hidden bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 sm:inline-flex"
            onClick={() => go('contact')}
          >
            {t.nav.contact}
          </Button>

          <button
            className="flex h-9 w-9 items-center justify-center rounded-md text-white transition-colors hover:bg-white/10 lg:hidden"
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
        <div className="border-t border-white/10 bg-black/95 backdrop-blur-xl lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4" aria-label="모바일 메뉴">
            {[...navItems, { id: 'contact', label: t.nav.contact }].map((item) => (
              <button
                key={item.id}
                onClick={() => go(item.id)}
                className="rounded-md px-3 py-3 text-left text-base font-medium text-gray-200 transition-colors hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </button>
            ))}
            <div className="mt-3 flex items-center gap-2 border-t border-white/10 px-3 pt-3">
              {locales.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLocale(l.code as Locale)}
                  aria-pressed={locale === l.code}
                  className={cn(
                    'rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors',
                    locale === l.code
                      ? 'border-primary bg-primary text-white'
                      : 'border-white/20 text-gray-300 hover:text-white',
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
