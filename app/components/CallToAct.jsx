import Link from 'next/link'
import classnames from 'classnames'
import { container, button } from './CallToAct.module.css'

const CallToAct = ({ caption, link, onClick }) => {
  return (
    <div className={classnames(container)}>
      {caption && (!link || !link.startsWith('#')) ? (
        <button className={classnames(button)} onClick={onClick}>
          {caption}
        </button>
      ) : link ? (
        <Link href={link} target={link.startsWith('#') ? '_self' : '_blank'}>
          <button className={classnames(button)}>{caption || 'Emita o seu Certificado'}</button>
        </Link>
      ) : (
        <button className={classnames(button)} disabled>{caption || 'Inscrições em Breve'}</button>
      )}
    </div>
  )
}

export default CallToAct
