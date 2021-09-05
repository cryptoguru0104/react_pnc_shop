import React, { useState } from 'react'
import PageTitle from '../../components/PageTitle'
import { Link } from 'react-router-dom'
import tmLogo from './images/tm-verified.png'
import './TicketMasterLoginPage.scoped.scss'

const TicketMasterLoginPage = (props: any) => {
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
  }

  return (
    <div className="ticket-login-page page">
      <header>
        <PageTitle title="My Events" canReturn={true} />
      </header>
      <div className="page-body">
        <h2>Get your packers tickets</h2>
        <span>Sign in with your Packers or<br/>Ticketmaster account</span>

        <form onSubmit={handleSubmit}>
          <input type="text" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email" />
          <input type="password" name="password" value={formData.password} onChange={handleInputChange} placeholder="Password" />
          <button type="submit" className="btn-darkblue" disabled>Sign in</button>
          <Link to="#" className="text-center">Forgot password?</Link>
        </form>

        <div className="terms-conditions">
          <Link to="#" className="text-center">Terms &amp; Conditions</Link>
          <img src={tmLogo} alt="tmLogo" />
          <span className="version">Version 1.20.1</span>
        </div>
      </div>
    </div>
  )
}

export default TicketMasterLoginPage
