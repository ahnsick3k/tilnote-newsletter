import { EmailLayout } from './components/EmailLayout'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { NewsItem, type NewsData } from './components/NewsItem'

// OG 이미지는 각 원문 URL의 <meta property="og:image"> 에서 자동 추출
const news: NewsData[] = [
  {
    source: 'MarkTechPost',
    title: 'Python에서 동적 도구 라우팅을 갖춘 LLM용 모듈식 스킬 기반 에이전트 시스템 구축',
    summary:
      'LLM용 모듈형 스킬 기반 에이전트를 파이썬으로 구축하고, 스킬 등록·선택·연결을 통해 유연하게 동작시키는 방법을 설명한다.',
    bullets: [
      '기능을 운영체제처럼 구조화된 재사용 가능한 스킬 단위로 설계한다.',
      '각 스킬에 메타데이터와 입출력 스키마를 부여하고 중앙 레지스트리에서 관리한다.',
      '에이전트는 툴 호출과 다단계 추론으로 필요한 스킬을 동적으로 오케스트레이션한다.',
    ],
    tilnoteUrl: 'https://tilnote.io/news/69fa5bbb19faec330cd16b25',
    sourceUrl:
      'https://www.marktechpost.com/2026/05/05/build-a-modular-skill-based-agent-system-for-llms-with-dynamic-tool-routing-in-python/',
    linkLabel: '틸노트로 읽기',
    imageUrl: 'https://www.marktechpost.com/wp-content/uploads/2026/05/blog-2-1.png',
    imageAlt: 'Modular Skill-Based Agent System Diagram',
  },
  {
    source: 'TechCrunch',
    title: 'Character.AI 의사 사칭 소송이 던진 질문: 캐릭터형 AI는 어디까지 맡겨도 되나',
    summary:
      '캐릭터형 AI는 재미와 몰입에 강하지만, 전문가처럼 보일수록 오정보 위험이 커서 용도를 분명히 구분해야 한다.',
    bullets: [
      '사람 같은 인터페이스와 전문가 역할 놀이는 사용자의 경계심을 낮춰 잘못된 정보를 더 쉽게 믿게 만든다.',
      '캐릭터형 AI는 놀이·연습·창작에는 적합하지만, 의료·법률·재무처럼 정확성이 중요한 분야에는 부적합하다.',
      '중요한 정보는 반드시 다른 신뢰할 수 있는 출처로 재확인해야 한다.',
    ],
    tilnoteUrl: 'https://tilnote.io/pages/69fa5ba819faec330cd16b1a',
    sourceUrl:
      'https://techcrunch.com/2026/05/05/pennsylvania-sues-character-ai-after-a-chatbot-allegedly-posed-as-a-doctor',
    imageUrl:
      'https://techcrunch.com/wp-content/uploads/2026/05/shapiro-2272836952.jpg?resize=1200,908',
    imageAlt: 'Character.AI lawsuit - Pennsylvania attorney general',
  },
  {
    source: 'Simon Willison',
    title: 'llm-echo 0.5a0가 알려주는 것: LLM 앱은 가짜 모델부터 테스트해야 한다',
    summary:
      'LLM 앱 테스트는 실제 모델보다 먼저 llm-echo 같은 가짜 모델로 연결·스트리밍·툴 호출을 검증한 뒤, 실제 모델로 품질을 따로 확인하는 것이 효율적이다.',
    bullets: [
      'llm-echo는 입력을 그대로 보여줘 시스템 프롬프트 누락이나 옵션 전달 오류 같은 통합 문제를 빠르게 찾게 해준다.',
      '0.5a0의 thinking 옵션은 reasoning 청크를 흉내 내 스트리밍 UI와 툴 호출 흐름 테스트를 돕는다.',
      '다만 echo는 답변 품질과 실제 추론 성능은 검증하지 못해, 이후 실제 모델 테스트와 평가가 필요하다.',
    ],
    tilnoteUrl: 'https://tilnote.io/pages/69fa4da119faec330cd166d3',
    sourceUrl: 'https://simonwillison.net/2026/May/5/llm-echo',
    // Simon Willison 블로그는 OG 이미지 없음 → 이미지 생략
    showDivider: false,
  },
]

export default function AINews20260506() {
  return (
    <EmailLayout preview="2026.05.06 틸노트 AI NEWS">
      <Header
        date="2026년 5월 6일"
        title="2026.05.06 틸노트 AI NEWS"
        subtitle={<>당신의 지식 수준을 최전선으로 이끌어주는 틸노트가 엄선한 뉴스.<br />유료고객은 뉴스 터미널을 통해서 더욱 엄선되고 가공된 뉴스를 만나볼 수 있습니다.</>}
      />
      {news.map((item, i) => (
        <NewsItem key={i} {...item} showDivider={i < news.length - 1} />
      ))}
      <Footer />
    </EmailLayout>
  )
}
