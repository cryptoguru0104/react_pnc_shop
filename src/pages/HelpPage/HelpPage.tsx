import React from 'react'
import PageTitle from '../../components/PageTitle'
import { Link } from 'react-router-dom'
import './HelpPage.scoped.scss'


const HelpPage = (props: any) => {
  // const products: any[] = props.products

  return (
    <div className="help-page">
      <header>
        <PageTitle title="Help" canReturn={true} />
      </header>
      <div className="help-body">
        <div className="button-container-gray">
          <button type="button">LOOK UP GIFT CARD</button>
          <button type="button">TRACK ORDER</button>
        </div>
        <div className='link-container mt-auto'>
          <Link to="#">Shipping and Returns Policy</Link>
          <Link to="#">Contact Us</Link>
          <Link to="#">FAQs</Link>
        </div>
      </div>
    </div>
  )
}

HelpPage.propTypes = {
}

export default HelpPage
