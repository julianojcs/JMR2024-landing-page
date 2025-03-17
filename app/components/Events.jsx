import Card from './Card'
import CountdownTimer from './CountdownTimer'
import CallToAct from '../components/CallToAct'
import ComingSoonBanner from './ComingSoonBanner'
import { eventData } from '../data/constants'
import {
  container,
  columnTitle,
  firstRow
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

  const sortCards = (cards, orderBy) => {
    if (!orderBy) return cards;

    return [...cards].sort((a, b) => {
      // First sort by priority if present
      const priorityA = a.priority || 0;
      const priorityB = b.priority || 0;
      
      if (priorityA || priorityB) {
        return priorityB - priorityA; // Higher priority comes first
      }

      // Then sort by date if enabled
      if (orderBy.date) {
        // Check for multi-day events
        const isMultiDayA = a.date.includes(' e ');
        const isMultiDayB = b.date.includes(' e ');

        // Multi-day events should come first
        if (isMultiDayA && !isMultiDayB) return -1;
        if (!isMultiDayA && isMultiDayB) return 1;

        // Extract day and month from date strings
        const [dayA, monthA] = a.date.split('/');
        const [dayB, monthB] = b.date.split('/');

        // Compare months first
        const monthComparison = parseInt(monthA) - parseInt(monthB);
        if (monthComparison !== 0) return monthComparison;

        // For same month, compare days
        const firstDayA = parseInt(dayA.split(' e ')[0]);
        const firstDayB = parseInt(dayB.split(' e ')[0]);

        return firstDayA - firstDayB;
      }

      // Finally sort by title if enabled
      if (orderBy.title) {
        const getTitleString = (title) => {
          if (Array.isArray(title)) {
            return title.join(' ').toLowerCase();
          }
          return title.toLowerCase();
        };

        const titleA = getTitleString(a.title);
        const titleB = getTitleString(b.title);

        return titleA.localeCompare(titleB, 'pt-BR');
      }

      return 0;
    });
  };

  const renderSubtitle = (cardData) => {
    if (cardData.countdownTimer) {
      return <CountdownTimer endDate={cardData.countdownTimer}/>
    }
    return cardData.subtitle || null
  }

  const renderCard = (cardData, sectionColor, sectionRatio) => {
    const getCardDimensions = () => {
      if (cardData.width && cardData.height) {
        return [cardData.width, cardData.height];
      }
      if (sectionRatio) {
        return sectionRatio;
      }
      return [125, 125]; // default dimensions
    };

    const [width, height] = getCardDimensions();

    return (
      <Card
        key={cardData.title}
        {...cardData}
        color={cardData?.color || sectionColor}
        width={width}
        height={height}
        title={cardData.title}
        subtitle={renderSubtitle(cardData)}
      />
    );
}

  return (
    <section className={container}>
      {cardSections.map((section, index) => (
        <div key={index}>
          <h2 className={columnTitle}>{section.title}</h2>
          <div className={firstRow}>
            {sortCards(section.cardlist, section.orderBy).map(card =>
              renderCard(card, section.color, section.ratio)
            )}
          </div>
        </div>
      ))}
      <CallToAct {...button} />
    </section>
  )
}

export default Events