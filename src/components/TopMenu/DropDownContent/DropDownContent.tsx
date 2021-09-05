import React from 'react'
import PropTypes from 'prop-types'
import './DropDownContent.scoped.scss'

import DropDownItem from '../DropDownItem'

const DropDownContent = (props: any) => {
  const { menuTitle } = props

  return (
    <div className='menu-content'>
      <div className='menu-container'>
        {menuTitle.map(
          (item: string, index: number): any => {
            return <DropDownItem key={index} title={item} />
          },
        )}
      </div>
    </div>
  )
}

DropDownContent.propTypes = {
  menuTitle: PropTypes.array,
}

export default DropDownContent
