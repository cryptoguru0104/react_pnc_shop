import React, { useState } from 'react'
import ReactModal from 'react-modal'
import { Link } from 'react-router-dom'
import './Modal.scss'
import { addPaymentMethod } from '../../../store/payment_method/action'
import { connect } from 'react-redux'
import { methods, allMethods } from '../../../store/payment_method/reducer'

interface PropsType {
  isOpen: boolean
  onClose(): any
}

const PaymentAddCardModal = (props: any) => {
  const { isOpen, onClose }: PropsType = props

  return (
    <ReactModal
      isOpen={isOpen}
      contentLabel='onRequestClose Example'
      onRequestClose={() => onClose && onClose()}
      className='Modal add-payment'
      overlayClassName='Overlay'
    >
      <div className='heading'>
        <h3>Add New Card</h3>
        <Link
          to='#'
          onClick={(e: any) => {
            e.preventDefault()
            onClose && onClose()
          }}
        >
          Cancel
        </Link>
      </div>

      <div className='adding-card-container'>
        {/* <input type="text" placeholder="Card Number" name="cardNumber" value={addingCard.cardNumber} onChange={handleAddingPaymentInupt} />
          <InputMask mask="99/99" type="text" placeholder="MM / YY" name="birthday" value={addingCard.birthday} onChange={handleAddingPaymentInupt} /> */}
      </div>

      <div className='button-container-yellow'>
        <button type='button' className='highlight'>
          Done
        </button>
      </div>
    </ReactModal>
  )
}

export default PaymentAddCardModal
