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
      caption: 'Faça sua inscrição',
      link: 'https://eventosis.com.br/credenciamento/jmr2024/'
    },
    buttom02: {
      caption: 'Se inscreva agora na Jornada',
      link: 'https://eventosis.com.br/credenciamento/jmr2024/'
    },
    buttom03: {
      caption: 'Se inscreva Hands On Mamas Intervencionistas',
      link: 'https://eventosis.com.br/credenciamento/jmr2024/'
    },
    buttom04: {
      caption: 'Se inscreva Hands On BI-RADS',
      link: 'https://eventosis.com.br/credenciamento/jmr2024/'
    }
  }

  return (
    <>
      <Banner />
      <Description>
        <CallToAct
          caption={callToAct.buttom01.caption}
          link={callToAct.buttom01.link}
        />
      </Description>
      <Promoters />
      <Events>
        <CallToAct
          caption={callToAct.buttom02.caption}
          link={callToAct.buttom02.link}
        />
      </Events>
      <Comission />
      <Tables />
      <Sponsor />
    </>
  )
}

export default Home
