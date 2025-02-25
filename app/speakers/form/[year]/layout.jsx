import { eventData } from '../../../data/constants'

export async function generateMetadata({ params }) {
  const { year } = params
  const data = eventData[year] || eventData[2025]

  return {
    title: data.speakersForm.title,
    description: data.speakersForm.description,
    openGraph: {
      title: `JMR ${year} - Formulário de inscrição de palestrantes / convidados`,
      description: data.speakersForm.description,
      type: 'website',
      url: `https://jornada.srmg.org.br/speakers/form/${year}`,
      images: [
        {
          url: `https://jornada.srmg.com.br/jmr${year}.png`,
          width: 1200,
          height: 630,
          alt: `JMR ${year} - Formulário de inscrição`
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: `JMR ${year} - Formulário de inscrição`,
      description: data.speakersForm.description,
      image: `https://jornada.srmg.com.br/jmr${year}.png`
    }
  }
}

export default function Layout({ children }) {
  return children
}