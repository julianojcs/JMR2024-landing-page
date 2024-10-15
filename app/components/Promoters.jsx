import classnames from 'classnames'
import Image from 'next/image'
import abramedeLogo from '/public/logo/abramed-mg.png'
import srmgLogo from '/public/logo/srmg.png'
import Link from 'next/link'
import {
  abramede,
  srmg,
  promoters,
  container,
  containerPromoters
} from './Promoters.module.css'

const Promoters = ({ children }) => (
  <section className={container}>
    {children && <div style={{padding: '1.5rem'}}>{children}</div>}
    <div className={containerPromoters}>
      <Link href='https://srmg.org.br/' target='_blank'>
        <Image
          className={classnames(srmg, promoters)}
          src={srmgLogo}
          alt='srmg Logo'
          width={280}
          height={80}
          // width={'30.75svh'}
          // height={'8.78svh'}
        />
      </Link>
      <Link href='https://www.abramedemg.org.br/' target='_blank'>
        <Image
          className={classnames(abramede, promoters)}
          src={abramedeLogo}
          alt='Abramede MG Logo'
          // width={200}
          // height={80}
        />
      </Link>
    </div>
  </section>
)

export default Promoters
