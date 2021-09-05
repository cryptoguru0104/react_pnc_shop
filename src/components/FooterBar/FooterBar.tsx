import React from 'react'
import './FooterBar.scoped.scss'
import { Link } from 'react-router-dom'

const FooterBar = (props: any) => {
  const actions = [
    {
      Id: 1,
      ImageUrl: "/assets/images/home-icon.png",
      Title: "Home"
    },
    {
      Id: 2,
      ImageUrl: "/assets/images/home-icon.png",
      Title: "Lambeau"
    },
    {
      Id: 3,
      ImageUrl: "/assets/images/home-icon.png",
      Title: "Account"
    },
    {
      Id: 4,
      ImageUrl: "/assets/images/home-icon.png",
      Title: "Team"
    },
    {
      Id: 5,
      ImageUrl: "/assets/images/home-icon.png",
      Title: "More"
    },
  ]
  
  return (
    <div className="footer-bar">
      { actions.map(action => (
        <Link to="#" className="item" key={action.Id}>
          <img src={action.ImageUrl} alt="action logo" />
          <span>{action.Title}</span>
        </Link>
      )) }
      
    </div>
  )
}

FooterBar.propTypes = {
}

export default FooterBar
