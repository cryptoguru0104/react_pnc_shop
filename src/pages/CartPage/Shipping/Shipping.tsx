import React, { useState } from 'react'
import InputMask from 'react-input-mask'
import { Link } from 'react-router-dom'
import ReactModal from 'react-modal'
import ShippingMethodCheckbox from '../../../components/ShippingMethodCheckbox'
import './Shipping.scoped.scss'
import PaymentMethodAdd from '../../../components/PaymentMethodAdd'
import PaymentAddCardModal from './PaymentAddCardModal'
import PaymentOptionModal from './PaymentOptionModal'
import PaymentTypeModal from './PaymentTypeModal'

ReactModal.setAppElement('#root');

interface PropsType {
  cartList: Product[],
  paymentMethods: PaymentMethod[],
  allPaymentMethods: PaymentMethod[],
  dispatch(action: any): Promise<any>
}

const Shipping = (props: any) => {
  const { cartList, paymentMethods, allPaymentMethods, dispatch }: PropsType = props
  
  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    postalCode: '',
    email: '',
    phone: '',
    shippingMethods: [],
  })

  const [popupSelectPaymentOption, setPopupSelectPaymentOption] = useState(false)
  const [popupSelectPaymentType, setPopupSelectPaymentType] = useState(false)
  const [popupAddPayment, setPopupAddPayment] = useState(false)

  const handleInputChange = (e: any) => {
    setState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className='container'>
      <div className='shipping-form form'>
        <h2>Shipping Address</h2>
        <div className='name'>
          <input
            type='text'
            className='w-50'
            name='firstName'
            placeholder='First Name'
            value={state.firstName}
            onChange={handleInputChange}
          />
          <input
            type='text'
            className='w-50'
            name='lastName'
            placeholder='Last Name'
            value={state.lastName}
            onChange={handleInputChange}
          />
        </div>
        <input
          type='text'
          className='w-100'
          name='addressLine1'
          placeholder='Address Line 1'
          value={state.addressLine1}
          onChange={handleInputChange}
        />
        <input
          type='text'
          className='w-100'
          name='addressLine2'
          placeholder='Address Line 2'
          value={state.addressLine2}
          onChange={handleInputChange}
        />
        <input
          type='text'
          className='w-100'
          name='city'
          placeholder='City'
          value={state.city}
          onChange={handleInputChange}
        />
        <input
          type='text'
          className='w-100'
          name='state'
          placeholder='State'
          value={state.state}
          onChange={handleInputChange}
        />
        <input
          type='text'
          className='w-100'
          name='postalCode'
          placeholder='Postal Code'
          value={state.postalCode}
          onChange={handleInputChange}
        />
      </div>
      <div className='email-form form'>
        <h2>Email Address</h2>
        <input
          type='text'
          className='w-100'
          name='email'
          placeholder='Email'
          value={state.email}
          onChange={handleInputChange}
        />
      </div>
      <div className='phone-form form'>
        <h2>Phone Number</h2>
        <InputMask
          mask='999-999-9999'
          type='text'
          className='w-100'
          name='phone'
          placeholder='Phone Number'
          value={state.phone}
          onChange={handleInputChange}
        />
      </div>
      <div className='payment-form form'>
        <h2>Payment Method</h2>
        <PaymentMethodAdd
          className='w-100'
          onAdd={() => setPopupSelectPaymentOption(true)}
          placeholder="Add new credit or debit card"
          value={paymentMethods}
        />
      </div>
      <div className='shipping-method-form form'>
        <h2>Shipping Method</h2>
        <ShippingMethodCheckbox label="Free FedEx Ground shipping." fee="FREE" />
        <ShippingMethodCheckbox label="FedEx Ground Shipping. 2-3 business days after processing." fee="$5.99" />
        <ShippingMethodCheckbox label="FedEx One-Day Shipping" fee="$17.50" />
      </div>
      <div className='button-container'>
        <button type='button'>REVIEW YOUR ORDER</button>
      </div>
      <div className='link-container'>
        <Link to="#">Shipping and Returns Policy</Link>
        <Link to="#">Contact Us</Link>
        <Link to="#">FAQs</Link>
      </div>

      <PaymentAddCardModal isOpen={popupAddPayment} onClose={() => { setPopupAddPayment(false) }}/>
      <PaymentOptionModal isOpen={popupSelectPaymentOption} onClose={() => { setPopupSelectPaymentOption(false) }}/>
      <PaymentTypeModal isOpen={popupSelectPaymentType} onClose={() => { setPopupSelectPaymentType(false) }}/>
    </div>
  )
}

Shipping.propTypes = {}

export default Shipping
