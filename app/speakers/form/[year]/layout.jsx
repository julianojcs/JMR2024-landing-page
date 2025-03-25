import { eventData } from '../../../data/constants'

export async function generateMetadata({ params }) {
  const { year } = params
  // Check if year exists in eventData
  if (!eventData[year]) {
    notFound();
  }
  const data = eventData[year]

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
          url: `https://jornada.srmg.org.br/jmr${year}.jpg`,
          width: 1200,
          height: 630,
          alt: `JMR ${year} - Formulário de inscrição`
        }
      ],
      siteName: 'Jornada Mineira de Radiologia'
    },
    twitter: {
      card: 'summary_large_image',
      title: `JMR ${year} - Formulário de inscrição`,
      description: data.speakersForm.description,
      image: `https://jornada.srmg.org.br/jmr${year}.jpg`
    }
  }
}

export default function Layout({ children }) {
  return children
}