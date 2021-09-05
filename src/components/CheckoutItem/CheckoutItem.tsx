import React from 'react'
import { Link } from 'react-router-dom'
import './CheckoutItem.scoped.scss'

const CheckoutItem = (props: any) => {
  return (
    <div className="cart-item">
      <div className="product">
        <div className="media">
          <div className="image-wrapper">
            <img src="/assets/images/helmet.png" alt="Product" />
          </div>
          <div className="media-body">
            <h4>Packers New Era Black 2020 NFL Draft Official</h4>
            <span className="detail">ONE SIZE</span>
          </div>
        </div>
        <Link to="#" className="remove">Edit</Link>
      </div>
      <div className="quantity-price-container">
        <div className="price">
          <div className="price">$80.00</div>
        </div>
      </div>
    </div>
  )
}

CheckoutItem.propTypes = {
}

export default CheckoutItem
