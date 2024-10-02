import classnames from 'classnames'
import { container, banner } from './Banner.module.css'

const Banner = () => {
  return (
    <div className={classnames(container)}>
      <div className={classnames(banner)}>
        <p>Vem aí a X Jornada Mineira de Radiologia e a</p>
        <p>I Jornada de POCUS ABRAMEDE/MG e SRMG</p>
      </div>
    </div>
  )
}

export default Banner
