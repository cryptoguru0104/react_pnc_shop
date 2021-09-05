import React from 'react'
import PropTypes from 'prop-types'
import './NavSubItem.scoped.scss'
import { Link } from 'react-router-dom'

const NavSubItem = (props: any) => {
  const { data } = props

  return (
    <Link to={data.url || "#"} className='navsub-item'>
      <span>{data.title}</span>
    </Link>
  )
}

NavSubItem.propTypes = {
  data: PropTypes.any,
}

export default NavSubItem
