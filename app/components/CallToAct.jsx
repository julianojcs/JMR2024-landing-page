import Link from 'next/link'
import classnames from 'classnames'
import { container, button } from './CallToAct.module.css'

const CallToAct = ({ caption, link, onClick }) => {
  return (
    <div className={classnames(container)}>
      {caption ? (
        <button className={classnames(button)} onClick={onClick}>
          {caption}
        </button>
      ) : (
        link ? (
          <Link href={link} target='_blank'>
            <button className={classnames(button)}>Emita o seu Certificado</button>
          </Link>
        ) : <button className={classnames(button)} disabled>Inscrições em Breve</button>)
      }
    </div>
  )
}

export default CallToAct
