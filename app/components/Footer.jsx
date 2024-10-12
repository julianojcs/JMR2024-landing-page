import { footer } from './Footer.module.css'
import { WhatsAppIcon } from './icons'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className=''>
      <div className=''>
        <div>
          <p className={footer}>
            <span>
              &copy; {currentYear} Juliano Costa - Todos os direitos reservados
              {'   '}
            </span>
            <WhatsAppIcon />
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
