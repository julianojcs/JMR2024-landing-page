import Image from 'next/image'
import classnames from 'classnames'
import { card, avatar } from './AvatarCard.module.css'

const Avatar = ({ photo, fullName, height, width }) => {
  return (
    <Image
      className={classnames(avatar)}
      src={photo}
      alt={fullName}
      width={width}
      height={height}
      // style={{ objectFit: 'fill' }}
      loading='lazy'
    />
  )
}

const AvatarCard = ({ fullName, photo, height, width, link }) => {
  return (
    <div className={classnames(card)}>
      <div>
        <Avatar
          photo={photo}
          fullName={fullName}
          width={width}
          height={height}
        />
      </div>
      <div>
        <p>{fullName}</p>
      </div>
    </div>
  )
}

export default AvatarCard
