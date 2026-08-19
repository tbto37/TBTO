/**
 * 회사 기본 정보 — 이 파일에서 한 곳으로 관리합니다.
 * 확정되지 않은 값은 placeholder 로 유지하세요. (임의 생성 금지)
 */
export const company = {
  name: '주식회사 투비더원',
  nameEn: 'TOBETHEONE Co., Ltd.',
  shortName: 'TOBETHEONE',
  ceo: '조현원',
  ceoEn: 'Cho Hyunwon',
  founded: '2023-03-01',
  foundedLabel: '2023년 3월 1일',
  location: '대한민국 서울특별시',
  locationEn: 'Seoul, Republic of Korea',
  domain: 'https://www.tobetheone.co.kr',

  // 확정 전 placeholder — 실제 값으로 교체하세요.
  email: '[대표 이메일 입력]',
  phone: '[대표 전화번호 입력]',
  address: '[상세 주소 입력]',
  bizNumber: '[사업자등록번호 입력]',
} as const

export type Company = typeof company
