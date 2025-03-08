import Card from './Card'
import CountdownTimer from './CountdownTimer'
import CallToAct from '../components/CallToAct'
import ComingSoonBanner from './ComingSoonBanner'
import { eventData } from '../data/constants'
import {
  container,
  columnTitle,
  firstRow,
  titleOppening
} from './Events.module.css'

const Events = ({button, year}) => {
  const data = eventData[year]
  const events = data?.events || null

  if (!events || events.soon) {
    return (
    <ComingSoonBanner sessionItem={'A programação'} scale={0.75}/>
    )
  }

  const cardSections = events.cardSections

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

  const renderSubtitle = (cardData) => {
    if (cardData.countdownTimer) {
      return <CountdownTimer endDate={cardData.countdownTimer}/>
    }
    return cardData.subtitle || null
  }

  const renderCard = (cardData) => (
    <Card
      key={cardData.title}
      {...cardData}
      title={renderTitle(cardData.title)}
      subtitle={renderSubtitle(cardData)}
    />
  )

  return (
    <section className={container}>
      {cardSections.map((cardSection, index) => (
        <div key={index}>
          <h2 className={columnTitle}>{cardSection.title}</h2>
          <div className={firstRow}>
            {cardSection.cardlist.map(renderCard)}
          </div>
        </div>
      ))}
      <CallToAct {...button} />
    </section>
  )
}

export default Events