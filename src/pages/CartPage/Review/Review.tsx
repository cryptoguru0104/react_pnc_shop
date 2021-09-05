import React from 'react'
import PropTypes from 'prop-types'
import CartItem from '../../../components/CartItem'
import './Review.scoped.scss'

import { removeCart, updateCartQuantity } from '../../../store/product/action'

const Review = (props: any) => {
  const { handleProceed, handleReturn } = props
  const {
    cartList,
    dispatch
  }: {
    cartList: Product[],
    dispatch(action: any): Promise<any>
  } = props

  const handleClickProceed = () => {
    handleProceed && handleProceed()
  }

  const handleClickReturn = () => {
    handleReturn && handleReturn()
  }

  const handleClickRemove = (id: number) => {
    dispatch(removeCart(id))
  }

  const handleQuantityChange = (id: number, quantity: number) => {
    dispatch(updateCartQuantity(id, quantity))
  }

  return (
    <div className='container'>
      <h2>Cart</h2>
      <div className='cart-container'>
        {cartList.map((cart: Product) => (
          <div className='cart-item-wrapper' key={cart.Id}>
            <CartItem canEdit={true} data={cart} onRemove={handleClickRemove} onQuantity={handleQuantityChange} />
          </div>
        ))}
      </div>
      <div className='button-container-gray'>
        <button
          type='button'
          onClick={(e) => handleClickProceed()}
          className='btn-gray highlight'
        >
          PROCEED TO SHIPPING
        </button>
        <button
          type='button'
          onClick={(e) => handleClickReturn()}
          className='btn-gray'
        >
          RETURNING CUSTOMER
        </button>
      </div>
    </div>
  )
}

Review.propTypes = {
  handleProceed: PropTypes.func,
  handleReturn: PropTypes.func,
}

export default Review
