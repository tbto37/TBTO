import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { company } from '@/lib/company'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const title = '투비더원 | Enterprise Software & AI Transformation Partner'
const description =
  '투비더원은 기업 업무시스템, 웹·모바일 플랫폼, API·EAI·Batch 시스템 연계와 AI 업무자동화를 구축하는 B2B IT 파트너입니다.'

export const metadata: Metadata = {
  metadataBase: new URL(company.domain),
  title,
  description,
  generator: 'v0.app',
  applicationName: company.nameEn,
  keywords: [
    '투비더원',
    'To Be The One',
    'Enterprise SI',
    'SI SM',
    '웹 모바일 개발',
    '시스템 연계',
    'EAI',
    'AI 업무자동화',
    'B2B SaaS',
    'IT 컨설팅',
  ],
  authors: [{ name: company.nameEn, url: company.domain }],
  alternates: {
    canonical: company.domain,
    languages: { ko: '/', en: '/', ja: '/' },
  },
  openGraph: {
    type: 'website',
    siteName: company.nameEn,
    title,
    description,
    url: company.domain,
    locale: 'ko_KR',
    alternateLocale: ['en_US', 'ja_JP'],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: '#071A2E',
  colorScheme: 'light',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className={`${inter.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
