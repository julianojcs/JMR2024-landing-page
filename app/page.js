import Banner from './components/Banner'
import Promoters from './components/Promoters'
import Description from './components/Description'
import Events from './components/Events'
import Comission from './components/Comission'
import Sponsor from './components/Sponsor'
import Tables from './components/Tables'
import Header from './components/Header'
import SocialMedias from './components/SocialMedias'
import { MapIcon, CalendarIcon, calendarEvent } from './components/icons'

export const metadata = {
  title:
    'X Jornada Mineira de Radiologia e a I Jornada de POCUS ABRAMEDE/MG e SRMG',
  description:
    'A X Jornada Mineira de Radiologia e Diagnóstico por Imagem (JMR) e a I Jornada de POCUS ABRAMEDE/MG e SRMG acontecerão nos dias 1º e 2 de novembro de 2024, na Associação Médica de Minas Gerais, em Belo Horizonte. O encontro vai reunir profissionais renomados, especialistas e estudantes para discutir as mais recentes inovações e técnicas em radiologia e ultrassonografia, com foco no aprimoramento de práticas clínicas ligadas ao abdômen, radiologia musculoesquelética e intervenção guiada por imagem. Durante os dias de evento, os participantes terão a oportunidade de assistir a palestras, workshops e mesas-redondas, abordando temas relevantes e atuais que impactam diretamente o dia a dia dos profissionais da saúde. Além disso, a JMR 2024 será uma excelente oportunidade para networking, permitindo a troca de experiências entre colegas e o fortalecimento das conexões profissionais. O evento é promovido pela Sociedade de Radiologia e Diagnóstico por Imagem de Minas Gerais (SRMG) e pela Associação Brasileira de Medicina de Emergência (Abramede) - MG.',
  keywords:
    'Jornada Mineira de Radiologia, Jornada de POCUS, ABRAMEDE, SRMG, Radiologia, Diagnóstico por Imagem, Ultrassonografia, Abdômen, Musculoesquelética, Intervenção Guiada por Imagem, Palestras, Workshops, Mesas-redondas, Networking, Evento, Saúde, Profissionais da Saúde, Belo Horizonte, JMR2024, Abdômen, POCUS, Gastrointestinal, Geniturinario, Mama, MSK, BI-RADS, Intervenção Mamária, Intervenção não Vascular, Hands on, Inovação IA, Inteligêcia Artificial, IA, AI, Programação Científica, Comissão Científica SRMG, Comissão Científica ABRAMEDE, Augusto Antunes, Benito Pio Ceccato Júnior, Elísio José Salgado Ribeiro, Flávio Coelho Barros, Francisco Ribeiro Teixeira Junior, Júlio Guerra Domingues, Luis Ronan MF de Souza, Marcus Vinicius Amorim, Rogerio Augusto Pinto Silva, Thales Matheus M Santos, Adriene Moraes Campos, Anna Christina Gruber, Ivie Braga de Paula, Luciana Costa Silva, Maria Fernanda Borges Abreu, Paula Figueiredo Rocha, Raquel Del Fraro Rabelo, Raquel Sadala Mendes, Arthur Elias de Aguiar Machado, Luiz Ernani Meira Júnior, Marcus Vinicius Melo Andrade, Maria Aparecida Braga, Hermes Pardini, Grupo Fleury, Bayer, Unimed, Unimed BH, São MArcos Dasa, Bracco, Ceu Diagnósticos, CBR, AMMG, Core, Juliano Costa Silva, Juliano Costa, apfjuliano',
  openGraph: {
    title: 'JMR 2024 - Jornada Mineira de Radiologia',
    description: 'Junte-se à Jornada Mineira de Radiologia 2024 e descubra as inovações na área de diagnóstico por imagem.',
    type: 'website',
    url: 'https://jornada.srmg.com.br/2024',
    images: [
      {
        url: 'https://jornada.srmg.com.br/logo_jornada/jmr2024.jpg',
        width: 1200,
        height: 630,
        alt: 'JMR 2024 - Jornada Mineira de Radiologia'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JMR 2024 - Jornada Mineira de Radiologia',
    description: 'Participe da Jornada Mineira de Radiologia 2024 e fique por dentro das últimas inovações em diagnóstico por imagem.',
    image: 'https://jornada.srmg.com.br/logo_jornada/jmr2024.jpg'
  }
}

const Home = () => {
  const props = {
    MapIcon,
    CalendarIcon,
    calendarEvent,
    logoName: 'jmr2024.png'
  }
  const callToAct = {
    button01: {
      // caption: 'Faça sua inscrição',
      caption: 'Emita o seu certificado',
      link: 'https://eventosis.com.br/credenciamento/jmr2024/'
    },
    button02: {
      //caption: 'Se inscreva agora na Jornada',
      caption: 'Emita o seu certificado',
      link: 'https://eventosis.com.br/credenciamento/jmr2024/'
    },
    button03: {
      // caption: 'Se inscreva Hands On',
      caption: 'Emita o seu certificado',
      link: 'https://eventosis.com.br/credenciamento/jmr2024/'
    },
    button04: {
      // caption: 'Se inscreva na Jornada',
      caption: 'Emita o seu certificado',
      link: 'https://eventosis.com.br/credenciamento/jmr2024/'
    },
    button05: {
      // caption: 'Se inscreva no Curso de IA',
      caption: 'Emita o seu certificado',
      link: 'https://eventosis.com.br/credenciamento/jmr2024/'
    }
  }

  return (
    <>
      <Header
        props={props}
      >
        <SocialMedias />
      </Header>
      <Banner
        lstBannerText={['Emita o seu certificado', 'clicando em um dos botões abaixo.']}
      />
      <Description/>
      <Promoters
        button={callToAct.button01}
      />
      <Events
        button={callToAct.button02}
      />
      <Comission />
      <Tables
        buttons={
          [callToAct.button03, callToAct.button04, callToAct.button05]
        }
      />
      <Sponsor />
    </>
  )
}

export default Home
