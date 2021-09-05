import React, { useState } from 'react'
import InputMask from 'react-input-mask'
import { Link } from 'react-router-dom'
import CheckoutItem from '../../../components/CheckoutItem'
import './Checkout.scoped.scss'

const Checkout = (props: any) => {
  const [state, setState] = useState({
    promoCode: '',
    cardNumber: ''
  })

  const handleInputChange = (e: any) => {
    setState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className='checkout-component'>
      <div className='container'>
        <h2>Checkout</h2>
        <div className="checkout-items">
          <CheckoutItem />
        </div>
      </div>
      <div className="checkout-container">
        <div className="item">
          <span className="label">Quantity</span>
          <span className="value">1 Item</span>
        </div>
        <div className="item">
          <span className="label">Name</span>
          <span className="value">David Gallagher</span>
        </div>
        <div className="item">
          <span className="label">Shipping</span>
          <span className="value">124 Test Address Dr.Pittsburgh, PA 123456</span>
          <Link to="#" className="action">Edit</Link>
        </div>
        <div className="item">
          <span className="label">Payment</span>
          <Link to="#" className="action">Confirm Payment</Link>
        </div>
        <div className="item">
          <span className="label">Delivery</span>
          <span className="value">
            FedEx Ground
            <span className="comment">Your order will arrive within 2-3 business days after processing.</span>
          </span>
        </div>
        <div className="item input">
          <span className="label w-100">Promo Code</span>
          <input type="text" placeholder="Enter Code" value={state.promoCode} name="promoCode" onChange={handleInputChange} />
        </div>
        <div className="item input">
          <span className="label w-100">Gift Card Balance</span>
          <InputMask
            mask='9999-9999-9999-9999'
            type='text'
            className='w-100'
            name='cardNumber'
            placeholder='Card Number'
            value={state.cardNumber}
            onChange={handleInputChange}
          />
          <div className="balance">
            <span className="balance-value">$30.00</span>
            <span className="comment">on card</span>
          </div>
        </div>
        <div className="item order-total">
          <span className="label">Order Total</span>
          <div className="order-item">
            <span className="order-label">Subtotal</span>
            <span className="order-money">$30.00</span>
          </div>
          <div className="order-item">
            <span className="order-label">Shipping</span>
            <span className="order-money">$30.00</span>
          </div>
          <div className="order-item">
            <span className="order-label">Taxes &amp; Fees</span>
            <span className="order-money">$4.55</span>
          </div>
        </div>
        <div className="item total">
          <span className="label">Total</span>
          <span className="label text-right ml-auto">$40.54</span>
        </div>
      </div>
      <div className="button-container-yellow">
        <button type="button" className="highlight" >PLACE YOUR ORDER</button>
      </div>
    </div>
  )
}

Checkout.propTypes = {}

export default Checkout
