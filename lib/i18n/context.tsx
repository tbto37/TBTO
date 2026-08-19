'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import { dictionaries, type Locale, type SiteContent } from './content'

interface LocaleContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: SiteContent
}

const LocaleContext = createContext<LocaleContextValue | null>(null)

const STORAGE_KEY = 'tbto-locale'
const HTML_LANG: Record<Locale, string> = { ko: 'ko', en: 'en', ja: 'ja' }

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('ko')

  // Restore persisted choice on mount (default stays Korean).
  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY) as Locale | null
    if (saved && saved in dictionaries) setLocaleState(saved)
  }, [])

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    window.localStorage.setItem(STORAGE_KEY, next)
  }, [])

  // Keep <html lang> in sync for accessibility & SEO.
  useEffect(() => {
    document.documentElement.lang = HTML_LANG[locale]
  }, [locale])

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t: dictionaries[locale] }}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocale() {
  const ctx = useContext(LocaleContext)
  if (!ctx) throw new Error('useLocale must be used within a LocaleProvider')
  return ctx
}
