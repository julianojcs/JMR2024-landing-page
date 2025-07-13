import { footer, join } from './Footer.module.css'
import { WhatsAppIcon } from './icons'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className=''>
      <div className=''>
        <p className={footer}>
          <span>
            &copy; {currentYear}{' '}
            <a
              className={join}
              href='https://wa.me/5527981330708'
              // href='https://www.joindigitalsolutions.com.br'
              target='_blank'
              rel='noreferrer'
            >Join Digital Solutions
            </a>{' - Todos os direitos reservados'}
          </span>
          <WhatsAppIcon />
        </p>
      </div>
    </footer>
  )
}

export default Footer
