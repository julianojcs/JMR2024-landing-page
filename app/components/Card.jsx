import Image from 'next/image'
import classnames from 'classnames'
import {
  card,
  titleText,
  imageCard,
  subtitleText,
  ribbonContent,
  ribbon,
  imageDownloadPDF
} from './Card.module.css'
import pdf from '../../assets/images/download-pdf.png'
import { isMobile } from 'react-device-detect'

const Card = ({ date, title, subtitle, img, height, width, color, link }) => {
  return (
    <div className={classnames(card, color)}>
      <div className={ribbonContent}>
        <span className={ribbon}>{date}</span>
      </div>
      <div className={titleText}>{title}</div>
      <Image
        className={imageCard}
        src={img}
        alt={title}
        width={width}
        height={height}
      />
      <div>
        <p className={subtitleText}>{subtitle}</p>
      </div>
      {link &&
        (isMobile ? (
          <a href={link}>
            <Image
              className={imageDownloadPDF}
              src={pdf}
              alt='Download PDF'
              width={'200%'}
              height={30}
            />
          </a>
        ) : (
          <a href={link} target='_blank' download>
            <Image
              className={imageDownloadPDF}
              src={pdf}
              alt='Download PDF'
              width={'200%'}
              height={30}
            />
          </a>
        ))}
    </div>
  )
}

export default Card
