// components/Header.tsx
import React from 'react'
import dynamic from 'next/dynamic'
import styles from './Header.module.css'
import SocialMedias from './SocialMedias'
import { loadImagesFromFolders } from '../util/functions'

// Importando o componente DynamicImage dinamicamente
const DynamicImage = dynamic(() => import('./DynamicImage'))

const Header = ({ children, props }) => {
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

  const { logoName, MapIcon, CalendarIcon, calendarEvent } = props

  // Carregar imagens do diretório 'public'
  const images = loadImagesFromFolders('public/logo_jornada')

  // Verificar se a imagem existe e obter o caminho da imagem
  const logoSrc = images['public'].reduce((acc, img) => {
    if (img.fileName === logoName) {
      acc = img.imagePath;
    }
    return acc;
  }, '/logo_jornada/jmr2024.png'); // Caminho para uma imagem padrão caso a imagem não exista

  return (
    <section className={container}>
      {children && <SocialMedias />}
      <DynamicImage
        src={logoSrc}
        priority
        alt={calendarEvent.title}
        className={image}
        width={500} // Adicione a largura da imagem
        height={500} // Adicione a altura da imagem
      />
      <div className={direita}>
        <div className={gap1}>
          <div className={date}>
            <CalendarIcon className={icon} fill={'var(--danger-clr)'} />
            <p>
              <span className={toHide}>{calendarEvent.extendedDataPeriod}</span>
            </p>
            <p>
              <span className={toShow}>{calendarEvent.shortDataPeriod}</span>
            </p>
          </div>
          <div className={address}>
            <MapIcon className={icon} fill={'var(--danger-clr)'} />
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