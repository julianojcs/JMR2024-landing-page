import Image from 'next/image'
import classnames from 'classnames'
import { card } from './Card.module.css'
import Link from 'next/link'
import pdf from '../../assets/images/download-pdf.png'

const Card = ({ title, subtitle, img, height, width, color, link }) => {
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
      {link && (
        <Link href={link} target='_blank'>
          <Image src={pdf} alt='Download PDF' width={'200%'} height={30} />
        </Link>
      )}
    </div>
  )
}

export default Card
