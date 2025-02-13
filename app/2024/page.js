import Banner from '../components/Banner'
import Promoters from '../components/Promoters'
import Description from '../components/Description'
import Events from '../components/Events'
import Comission from '../components/Comission'
import Sponsor from '../components/Sponsor'
import Tables from '../components/Tables'
import Header from '../components/Header'
import SocialMedias from '../components/SocialMedias'
import { MapIcon, CalendarIcon, calendarEvent } from '../components/icons'

export const metadata = {
  title: calendarEvent.title
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
      <Description />
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
