import React from 'react'
import PropTypes from 'prop-types'
import './SideBar.scoped.scss'
import SideBarItem from './SideBarItem'
import { Link } from 'react-router-dom'

const SideBar = (props: any) => {
  const { cartCount } : { cartCount: number } = props

  const handleClickCart = (e: any) => {
    if (cartCount === 0) {
      e.preventDefault()
    }
  }

  return (
    <div className='sidebar'>
      <Link to='/cart' onClick={handleClickCart}>
        <SideBarItem icon='cart' badge={cartCount} />
      </Link>
      <Link to='/home'>
        <SideBarItem icon='house' />
      </Link>
      <Link to='/profile'>
        <SideBarItem icon='person_fill' />
      </Link>
      <Link to='/help'>
        <SideBarItem icon='question_circle' />
      </Link>
    </div>
  )
}

SideBar.propTypes = {
  data: PropTypes.object,
}

export default SideBar
