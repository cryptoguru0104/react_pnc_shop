import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './TopMenuItem.scoped.scss'

import DropDownContent from '../DropDownContent'

const TopMenuItem = (props: any) => {
  const { title, numId, activeMenu, data } = props
  const [visible, setVisible] = useState(false)

  const menuClick = () => {
    if (numId !== activeMenu) {
      setVisible(true)
    } else {
      setVisible(!visible)
    }

    props.onClick(numId)
  }

  return (
    <div className='top-menu-item' onClick={menuClick}>
      <div className='top-menu-list'>
        <span> {title} </span>
        {(numId !== activeMenu || !visible) && (
          <i className="f7-icons">chevron_down</i>
        )}
      </div>
      {numId === activeMenu && visible && (
        <DropDownContent menuTitle={data.topMenuItemTitle} />
      )}
    </div>
  )
}

TopMenuItem.propTypes = {
  title: PropTypes.string,
  numId: PropTypes.number,
  onClick: PropTypes.func,
  activeMenu: PropTypes.number,
  data: PropTypes.any,
}

export default TopMenuItem
