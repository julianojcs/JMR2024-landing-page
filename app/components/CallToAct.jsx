import Link from 'next/link'
import classnames from 'classnames'
import { container, button } from './CallToAct.module.css'

const CallToAct = ({ caption, link }) => {
  return (
    <div className={classnames(container)}>
      <Link href={link} target='_blank'>
        <button className={classnames(button)}>{caption}</button>
      </Link>
    </div>
  )
}

export default CallToAct
