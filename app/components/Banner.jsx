import classnames from 'classnames'
import { container, banner, bannerText } from './Banner.module.css'
import CallToAct from './CallToAct'

const Banner = ({ lstBannerText, button }) => {
  // Verifica o formato de lstBannerText e normaliza para array
  const bannerTextArray = Array.isArray(lstBannerText)
    ? lstBannerText
    : (typeof lstBannerText === 'string' ? [lstBannerText] : []);

  return (
    <section className={container}>
      <div className={classnames(banner)}>
        <div className={classnames(bannerText)}>
          {bannerTextArray.map((txt, index) => (
            <p key={index}>{txt}</p>
          ))}
        </div>
      </div>
      {button &&
        <CallToAct {...button} />
      }
    </section>
  )
}

export default Banner
