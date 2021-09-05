import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './ProductColorSelector.scoped.scss'
import { Link } from 'react-router-dom'

const ProductColorSelector = (props: any) => {
  const { colors, selectedValue, onSelect } = props

  let [value, setValue] = useState(selectedValue || '#000')
  
  const handleClick = (e: any, color: string) => {
    e.preventDefault()
    setValue(color)
    if (onSelect) {
      onSelect(color)
    }
  }
  
  return (
    <div className="color-selector">
      <h4>Color</h4>
      <div className="color-selector-body">
        { colors && colors.map((color: string, index: number) => (
          <Link to="#" onClick={e => handleClick(e, color)} key={color}>
            <div className="out-circle" style={{borderWidth: value === color ? "1px" : "0px"}} >
              <div className="in-circle" style={{backgroundColor: color}}></div>
            </div>
          </Link>
        )) }
      </div>
    </div>
  )
}

ProductColorSelector.propTypes = {
  colors: PropTypes.array.isRequired,
  selectedValue: PropTypes.string,
  onSelect: PropTypes.func
}

export default ProductColorSelector
