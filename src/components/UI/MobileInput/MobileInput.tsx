import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './MobileInput.scss'

const MobileInput = (props: any) => {
  const { type, className, placeholder, style, onChange, name, id } = props
  const [value, setValue] = useState(props.value || '')
  const [show, setShow] = useState(false)

  let el: HTMLInputElement

  const handleChange = (e: any) => {
    setValue(e.target.value)
    onChange && onChange(e)
  }

  const handleClear = (e: any) => {
    if (type !== 'password') {
      setValue('')
      el.focus()
      let evt = {
        target: {
          name,
          value: ''
        }
      }
      onChange && onChange(evt)
    } else {
      setShow(prev => !prev)
    }
  }

  const getType = () => {
    if (type !== 'password') {
      return (type || "text")
    } else {
      return (show ? "text" : "password")
    }
  }

  return (
    <div className="mobile-input-wrapper">
      <input
        type={ getType() }
        placeholder={ placeholder || "" }
        className={ className || "" }
        name={ name || "" }
        id={ id || "" }
        style={ style || {} }
        value={ value }
        onChange={handleChange}
        ref={(e: any) => el = e}
      />
      <i className={ "f7-icons clear" + (value.length ? '' : ' d-none') } onClick={handleClear}>
        { type !== 'password' && 'multiply_circle' }
        { type === 'password' && !show && 'eye' }
        { type === 'password' && show && 'eye_slash' }
      </i>
    </div>
  )
}

MobileInput.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  style: PropTypes.object,
  onChange: PropTypes.func,
}

export default MobileInput
