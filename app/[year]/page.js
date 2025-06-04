import Banner from '../components/Banner'
import Header from '../components/Header'
import SocialMedias from '../components/SocialMedias'
import Description from '../components/Description'
import Promoters from '../components/Promoters'
import { MapIcon, CalendarIcon } from '../components/icons'
import { eventData } from '../data/constants'
import Events from '../components/Events'
import { notFound } from 'next/navigation'
import Comission from '../components/Comission'
import Tables from '../components/Tables'
import ModalBanner from '../components/ModalBanner'
import Introduction from '/app/components/Introduction';
import Sponsor from '/app/components/Sponsor'
import TravelAgency from '/app/components/TravelAgency'
import SubscriptionsStatusSection from '/app/components/SubscriptionsStatusSection'

// export async function getServerSideProps(context) {
//   if (!isValidRoute(context)) {
//     context.res.statusCode = 404
//     context.res.end()
//     console.log('Invalid URL')
//     return { props: { error: 'Invalid URL' } }
//   }
//
//   const { year } = context.params
//
//   return {
//     props: {
//       year
//     }
//   }
// }

export async function generateMetadata({ params }) {
  const { year } = params

  // Check if year exists in eventData
  if (!eventData[year]) {
    notFound()
  }

  const event = eventData[year]

  return {
    title: event.title,
    description: Array.isArray(event.description) ? event.description.join(' ') : event.description,
    keywords: Array.isArray(event.keywords) ? event.keywords.join(', ') : event.keywords,
    alternates: {
      canonical: `https://jornada.srmg.org.br/${year}`
    },
    openGraph: {
      title: event.ogTitle,
      description: event.ogDescription,
      type: 'website',
      url: `https://jornada.srmg.org.br/${year}`,
      images: [
        {
          url: `https://jornada.srmg.org.br/logo_jornada/jmr${year}.jpg`,
          width: 1200,
          height: 630,
          alt: `JMR ${year} - Jornada Mineira de Radiologia`
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: `JMR ${year} - Jornada Mineira de Radiologia`,
      description: Array.isArray(event.description) ? event.description.join(' ') : event.description,
      image: `https://jornada.srmg.org.br/logo_jornada/jmr${year}.jpg`
    }
  }
}

const Home = ({ params }) => {
  const { year } = params
  console.log('Ano passado para Table na rota específica /year:', year);

  // Check if year exists in eventData
  if (!eventData[year]) {
    notFound()
  }

  const data = eventData[year]

  const props = {
    year,
    MapIcon,
    CalendarIcon
  }
  return (
    <main style={{ overflowX: 'hidden' }}>
      <ModalBanner modalData={data.modal} />
      <Header props={props}>
        <SocialMedias url={data.social.instagram} />
      </Header>
      <Banner data={data.banner} />
      <Introduction introduction={data.introduction} />
      <Description description={data.description} />
      <SubscriptionsStatusSection />
      <TravelAgency data={data.travelAgency} />
      <Promoters button={data?.callToAct?.button01} year={year} />
      <Events button={data?.callToAct?.button02} year={year} />
      <Comission year={year} />
      <Tables priceTables={data.priceTables} year={year} />
      <Sponsor sponsorShip={data.sponsorShip} />
    </main>
  )
}

export default Home