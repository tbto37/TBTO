'use client'

import { LocaleProvider } from '@/lib/i18n/context'
import { Header } from './header'
import { Hero } from './hero'
import { TrustStrip } from './trust-strip'
import { About } from './about'
import { Services } from './services'
import { Strengths } from './strengths'
import { Capabilities } from './capabilities'
import { Projects } from './projects'
import { Process } from './process'
import { GlobalSection } from './global-section'
import { Contact } from './contact'
import { Footer } from './footer'

export function Site() {
  return (
    <LocaleProvider>
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <About />
        <Services />
        <Strengths />
        <Capabilities />
        <Projects />
        <Process />
        <GlobalSection />
        <Contact />
      </main>
      <Footer />
    </LocaleProvider>
  )
}
