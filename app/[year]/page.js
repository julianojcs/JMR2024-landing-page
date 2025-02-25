import Banner from '../components/Banner'
import Header from '../components/Header'
import SocialMedias from '../components/SocialMedias'
import Description from '../components/Description'
import Promoters from '../components/Promoters'
import { MapIcon, CalendarIcon } from '../components/icons'
import { eventData } from '../data/constants'

export async function getServerSideProps(context) {
  if (!isValidRoute(context)) {
    context.res.statusCode = 404;
    context.res.end();
    console.log('Invalid URL');
    return { props: { error: "Invalid URL" } };
  }

  const { year } = context.params;

  return {
    props: {
      year,
    },
  };
}

export async function generateMetadata({ params }) {
  const { year } = params;
  const event = eventData[year];

  return {
    title: event.title,
    description: event.description,
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
      description: event.description,
      image: `https://jornada.srmg.org.br/logo_jornada/jmr${year}.jpg`
    }
  };
}

const Home = ({ params }) => {
  const { year } = params;
  const data = eventData[year];

  const props = {
    year,
    MapIcon,
    CalendarIcon
  }
  return (
    <>
      <Header props={props}>
        <SocialMedias url={data.social.instagram}/>
      </Header>
      <Banner
        lstBannerText={data.bannerText}
      />
      <Description description={data.description}/>
      <Promoters
        button={data.callToAct.button01}
        year={year}
      />
    </>
  )
}

export default Home