import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './ProductSizeSelector.scoped.scss'
import { Link } from 'react-router-dom'

const ProductSizeSelector = (props: any) => {
  const { selectedValue, onSelect } = props

  const sizes = ['S', 'M', 'L', 'XL', 'XXL']
  let [value, setValue] = useState(selectedValue || '#000')

  const handleClick = (e: any, color: string) => {
    e.preventDefault()
    setValue(color)
    if (onSelect) {
      onSelect(color)
    }
  }
  
  return (
    <div className="size-selector">
      <h4>Size</h4>
      <div className="size-selector-body">
        { sizes && sizes.map((size: string, index: number) => (
          <Link to="#" className={size === value ? "selected" : ""} onClick={e => handleClick(e, size)} key={size}>
            {size}
          </Link>
        )) }
      </div>
    </div>
  )
}

ProductSizeSelector.propTypes = {
  selectedValue: PropTypes.string,
  onSelect: PropTypes.func
}

export default ProductSizeSelector
