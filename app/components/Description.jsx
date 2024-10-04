'use client'
import { useState } from 'react'
import classnames from 'classnames'
import { description, expanded, buttonExpand } from './Description.module.css'
import { calendarEvent, ArrowDownIcon } from './icons'

const Description = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <section>
      <div
        className={classnames(`${description} ${isExpanded ? expanded : ''}`)}
      >
        <p>{calendarEvent.details}</p>
      </div>
      <button className={buttonExpand} onClick={toggleExpand}>
        <ArrowDownIcon fill={'var(--red)'} toggle={isExpanded} />
        {isExpanded ? 'Mostrar menos' : 'Continue lendo...'}
      </button>
    </section>
  )
}

export default Description
