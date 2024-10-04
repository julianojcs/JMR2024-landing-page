import React from 'react'
import classnames from 'classnames'
import { container, button } from './CallToAct.module.css'

const CallToAct = () => {
  return (
    <div className={classnames(container)}>
      <button className={classnames(button)}>Faça sua inscrição</button>
    </div>
  )
}

export default CallToAct
