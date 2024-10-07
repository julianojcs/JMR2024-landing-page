import classnames from 'classnames'
import { container, banner, bannerText } from './Banner.module.css'

const Banner = () => {
  return (
    <section className={container}>
      <div className={classnames(banner)}>
        <div className={classnames(bannerText)}>
          <p>Vem aí a X Jornada Mineira de Radiologia e a</p>
          <p>I Jornada de POCUS ABRAMEDE/MG e SRMG</p>
        </div>
      </div>
    </section>
  )
}

export default Banner
