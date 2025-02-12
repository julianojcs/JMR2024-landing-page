'use client'
import { useState } from 'react'
import classnames from 'classnames'
import {
  container,
  collapsible,
  collapsed,
  buttonCollapse,
} from './Description.module.css'
import { calendarEvent, ArrowDownIcon } from './icons'

const Description = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <section className={container}>
      <div
        className={classnames(`${collapsible} ${isExpanded ? collapsed : ''}`)}
      >
        <p>{calendarEvent.details}</p>
      </div>
      <button
        className={classnames(
          `${buttonCollapse} ${isExpanded ? collapsed : ''}`
        )}
        onClick={toggleExpand}
      >
        <ArrowDownIcon fill={'var(--danger-clr)'} toggle={isExpanded} />
        {isExpanded ? 'Mostrar menos' : 'Continue lendo...'}
      </button>
    </section>
  )
}

export default Description
