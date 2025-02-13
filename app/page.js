import Image from 'next/image'
import saveTheDate from '/public/save_the_date.png'
import { imagem, container, content, footer } from './page.module.css'

const metadata = {
  title:
    'Save the date - XI Jornada Mineira de Radiologia e Congresso de Imaginologia da Mulher',
  description:
    'XI Jornada Mineira de Radiologia e Congresso de Imaginologia da Mulher.',
  keywords:
    'Jornada Mineira de Radiologia, Jornada de POCUS, ABRAMEDE, SRMG, Radiologia, Diagnóstico por Imagem, Ultrassonografia, Abdômen, Musculoesquelética, Intervenção Guiada por Imagem, Palestras, Workshops, Mesas-redondas, Networking, Evento, Saúde, Profissionais da Saúde, Belo Horizonte, JMR2024, Abdômen, POCUS, Gastrointestinal, Geniturinario, Mama, MSK, BI-RADS, Intervenção Mamária, Intervenção não Vascular, Hands on, Inovação IA, Inteligêcia Artificial, IA, AI, Programação Científica, Comissão Científica SRMG, Comissão Científica ABRAMEDE, Augusto Antunes, Benito Pio Ceccato Júnior, Elísio José Salgado Ribeiro, Flávio Coelho Barros, Francisco Ribeiro Teixeira Junior, Júlio Guerra Domingues, Luis Ronan MF de Souza, Marcus Vinicius Amorim, Rogerio Augusto Pinto Silva, Thales Matheus M Santos, Adriene Moraes Campos, Anna Christina Gruber, Ivie Braga de Paula, Luciana Costa Silva, Maria Fernanda Borges Abreu, Paula Figueiredo Rocha, Raquel Del Fraro Rabelo, Raquel Sadala Mendes, Arthur Elias de Aguiar Machado, Luiz Ernani Meira Júnior, Marcus Vinicius Melo Andrade, Maria Aparecida Braga, Hermes Pardini, Grupo Fleury, Bayer, Unimed, Unimed BH, São MArcos Dasa, Bracco, Ceu Diagnósticos, CBR, AMMG, Core, Juliano Costa Silva, Juliano Costa, apfjuliano',
  openGraph: {
    title: 'JMR 2025 - Save the date',
    description: 'XI Jornada Mineira de Radiologia e Congresso de Imaginologia da Mulher.',
    type: 'website',
    url: 'https://jornada.srmg.com.br/2025',
    images: [
      {
        url: 'https://jornada.srmg.com.br/save_the_date_share.png',
        width: 1200,
        height: 630,
        alt: 'JMR 2025 - save_the_date.png'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JMR 2025 - save_the_date.png',
    description: 'XI Jornada Mineira de Radiologia e Congresso de Imaginologia da Mulher.',
    image: 'https://jornada.srmg.com.br/save_the_date_share.png'
  }
}

export async function generateMetadata() {
  return metadata
}

const Home = () => {
  return (
    <div className={container}>
      <div className={content}>
        <Image
          src={saveTheDate}
          alt="Save the date"
          className={imagem}
          priority
        />
      </div>
      <div className={footer}>
      </div>
    </div>
  )
}

export default Home