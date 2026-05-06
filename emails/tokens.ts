// TILNOTE Design System v0.5 — Email Tokens
// CSS 변수는 이메일 클라이언트에서 동작하지 않으므로 DESIGN.md의 실제 값을 사용.

// Layer 2 — Alias (resolved values from DESIGN.md)
export const colors = {
  bg: '#ffffff',
  bgSubtle: '#fafafa',
  bgBrand: '#0044DD',              // blue-700
  bgBrandSubtle: 'hsla(212,100%,97%,1)', // blue-100
  text: 'hsl(0,0%,9%)',           // gray-1000
  textSubtle: 'hsl(0,0%,32%)',    // gray-900
  textMuted: 'hsl(0,0%,46%)',     // gray-700
  textBrand: '#0044DD',
  textInverse: '#ffffff',
  border: 'rgba(0,0,0,0.08)',     // gray-alpha-200
  borderStrong: 'rgba(0,0,0,0.16)', // gray-alpha-400
  borderNeutral: 'rgba(128,128,128,0.45)', // visible in both light & dark
  borderBrand: '#0044DD',
} as const

// 8px 그리드 기반 스페이싱
export const sp = {
  s50: '4px',
  s75: '6px',
  s100: '8px',
  s150: '12px',
  s200: '16px',
  s250: '20px',
  s300: '24px',
  s400: '32px',
  s500: '40px',
  s600: '48px',
} as const

export const typo = {
  font: "Pretendard, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, sans-serif",
  // 이메일에서는 clamp() 사용 불가 → 고정값
  h2: '28px',
  h3: '20px',
  h4: '16px',
  body: '16px',
  bodySm: '14px',
  caption: '12px',
  w400: 400,
  w600: 600,
  w700: 700,
} as const

export const radius = {
  sm: '6px',
  md: '10px',
  lg: '14px',
  full: '9999px',
} as const
