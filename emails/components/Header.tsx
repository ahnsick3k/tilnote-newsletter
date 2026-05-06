import { type ReactNode } from 'react'
import { Section, Text, Hr } from '@react-email/components'
import { colors, typo, sp, radius } from '../tokens'

interface Props {
  date: string
  title: string
  subtitle: ReactNode
}

export function Header({ date, title, subtitle }: Props) {
  return (
    <>
      <Hr style={{ borderColor: colors.border, margin: `0 0 ${sp.s400}` }} />

      {/* 히어로 */}
      <Section style={{ textAlign: 'center' }}>
        {/* AI 뉴스레터 — 박스 + 중앙정렬 */}
        <Text
          style={{
            fontFamily: typo.font,
            fontSize: typo.caption,
            fontWeight: typo.w600,
            color: colors.textBrand,
            backgroundColor: colors.bgBrandSubtle,
            border: `1px solid ${colors.borderBrand}`,
            borderRadius: radius.full,
            padding: '4px 16px',
            display: 'inline-block',
            margin: `0 0 ${sp.s300} 0`,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
          }}
        >
          틸노트 뉴스
        </Text>
        <Text
          style={{
            fontFamily: typo.font,
            fontSize: '32px',
            fontWeight: typo.w700,
            color: colors.text,
            lineHeight: '1.15',
            margin: `0 0 ${sp.s200} 0`,
            letterSpacing: '-0.02em',
          }}
        >
          {title}
        </Text>
        <Text
          style={{
            fontFamily: typo.font,
            fontSize: typo.body,
            color: colors.textSubtle,
            lineHeight: '1.65',
            margin: '0',
          }}
        >
          {subtitle}
        </Text>
      </Section>
    </>
  )
}
