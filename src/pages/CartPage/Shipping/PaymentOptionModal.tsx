import React, { useState, useEffect } from 'react'
import ReactModal from 'react-modal'
import checkmarkIcon from './images/checkmark.png'
import { Link } from 'react-router-dom'
import './Modal.scss'
import { addPaymentMethod } from '../../../store/payment_method/action'
import { connect } from 'react-redux'
import { methods, allMethods } from '../../../store/payment_method/reducer'

interface PropsType {
  paymentMethods: PaymentMethod[],
  allPaymentMethods: PaymentMethod[],
  dispatch(action: any): Promise<any>,
  isOpen: boolean,
  onClose(): any,
  onAddCard(): any
}

const PaymentOptionModal = (props: any) => {
  const { paymentMethods, allPaymentMethods, dispatch, isOpen, onClose }: PropsType = props
  const [ selected, setSelected ] = useState<PaymentMethod[]>(paymentMethods || [])

  useEffect(() => {
    setSelected(paymentMethods || [])
  }, [paymentMethods])

  const handleClickAddCard = () => {
  }

  const handleContinue = () => {
    selected.length && dispatch(addPaymentMethod(selected[0]))
    onClose && onClose()
  }

  return (
    <ReactModal
      isOpen={isOpen}
      contentLabel='onRequestClose Example'
      onRequestClose={() => (onClose && onClose())}
      className='Modal select-payment'
      overlayClassName='Overlay'
    >
      <div className='heading'>
        <h3>Payment Options</h3>
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

      <div className='method-container'>
        {allPaymentMethods &&
          allPaymentMethods.map((e: PaymentMethod) => (
            <div
              className='item'
              key={e.Id}
              onClick={() => setSelected([e])}
            >
              <div className='img-wrapper'>
                <img src={e.ImageUrl} alt='Logo' />
              </div>
              <div className='info'>
                <span className='name'>{e.Title}</span>
                <span className='number'>{e.Number}</span>
              </div>
              <div
                className={
                  'checkmark-wrapper' +
                  (selected.findIndex(
                    (e1: PaymentMethod) => e1.Id === e.Id,
                  ) === -1
                    ? ' d-none'
                    : '')
                }
              >
                <img src={checkmarkIcon} alt='Checkmark' />
              </div>
            </div>
          ))}
      </div>

      <div className='add'>
        <button type='button' onClick={handleClickAddCard}>
          +
        </button>
        <span>Add new credit or debit card</span>
      </div>

      <div className='mt-auto'>
        <button type='button' className='btn-yellow highlight' onClick={handleContinue}>
          CONTINUE
        </button>
      </div>
    </ReactModal>
  )
}

const mapStateToProps = (state: any) => ({
  paymentMethods: methods(state),
  allPaymentMethods: allMethods(state)
})

export default connect(
  mapStateToProps
)(PaymentOptionModal)
