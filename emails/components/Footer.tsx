import { Section, Text, Link, Hr } from '@react-email/components'
import { colors, typo, sp } from '../tokens'

interface Props {
  unsubscribeUrl?: string
}

export function Footer({ unsubscribeUrl = 'https://tilnote.io/unsubscribe' }: Props) {
  return (
    <>
      <Hr style={{ borderColor: colors.border, margin: `${sp.s600} 0 ${sp.s400}` }} />
      <Section style={{ textAlign: 'center' }}>
        <Link href="https://tilnote.io" style={{ textDecoration: 'none' }}>
          <Text
            style={{
              fontFamily: typo.font,
              fontSize: typo.h4,
              fontWeight: typo.w700,
              color: colors.textBrand,
              margin: `0 0 ${sp.s150} 0`,
              letterSpacing: '-0.01em',
            }}
          >
            틸노트
          </Text>
        </Link>
        <Text
          style={{
            fontFamily: typo.font,
            fontSize: typo.caption,
            color: colors.textMuted,
            margin: `0 0 ${sp.s100} 0`,
            lineHeight: '1.5',
          }}
        >
          매일 아침 AI 핵심 뉴스를 요약해 드립니다
        </Text>
        <Text
          style={{
            fontFamily: typo.font,
            fontSize: typo.caption,
            color: colors.textMuted,
            margin: '0',
          }}
        >
          <Link
            href={unsubscribeUrl}
            style={{ color: colors.textMuted, textDecoration: 'underline' }}
          >
            수신거부
          </Link>
          {' · '}
          <Link
            href="https://tilnote.io"
            style={{ color: colors.textMuted, textDecoration: 'underline' }}
          >
            tilnote.io
          </Link>
        </Text>
      </Section>
    </>
  )
}
