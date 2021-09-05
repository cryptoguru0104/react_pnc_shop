import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './CartItem.scoped.scss'

interface PropsType {
  canEdit: boolean,
  data: Product,
  onRemove(id: number): any
  onQuantity(id: number, quantity: number): any
}

const CartItem = (props: any) => {
  const { canEdit, data, onRemove, onQuantity } = props as PropsType
  const [quantity, setQuantity] = useState(data.Quantity)

  const handleQuantityChange = (e: any) => {
    let q: number = Number(e.target.value)
    if (q < 1) {
      q = 1
    }
    setQuantity(q)
    onQuantity && onQuantity(data.Id, q)
  }

  const handlePlusMinus = (bPlus: boolean) => {
    let q: number = quantity
    q += (bPlus ? 1 : -1)
    if (q < 1) {
      q = 1
    }
    setQuantity(q)
    onQuantity && onQuantity(data.Id, q)
  }

  const handleClickRemove = () => {
    onRemove && onRemove(data.Id)
  }

  return (
    <div className="cart-item">
      <div className="product">
        <div className="media">
          <div className="image-wrapper">
            <img src={ data?.ImageUrl } alt="Product" />
          </div>
          <div className="media-body">
            <h4>{ data?.Title }</h4>
            <span className="detail">{ data?.Detail }</span>
          </div>
        </div>
        <button className={ "remove" + (canEdit ? "" : " d-none") } type="button" onClick={handleClickRemove}>
          <i className="f7-icons trash">trash</i>
        </button>
      </div>
      <div className="quantity-price-container">
        <div className="quantity">
          <span className="caption">Quantity</span>
          <button type="button" onClick={(e: any) => handlePlusMinus(false)} className={canEdit ? "" : "d-none"}>-</button>
          <input type="number" value={quantity} onChange={handleQuantityChange} readOnly={!canEdit}/>
          <button type="button" onClick={(e: any) => handlePlusMinus(true)} className={canEdit ? "" : "d-none"}>+</button>
        </div>
        <div className="price">
          { !!data?.DeprecatedPrice && (<div className="deprecated-price">${ data?.DeprecatedPrice }</div>) }
          { !!data?.DeprecatedPercent && (<div className="deprecated-percent">{ data?.DeprecatedPercent }% OFF</div>) }
          <div className="price">${ data?.Price}</div>
        </div>
      </div>
    </div>
  )
}

CartItem.propTypes = {
  canEdit: PropTypes.bool,
  data: PropTypes.object,
  onRemove: PropTypes.func,
  onQuantity: PropTypes.func,
}

export default CartItem
