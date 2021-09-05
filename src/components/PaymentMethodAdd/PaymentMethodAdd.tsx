import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './PaymentMethodAdd.scoped.scss'

const PaymentMethodAdd = (props: any) => {
  const { onAdd } = props
  const { className, placeholder, value }: { className: string, placeholder: string, value: PaymentMethod[]} = props

  const handleClickAdd = () => {
    onAdd && onAdd()
  }

  return (
    <div className={ "payment-method-container " + (className || "") }>
      <button className="add" onClick={handleClickAdd}>+</button>
      <div className="label">
        { value.length === 0 && (<div className="item">{ placeholder }</div>) }
        { value.length !== 0 && value.map(
          e => (<div className="item" key={e.Id}>{ e.Title }</div>)
        ) }
      </div>
    </div>
  )
}

PaymentMethodAdd.propTypes = {
  onAdd: PropTypes.func,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.array
}

export default PaymentMethodAdd
