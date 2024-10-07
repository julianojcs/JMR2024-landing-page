import classnames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import abramedeLogo from '/public/logo/abramed-mg.png'
import srmgLogo from '/public/logo/srmg.png'
import hermesPardini from '/public/logo/gold/hermes-pardini.png'
import fleury from '/public/logo/gold/fleury.png'
import bayer from '/public/logo/gold/bayer.png'
import unimedBh from '/public/logo/silver/unimed-bh.png'
import saoMarco from '/public/logo/silver/sao-marcos.png'
import dasa from '/public/logo/silver/dasa.png'
import bracco from '/public/logo/bronze/bracco.png'
import ceu from '/public/logo/bronze/ceu-diagnosticos.png'
import cbr from '/public/logo/apoio/cbr.png'
import ammg from '/public/logo/apoio/ammg.png'
import {
  containerSponsors,
  promoters,
  imgSponsors,
  sponsors,
  gold,
  silver,
  bronze,
  title,
  hr3,
  sponsorsBox,
  abramede,
  srmg
} from './Sponsor.module.css'

const Sponsor = () => (
  <section className={containerSponsors}>
    <p>Realização:</p>
    <div className={promoters}>
      <Link href='https://srmg.org.br/' target='_blank'>
        <Image
          className={classnames(srmg, imgSponsors)}
          src={srmgLogo}
          alt='srmg Logo'
          width={210}
          height={60}
          // width={'30.75svh'}
          // height={'8.78svh'}
        />
      </Link>
      <Link href='https://www.abramedemg.org.br/' target='_blank'>
        <Image
          className={classnames(abramede, imgSponsors)}
          src={abramedeLogo}
          alt='Abramede MG Logo'
          width={150}
          height={60}
        />
      </Link>
    </div>
    <p>Patrocinadores:</p>
    <div className={sponsors}>
      <div className={gold}>
        <p className={title}>Ouro</p>
        <hr className={hr3}></hr>
        <div className={sponsorsBox}>
          <Link href='https://www.hermespardini.com.br/' target='_blank'>
            <Image
              className={classnames(imgSponsors)}
              src={hermesPardini}
              alt='Hermes Pardini'
              width={'219%'}
              height={70}
            />
          </Link>
          <Link href='https://www.bayer.com.br/pt/' target='_blank'>
            <Image
              className={classnames(imgSponsors)}
              src={bayer}
              alt='Bayer'
              width={80}
              height={80}
            />
          </Link>
          <Link href='https://www.fleury.com.br/' target='_blank'>
            <Image
              className={classnames(imgSponsors)}
              src={fleury}
              alt='Grupo Fleury'
              width={'355.55%'}
              height={60}
            />
          </Link>
        </div>
      </div>
      <div className={silver}>
        <p className={title}>Prata</p>
        <hr className={hr3}></hr>
        <div className={sponsorsBox}>
          <Link href='https://www.unimedbh.com.br/' target='_blank'>
            <Image
              className={classnames(imgSponsors)}
              src={unimedBh}
              alt='Unimed BH'
              width={'272.34%'}
              height={50}
            />
          </Link>
          <Link href='https://saomarcoslaboratorio.com.br/' target='_blank'>
            <Image
              className={classnames(imgSponsors)}
              src={saoMarco}
              alt='São Marcos'
              width={'117.43%'}
              height={70}
            />
          </Link>
          <Link href='https://dasa.com.br/' target='_blank'>
            <Image
              className={classnames(imgSponsors)}
              src={dasa}
              alt='Dasa'
              width={'178.57%'}
              height={30}
            />
          </Link>
        </div>
      </div>
      <div className={bronze}>
        <p className={title}>Bronze</p>
        <hr className={hr3}></hr>
        <div className={sponsorsBox}>
          <Link href='https://www.bracco.com/pt-br' target='_blank'>
            <Image
              className={classnames(imgSponsors)}
              src={bracco}
              alt='Bracco'
              width={'113.77%'}
              height={80}
            />
          </Link>
          <Link href='https://www.clinicaceu.com.br/' target='_blank'>
            <Image
              className={classnames(imgSponsors)}
              src={ceu}
              alt='CEU Diagnósticos'
              width={'185.50%'}
              height={60}
            />
          </Link>
        </div>
      </div>
    </div>
    <p>Apoio:</p>
    <div className={promoters}>
      <Link href='https://cbr.org.br/' target='_blank'>
        <Image
          className={classnames(imgSponsors)}
          src={cbr}
          alt='CBR'
          width={'250%'}
          height={60}
        />
      </Link>
      <Link href='https://ammg.org.br/' target='_blank'>
        <Image
          className={classnames(imgSponsors)}
          src={ammg}
          alt='AMMG'
          width={'281.32'}
          height={60}
        />
      </Link>
    </div>
  </section>
)

export default Sponsor
