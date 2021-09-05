import React, { useState } from 'react'
import PageTitle from '../../components/PageTitle'
import CartItem from '../../components/CartItem'
import { Link } from 'react-router-dom'
import './ProfilePage.scoped.scss'


const ProfilePage = (props: any) => {
  return (
    <div className="profile-page">
      <header>
        <PageTitle title="My Account" canReturn={true} />
      </header>
      <div className="profile-body">
        <h2>Shipping</h2>
        <div className="shipping-container">
          <p>
            124 Test Address Dr.<br/>
            Pittsburgh, PA<br/>
            123456
          </p>
          <Link to="#" className="edit-shipping">Edit</Link>
        </div>
        <h2>Payment</h2>
        <div className="payment-container">
          <Link to="#" className="change-payment"> Change Payment</Link>
        </div>
        <h2>My orders</h2>
        <div className="cart-container">
          <div className="cart-item-wrapper">
            <CartItem />
          </div>
          <div className="cart-item-wrapper">
            <CartItem />
          </div>
        </div>
        <div className="button-container-gray">
          <button type="button">TRACK ORDER</button>
          <button type="button">RETURN</button>
        </div>
        <div className='link-container'>
          <Link to="#">Shipping and Returns Policy</Link>
          <Link to="#">Contact Us</Link>
          <Link to="#">FAQs</Link>
        </div>
      </div>
    </div>
  )
}

ProfilePage.propTypes = {
}

export default ProfilePage
