import dynamic from 'next/dynamic'
import Link from 'next/link'
import CallToAct from './CallToAct'
import {
  promoters,
  container,
  containerPromoters
} from './Promoters.module.css'
import { eventData } from '../data/constants'

// Importando o componente DynamicImage dinamicamente
const DynamicImage = dynamic(() => import('./DynamicImage'))

const Promoters = ({ button, year }) => {
  const data = eventData[year];

  return (
    <section className={container}>
      {button &&
        <CallToAct {...button} />
      }
      <div className={containerPromoters}>
        {
          data.promoters.map((promoter, index) => (
            <Link key={index} href={promoter.link} target='_blank'>
              <DynamicImage
                className={promoters}
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
