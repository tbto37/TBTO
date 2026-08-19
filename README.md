# 주식회사 투비더원 (TOBETHEONE) — 공식 웹사이트

> **Enterprise Software & AI Transformation Partner**  
> 비즈니스를 이해하고, 작동하는 기술로 완성하는 B2B IT 파트너 **주식회사 투비더원(TOBETHEONE)**의 공식 웹사이트 프로젝트입니다.

---

## 📌 프로젝트 개요 (Overview)

본 프로젝트는 **주식회사 투비더원(TOBETHEONE)**의 기업 브랜딩 및 서비스 소개를 위한 반응형 공식 웹사이트입니다.  
엔터프라이즈 SI/SM, 웹·모바일 플랫폼 개발, 시스템 연계(API/EAI/Batch), AI 업무자동화 및 글로벌 서비스 확장 역량을 소개하며, 한국어·영어·일본어 3개국어 다국어 환경을 지원합니다.

* **회사명**: 주식회사 투비더원 (TOBETHEONE)
* **대표자**: 조현원 (Cho Hyunwon)
* **설립일**: 2023년 3월 1일
* **공식 도메인**: [https://www.tobetheone.co.kr](https://www.tobetheone.co.kr)
* **타깃 시장**: 한국, 일본 및 글로벌 B2B 시장

---

## 🛠 기술 스택 (Tech Stack)

| 구분 | 기술 / 라이브러리 | 설명 |
| :--- | :--- | :--- |
| **Framework** | **Next.js 16.3.0 (App Router)** | React 19 기반 서버/클라이언트 컴포넌트 아키텍처 |
| **Language** | **TypeScript 5.7.3** | 엄격한 타입 안정성 보장 |
| **Styling** | **Tailwind CSS v4** | 최신 Tailwind v4 CSS 테마 시스템, `@tailwindcss/postcss` |
| **Components** | **shadcn/ui**, `@base-ui/react` | 접근성 및 확장성 높은 UI 컴포넌트 |
| **Animation** | **motion (Framer Motion 13)** | Scroll Reveal, AnimatePresence, SVG 데이터 플로우 애니메이션 |
| **Form & Validation** | **Zod 4.4.3** | 다국어 에러 메시지 연동 실시간 폼 유효성 검사 |
| **Icons & Font** | **lucide-react**, **Pretendard**, **Inter** | 고품질 벡터 아이콘 및 웹 폰트 최적화 |
| **SEO & Analytics** | **Schema.org JSON-LD**, `@vercel/analytics` | 검색엔진 최적화 구조화 데이터 및 웹 통계 |
| **Package Manager** | **pnpm** | 빠르고 효율적인 패키지 의존성 관리 |

---

## 🌟 주요 기능 및 특징 (Key Features)

### 1. 🌐 완벽한 3개국어 다국어 지원 (i18n)
* **지원 언어**: 한국어(`ko`), 영어(`en`), 일본어(`ja`)
* `LocaleProvider`와 `localStorage`를 결합하여 사용자 선택 언어 유지
* 언어 변경 시 `<html lang="...">` 및 UI 텍스트 실시간 전환
* `lib/i18n/content.ts` 단일 파일에서 사전식(Dictionary) 형태로 다국어 콘텐츠 집중 관리

### 2. 🎨 모던하고 인터랙티브한 UI/UX
* **Hero Visual Flow**: 비즈니스 요구사항이 시스템으로 수렴·확장되는 인터랙티브 SVG 플로우 다이어그램 (`HeroFlow`)
* **스크롤 리빌 애니메이션**: 화면 진입 시 자연스럽게 나타나는 `Reveal` 컴포넌트
* **반응형 내비게이션**: 스크롤 상태 감지 블러(Backdrop blur) 헤더 및 모바일 전용 햄버거 메뉴
* **프로젝트 아코디언**: 인터랙티브하게 열고 닫히는 산업별 수행 영역 쇼케이스
* **웹 접근성 고려**: 시스템의 `prefers-reduced-motion` 설정을 감지하여 모션 자동 제어

### 3. 📝 Zod 기반의 안정적인 견고한 문의 폼 (Contact Form)
* 회사명, 담당자명, 이메일, 문의 유형, 프로젝트 내용, 개인정보 동의 등 필수 항목 검증
* 다국어 에러 메시지 및 유효하지 않은 첫 번째 필드로의 자동 포커싱
* 전송 완료 알림 Toast 피드백 애니메이션 제공

### 4. 🔍 검색엔진 최적화 (SEO) & 소셜 메타태그
* OpenGraph, Twitter Cards, Canonical URL 완전 대응
* `Organization` Schema.org JSON-LD 구조화 데이터 적용으로 검색 엔진 인식률 강화

---

## 📂 프로젝트 구조 (Directory Structure)

```text
TBTO/
├── app/
│   ├── globals.css          # 글로벌 스타일 및 Tailwind v4 테마 변수 정의
│   ├── layout.tsx           # 루트 레이아웃 (SEO 메타데이터, 폰트, Vercel Analytics)
│   └── page.tsx             # 메인 페이지 (JSON-LD 구조화 데이터 + Site 렌더링)
├── components/
│   ├── ui/
│   │   └── button.tsx       # shadcn/ui 기반 재사용 버튼 컴포넌트
│   ├── about.tsx            # 회사 소개 및 4대 핵심 가치
│   ├── capabilities.tsx     # 기술 역량 스택 (Frontend/Backend/Cloud/AI 등)
│   ├── contact.tsx          # Zod 유효성 검사 적용된 문의하기 폼
│   ├── footer.tsx           # 회사 상세 정보 및 저작권 푸터
│   ├── global-section.tsx   # 일본 및 글로벌 협업 안내 섹션
│   ├── header.tsx           # 상단 네비게이션 바 & 언어 전환기
│   ├── hero-flow.tsx        # Hero 섹션 내 SVG 데이터 흐름 애니메이션
│   ├── hero.tsx             # 메인 히어로 섹션
│   ├── process.tsx          # 5단계 시스템 구축 프로세스
│   ├── projects.tsx         # 산업별 주요 프로젝트 수행 사례 (아코디언)
│   ├── reveal.tsx           # Motion 기반 스크롤 등장 애니메이션 래퍼
│   ├── section-heading.tsx  # 섹션 공통 헤딩 컴포넌트
│   ├── services.tsx         # 5대 핵심 서비스 카드
│   ├── site.tsx             # 전체 페이지 레이아웃 조합 컴포넌트
│   ├── strengths.tsx        # 투비더원의 일하는 방식/강점 비교
│   └── trust-strip.tsx      # 신뢰 지표 스트립
├── lib/
│   ├── i18n/
│   │   ├── content.ts       # 다국어(KO/EN/JA) 텍스트 딕셔너리
│   │   └── context.tsx      # i18n React Context & Provider
│   ├── company.ts           # 회사 기본 정보 및 단일 진실 공급원(SSOT)
│   └── utils.ts             # Tailwind 클래스 병합 유틸 (clsx + twMerge)
├── public/                  # 정적 이미지 및 아이콘 리소스
├── next.config.mjs          # Next.js 환경 설정
├── package.json             # 프로젝트 의존성 및 스크립트
├── tsconfig.json            # TypeScript 컴파일러 설정
└── README.md                # 프로젝트 안내 문서
```

---

## 🧭 사이트 섹션 구성 (Sections)

1. **Header**: 로고, 섹션 바로가기 네비게이션, 언어 전환(KO/EN/JP), 문의 CTA
2. **Hero**: 메인 슬로건 및 핵심 가치 제안, 빠른 CTA, 인터랙티브 시스템 플로우 시각화
3. **Trust Strip**: 연혁 및 신뢰 지표 (Since 2023, End-to-End Delivery, Enterprise B2B, Korea · Japan · Global)
4. **About**: 기업 철학 및 4대 가치 (Business First, Reliable Delivery, Practical Technology, Long-term Partnership)
5. **Services**: 5개 주요 서비스 영역 (엔터프라이즈 SI/SM, 웹·모바일 플랫폼, 시스템 연계, AI 업무자동화, SaaS·글로벌 서비스)
6. **Strengths**: 일반적인 개발 방식과의 차별점 비교
7. **Capabilities**: 5대 기술 역량 (Frontend, Backend, Data·Integration, Cloud·DevOps, AI·Automation)
8. **Projects**: 모빌리티, 리테일/면세, 지역상권, B2B 커머스 등 익명화된 대표 구축 사례
9. **Process**: 5단계 개발 라이프사이클 (Discover → Design → Build → Verify → Operate & Improve)
10. **Global**: 일본 및 해외 시장 확장 전략 및 크로스보더 협업 안내
11. **Contact**: 실시간 유효성 검증을 지원하는 프로젝트 상담 문의 폼
12. **Footer**: 회사 사업자 정보, 대표자, 주소 및 저작권 정보

---

## 🚀 시작 가이드 (Getting Started)

### 1. 패키지 설치
```bash
pnpm install
```

### 2. 개발 서버 실행
```bash
pnpm dev
```
브라우저에서 [http://localhost:3000](http://localhost:3000)으로 접속하여 결과를 확인합니다.

### 3. 프로덕션 빌드 및 실행
```bash
# 프로덕션 빌드
pnpm build

# 프로덕션 서버 실행
pnpm start
```

---

## ⚙️ 운영 및 수정 가이드 (Maintenance Guide)

### 1. 회사 기본 정보 변경
[`lib/company.ts`](lib/company.ts) 파일에서 회사 정보를 한 곳에서 일괄 수정할 수 있습니다.
* 대표 이메일, 전화번호, 상세 주소, 사업자등록번호 등의 플레이스홀더를 실제 값으로 업데이트하세요.

### 2. 다국어 텍스트 및 콘텐츠 수정
[`lib/i18n/content.ts`](lib/i18n/content.ts) 파일의 `ko`, `en`, `ja` 객체를 통해 문구를 수정하거나 신규 항목을 추가할 수 있습니다.

### 3. 문의하기 폼 이메일 발송 연동 (API & SMTP)
* 문의 폼 제출 시 [`app/api/contact/route.ts`](app/api/contact/route.ts) API 엔드포인트를 통해 `tobetheone@tobetheone.kr`로 자동 발송됩니다.
* 실제 메일 발송을 위한 SMTP 환경변수는 [`.env.example`](.env.example)을 참고하여 `.env.local` 또는 Vercel 환경변수에 등록하세요 (`SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`).
* 메일함에서 바로 **[답장]**을 누르면 문의 고객의 이메일로 즉시 회신할 수 있도록 `replyTo`가 자동 지정됩니다.

---

## 📄 라이선스 (License)

Copyright © 2023-현재 **주식회사 투비더원 (TOBETHEONE)** All rights reserved.
