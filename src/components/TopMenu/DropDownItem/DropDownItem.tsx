import React from 'react'
import PropTypes from 'prop-types'
import './DropDownItem.scoped.scss'
import { Link } from 'react-router-dom'

const DropDownItem = (props: any) => {
  const { title } = props

  return (
    <Link to='#' className='dropdown-item'>
      <span>{title}</span>
    </Link>
  )
}

DropDownItem.propTypes = {
  title: PropTypes.string,
}

export default DropDownItem
