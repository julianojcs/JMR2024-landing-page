import { rotate } from './icons.module.css'
import classnames from 'classnames'

function ArrowDownIcon({ fill, width, height, toggle }) {
  return (
    <svg
      className={classnames(`${toggle ? rotate : ''}`)}
      xmlns='http://www.w3.org/2000/svg'
      width={width || '1.5rem'}
      height={height || '1.5rem'}
      fill={fill || 'currentcolor'}
      version='1'
      viewBox='0 -960 960 960'
    >
      <path d='M480-361q-8 0-15-2.5t-13-8.5L268-556q-11-11-11-28t11-28q11-11 28-11t28 11l156 156 156-156q11-11 28-11t28 11q11 11 11 28t-11 28L508-372q-6 6-13 8.5t-15 2.5z'></path>
    </svg>
  )
}

export { ArrowDownIcon }
