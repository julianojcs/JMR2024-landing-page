import classnames from 'classnames'
import { container, banner, bannerText } from './Banner.module.css'
import CallToAct from './CallToAct'

const Banner = ({ lstBannerText, button }) => {
  return (
    <section className={container}>
      <div className={classnames(banner)}>
        <div className={classnames(bannerText)}>
          {lstBannerText.map((txt, index) => (
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
