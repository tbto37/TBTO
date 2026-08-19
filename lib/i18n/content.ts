export type Locale = 'ko' | 'en' | 'ja'

export const locales: { code: Locale; label: string }[] = [
  { code: 'ko', label: 'KO' },
  { code: 'en', label: 'EN' },
  { code: 'ja', label: 'JP' },
]

export interface SiteContent {
  nav: {
    about: string
    services: string
    tech: string
    projects: string
    global: string
    contact: string
  }
  cta: {
    consult: string
    viewWork: string
    globalInquiry: string
    details: string
    close: string
    submit: string
    submitting: string
  }
  hero: {
    eyebrow: string
    headline: [string, string]
    desc: string
    badges: string[]
  }
  heroFlow: {
    business: string
    web: string
    si: string
    api: string
    ai: string
    global: string
    caption: string
  }
  trust: { label: string; sub: string }[]
  about: {
    eyebrow: string
    title: string
    body: string[]
    cards: { title: string; kr: string; desc: string }[]
  }
  services: {
    eyebrow: string
    title: string
    items: { tag: string; title: string; desc: string; features: string[] }[]
  }
  strengths: {
    eyebrow: string
    title: string
    note: string
    fromLabel: string
    toLabel: string
    rows: { from: string; to: string }[]
  }
  capabilities: {
    eyebrow: string
    title: string
    groups: { name: string; desc: string; items: string[] }[]
  }
  projects: {
    eyebrow: string
    title: string
    note: string
    scopeLabel: string
    items: { industry: string; title: string; points: string[] }[]
    clientLogos: {
      eyebrow: string
      title: string
      note: string
    }
  }
  process: {
    eyebrow: string
    title: string
    steps: { num: string; title: string; desc: string }[]
  }
  global: {
    eyebrow: string
    title: string
    body: string[]
    items: string[]
  }
  contact: {
    eyebrow: string
    title: string
    desc: string
    fields: {
      company: string
      name: string
      email: string
      phone: string
      type: string
      typePlaceholder: string
      timeline: string
      message: string
    }
    types: string[]
    consent: string
    success: string
    errors: { required: string; email: string; consent: string }
  }
  footer: {
    tagline: string
    privacy: string
    rights: string
    labels: {
      ceo: string
      founded: string
      location: string
      email: string
      phone: string
      biz: string
    }
  }
}

const ko: SiteContent = {
  nav: {
    about: '회사소개',
    services: '서비스',
    tech: '기술역량',
    projects: '프로젝트',
    global: '글로벌',
    contact: '문의하기',
  },
  cta: {
    consult: '프로젝트 상담하기',
    viewWork: '수행 영역 보기',
    globalInquiry: '글로벌 협업 문의',
    details: '자세히 보기',
    close: '닫기',
    submit: '문의 보내기',
    submitting: '전송 중...',
  },
  hero: {
    eyebrow: 'Enterprise Software & AI Transformation Partner',
    headline: ['비즈니스를 이해하고,', '작동하는 기술로 완성합니다.'],
    desc: '투비더원은 기업 업무시스템, 웹·모바일 플랫폼, 시스템 연계와 AI 업무자동화를 기획부터 운영까지 함께하는 B2B IT 파트너입니다.',
    badges: [
      'Enterprise SI',
      'Web & Mobile',
      'System Integration',
      'AI Automation',
      'Global Partnership',
    ],
  },
  heroFlow: {
    business: 'Business',
    web: 'Web & Mobile',
    si: 'Enterprise SI',
    api: 'API / EAI / Batch',
    ai: 'AI Automation',
    global: 'Global Scale',
    caption: '흩어진 요구사항을 하나의 비즈니스 시스템으로 연결합니다.',
  },
  trust: [
    { label: 'Since 2023', sub: '설립 이후 축적한 실행 경험' },
    { label: 'End-to-End Delivery', sub: '기획부터 운영까지 책임' },
    { label: 'Enterprise B2B', sub: '기업 시스템 수행 경험' },
    { label: 'Korea · Japan · Global', sub: '국내를 넘어선 확장' },
  ],
  about: {
    eyebrow: '회사소개',
    title: '기술보다 먼저, 고객의 비즈니스를 이해합니다.',
    body: [
      '투비더원은 고객이 요청한 기능만 개발하는 데 그치지 않습니다. 업무의 목적과 사용자의 흐름, 기존 시스템과의 연계, 운영 이후의 확장성까지 함께 고민합니다.',
      '단순한 인력 투입을 넘어 프로젝트 전체를 이해하고 끝까지 책임지는 기술 파트너를 지향합니다.',
    ],
    cards: [
      {
        title: 'Business First',
        kr: '비즈니스 우선',
        desc: '기술을 선택하기 전에 고객의 업무와 해결해야 할 문제를 먼저 이해합니다.',
      },
      {
        title: 'Reliable Delivery',
        kr: '책임 있는 수행',
        desc: '기획부터 개발, 테스트, 배포와 운영까지 일관된 책임감을 가지고 수행합니다.',
      },
      {
        title: 'Practical Technology',
        kr: '실용적인 기술',
        desc: '보여주기 위한 개발이 아니라 실제 업무에 적용되고 지속적으로 운영되는 기술을 만듭니다.',
      },
      {
        title: 'Long-term Partnership',
        kr: '지속 가능한 파트너십',
        desc: '일회성 구축이 아니라 고객의 성장과 서비스 확장을 함께하는 파트너십을 추구합니다.',
      },
    ],
  },
  services: {
    eyebrow: '서비스',
    title: '비즈니스에 필요한 시스템을 처음부터 끝까지 구축합니다.',
    items: [
      {
        tag: 'Enterprise SI · SM',
        title: '기업 업무시스템 구축·운영',
        desc: '기업 업무시스템의 요구사항 분석, 설계, 구축, 고도화와 운영을 지원합니다.',
        features: [
          '업무시스템 구축',
          '관리자·운영 시스템',
          '레거시 시스템 고도화',
          '유지보수 및 운영',
        ],
      },
      {
        tag: 'Web · Mobile Platform',
        title: '웹·모바일 플랫폼 개발',
        desc: '고객 서비스부터 사내 업무용 서비스까지 다양한 웹·모바일 플랫폼을 구축합니다.',
        features: [
          '반응형 웹서비스',
          'React 기반 웹 애플리케이션',
          '모바일 앱·웹앱·PWA',
          '관리자 및 태블릿 시스템',
        ],
      },
      {
        tag: 'System Integration',
        title: '시스템 연계·통합',
        desc: '기업 내부와 외부 시스템 사이의 데이터 흐름을 안정적으로 연결합니다.',
        features: [
          'REST API',
          'EAI 연계',
          'Batch 처리',
          'ERP 및 외부 시스템 연동',
          '대용량 데이터 처리',
        ],
      },
      {
        tag: 'AI DX · Automation',
        title: 'AI 업무자동화',
        desc: '생성형 AI와 업무자동화를 실제 기업 프로세스에 적용합니다.',
        features: [
          'AI Agent',
          '생성형 AI 서비스 연계',
          '문서·데이터 처리 자동화',
          '반복 업무 자동화',
          '기업 AI DX 컨설팅 및 구축',
        ],
      },
      {
        tag: 'SaaS · Global Service',
        title: 'SaaS·글로벌 서비스',
        desc: '반복 가능한 업무 솔루션을 SaaS와 글로벌 서비스로 확장합니다.',
        features: [
          'B2B SaaS 기획 및 개발',
          '글로벌 커머스 플랫폼',
          '일본 현지화',
          '다국어 서비스',
          '해외 파트너 공동 개발',
        ],
      },
    ],
  },
  strengths: {
    eyebrow: '강점',
    title: '투비더원이 프로젝트를 수행하는 방식은 다릅니다.',
    note: '경쟁사를 비교하기 위한 것이 아니라, 투비더원이 책임지는 프로젝트의 범위를 설명합니다.',
    fromLabel: '일반적인 접근',
    toLabel: '투비더원의 방식',
    rows: [
      { from: '단순 개발 요청 수행', to: '비즈니스 목적과 업무 흐름 분석' },
      { from: '개별 기능 구현', to: '전체 시스템 구조와 연계 고려' },
      { from: '개발 후 종료', to: '배포·운영·고도화까지 지원' },
      { from: '정해진 기술만 적용', to: '규모와 목적에 맞는 기술 선택' },
      { from: '단순 인력 공급', to: '책임 있는 프로젝트 수행 조직' },
    ],
  },
  capabilities: {
    eyebrow: '기술역량',
    title: '안정적인 엔터프라이즈 기술과 빠른 제품 개발 역량',
    groups: [
      {
        name: 'Frontend',
        desc: '사용자와 운영자가 매일 사용하는 화면을 안정적이고 빠르게 구현합니다.',
        items: [
          'React',
          'Next.js',
          'TypeScript',
          'React Native',
          'Ant Design',
          'AG Grid',
          'PWA',
          'Electron',
        ],
      },
      {
        name: 'Backend',
        desc: '엔터프라이즈 업무 로직과 대규모 트랜잭션을 처리하는 서버를 구축합니다.',
        items: [
          'Java',
          'Spring Boot',
          'Python',
          'REST API',
          'JPA',
          'MyBatis',
          'Gradle',
        ],
      },
      {
        name: 'Data · Integration',
        desc: '데이터를 저장·연계하고 시스템 간 흐름을 안정적으로 연결합니다.',
        items: [
          'PostgreSQL',
          'MariaDB',
          'Redis',
          'Kafka',
          'EAI',
          'Batch',
          'External API Integration',
        ],
      },
      {
        name: 'Cloud · DevOps',
        desc: '배포와 운영을 자동화하여 안정적인 서비스 환경을 유지합니다.',
        items: [
          'AWS',
          'Vercel',
          'Railway',
          'GitLab',
          'Nginx',
          'Tomcat',
          'CI/CD',
        ],
      },
      {
        name: 'AI · Automation',
        desc: '생성형 AI와 자동화를 실제 업무 프로세스에 적용합니다.',
        items: [
          'Generative AI Integration',
          'AI Agent',
          'RAG',
          'Workflow Automation',
          'Document Processing',
          'Business Process Automation',
        ],
      },
    ],
  },
  projects: {
    eyebrow: '프로젝트 경험',
    title: '다양한 산업의 복잡한 업무를 시스템으로 전환합니다.',
    note: '공개 승인을 받지 않은 고객사 정보는 사용하지 않으며, 산업과 수행 영역 중심으로 익명화하여 소개합니다.',
    scopeLabel: '수행 영역',
    items: [
      {
        industry: 'Mobility · Enterprise',
        title: '대기업 판매·업무 플랫폼',
        points: [
          '기업 판매 및 업무 프로세스 시스템',
          'REST API, EAI, Batch 기반 시스템 연계',
          '데이터 처리 및 운영 모니터링',
          '복잡한 업무 규칙의 시스템화',
        ],
      },
      {
        industry: 'Retail · Duty Free',
        title: '면세·리테일 AI DX',
        points: [
          '부서별 업무 프로세스 시스템화',
          '관리자 및 운영 기능 구축',
          '생성형 AI와 업무자동화 적용',
          '기존 시스템 및 데이터 연계',
        ],
      },
      {
        industry: 'Local Commerce · Retail',
        title: '지역상권·리테일 플랫폼',
        points: [
          '고객용 모바일 웹서비스',
          '관리자 시스템',
          'PWA 기반 현장 기능',
          '태블릿 및 운영 시스템 연계',
        ],
      },
      {
        industry: 'B2B Commerce · Operations',
        title: '기업 주문·관리 플랫폼',
        points: [
          '기업별 템플릿 관리',
          '주문·승인·정산 프로세스',
          '관리자 및 고객사 권한 관리',
          '반복 업무 자동화',
        ],
      },
      {
        industry: 'Global Commerce',
        title: '글로벌 B2B 플랫폼',
        points: [
          'B2B 도매·유통 플랫폼 기획',
          'ERP 및 물류 시스템 연계 구조',
          '다국어·글로벌 서비스 설계',
          '확장 가능한 SaaS 아키텍처',
        ],
      },
    ],
    clientLogos: {
      eyebrow: 'ENTERPRISE CLIENTS & PARTNERS',
      title: '주요 고객사 & 협력 인프라',
      note: '대한민국을 대표하는 대기업 및 혁신 기업들과 함께 엔터프라이즈 시스템 구축 및 AI DX 프로젝트를 수행해오고 있습니다.',
    },
  },
  process: {
    eyebrow: '수행 프로세스',
    title: '아이디어를 운영 가능한 시스템으로 만드는 과정',
    steps: [
      {
        num: '01',
        title: 'Discover',
        desc: '비즈니스 목표, 업무 흐름, 사용자와 기존 시스템을 분석합니다.',
      },
      {
        num: '02',
        title: 'Design',
        desc: '요구사항과 화면, 데이터, API, 시스템 아키텍처를 구체화합니다.',
      },
      {
        num: '03',
        title: 'Build',
        desc: '검증된 기술과 일관된 개발 기준으로 서비스를 구현합니다.',
      },
      {
        num: '04',
        title: 'Verify',
        desc: '기능, 연계, 데이터, 성능과 사용자 흐름을 체계적으로 검증합니다.',
      },
      {
        num: '05',
        title: 'Operate & Improve',
        desc: '안정적인 배포와 운영을 지원하고 사용 데이터를 기반으로 고도화합니다.',
      },
    ],
  },
  global: {
    eyebrow: 'From Korea to Japan and Beyond',
    title: '한국에서 축적한 실행력을 일본과 글로벌 시장으로 확장합니다.',
    body: [
      '투비더원은 한국 기업 프로젝트에서 축적한 SI·웹·모바일·시스템 연계 경험을 기반으로 일본과 글로벌 시장에서 현지 기업 및 파트너와의 협업을 추진하고 있습니다.',
      '기업 업무자동화, 중소기업 DX, 매장·서비스업 시스템, B2B SaaS와 글로벌 커머스 분야를 중심으로 현지 환경에 적합한 서비스를 제공합니다.',
    ],
    items: [
      'Japan DX Partnership',
      'Localized Software Development',
      'Multilingual Web & Mobile',
      'B2B SaaS',
      'Global Commerce',
      'Cross-border Collaboration',
    ],
  },
  contact: {
    eyebrow: '문의하기',
    title: '함께 만들 프로젝트가 있으신가요?',
    desc: '구축이 필요한 시스템이나 개선하고 싶은 업무 프로세스를 알려주세요. 프로젝트의 현재 단계와 상황에 맞는 현실적인 접근 방법을 함께 검토하겠습니다.',
    fields: {
      company: '회사명',
      name: '담당자명',
      email: '이메일',
      phone: '연락처',
      type: '문의 유형',
      typePlaceholder: '문의 유형을 선택하세요',
      timeline: '예상 일정',
      message: '프로젝트 내용',
    },
    types: [
      '기업 업무시스템',
      '웹·모바일 서비스',
      '시스템 연계',
      'AI·업무자동화',
      '유지보수·고도화',
      '글로벌 협업',
      '기타',
    ],
    consent: '개인정보 수집 및 이용에 동의합니다.',
    success: '문의가 접수되었습니다. 담당자가 확인 후 연락드리겠습니다.',
    errors: {
      required: '필수 입력 항목입니다.',
      email: '올바른 이메일 형식이 아닙니다.',
      consent: '개인정보 수집에 동의해 주세요.',
    },
  },
  footer: {
    tagline:
      '기업 업무시스템, 웹·모바일, 시스템 연계와 AI 업무자동화를 함께하는 B2B IT 파트너.',
    privacy: '개인정보처리방침',
    rights: 'Copyright © TOBETHEONE Co., Ltd. All rights reserved.',
    labels: {
      ceo: '대표이사',
      founded: '설립일',
      location: '소재지',
      email: '대표 이메일',
      phone: '대표 전화번호',
      biz: '사업자등록번호',
    },
  },
}

const en: SiteContent = {
  nav: {
    about: 'About',
    services: 'Services',
    tech: 'Capabilities',
    projects: 'Projects',
    global: 'Global',
    contact: 'Contact',
  },
  cta: {
    consult: 'Start a Project',
    viewWork: 'See What We Do',
    globalInquiry: 'Global Partnership Inquiry',
    details: 'View details',
    close: 'Close',
    submit: 'Send Inquiry',
    submitting: 'Sending...',
  },
  hero: {
    eyebrow: 'Enterprise Software & AI Transformation Partner',
    headline: ['We understand the business,', 'and build technology that works.'],
    desc: 'TOBETHEONE is a B2B IT partner that delivers enterprise systems, web & mobile platforms, system integration, and AI automation — from planning through operation.',
    badges: [
      'Enterprise SI',
      'Web & Mobile',
      'System Integration',
      'AI Automation',
      'Global Partnership',
    ],
  },
  heroFlow: {
    business: 'Business',
    web: 'Web & Mobile',
    si: 'Enterprise SI',
    api: 'API / EAI / Batch',
    ai: 'AI Automation',
    global: 'Global Scale',
    caption: 'We connect scattered requirements into one working business system.',
  },
  trust: [
    { label: 'Since 2023', sub: 'Delivery experience built up since founding' },
    { label: 'End-to-End Delivery', sub: 'Ownership from planning to operation' },
    { label: 'Enterprise B2B', sub: 'Experience with enterprise systems' },
    { label: 'Korea · Japan · Global', sub: 'Expanding beyond the domestic market' },
  ],
  about: {
    eyebrow: 'About',
    title: 'Before technology, we understand your business.',
    body: [
      'We do more than build the features you request. We consider the purpose of the work, the user flow, integration with existing systems, and scalability after launch.',
      'Beyond simply supplying people, we aim to be a technology partner that understands the whole project and owns it to the end.',
    ],
    cards: [
      {
        title: 'Business First',
        kr: 'Business First',
        desc: 'Before choosing technology, we first understand your operations and the problem to solve.',
      },
      {
        title: 'Reliable Delivery',
        kr: 'Reliable Delivery',
        desc: 'We take consistent ownership from planning and development to testing, deployment, and operation.',
      },
      {
        title: 'Practical Technology',
        kr: 'Practical Technology',
        desc: 'Not technology for show — technology that is actually applied to real work and continuously operated.',
      },
      {
        title: 'Long-term Partnership',
        kr: 'Long-term Partnership',
        desc: 'Not a one-off build, but a partnership that grows with your business and service.',
      },
    ],
  },
  services: {
    eyebrow: 'Services',
    title: 'We build the systems your business needs, from start to finish.',
    items: [
      {
        tag: 'Enterprise SI · SM',
        title: 'Enterprise System Build & Operation',
        desc: 'We support requirement analysis, design, build, enhancement, and operation of enterprise systems.',
        features: [
          'Business system build',
          'Admin & operation systems',
          'Legacy system modernization',
          'Maintenance & operation',
        ],
      },
      {
        tag: 'Web · Mobile Platform',
        title: 'Web & Mobile Platform Development',
        desc: 'From customer-facing services to internal tools, we build diverse web and mobile platforms.',
        features: [
          'Responsive web services',
          'React-based web applications',
          'Mobile apps · web apps · PWA',
          'Admin & tablet systems',
        ],
      },
      {
        tag: 'System Integration',
        title: 'System Integration',
        desc: 'We reliably connect data flows between internal and external enterprise systems.',
        features: [
          'REST API',
          'EAI integration',
          'Batch processing',
          'ERP & external system integration',
          'Large-scale data processing',
        ],
      },
      {
        tag: 'AI DX · Automation',
        title: 'AI Work Automation',
        desc: 'We apply generative AI and automation to real enterprise processes.',
        features: [
          'AI Agent',
          'Generative AI service integration',
          'Document & data processing automation',
          'Repetitive task automation',
          'Enterprise AI DX consulting & build',
        ],
      },
      {
        tag: 'SaaS · Global Service',
        title: 'SaaS & Global Service',
        desc: 'We scale repeatable business solutions into SaaS and global services.',
        features: [
          'B2B SaaS planning & development',
          'Global commerce platform',
          'Localization for Japan',
          'Multilingual services',
          'Co-development with overseas partners',
        ],
      },
    ],
  },
  strengths: {
    eyebrow: 'Strengths',
    title: 'The way we deliver projects is different.',
    note: 'This is not a comparison with competitors — it describes the scope of responsibility we take on.',
    fromLabel: 'Common approach',
    toLabel: 'The TOBETHEONE way',
    rows: [
      { from: 'Just fulfilling dev requests', to: 'Analyzing business goals and work flows' },
      { from: 'Implementing isolated features', to: 'Considering the whole system and its integrations' },
      { from: 'Ending after development', to: 'Supporting deployment, operation, and enhancement' },
      { from: 'Applying only fixed tech', to: 'Choosing technology that fits scale and purpose' },
      { from: 'Simply supplying manpower', to: 'A team that owns project delivery' },
    ],
  },
  capabilities: {
    eyebrow: 'Capabilities',
    title: 'Stable enterprise technology with fast product development.',
    groups: [
      {
        name: 'Frontend',
        desc: 'We build the screens users and operators rely on every day — stable and fast.',
        items: ['React', 'Next.js', 'TypeScript', 'React Native', 'Ant Design', 'AG Grid', 'PWA', 'Electron'],
      },
      {
        name: 'Backend',
        desc: 'We build servers that handle enterprise business logic and large-scale transactions.',
        items: ['Java', 'Spring Boot', 'Python', 'REST API', 'JPA', 'MyBatis', 'Gradle'],
      },
      {
        name: 'Data · Integration',
        desc: 'We store and integrate data, connecting flows across systems reliably.',
        items: ['PostgreSQL', 'MariaDB', 'Redis', 'Kafka', 'EAI', 'Batch', 'External API Integration'],
      },
      {
        name: 'Cloud · DevOps',
        desc: 'We automate deployment and operation to keep services stable.',
        items: ['AWS', 'Vercel', 'Railway', 'GitLab', 'Nginx', 'Tomcat', 'CI/CD'],
      },
      {
        name: 'AI · Automation',
        desc: 'We apply generative AI and automation to real work processes.',
        items: ['Generative AI Integration', 'AI Agent', 'RAG', 'Workflow Automation', 'Document Processing', 'Business Process Automation'],
      },
    ],
  },
  projects: {
    eyebrow: 'Project Experience',
    title: 'We turn complex work across industries into systems.',
    note: 'We do not use client information without approval; projects are introduced anonymized by industry and scope.',
    scopeLabel: 'Scope of work',
    items: [
      {
        industry: 'Mobility · Enterprise',
        title: 'Enterprise Sales & Operations Platform',
        points: [
          'Enterprise sales and operation process system',
          'System integration via REST API, EAI, Batch',
          'Data processing and operation monitoring',
          'Systematizing complex business rules',
        ],
      },
      {
        industry: 'Retail · Duty Free',
        title: 'Duty Free · Retail AI DX',
        points: [
          'Systematizing department-level processes',
          'Admin and operation features',
          'Applying generative AI and automation',
          'Integration with existing systems and data',
        ],
      },
      {
        industry: 'Local Commerce · Retail',
        title: 'Local Commerce · Retail Platform',
        points: [
          'Customer-facing mobile web service',
          'Admin system',
          'PWA-based on-site features',
          'Tablet and operation system integration',
        ],
      },
      {
        industry: 'B2B Commerce · Operations',
        title: 'Enterprise Order & Management Platform',
        points: [
          'Per-company template management',
          'Order · approval · settlement processes',
          'Admin and client permission management',
          'Repetitive task automation',
        ],
      },
      {
        industry: 'Global Commerce',
        title: 'Global B2B Platform',
        points: [
          'B2B wholesale & distribution platform planning',
          'ERP and logistics integration structure',
          'Multilingual & global service design',
          'Scalable SaaS architecture',
        ],
      },
    ],
    clientLogos: {
      eyebrow: 'ENTERPRISE CLIENTS & PARTNERS',
      title: 'Major Clients & Enterprise Partners',
      note: 'Trusted by leading global corporations and enterprise leaders for mission-critical IT systems and AI transformation.',
    },
  },
  process: {
    eyebrow: 'Process',
    title: 'How we turn an idea into an operable system.',
    steps: [
      { num: '01', title: 'Discover', desc: 'We analyze business goals, work flows, users, and existing systems.' },
      { num: '02', title: 'Design', desc: 'We define requirements, screens, data, APIs, and system architecture.' },
      { num: '03', title: 'Build', desc: 'We implement services with proven technology and consistent standards.' },
      { num: '04', title: 'Verify', desc: 'We systematically verify features, integration, data, performance, and user flow.' },
      { num: '05', title: 'Operate & Improve', desc: 'We support stable deployment and operation, improving based on real usage data.' },
    ],
  },
  global: {
    eyebrow: 'From Korea to Japan and Beyond',
    title: 'We extend the delivery power built in Korea to Japan and global markets.',
    body: [
      'Based on SI, web, mobile, and integration experience from Korean enterprise projects, we pursue collaboration with local companies and partners in Japan and global markets.',
      'We provide services suited to local environments, centered on enterprise automation, SME DX, store & service-industry systems, B2B SaaS, and global commerce.',
    ],
    items: [
      'Japan DX Partnership',
      'Localized Software Development',
      'Multilingual Web & Mobile',
      'B2B SaaS',
      'Global Commerce',
      'Cross-border Collaboration',
    ],
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Do you have a project to build together?',
    desc: 'Tell us about a system you need or a process you want to improve. We will review a realistic approach that fits the current stage and situation of your project.',
    fields: {
      company: 'Company',
      name: 'Contact name',
      email: 'Email',
      phone: 'Phone',
      type: 'Inquiry type',
      typePlaceholder: 'Select an inquiry type',
      timeline: 'Expected timeline',
      message: 'Project details',
    },
    types: [
      'Enterprise system',
      'Web · mobile service',
      'System integration',
      'AI · automation',
      'Maintenance · enhancement',
      'Global partnership',
      'Other',
    ],
    consent: 'I agree to the collection and use of personal information.',
    success: 'Your inquiry has been received. Our team will review it and get back to you.',
    errors: {
      required: 'This field is required.',
      email: 'Please enter a valid email address.',
      consent: 'Please agree to the collection of personal information.',
    },
  },
  footer: {
    tagline:
      'A B2B IT partner for enterprise systems, web & mobile, system integration, and AI automation.',
    privacy: 'Privacy Policy',
    rights: 'Copyright © TOBETHEONE. All rights reserved.',
    labels: {
      ceo: 'CEO',
      founded: 'Founded',
      location: 'Location',
      email: 'Email',
      phone: 'Phone',
      biz: 'Business Reg. No.',
    },
  },
}

const ja: SiteContent = {
  nav: {
    about: '会社紹介',
    services: 'サービス',
    tech: '技術力',
    projects: 'プロジェクト',
    global: 'グローバル',
    contact: 'お問い合わせ',
  },
  cta: {
    consult: 'プロジェクト相談',
    viewWork: '対応領域を見る',
    globalInquiry: 'グローバル協業のお問い合わせ',
    details: '詳しく見る',
    close: '閉じる',
    submit: '送信する',
    submitting: '送信中...',
  },
  hero: {
    eyebrow: 'Enterprise Software & AI Transformation Partner',
    headline: ['ビジネスを理解し、', '動く技術で実現します。'],
    desc: 'TOBETHEONE は、企業業務システム、Web・モバイルプラットフォーム、システム連携、AI業務自動化を、企画から運用まで伴走する B2B IT パートナーです。',
    badges: [
      'Enterprise SI',
      'Web & Mobile',
      'System Integration',
      'AI Automation',
      'Global Partnership',
    ],
  },
  heroFlow: {
    business: 'Business',
    web: 'Web & Mobile',
    si: 'Enterprise SI',
    api: 'API / EAI / Batch',
    ai: 'AI Automation',
    global: 'Global Scale',
    caption: '散在する要件を一つの動くビジネスシステムへつなげます。',
  },
  trust: [
    { label: 'Since 2023', sub: '設立以来積み重ねた実行経験' },
    { label: 'End-to-End Delivery', sub: '企画から運用までの責任' },
    { label: 'Enterprise B2B', sub: '企業システムの遂行経験' },
    { label: 'Korea · Japan · Global', sub: '国内を超えた拡張' },
  ],
  about: {
    eyebrow: '会社紹介',
    title: '技術よりも先に、お客様のビジネスを理解します。',
    body: [
      'ご依頼の機能を作るだけでは終わりません。業務の目的、ユーザーの流れ、既存システムとの連携、運用後の拡張性まで一緒に考えます。',
      '単なる人員提供を超え、プロジェクト全体を理解し最後まで責任を持つ技術パートナーを目指します。',
    ],
    cards: [
      { title: 'Business First', kr: 'Business First', desc: '技術を選ぶ前に、お客様の業務と解決すべき課題をまず理解します。' },
      { title: 'Reliable Delivery', kr: 'Reliable Delivery', desc: '企画・開発・テスト・デプロイ・運用まで、一貫した責任を持って遂行します。' },
      { title: 'Practical Technology', kr: 'Practical Technology', desc: '見せるための開発ではなく、実際の業務で使われ運用され続ける技術を作ります。' },
      { title: 'Long-term Partnership', kr: 'Long-term Partnership', desc: '一度きりの構築ではなく、お客様の成長とサービス拡張に伴走します。' },
    ],
  },
  services: {
    eyebrow: 'サービス',
    title: 'ビジネスに必要なシステムを、最初から最後まで構築します。',
    items: [
      {
        tag: 'Enterprise SI · SM',
        title: '企業業務システムの構築・運用',
        desc: '企業業務システムの要件分析、設計、構築、高度化、運用を支援します。',
        features: ['業務システム構築', '管理・運用システム', 'レガシー高度化', '保守・運用'],
      },
      {
        tag: 'Web · Mobile Platform',
        title: 'Web・モバイル開発',
        desc: '顧客向けから社内業務向けまで、多様な Web・モバイルプラットフォームを構築します。',
        features: ['レスポンシブWeb', 'Reactベースのアプリ', 'モバイル・PWA', '管理・タブレットシステム'],
      },
      {
        tag: 'System Integration',
        title: 'システム連携・統合',
        desc: '社内外システム間のデータフローを安定して連携します。',
        features: ['REST API', 'EAI連携', 'バッチ処理', 'ERP・外部連携', '大容量データ処理'],
      },
      {
        tag: 'AI DX · Automation',
        title: 'AI業務自動化',
        desc: '生成AIと業務自動化を実際の企業プロセスに適用します。',
        features: ['AI Agent', '生成AIサービス連携', '文書・データ自動処理', '反復業務の自動化', 'AI DXコンサル・構築'],
      },
      {
        tag: 'SaaS · Global Service',
        title: 'SaaS・グローバルサービス',
        desc: '再現可能な業務ソリューションを SaaS とグローバルサービスへ拡張します。',
        features: ['B2B SaaS 企画・開発', 'グローバルコマース', '日本ローカライズ', '多言語サービス', '海外パートナー共同開発'],
      },
    ],
  },
  strengths: {
    eyebrow: '強み',
    title: '私たちのプロジェクトの進め方は違います。',
    note: '競合との比較ではなく、私たちが責任を持つプロジェクトの範囲を説明するものです。',
    fromLabel: '一般的なアプローチ',
    toLabel: 'TOBETHEONE の方法',
    rows: [
      { from: '開発依頼をこなすだけ', to: 'ビジネス目的と業務フローの分析' },
      { from: '個別機能の実装', to: 'システム全体と連携を考慮' },
      { from: '開発で終了', to: 'デプロイ・運用・高度化まで支援' },
      { from: '決められた技術のみ適用', to: '規模と目的に合った技術選定' },
      { from: '単なる人員供給', to: '責任を持つプロジェクト遂行組織' },
    ],
  },
  capabilities: {
    eyebrow: '技術力',
    title: '安定したエンタープライズ技術と、速いプロダクト開発力。',
    groups: [
      { name: 'Frontend', desc: 'ユーザーと運用者が毎日使う画面を、安定して速く実装します。', items: ['React', 'Next.js', 'TypeScript', 'React Native', 'Ant Design', 'AG Grid', 'PWA', 'Electron'] },
      { name: 'Backend', desc: '企業の業務ロジックと大規模トランザクションを処理するサーバーを構築します。', items: ['Java', 'Spring Boot', 'Python', 'REST API', 'JPA', 'MyBatis', 'Gradle'] },
      { name: 'Data · Integration', desc: 'データを保存・連携し、システム間の流れを安定してつなぎます。', items: ['PostgreSQL', 'MariaDB', 'Redis', 'Kafka', 'EAI', 'Batch', 'External API Integration'] },
      { name: 'Cloud · DevOps', desc: 'デプロイと運用を自動化し、安定したサービス環境を維持します。', items: ['AWS', 'Vercel', 'Railway', 'GitLab', 'Nginx', 'Tomcat', 'CI/CD'] },
      { name: 'AI · Automation', desc: '生成AIと自動化を、実際の業務プロセスに適用します。', items: ['Generative AI Integration', 'AI Agent', 'RAG', 'Workflow Automation', 'Document Processing', 'Business Process Automation'] },
    ],
  },
  projects: {
    eyebrow: 'プロジェクト経験',
    title: '多様な産業の複雑な業務を、システムへ転換します。',
    note: '公開許可のない顧客情報は使用せず、産業と対応領域を中心に匿名化して紹介します。',
    scopeLabel: '対応領域',
    items: [
      {
        industry: 'Mobility · Enterprise',
        title: '大企業 販売・業務プラットフォーム',
        points: ['企業の販売・業務プロセスシステム', 'REST API・EAI・Batch による連携', 'データ処理と運用モニタリング', '複雑な業務ルールのシステム化'],
      },
      {
        industry: 'Retail · Duty Free',
        title: '免税・リテール AI DX',
        points: ['部署別業務プロセスのシステム化', '管理・運用機能の構築', '生成AIと業務自動化の適用', '既存システム・データ連携'],
      },
      {
        industry: 'Local Commerce · Retail',
        title: '地域商圏・リテールプラットフォーム',
        points: ['顧客向けモバイルWeb', '管理システム', 'PWAベースの現場機能', 'タブレット・運用システム連携'],
      },
      {
        industry: 'B2B Commerce · Operations',
        title: '企業 受注・管理プラットフォーム',
        points: ['企業別テンプレート管理', '受注・承認・精算プロセス', '管理・顧客権限管理', '反復業務の自動化'],
      },
      {
        industry: 'Global Commerce',
        title: 'グローバル B2B プラットフォーム',
        points: ['B2B卸・流通プラットフォーム企画', 'ERP・物流連携の構造', '多言語・グローバル設計', '拡張可能な SaaS アーキテクチャ'],
      },
    ],
    clientLogos: {
      eyebrow: 'ENTERPRISE CLIENTS & PARTNERS',
      title: '主要クライアント＆パートナー企業',
      note: '国内外の大手企業および革新企業とともに、エンタープライ즈システム構築およびDXプロジェクトを推進しています。',
    },
  },
  process: {
    eyebrow: 'プロセス',
    title: 'アイデアを運用可能なシステムにする過程。',
    steps: [
      { num: '01', title: 'Discover', desc: 'ビジネス目標、業務フロー、ユーザー、既存システムを分析します。' },
      { num: '02', title: 'Design', desc: '要件、画面、データ、API、システムアーキテクチャを具体化します。' },
      { num: '03', title: 'Build', desc: '検証された技術と一貫した基準でサービスを実装します。' },
      { num: '04', title: 'Verify', desc: '機能・連携・データ・性能・ユーザーフローを体系的に検証します。' },
      { num: '05', title: 'Operate & Improve', desc: '安定した運用を支援し、利用データを基に高度化します。' },
    ],
  },
  global: {
    eyebrow: 'From Korea to Japan and Beyond',
    title: '韓国で培った実行力を、日本とグローバル市場へ拡張します。',
    body: [
      '韓国企業のプロジェクトで培った SI・Web・モバイル・システム連携の経験を基に、日本およびグローバル市場で現地企業・パートナーとの協業を推進しています。',
      '企業業務自動化、中小企業DX、店舗・サービス業システム、B2B SaaS、グローバルコマースを中心に、現地環境に適したサービスを提供します。',
    ],
    items: [
      'Japan DX Partnership',
      'Localized Software Development',
      'Multilingual Web & Mobile',
      'B2B SaaS',
      'Global Commerce',
      'Cross-border Collaboration',
    ],
  },
  contact: {
    eyebrow: 'お問い合わせ',
    title: '一緒に作りたいプロジェクトはありますか？',
    desc: '構築が必要なシステムや改善したい業務プロセスをお知らせください。現在の段階と状況に合った現実的なアプローチを一緒に検討します。',
    fields: {
      company: '会社名',
      name: 'ご担当者名',
      email: 'メール',
      phone: '電話番号',
      type: 'お問い合わせ種別',
      typePlaceholder: '種別を選択してください',
      timeline: '希望スケジュール',
      message: 'プロジェクト内容',
    },
    types: [
      '企業業務システム',
      'Web・モバイル',
      'システム連携',
      'AI・業務自動化',
      '保守・高度化',
      'グローバル協業',
      'その他',
    ],
    consent: '個人情報の収集・利用に同意します。',
    success: 'お問い合わせを受け付けました。担当者が確認のうえご連絡いたします。',
    errors: {
      required: '必須項目です。',
      email: 'メールアドレスの形式が正しくありません。',
      consent: '個人情報の収集に同意してください。',
    },
  },
  footer: {
    tagline:
      '企業業務システム、Web・モバイル、システム連携、AI業務自動化に伴走する B2B IT パートナー。',
    privacy: 'プライバシーポリシー',
    rights: 'Copyright © TOBETHEONE. All rights reserved.',
    labels: {
      ceo: '代表取締役',
      founded: '設立日',
      location: '所在地',
      email: 'メール',
      phone: '電話番号',
      biz: '事業者登録番号',
    },
  },
}

export const dictionaries: Record<Locale, SiteContent> = { ko, en, ja }
