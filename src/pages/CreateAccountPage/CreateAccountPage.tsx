import React, { useState } from 'react'
import PageTitle from '../../components/PageTitle'
import { Link } from 'react-router-dom'
import tmLogo from './images/tm-verified.png'
import './CreateAccountPage.scoped.scss'

import MobileInput from '../../components/UI/MobileInput'

const CreateAccountPage = (props: any) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    verify: ''
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
    <div className="create-account-page page">
      <header>
        <PageTitle title="Create an account" />
      </header>
      <div className="page-body">
        <form onSubmit={handleSubmit}>
          <MobileInput type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} placeholder="First Name" />
          <MobileInput type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} placeholder="Last Name" />
          <MobileInput type="text" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email" />
          <MobileInput type="text" name="verify" value={formData.verify} onChange={handleInputChange} placeholder="Verify" />
          <div className="btn-wrapper">
            <button type="submit" className="btn-darkblue highlight">Next</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateAccountPage
