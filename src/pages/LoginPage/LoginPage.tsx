import React from 'react'
import PropTypes from 'prop-types'
import PageTitle from '../../components/PageTitle'
import { Link } from 'react-router-dom'
import './LoginPage.scoped.scss'
import logoIcon from './images/logo.png'
import backgroundImg from './images/login-background.jpg'

const LoginPage = (props: any) => {
  // const products: any[] = props.products

  return (
    <div className="login-page">
      <header>
        <PageTitle title="Login" canReturn={true} />
      </header>
      <div className="login-body">
        <div className="overlay">
          <img src={backgroundImg} alt="Background" />
        </div>
        <div className="content">
          <div className="logo-wrapper">
            <img src={logoIcon} alt="Logo" />
          </div>
          <div className="comment">
            Sign in or create an account to continue to checkout
          </div>
          <div className="button-container-darkblue mt-auto">
            <Link to="/signin" className="button highlight">Sign in</Link>
            <Link to="/create-account" className="button highlight">Create an account</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

LoginPage.propTypes = {
}

export default LoginPage
