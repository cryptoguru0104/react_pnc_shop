import React from 'react'
import PropTypes from 'prop-types'
import './SideBar.scoped.scss'

const SideBarItem = (props: any) => {
  const { icon, badge } = props
  
  return (
    <button className={"sidebar-item" + (badge > 0 ? " active" : "")} type="button">
      <i className="f7-icons icon">{icon}</i>
      {badge > 0 && (
        <span className="badge yellow">{badge}</span>
      )}
    </button>
  )
}

SideBarItem.propTypes = {
  icon: PropTypes.string,
  badge: PropTypes.number,
}

export default SideBarItem
