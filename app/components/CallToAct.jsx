import Link from 'next/link'
import classnames from 'classnames'
import { container, button } from './CallToAct.module.css'

const CallToAct = ({ caption, link, onClick }) => {
  if (caption === 'Clique aqui para acessar o regulamento completo!') {
    console.log('caption: ', caption)
    console.log('link: ', link)
  }
  return (
    <div className={classnames(container)}>
      {caption && link ? (
        <Link href={link} target={link.startsWith('#') ? '_self' : '_blank'}>
          <button className={classnames(button)}>{caption}</button>
        </Link>
      ) : caption && onClick ? (
        <button className={classnames(button)} onClick={onClick}>
          {caption}
          </button>
      ) : (
        <button className={classnames(button)} disabled>{caption || 'Inscrições em Breve'}</button>
      )}
    </div>
  )
}

export default CallToAct
