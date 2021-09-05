import React from 'react'
import PropTypes from 'prop-types'
import './NavMenuContent.scoped.scss'
import NavMenuItem from '../NavMenuItem/NavMenuItem'

const DropDownItem = (props: any) => {
  const { data } = props

  return (
    <div className='nav-menu-panel'>
      <div className='nav-top'>
        <i className="f7-icons">bars</i>
      </div>
      <div className='nav-menu-container'>
        {data.map((item: any, index: number) => {
          return <NavMenuItem key={index} data={item} />
        })}
      </div>
    </div>
  )
}

DropDownItem.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array
}

export default DropDownItem
