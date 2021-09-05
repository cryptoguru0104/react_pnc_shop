import React, { useState } from 'react'
import data from './data'
import TopMenuItem from './TopMenuItem'
import './TopMenu.scoped.scss'

const TopMenu = (props: any) => {
  const [activeMenu, setActiveMenu] = useState(0)

  const menuClick = (numId: number) => {
    setActiveMenu(numId);
  }

  return (
    <div className="top-vertical-menu">
      { data.topMenuTitle.map((item: string, index: number) =>
          <TopMenuItem key={index} numId={index + 1} activeMenu={activeMenu} onClick={menuClick} title={item} data={data}/>
      ) }
    </div>
  )
}

export default TopMenu
