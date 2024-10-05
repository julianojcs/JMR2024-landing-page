import classnames from 'classnames'
import Image from 'next/image'
import abramedeLogo from '../../assets/images/logo/ABRAMEDE-MG/abramed-mg.png'
import srmgLogo from '../../assets/images/logo/SRMG/srmg.png'
import avatar from '../../assets/images/avatars/raquel-del-fraro-rabelo.png'
import gridCircles from '../../assets/images/svg/grid-circles.svg'
import Link from 'next/link'
import {
  container,
  abramede,
  srmg,
  promoters,
  firstCollumn,
  secondCollumn,
  avatars,
  gridCircle
} from './Comission.module.css'

const Comission = () => (
  <section className={container}>
    <div className={firstCollumn}>
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
      <h2>Comissão Científica SRMG</h2>
      <div className={classnames(avatars)}>
        <div className={classnames(gridCircle)}></div>
      </div>
    </div>
    <div className={secondCollumn}>
      <Link href='https://www.abramedemg.org.br/' target='_blank'>
        <Image
          className={classnames(abramede, promoters)}
          src={abramedeLogo}
          alt='Abramede MG Logo'
          // width={200}
          // height={80}
        />
      </Link>
      <h2>Comissão Científica ABRAMEDE</h2>
      <div className={classnames(avatars)}>
        <div className={classnames(gridCircle)}></div>
      </div>
    </div>
  </section>
)

export default Comission
