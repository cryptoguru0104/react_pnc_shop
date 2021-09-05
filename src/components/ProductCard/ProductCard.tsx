import React from 'react'
import PropTypes from 'prop-types'
import './ProductCard.scoped.scss'
import { Link } from 'react-router-dom'

interface PropsType {
  data: Product,
  canRemove?: boolean
}

const ProductCard = (props: PropsType) => {
  const { data, canRemove } = props
  let zoomEl: HTMLElement, trashEl: HTMLElement

  const handleClick = (e: any) => {
    if (zoomEl.contains(e.target)) {
      e.preventDefault()
    }
    else if (trashEl.contains(e.target)) {
      e.preventDefault()
    }
  }

  return (
    <Link to={`/shop/${data?.Id}/detail`} className="product-card" onClick={handleClick}>
      <div className="product-image">
        <img src={data?.ImageUrl} alt="Product Images" />
        <button className="zoom" type="button" ref={(el: any) => zoomEl = el}>+</button>
        <button className={ "trash" + (canRemove ? "" : " d-none") } type="button" ref={(el: any) => trashEl = el}>
          <i className="f7-icons trash">trash</i>
        </button>
      </div>
      <h3>{data?.Title}</h3>
      
      { !data?.DeprecatedPrice && !data?.DeprecatedPercent && (
        <div className="price-container">
          <span className="price">${data?.Price}</span>
        </div>
      )}

      { data?.DeprecatedPrice && (
        <div className="price-container">
          <span className="price new">${data?.Price}</span>
          <span className="deprecated-price">${data?.DeprecatedPrice}</span>
        </div>
      )}

      { data?.DeprecatedPercent && (
        <div className="price-container" style={{justifyContent: 'space-between'}}>
          <span className="price">${data.Price}</span>
          <span className="deprecated-percent">${data.DeprecatedPercent}</span>
        </div>
      )}
    </Link>
  )
}

ProductCard.propTypes = {
  data: PropTypes.object,
  canRemove: PropTypes.bool
}

export default ProductCard
