import React, { useState } from 'react'
import ReactModal from 'react-modal'
import { Link } from 'react-router-dom'
import './Modal.scss'

interface PropsType {
  paymentMethods: PaymentMethod[]
  allPaymentMethods: PaymentMethod[]
  dispatch(action: any): Promise<any>
  isOpen: boolean
  onClose(): any
  onAddCard(): any
}

const PaymentTypeModal = (props: any) => {
  const { isOpen, onClose }: PropsType = props
  const pncLogo = '/assets/images/pnc-logo.png'

  return (
    <ReactModal
      isOpen={isOpen}
      contentLabel='onRequestClose Example'
      onRequestClose={() => onClose && onClose()}
      className='Modal select-payment-type'
      overlayClassName='Overlay'
    >
      <div className='heading'>
        <h3>Select Payment Type</h3>
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

      <div className='payment-type-container'>
        <div className='item'>
          <img src={pncLogo} alt='PNC' />
          <i className='f7-icons'>chevron_right</i>
        </div>
        <div className='item'>
          <img src={pncLogo} alt='PNC' />
          <i className='f7-icons'>chevron_right</i>
        </div>
        <div className='item'>
          <img src={pncLogo} alt='PNC' />
          <i className='f7-icons'>chevron_right</i>
        </div>
      </div>
    </ReactModal>
  )
}

export default PaymentTypeModal
