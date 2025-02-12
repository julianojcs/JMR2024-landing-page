import Banner from '../components/Banner'
import CallToAct from '../components/CallToAct'
import Promoters from '../components/Promoters'
import Description from '../components/Description'
import Events from '../components/Events'
import Comission from '../components/Comission'
import Sponsor from '../components/Sponsor'
import Tables from '../components/Tables'

export const metadata = {
  title:
    'X Jornada Mineira de Radiologia & I Jornada Mineira de POCUS ABRAMEDE/MG e SRMG | 01 e 02 de Novembro de 2024'
}

const Home = () => {
  const callToAct = {
    buttom01: {
      // caption: 'Faça sua inscrição',
      caption: 'Emita o seu certificado',
      link: 'https://eventosis.com.br/credenciamento/jmr2024/'
    },
    buttom02: {
      //caption: 'Se inscreva agora na Jornada',
      caption: 'Emita o seu certificado',
      link: 'https://eventosis.com.br/credenciamento/jmr2024/'
    },
    buttom03: {
      // caption: 'Se inscreva Hands On',
      caption: 'Emita o seu certificado',
      link: 'https://eventosis.com.br/credenciamento/jmr2024/'
    },
    buttom04: {
      // caption: 'Se inscreva na Jornada',
      caption: 'Emita o seu certificado',
      link: 'https://eventosis.com.br/credenciamento/jmr2024/'
    },
    buttom05: {
      // caption: 'Se inscreva no Curso de IA',
      caption: 'Emita o seu certificado',
      link: 'https://eventosis.com.br/credenciamento/jmr2024/'
    }
  }

  return (
    <>
      <Banner />
      <Description />
      <Promoters >
        <CallToAct
          {...callToAct.buttom01}
        />
      </Promoters>
      <Events>
        <CallToAct
          {...callToAct.buttom02}
        />
      </Events>
      <Comission />
      <Tables >
          <CallToAct
            {...callToAct.buttom03}
          />
          <CallToAct
            {...callToAct.buttom04}
          />
          <CallToAct
            {...callToAct.buttom05}
          />
      </Tables>
      <Sponsor />
    </>
  )
}

export default Home
