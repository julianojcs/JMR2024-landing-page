import Image from 'next/image'
import classnames from 'classnames'
import { card } from './Card.module.css'

const Card = ({ title, footer, img, height, width, color }) => {
  return (
    <div className={classnames(card, color)}>
      <p>{title}</p>
      <Image
        className={''}
        src={img}
        alt={title}
        width={width}
        height={height}
      />
      {footer && <p>{footer}</p>}
    </div>
  )
}

export default Card
