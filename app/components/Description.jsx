'use client'
import { useState } from 'react'
import classnames from 'classnames'
import {
  container,
  collapsible,
  collapsed,
  buttonCollapse,
  mt5vh
} from './Description.module.css'
import { calendarEvent, ArrowDownIcon } from './icons'

const Description = ({ children }) => {
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
      {children && <div className={mt5vh}>{children}</div>}
    </section>
  )
}

export default Description
