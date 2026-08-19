import { cn } from '@/lib/utils'
import { Reveal } from './reveal'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  align?: 'left' | 'center'
  tone?: 'light' | 'dark'
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  align = 'left',
  tone = 'light',
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        'flex flex-col gap-3',
        align === 'center' && 'items-center text-center',
        className,
      )}
    >
      <span
        className={cn(
          'inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase',
          tone === 'dark' ? 'text-cyan' : 'text-primary',
        )}
      >
        <span
          className={cn(
            'h-px w-6',
            tone === 'dark' ? 'bg-cyan/60' : 'bg-primary/50',
          )}
          aria-hidden="true"
        />
        {eyebrow}
      </span>
      <h2
        className={cn(
          'max-w-2xl text-2xl leading-tight font-bold tracking-tight text-balance sm:text-3xl md:text-4xl',
          align === 'center' && 'mx-auto',
          tone === 'dark' ? 'text-navy-foreground' : 'text-foreground',
        )}
      >
        {title}
      </h2>
    </Reveal>
  )
}
