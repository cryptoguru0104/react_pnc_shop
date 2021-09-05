import React, { useState } from 'react'
import PageTitle from '../../components/PageTitle'
import { Link } from 'react-router-dom'
import tmLogo from './images/tm-verified.png'
import './SignInPage.scoped.scss'

import MobileInput from '../../components/UI/MobileInput'

const SignInPage = (props: any) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleInputChange = (e: any) => {
      setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <div className="ticket-login-page page">
      <header>
        <PageTitle title="Sign In" canReturn={true} />
      </header>
      <div className="page-body">
        <form onSubmit={handleSubmit}>
          <div className="comment">
            Sign in using the account you created in the app.
          </div>
          <MobileInput type="text" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email Address" />
          <MobileInput type="password" name="password" value={formData.password} onChange={handleInputChange} placeholder="Password" />
          <div className="btn-wrapper">
            <button type="submit" className="btn-darkblue highlight">Next</button>
            <button type="button" className="btn-darkblue highlight">Forgot password?</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignInPage
