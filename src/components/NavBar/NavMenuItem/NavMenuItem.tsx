import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './NavMenuItem.scoped.scss'
import NavSubItem from '../NavSubItem/NavSubItem'
import { Link } from 'react-router-dom'

const NavMenuItem = (props: any) => {
  const { data } = props
  const [show, setVisible] = useState('sub-menu-content')
  const [showIcon, setIcon] = useState('chevron_down')

  const handleClick = () => {
    if (show === 'sub-menu-content') setVisible('is-visible')
    else setVisible('sub-menu-content')
    if (showIcon === 'chevron_down') setIcon('chevron_up')
    else setIcon('chevron_down')
  }

  return (
    <div className='nav-panel'>
      <Link to={data.url || "#"} className='nav-menu-item' onClick={handleClick}>
        <span> {data.title} </span>
        { data?.items?.length && (
          <i className="f7-icons">{showIcon}</i>
        )}
        {data?.icon && (<i className="f7-icons icon">{data?.icon}</i>)}
      </Link>
      { data?.items?.length && (
        <div
          className={show}
          style={{ height: String(50 * data?.items?.length) + 'px' }}
        >
          {data.items.map((item: any, index: number) => (
            <NavSubItem data={item} key={index} />
          ))}
        </div>
      ) }
    </div>
  )
}

NavMenuItem.propTypes = {
  data: PropTypes.any
}

export default NavMenuItem
