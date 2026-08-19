# 프로젝트 작업 일지 (Work Log)

본 문서는 **주식회사 투비더원(TOBETHEONE)** 홈페이지 개발 및 유지보수 작업 내역을 기록하는 문서입니다.

---

## 📅 작업 이력

### 2026-08-19

#### 1. 프로젝트 전체 스캔 및 README.md 작성
* **내용**: 프로젝트 아키텍처, 기술 스택, 디렉터리 구조, 섹션 구성, 다국어 시스템 등을 분석하고 [`README.md`](../README.md)에 상세히 정리.
* **관련 파일**: `README.md`

#### 2. Vercel 배포 가이드 안내
* **내용**: Next.js + pnpm 환경에 맞춘 Vercel 빌드 및 배포 옵션(Build Command, Output Directory, Install Command, Environment Variables) 분석 및 가이드 제공.

#### 3. 회사 공식 로고 및 브랜딩 반영
* **내용**:
  * [`public/logo.png`](../public/logo.png) 이미지를 웹사이트 헤더 및 푸터에 적용 (`next/image` 활용).
  * 파비콘 및 모바일 터치 아이콘(`metadata.icons`)에 `/logo.png` 연동.
* **관련 파일**:
  * `components/header.tsx`
  * `components/footer.tsx`
  * `app/layout.tsx`

#### 4. v0 잔여 소스 제거
* **내용**:
  * `app/layout.tsx`에서 `generator: 'v0.app'` 메타데이터 제거.
  * `package.json`의 프로젝트명을 `tobetheone`으로 변경.
* **관련 파일**:
  * `app/layout.tsx`
  * `package.json`

#### 5. 회사명 일괄 통일 (한글 / 영문)
* **표기 기준**:
  * **한글**: `주식회사 투비더원`
  * **영문**: `TOBETHEONE`
* **관련 파일**:
  * `lib/company.ts`: `name`, `nameEn`, `shortName` 등 기본 정보 업데이트
  * `lib/i18n/content.ts`: 다국어(한국어, 영어, 일본어) 내 저작권 및 서비스 소개 문구 업데이트
  * `app/layout.tsx` & `app/page.tsx`: SEO Title, Description, Keywords, JSON-LD Schema 갱신
  * `README.md`: 프로젝트 안내 문서 내 회사명 갱신

#### 6. 프로덕션 빌드 검증
* **내용**: `next build` 실행을 통해 모든 정적 페이지 및 컴포넌트가 오류 없이 컴파일되는지 검증 완료.

#### 7. 워크스페이스 작업 규칙 및 일지 기록 자동화 설정
* **내용**:
  * 작업 시작 전 `doc/work_log.md` 우선 스캔 수칙 설정.
  * 모든 작업 완료 후 `doc/work_log.md` 필수 업데이트 수칙 설정.
  * 워크스페이스 가이드라인 파일(`AGENTS.md`, `.agents/rules/work_process.md`) 생성.
* **관련 파일**:
  * `AGENTS.md`
  * `.agents/rules/work_process.md`
  * `doc/work_log.md`

#### 8. 헤더 검은색/다크 배경 테마 적용
* **내용**:
  * 검은색 배경의 공식 로고(`logo.png`)와 자연스럽게 어우러지도록 헤더 전체를 블랙/다크 테마(`bg-black/90`, `backdrop-blur-md`, `border-white/10`)로 수정.
  * 텍스트 컬러(화이트/그레이), 내비게이션 hover 효과, 다국어 전환 버튼(글래스모피즘), 모바일 메뉴 드롭다운까지 다크 테마로 일관되게 업데이트.
* **관련 파일**:
  * `components/header.tsx`
  * `doc/work_log.md`

#### 9. 로고 이미지 CSS 블렌딩(mix-blend-screen)을 통한 배경 투명화
* **내용**:
  * 불투명한 검은색 배경을 가진 `logo.png`의 배경 픽셀을 CSS `mix-blend-screen`을 통해 투명화하여 헤더 및 네이비/블랙 배경과 경계선 없이 골드 큐브 심볼만 선명하게 출력되도록 개선.
  * 푸터 영역에도 다크 뱃지 컨테이너 및 `mix-blend-screen`을 적용하여 일관된 로고 렌더링 품질 확보.
* **관련 파일**:
  * `components/header.tsx`
  * `components/footer.tsx`
  * `doc/work_log.md`

#### 10. logo.png 파일 자체를 완전한 투명 배경 PNG로 변환
* **내용**:
  * `public/logo.png` 파일 픽셀 분석 결과, 모든 픽셀(124,584개)이 `Alpha=255(100% 불투명)` 상태인 것을 확인.
  * 골드 큐브 심볼 영역을 제외한 배경 영역(약 111,427개 픽셀)을 Alpha=0(완전 투명)으로 변환하여 `public/logo.png`를 투명 PNG로 신규 생성 및 적용.
  * 헤더 및 푸터에서 CSS 블렌드 의존 없이 순수 투명 PNG로 깨끗하게 렌더링되도록 정리.
* **관련 파일**:
  * `public/logo.png`
  * `components/header.tsx`
  * `components/footer.tsx`
  * `doc/work_log.md`

#### 11. Hero(헤더 하단) 및 Footer 배경을 순수 블랙 테마(bg-black)로 변경
* **내용**:
  * 헤더 바로 아래 위치한 **Hero 섹션**의 배경을 기존 네이비(`bg-navy`)에서 **블랙(`bg-black text-white`)**으로 변경하여 헤더와 상단 비주얼 전체가 일체감 있는 프리미엄 블랙 룩앤필을 형성.
  * **Footer 섹션**의 배경도 `bg-card`에서 **`bg-black text-white`**로 변경하고, 푸터 로고, 텍스트, 저작권, 사업자 정보 스타일을 다크 테마에 맞춰 가독성 높게 최적화.
  * HeroFlow SVG 다이어그램의 노드 색상과 캡션을 블랙 테마에 맞춰 정밀 보정.
* **관련 파일**:
  * `components/hero.tsx`
  * `components/hero-flow.tsx`
  * `components/footer.tsx`
  * `doc/work_log.md`

#### 12. 헤더 배경을 최상단에서도 일관된 블랙(bg-black/95)으로 고정
* **내용**:
  * 최상단에서 헤더가 40% 반투명(`bg-black/40`)으로 처리되어 뒷편 Hero의 앰비언트 글로우가 투과되면서 로고 영역과 명암 차이/박스 윤곽이 생기던 문제를 해결.
  * 스크롤 위치와 상관없이 항상 일관된 **`bg-black/95 backdrop-blur-md`**로 고정하여, 최상단에서도 로고와 헤더가 완벽하게 일체화되도록 개선.
* **관련 파일**:
  * `components/header.tsx`
  * `doc/work_log.md`

#### 13. Header 로고 및 배경 속성을 Footer와 100% 동일하게 완전 일치화
* **내용**:
  * 정상적으로 깨끗하게 렌더링되는 **Footer**의 방식과 동일하게, **Header**에서도 반투명 및 backdrop-blur 간섭을 완전히 제거하고 **순수 100% 불투명 블랙(`bg-black`)**으로 변경.
  * Image 태그의 클래스 및 렌더링 옵션도 Footer와 동일하게 단순화(`className="h-8 w-8 object-contain"`)하여 브라우저 레이어 합성 간섭을 원천 차단.
* **관련 파일**:
  * `components/header.tsx`
  * `doc/work_log.md`

#### 14. 문의하기 폼 이메일 발송 시스템 구축 (API & 이메일 템플릿 연동)
* **내용**:
  * `nodemailer` 및 Zod 기반의 서버 사이드 API 라우트([`app/api/contact/route.ts`](../app/api/contact/route.ts)) 신규 생성.
  * 문의 폼 제출 시 고객 정보(회사명, 담당자, 이메일, 연락처, 문의유형, 일정, 내용 등)를 구색에 맞춘 반응형 HTML & Text 템플릿으로 변환하여 `tobetheone@tobetheone.kr`로 자동 발송되도록 구현.
  * 메일 수신 시 바로 **[답장]** 버튼을 누르면 고객의 이메일로 즉시 회신되도록 `replyTo` 설정.
  * [`components/contact.tsx`](../components/contact.tsx)의 `onSubmit` 함수를 실제 API 비동기 호출(`fetch('/api/contact')`)로 연동하고 성공/실패 피드백 처리.
  * 환경변수 예시 파일([`.env.example`](../.env.example)) 생성 및 `.gitignore` 보안 설정.
* **관련 파일**:
  * `app/api/contact/route.ts`
  * `components/contact.tsx`
  * `.env.example`
  * `.gitignore`
  * `package.json`
  * `README.md`
  * `doc/work_log.md`

#### 15. Git Pull local 충돌 해결 및 최신 커밋 반영
* **내용**:
  * 로컬 개발 환경(`pnpm dev`, `pnpm install`)에서 자동 변경된 `pnpm-lock.yaml` 및 `next-env.d.ts`로 인해 발생한 `git pull` 병합 충돌 해결.
  * 로컬 자동 변경 사항을 복구(`git restore .`)한 후 원격 저장소(`origin/main`)의 최신 커밋(`4f41f83`)을 성공적으로 동기화(Fast-forward).
* **관련 파일**:
#### 16. 프로젝트 경험 하단 기업 로고 무한 우측 슬라이드 마키(Marquee) 구축
* **내용**:
  * **요청 반영**: 프로젝트 경험 영역 하단에 주요 대기업 고객사/협력사 로고(현대, 삼성, LG, SK, CJ, 포스코, 롯데, 한화, 네이버, 카카오, 신한, KB 등 12개 주요 기업)를 우측 방향으로 무한 회전하는 애니메이션 마키 컴포넌트([`components/client-marquee.tsx`](../components/client-marquee.tsx)) 구축.
  * **애니메이션 구현**: CSS `@keyframes marquee-right` (`translateX(-50%)` → `translateX(0%)`) 및 2배 복제 트랙 배열 구조를 적용하여 이음새(Gap)나 멈춤 없이 우측으로 60fps 무한 루프 구현.
  * **UX & 비주얼 디테일**:
    * 좌우 페이드 그라데이션 마스크(`bg-gradient-to-r/l`)를 적용하여 로고가 부드럽게 등장하고 퇴장.
    * 마우스 오버 시 슬라이드가 일시 정지(`hover:[animation-play-state:paused]`)되고 고유 브랜딩 컬러 호버 반응형 뱃지 카드 적용.
    * 한국어, 영어, 일본어 다국어(`lib/i18n/content.ts`) 지원.
* **관련 파일**:
  * `components/client-marquee.tsx`
  * `components/projects.tsx`
  * `app/globals.css`
  * `lib/i18n/content.ts`
  * `doc/work_log.md`

---










