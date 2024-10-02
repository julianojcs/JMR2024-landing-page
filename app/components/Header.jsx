// components/Header.tsx
import React from 'react'
import Image from 'next/image'
import styles from './Header.module.css'
import JMR2024 from '../../public/jmr2024-red.svg'
import map from '../../public/map.svg'
import calendar from '../../public/calendar.svg'

const Header = () => {
  return (
    <section className={styles.container}>
      <Image
        src={JMR2024}
        priority
        alt='X Jornada Mineira de Radiologia & I Jornada Mineira de POCUS ABRAMEDE/MG e SRMG | 01 e 02 de Novembro de 2024'
        className={styles.image}
      />
      <div className={styles.direita}>
        <div className={styles.gap1}>
          <div className={styles.date}>
            <Image
              className={styles.icon}
              src={calendar}
              priority
              alt='01 e 02 de Novembro de 2024'
            />
            <p>01 e 02 de Novembro de 2024</p>
          </div>
          <div className={styles.address}>
            <Image
              className={styles.icon}
              src={map}
              priority
              alt='Associação Médica de Minas Gerais'
            />
            <div>
              <p>Associação Médica de Minas Gerais</p>
              <p>Av. João PInheiro 161, Centro</p>
              <p>Belo Horizonte | Minas Gerais</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header
