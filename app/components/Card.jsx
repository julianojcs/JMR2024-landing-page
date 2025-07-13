import Image from 'next/image'
import classnames from 'classnames'
import {
  card,
  titleText,
  imageCard,
  subtitleText,
  ribbonContent,
  ribbon,
  imageDownloadPDF,
  titleOppening
} from './Card.module.css'
import pdf from '../../assets/images/download-pdf.png'
import { isMobile } from 'react-device-detect'

const Card = ({ date, title, subtitle, img, height, width, color, link }) => {

  const renderTitle = (title) => {
    if (Array.isArray(title)) {
      return (
        <span className={titleOppening}>
          {title.map((text, index) => (
            <span key={`${text}-${index}`}>{text}</span>
          ))}
        </span>
      )
    }
    return title
  }

  return (
    <div className={classnames(card)} style={{backgroundColor: color}}>
      <div className={ribbonContent}>
        <span className={ribbon}>{date}</span>
      </div>
      <div className={titleText}>{renderTitle(title)}</div>
      <Image
        className={imageCard}
        src={img}
        alt={Array.isArray(title) ? title.join(' ') : title}
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
