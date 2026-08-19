'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { z } from 'zod'
import { CheckCircle2, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLocale } from '@/lib/i18n/context'
import { SectionHeading } from './section-heading'
import { Reveal } from './reveal'
import { cn } from '@/lib/utils'

type FieldErrors = Partial<Record<string, string>>

export function Contact() {
  const { t } = useLocale()
  const c = t.contact
  const [errors, setErrors] = useState<FieldErrors>({})
  const [submitting, setSubmitting] = useState(false)
  const [toast, setToast] = useState(false)

  // Validation schema is rebuilt per render so messages follow the active locale.
  const schema = z.object({
    company: z.string().trim().min(1, c.errors.required),
    name: z.string().trim().min(1, c.errors.required),
    email: z.string().trim().min(1, c.errors.required).email(c.errors.email),
    phone: z.string().optional(),
    type: z.string().min(1, c.errors.required),
    timeline: z.string().optional(),
    message: z.string().trim().min(1, c.errors.required),
    consent: z.literal(true, { message: c.errors.consent }),
  })

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const values = {
      company: String(data.get('company') ?? ''),
      name: String(data.get('name') ?? ''),
      email: String(data.get('email') ?? ''),
      phone: String(data.get('phone') ?? ''),
      type: String(data.get('type') ?? ''),
      timeline: String(data.get('timeline') ?? ''),
      message: String(data.get('message') ?? ''),
      consent: data.get('consent') === 'on',
    }

    const result = schema.safeParse(values)
    if (!result.success) {
      const fieldErrors: FieldErrors = {}
      for (const issue of result.error.issues) {
        const key = issue.path[0] as string
        if (!fieldErrors[key]) fieldErrors[key] = issue.message
      }
      setErrors(fieldErrors)
      // focus first invalid field
      const first = result.error.issues[0]?.path[0] as string | undefined
      if (first) form.querySelector<HTMLElement>(`[name="${first}"]`)?.focus()
      return
    }

    setErrors({})
    setSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(result.data),
      })

      const json = await response.json()

      if (!response.ok || !json.success) {
        throw new Error(json.error || '이메일 발송에 실패했습니다.')
      }

      form.reset()
      setToast(true)
      window.setTimeout(() => setToast(false), 5000)
    } catch (err: any) {
      console.error('Contact submission error:', err)
      alert(err.message || '문의 전송 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.')
    } finally {
      setSubmitting(false)
    }
  }

  const inputBase =
    'w-full rounded-lg border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20'

  const labelClass = 'mb-1.5 block text-sm font-medium text-foreground'
  const errClass = 'mt-1 text-xs font-medium text-destructive'

  const field = (name: string) =>
    cn(inputBase, errors[name] ? 'border-destructive' : 'border-input')

  return (
    <section id="contact" className="scroll-mt-16 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <SectionHeading eyebrow={c.eyebrow} title={c.title} />
            <Reveal delay={0.1} className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
              {c.desc}
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <form
              noValidate
              onSubmit={onSubmit}
              className="rounded-2xl border border-border bg-card p-6 sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="company" className={labelClass}>
                    {c.fields.company} <span className="text-destructive">*</span>
                  </label>
                  <input id="company" name="company" className={field('company')} aria-invalid={!!errors.company} />
                  {errors.company && <p className={errClass}>{errors.company}</p>}
                </div>
                <div>
                  <label htmlFor="name" className={labelClass}>
                    {c.fields.name} <span className="text-destructive">*</span>
                  </label>
                  <input id="name" name="name" className={field('name')} aria-invalid={!!errors.name} />
                  {errors.name && <p className={errClass}>{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className={labelClass}>
                    {c.fields.email} <span className="text-destructive">*</span>
                  </label>
                  <input id="email" name="email" type="email" inputMode="email" className={field('email')} aria-invalid={!!errors.email} />
                  {errors.email && <p className={errClass}>{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className={labelClass}>
                    {c.fields.phone}
                  </label>
                  <input id="phone" name="phone" type="tel" inputMode="tel" className={field('phone')} />
                </div>
                <div>
                  <label htmlFor="type" className={labelClass}>
                    {c.fields.type} <span className="text-destructive">*</span>
                  </label>
                  <select id="type" name="type" defaultValue="" className={field('type')} aria-invalid={!!errors.type}>
                    <option value="" disabled>
                      {c.fields.typePlaceholder}
                    </option>
                    {c.types.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                  {errors.type && <p className={errClass}>{errors.type}</p>}
                </div>
                <div>
                  <label htmlFor="timeline" className={labelClass}>
                    {c.fields.timeline}
                  </label>
                  <input id="timeline" name="timeline" className={field('timeline')} />
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="message" className={labelClass}>
                  {c.fields.message} <span className="text-destructive">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className={cn(field('message'), 'resize-y')}
                  aria-invalid={!!errors.message}
                />
                {errors.message && <p className={errClass}>{errors.message}</p>}
              </div>

              <div className="mt-5">
                <label className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <input
                    type="checkbox"
                    name="consent"
                    className="mt-0.5 size-4 shrink-0 rounded border-input accent-primary"
                    aria-invalid={!!errors.consent}
                  />
                  <span>
                    {c.consent} <span className="text-destructive">*</span>
                  </span>
                </label>
                {errors.consent && <p className={errClass}>{errors.consent}</p>}
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={submitting}
                className="mt-7 w-full bg-primary text-primary-foreground hover:bg-primary/90 sm:w-auto"
              >
                {submitting ? t.cta.submitting : t.cta.submit}
                {!submitting && <Send className="size-4" />}
              </Button>
            </form>
          </Reveal>
        </div>
      </div>

      {/* Toast */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            role="status"
            aria-live="polite"
            className="fixed inset-x-4 bottom-6 z-50 mx-auto flex max-w-md items-start gap-3 rounded-xl border border-border bg-navy px-5 py-4 text-navy-foreground shadow-2xl sm:inset-x-auto sm:right-6 sm:left-auto"
          >
            <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-cyan" />
            <p className="text-sm leading-relaxed">{c.success}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
