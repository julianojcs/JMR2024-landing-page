// components/Header.tsx
import React from 'react'
import dynamic from 'next/dynamic'
import styles from './Header.module.css'
// import { loadImagesFromFolders } from '../util/functions'
import { eventData } from '../data/constants'

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

  const { year, MapIcon, CalendarIcon } = props
  const logoName = `jmr${year}.png`
  const data = eventData[year]
  const logoSrc = `/logo_jornada/${logoName}`
  // Carregar imagens do diretório 'public'
  // const images = loadImagesFromFolders('public/logo_jornada')
  // Verificar se a imagem existe e obter o caminho da imagem
  // const logoSrc = images['public'].reduce((acc, img) => {
  //   if (img.fileName === logoName) {
  //     acc = img.imagePath;
  //   }
  //   return acc;
  // }, '/logo_jornada/jmr2025.png'); // Caminho para uma imagem padrão caso a imagem não exista

  return (
    <section className={container}>
      {children}
      <DynamicImage
        src={logoSrc}
        priority
        alt={data.title}
        className={image}
        width={500} // Adicione a largura da imagem
        height={500} // Adicione a altura da imagem
      />
      <div className={direita}>
        <div className={gap1}>
          <div className={date}>
            <CalendarIcon
              year={year}
              className={icon}
              fill={'var(--danger-clr)'}
            />
            <p>
              <span className={toHide}>{data.date.extendedDatePeriod}</span>
            </p>
            <p>
              <span className={toShow}>{data.date.shortDatePeriod}</span>
            </p>
          </div>
          <div className={address}>
            <MapIcon
              year={year}
              className={icon}
              fill={'var(--danger-clr)'}
            />
            <div>
              <p>
                <span className={toHide}>{data.location.name}</span>
              </p>
              <p>{`${data.location.street} ${data.location.StreetNumber}, ${data.location.neighborhood}`}</p>
              <p>{`${data.location.city}/${data.location.state}`}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header