import React from 'react'
import PropTypes from 'prop-types'
import './ShippingWizard.scoped.scss'

const ShippingWizard = (props: any) => {
  const { step } : { step: number } = props
  const stepArray: string[] = ['Review', 'Shipping', 'Payment']

  return (
    <div className="shipping-wizard">
      <div className="line-container">
        <div className="line"></div>
        <div className="step-container">
          { stepArray.map((e: string, i: number) => {
            let progressClass: string = ''
            if (i === step) {
              progressClass = 'progress'
            } else if (i < step) {
              progressClass = 'passed'
            }
            
            return (
              <div className={`step ${progressClass}`} key={e}>
                <span className="no">{ i + 1 }</span>
                <i className="f7-icons checkmark">checkmark_alt</i>
                <span className="title">{ e }</span>
              </div>
            )
          }) }
        </div>
      </div>
    </div>
  )
}

ShippingWizard.propTypes = {
  step: PropTypes.number
}

export default ShippingWizard
