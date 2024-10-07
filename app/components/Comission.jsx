import Link from 'next/link'
import Image from 'next/image'
import classnames from 'classnames'
import AvatarCard from './AvatarCard'
import abramedeLogo from '/public/logo/abramed-mg.png'
import srmgLogo from '/public/logo/srmg.png'
import { loadImagesFromFolders } from '../util/imageLoader'
import {
  container,
  comissionContainer,
  comissionColumn1,
  comissionColumn2,
  comissionTitle,
  medicosContainer,
  promoters,
  srmg,
  abramede
} from './Comission.module.css'

const Comission = () => {
  const { srmg: SrmgMedicos, abramede: AbramedeMedicos } =
    loadImagesFromFolders('public/avatars')

  const sortedSrmgMedicos = SrmgMedicos.sort((a, b) =>
    a.name.localeCompare(b.name)
  )
  const sortedAbramedeMedicos = AbramedeMedicos.sort((a, b) =>
    a.name.localeCompare(b.name)
  )

  return (
    <section className={container}>
      <div className={comissionContainer}>
        <div className={comissionColumn1}>
          <div className={comissionTitle}>
            <Link href='https://srmg.org.br/' target='_blank'>
              <Image
                className={classnames(srmg, promoters)}
                src={srmgLogo}
                alt='srmg Logo'
                width={210}
                height={60}
                // width={'30.75svh'}
                // height={'8.78svh'}
              />
            </Link>
            <h2>Comissão Científica SRMG</h2>
          </div>
          <div className={medicosContainer}>
            {sortedSrmgMedicos.map((avatar) => {
              return (
                <AvatarCard
                  key={avatar.fileName}
                  fullName={avatar.name}
                  photo={avatar.imagePath}
                  width={150}
                  height={150}
                />
              )
            })}
          </div>
        </div>
        <div className={comissionColumn2}>
          <div className={comissionTitle}>
            <Link href='https://www.abramedemg.org.br/' target='_blank'>
              <Image
                className={classnames(abramede, promoters)}
                src={abramedeLogo}
                alt='Abramede MG Logo'
                width={150}
                height={60}
              />
            </Link>
            <h2>Comissão Científica ABRAMEDE</h2>
          </div>
          <div className={medicosContainer}>
            {sortedAbramedeMedicos.map((avatar) => {
              return (
                <AvatarCard
                  key={avatar.fileName}
                  fullName={avatar.name}
                  photo={avatar.imagePath}
                  width={150}
                  height={150}
                />
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Comission
