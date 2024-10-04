import classnames from 'classnames'
import Image from 'next/image'
import abramedeLogo from '../../assets/images/logo/ABRAMEDE-MG/abramed-mg.png'
import srmgLogo from '../../assets/images/logo/SRMG/srmg.png'
import {
  abramede,
  srmg,
  promoters,
  containerPromoters
} from './promoters.module.css'

const Promoters = () => (
  <section className={containerPromoters}>
    <Image
      className={classnames(srmg, promoters)}
      src={srmgLogo}
      alt='srmg Logo'
      width={280}
      height={80}
      // width={'30.75svh'}
      // height={'8.78svh'}
    />
    <Image
      className={classnames(abramede, promoters)}
      src={abramedeLogo}
      alt='Abramede MG Logo'
      // width={200}
      // height={80}
    />
  </section>
)

export default Promoters
