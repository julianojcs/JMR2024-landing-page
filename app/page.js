import Banner from './components/Banner'
import CallToAct from './components/CallToAct'
import Promoters from './components/Promoters'
import Description from './components/Description'
import Events from './components/Events'
import Card from './components/Card'

export const metadata = {
  title:
    'X Jornada Mineira de Radiologia & I Jornada Mineira de POCUS ABRAMEDE/MG e SRMG | 01 e 02 de Novembro de 2024'
}

const Home = () => {
  return (
    <>
      <Banner />
      <Description />
      <CallToAct />
      <Promoters />
      <Events>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Events>
    </>
  )
}

export default Home
