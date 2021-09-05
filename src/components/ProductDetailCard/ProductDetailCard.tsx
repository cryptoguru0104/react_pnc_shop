import React from 'react'
import PropTypes from 'prop-types'
import './ProductDetailCard.scoped.scss'
import ProductColorSelector from '../ProductColorSelector'
import ProductSizeSelector from '../ProductSizeSelector'

const ProductCard = (props: any) => {
  const { data } = props
  
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={data.ImageUrl} alt="Product Images" />
      </div>
      <div className="page-body">
        <div className="title">
          <h3>{data.Title}</h3>
          <div className="price-container">
            <span className={"price" + (data.DeprecatedPrice ? " new" : "")}>${data.Price}</span>
            <span className="deprecated">${data.DeprecatedPrice}</span>
          </div>
        </div>
        <div className="description">{data.Description}</div>
        <div className="color-selector-wrapper">
          <ProductColorSelector colors={data.Colors}/>
        </div>
        <div className="size-selector-wrapper">
          <ProductSizeSelector />
        </div>
      </div>
    </div>
  )
}

ProductCard.propTypes = {
  data: PropTypes.object,
}

export default ProductCard
