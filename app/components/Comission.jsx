import Link from 'next/link'
import Image from 'next/image'
import classnames from 'classnames'
import AvatarCard from './AvatarCard'
import DotPattern from './DotPattern'
import { eventData } from '../data/constants'
import {
  container,
  comissionContainer,  comissionTitle,
  medicosContainer, logoContainer,
  promoters
} from './Comission.module.css'

const Comission = ({year}) => {
  const { comissions } = eventData[year]
  console.log(year)

  // Sort members alphabetically for each commission
  const sortedComissions = comissions.map(comission => ({
    ...comission,
    members: [...comission.members].sort((a, b) => a.imagePath.localeCompare(b.imagePath))
  }))

  return (
    <section className={container}>
      <div className={comissionContainer}>
        {sortedComissions.map((comission, index) => (
          <div key={`${comission.name}-${index}`}>
            {index === 0 && (
              <DotPattern
                dotColor="#BB2426"
                size={30}
                opacity={1}
                baseSize={10}
                reduction={0.03}
                margin={25}
                position={{ x: 'right', y: 'bottom' }}
              />
            )}
            <div className={comissionTitle}>
              <Link
                href={comission.link}
                target='_blank'
                rel="noopener noreferrer"
                className={logoContainer}
                style={{ width: comission.width, height: comission.height }}
              >
                <Image
                  className={classnames(promoters)}
                  src={comission.src}
                  alt={`${comission.name} Logo`}
                  fill
                />
              </Link>
              <h2>{comission.title}</h2>
            </div>
            <div className={medicosContainer}>
              {index === 0 && (
                <DotPattern
                  dotColor="#BB2426"
                  size={30}
                  opacity={1}
                  baseSize={10}
                  reduction={0.03}
                  margin={10}
                  position={{ x: 'left', y: 'top' }}
                />
              )}
              {comission.members.map((member, memberIndex) => (
                <AvatarCard
                  key={`${member.name}-${memberIndex}`}
                  full_name={member.name}
                  photo={member.imagePath}
                  width={150}
                  height={150}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Comission
