'use client'
import { useState } from 'react'
import classnames from 'classnames'
import {
  container,
  collapsible,
  collapsed,
  buttonCollapse,
} from './Description.module.css'
import { ArrowDownIcon } from './Icons/ArrowDownIcon'

const Description = ( {description} ) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <section className={container}>
      <div
        className={classnames(`${collapsible} ${isExpanded ? collapsed : ''}`)}
      >
        <p>{description}</p>
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
