import React from 'react'
import classNames from 'classnames'
import './button.scss'

interface ButtonProps {
 primary?: boolean
 backgroundColor?: string
 size?: 'small' | 'medium' | 'large'
 full?: boolean
 label: string
 onClick?: () => void
}

function Button({ primary = false, size = 'medium', full = false, backgroundColor, label, ...props }: ButtonProps) {
 const mode = primary ? 'lmw-button--primary' : 'lmw-button--secondary'

 const btnClass = classNames({
  'lmw-button--full': full,
 })

 return (
  <button
   type="button"
   className={['lmw-button', `lmw-button--${size} ${btnClass}`, mode].join(' ')}
   style={{ backgroundColor }}
   {...props}
  >
   {label}
  </button>
 )
}

export default Button
