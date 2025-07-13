import Image from 'next/image'
import classnames from 'classnames'
import { card, avatar } from './AvatarCard.module.css'

const Avatar = ({ photo, full_name, height, width }) => {
  return (
    <Image
      className={classnames(avatar)}
      src={photo}
      alt={full_name}
      width={width}
      height={height}
      // style={{ objectFit: 'fill' }}
      loading='lazy'
    />
  )
}

const AvatarCard = ({ full_name, photo, height, width, link }) => {
  return (
    <div className={classnames(card)}>
      <div>
        <Avatar
          photo={photo}
          full_name={full_name}
          width={width}
          height={height}
        />
      </div>
      <div>
        <p>{full_name}</p>
      </div>
    </div>
  )
}

export default AvatarCard
