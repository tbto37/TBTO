import { Site } from '@/components/site'
import { company } from '@/lib/company'

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: company.nameEn,
  legalName: company.name,
  url: company.domain,
  foundingDate: company.founded,
  founder: { '@type': 'Person', name: company.ceoEn },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'KR',
    addressLocality: 'Seoul',
  },
  areaServed: ['KR', 'JP'],
  description:
    'To Be The One is a B2B IT partner delivering enterprise systems, web & mobile platforms, API/EAI/Batch system integration, and AI work automation.',
  knowsAbout: [
    'Enterprise SI',
    'Web & Mobile Development',
    'System Integration',
    'AI Automation',
    'B2B SaaS',
  ],
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <Site />
    </>
  )
}
