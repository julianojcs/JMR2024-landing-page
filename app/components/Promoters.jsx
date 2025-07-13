import Link from 'next/link'
import CallToAct from './CallToAct'
import {
  buttonWrapper,
  brands,
  container,
  containerPromoters,
  logoContainer
} from './Promoters.module.css'
import { eventData } from '../data/constants'
import Image from 'next/image'

const Promoters = ({ year }) => {
  const promoters = eventData[year].promoters;

  return (
    <section className={container}>
      <div className={buttonWrapper}>
        <CallToAct
          {...promoters?.callToAct}
          year={year}
        />
      </div>
      <div className={containerPromoters}>
        {
          promoters.brands.map((promoter, index) => (
            <Link
              key={index}
              href={promoter.link}
              target='_blank'
              rel="noopener noreferrer"
              className={logoContainer}
              style={{ width: 200, height: 80 }}
            >
              <Image
                className={brands}
                src={promoter.src}
                alt={promoter.alt}
                fill
              />
            </Link>
          ))
        }
      </div>
    </section>
  )
}

export default Promoters
