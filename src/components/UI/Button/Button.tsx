import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import './Button.scoped.scss'

const Button = (props: any) => {
  const { children, onClick, className, bgColor, color, hoverBgColor, hoverColor, activeBgColor, activeColor, type } = props
  const [coords, setCoords] = useState({ x: -1, y: -1 })
  const [isRippling, setIsRippling] = React.useState(false)

  let el: HTMLButtonElement

  useEffect(() => {
    if (coords.x !== -1 && coords.y !== -1) {
      setIsRippling(true)
      setTimeout(() => setIsRippling(false), 300)
    } else setIsRippling(false)
  }, [coords])

  useEffect(() => {
    if (!isRippling) setCoords({ x: -1, y: -1 })
  }, [isRippling])

  const handleClick = (e: any) => {
    const rect = (e.target as HTMLButtonElement).getBoundingClientRect()
    setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top })
    onClick && onClick(e)
  }

  const handleOver = (e: any) => {
    el.style.backgroundColor = hoverBgColor || bgColor || '#1976d2'
    el.style.color = hoverColor || color || '#fff'
  }

  return (
    <button
      className={ 'ripple-button ' + className }
      onClick={handleClick}
      type={type || "button"}
      style = {{
        backgroundColor: bgColor || '#1976d2',
        color: color || '#fff'
      }}
      onMouseOver={handleOver}
      ref={(e: any) => el = e}
    >
      {isRippling ? (
        <span
          className='ripple'
          style={{
            left: coords.x,
            top: coords.y,
          }}
        />
      ) : (
        ''
      )}
      <span className='content'>{children}</span>
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.any,
  onClick: PropTypes.func,
  className: PropTypes.string,
  bgColor: PropTypes.string,
  color: PropTypes.string,
  hoverBgColor: PropTypes.string,
  hoverColor: PropTypes.string,
  activeBgColor: PropTypes.string,
  activeColor: PropTypes.string,
  type: PropTypes.string
}

export default Button