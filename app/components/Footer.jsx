import { footer } from './Footer.module.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className=''>
      <div className=''>
        <div>
          <p className={footer}>
            &copy; {currentYear} Juliano Costa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
