import Image from 'next/image'
import classnames from 'classnames'
import { card } from './Card.module.css'

const Card = ({ title, subtitle, img, height, width, color }) => {
  return (
    <div className={classnames(card, color)}>
      <div>{title}</div>
      <div>
        <Image
          className={''}
          src={img}
          alt={subtitle}
          width={width}
          height={height}
        />
      </div>
      <div>
        <p>{subtitle}</p>
      </div>
    </div>
  )
}

export default Card
