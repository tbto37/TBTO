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

---

