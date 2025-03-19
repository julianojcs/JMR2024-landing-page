import dynamic from 'next/dynamic'
import Link from 'next/link'
import CallToAct from './CallToAct'
import {
  buttonWrapper,
  brands,
  container,
  containerPromoters
} from './Promoters.module.css'
import { eventData } from '../data/constants'

// Importando o componente DynamicImage dinamicamente
const DynamicImage = dynamic(() => import('./DynamicImage'))

const Promoters = ({ year }) => {
  const promoters = eventData[year].promoters;

  return (
    <section className={container}>
      <div className={buttonWrapper}>
        <CallToAct {...promoters?.callToAct} />
      </div>
      <div className={containerPromoters}>
        {
          promoters.brands.map((promoter, index) => (
            <Link key={index} href={promoter.link} target='_blank'>
              <DynamicImage
                className={brands}
                src={promoter.src}
                alt={promoter.alt}
                width={200}
                height={80}
              />
            </Link>
          ))
        }
      </div>
    </section>
  )
}

export default Promoters
