import { type ReactNode } from 'react'
import { Html, Head, Body, Container, Font, Preview } from '@react-email/components'
import { colors, typo, sp } from '../tokens'

interface Props {
  preview: string
  children: ReactNode
}

export function EmailLayout({ preview, children }: Props) {
  return (
    <Html lang="ko">
      <Head>
        <Font
          fontFamily="Pretendard"
          fallbackFontFamily="Helvetica"
          webFont={{
            url: 'https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/packages/pretendard/dist/web/static/woff2/Pretendard-Regular.woff2',
            format: 'woff2',
          }}
          fontWeight={400}
          fontStyle="normal"
        />
        <Font
          fontFamily="Pretendard"
          fallbackFontFamily="Helvetica"
          webFont={{
            url: 'https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/packages/pretendard/dist/web/static/woff2/Pretendard-SemiBold.woff2',
            format: 'woff2',
          }}
          fontWeight={600}
          fontStyle="normal"
        />
        <Font
          fontFamily="Pretendard"
          fallbackFontFamily="Helvetica"
          webFont={{
            url: 'https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/packages/pretendard/dist/web/static/woff2/Pretendard-Bold.woff2',
            format: 'woff2',
          }}
          fontWeight={700}
          fontStyle="normal"
        />
      </Head>
      <Preview>{preview}</Preview>
      <Body
        style={{
          backgroundColor: colors.bg,
          fontFamily: typo.font,
          margin: '0',
          padding: '0',
          WebkitTextSizeAdjust: '100%',
          msTextSizeAdjust: '100%',
        }}
      >
        <Container
          style={{
            maxWidth: '600px',
            margin: '0 auto',
            padding: `${sp.s600} ${sp.s400}`,
          }}
        >
          {children}
        </Container>
      </Body>
    </Html>
  )
}
