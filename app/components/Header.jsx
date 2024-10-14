// components/Header.tsx
import React from 'react'
import Image from 'next/image'
import styles from './Header.module.css'
import JMR2024 from '/public/jmr2024.png'
import { MapIcon, CalendarIcon, calendarEvent } from './icons'
// import SocialMedias from './SocialMedias'

// const Header = ({ children }) => {
const Header = () => {
  // Desestruturando todas as classes usadas do objeto styles
  const {
    container,
    image,
    direita,
    gap1,
    date,
    icon,
    toHide,
    toShow,
    address
  } = styles

  return (
    <section className={container}>
      {/* {children && <SocialMedias />} */}
      <Image
        src={JMR2024}
        priority
        alt={calendarEvent.title}
        className={image}
      />
      <div className={direita}>
        <div className={gap1}>
          <div className={date}>
            <CalendarIcon className={icon} fill={'#dc3545'} />
            <p>
              <span className={toHide}>{calendarEvent.extendedDataPeriod}</span>
            </p>
            <p>
              <span className={toShow}>{calendarEvent.shortDataPeriod}</span>
            </p>
          </div>
          <div className={address}>
            <MapIcon className={icon} fill={'#dc3545'} />
            <div>
              <p>
                <span className={toHide}>{calendarEvent.shortPromoter}</span>
              </p>
              <p>{`${calendarEvent.street} ${calendarEvent.StreetNumber}, ${calendarEvent.neighborhood}`}</p>
              <p>{`${calendarEvent.city}/${calendarEvent.state}`}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header