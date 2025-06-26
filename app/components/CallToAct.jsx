import Link from 'next/link'
import classnames from 'classnames'
import { container, button } from './CallToAct.module.css'
import { eventData } from '../data/constants'

const CallToAct = ({ caption, link, onClick }) => {
  const { subscriptionsOpened, subscriptionsClosed, certificatesAvailable } = eventData[new Date().getFullYear()].event || {};
  console.log('CallToAct', { subscriptionsOpened, subscriptionsClosed, certificatesAvailable });
  return (
    <div className={classnames(container)}>
      {
        subscriptionsOpened && !subscriptionsClosed && !certificatesAvailable ? (
          <button className={classnames(button)} disabled>{'Inscrições em Breve'}</button>
        ) : (
          subscriptionsClosed && !certificatesAvailable ? (
            <button className={classnames(button)} disabled>{'Inscrições Encerradas'}</button>
          ) : (
            certificatesAvailable ? (
              <Link href="/certificate" target="_blank">
                <button className={classnames(button)}>{'Acesse seus Certificados'}</button>
              </Link>
            ) : (
              caption && link ? (
                <Link href={link} target={link.startsWith('#') ? '_self' : '_blank'}>
                  <button className={classnames(button)}>{caption}</button>
                </Link>
              ) : caption && onClick && (
                <button className={classnames(button)} onClick={onClick}>
                  {caption}
                  </button>
              )
            )
          )
        )
      }

    </div>
  )
}

export default CallToAct
