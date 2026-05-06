import { Section, Text, Link, Img, Hr, Row, Column } from '@react-email/components'
import { colors, typo, sp, radius } from '../tokens'

export interface NewsData {
  source: string
  title: string
  summary: string
  bullets: string[]
  tilnoteUrl: string
  sourceUrl: string
  linkLabel?: string
  // linkLabel 기본값: '틸노트로 읽기'
  imageUrl?: string
  imageAlt?: string
  showDivider?: boolean
}

export function NewsItem({
  source,
  title,
  summary,
  bullets,
  tilnoteUrl,
  sourceUrl,
  linkLabel = '틸노트로 읽기',
  imageUrl,
  imageAlt,
  showDivider = true,
}: NewsData) {
  return (
    <>
      <Section style={{ marginTop: sp.s500 }}>
        {/* OG 이미지 */}
        {imageUrl && (
          <Img
            src={imageUrl}
            alt={imageAlt ?? title}
            width="520"
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: radius.md,
              marginBottom: sp.s300,
              display: 'block',
            }}
          />
        )}

        {/* 출처 레이블 */}
        <Text
          style={{
            fontFamily: typo.font,
            fontSize: typo.caption,
            fontWeight: typo.w600,
            color: colors.textMuted,
            margin: `0 0 ${sp.s100} 0`,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
          }}
        >
          {source}
        </Text>

        {/* 제목 */}
        <Link href={tilnoteUrl} style={{ textDecoration: 'none' }}>
          <Text
            style={{
              fontFamily: typo.font,
              fontSize: '20px',
              fontWeight: typo.w700,
              color: colors.text,
              lineHeight: '1.35',
              margin: `0 0 ${sp.s200} 0`,
              letterSpacing: '-0.01em',
            }}
          >
            {title}
          </Text>
        </Link>

        {/* 한 줄 요약 */}
        <Text
          style={{
            fontFamily: typo.font,
            fontSize: typo.body,
            color: colors.textSubtle,
            lineHeight: '1.65',
            margin: `0 0 ${sp.s150} 0`,
          }}
        >
          {summary}
        </Text>

        {/* 3줄 요약 (bullets) */}
        {bullets.map((bullet, i) => (
          <Text
            key={i}
            style={{
              fontFamily: typo.font,
              fontSize: typo.bodySm,
              color: colors.textSubtle,
              lineHeight: '1.6',
              margin: `0 0 ${sp.s50} 0`,
              paddingLeft: sp.s200,
            }}
          >
            — {bullet}
          </Text>
        ))}

        {/* CTA 버튼 2개 — 전체 너비 균등 분할, 버튼 간격 sp.s150(12px) */}
        <Row style={{ marginTop: sp.s300 }}>
          <Column style={{ width: '50%', paddingRight: sp.s75 }}>
            <Link
              href={tilnoteUrl}
              style={{
                fontFamily: typo.font,
                fontSize: typo.body,        // 14px → 16px
                fontWeight: typo.w600,
                color: colors.textInverse,
                backgroundColor: colors.bgBrand,
                borderRadius: radius.md,
                padding: '16px 20px',       // 10px → 16px (세로 확장)
                textDecoration: 'none',
                display: 'block',
                textAlign: 'center',
                lineHeight: '1',
              }}
            >
              {linkLabel}
            </Link>
          </Column>
          <Column style={{ width: '50%', paddingLeft: sp.s75 }}>
            <Link
              href={sourceUrl}
              style={{
                fontFamily: typo.font,
                fontSize: typo.body,        // 14px → 16px
                fontWeight: typo.w600,
                color: colors.textMuted,
                border: `1px solid ${colors.borderStrong}`,
                borderRadius: radius.md,
                padding: '16px 20px',       // 10px → 16px
                textDecoration: 'none',
                display: 'block',
                textAlign: 'center',
                lineHeight: '1',
              }}
            >
              원문으로
            </Link>
          </Column>
        </Row>
      </Section>

      {showDivider && (
        <Hr style={{ borderColor: colors.border, margin: `${sp.s500} 0 0` }} />
      )}
    </>
  )
}
