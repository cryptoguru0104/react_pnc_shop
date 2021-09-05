import React, { useState } from 'react'
import PageTitle from '../../components/PageTitle'
import ShippingWizard from '../../components/ShippingWizard'
import Review from './Review'
import Shipping from './Shipping'
import Checkout from './Checkout'
import './CartPage.scoped.scss'


const CartPage = (props: any) => {
  const [step, setStep] = useState<number>(2)
  
  const handleProceedToShipping = () => {
    setStep(1)
  }

  const handleReturnToCustomer = () => {}

  const compArray: any[] = [
    <Review handleProceed={handleProceedToShipping} handleReturn={handleReturnToCustomer} />,
    <Shipping />,
    <Checkout />
  ]


  return (
    <div className="cart-page">
      <header>
        <PageTitle title="Shop" canReturn={true} />
      </header>
      <div className="container">
        <div className="wizard-wrapper">
          <ShippingWizard step={step}/>
        </div>
      </div>
      {compArray[step]}
    </div>
  )
}

CartPage.propTypes = {
}

export default CartPage
