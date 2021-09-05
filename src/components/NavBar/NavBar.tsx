import React, { useState } from 'react'
import PropTypes from 'prop-types'
import NavMenuContent from './NavMenuContent'
import './NavBar.scoped.scss'
import data from './data'

const NavBar = (props: any) => {
  const { searchKeyword, onSearch } = props
  const [visible, setVisible] = useState(false);
  const [keyword, setKeyword] = useState(searchKeyword || '')

  const handleClick = () => {
    setVisible(!visible);
  }

  const handleChangeKeyword = (e: any) => {
    setKeyword(e.target.value)
  }

  const handleKeydown = (e:any) => {
    var code = (e.keyCode ? e.keyCode : e.which);
    if (code === 13) {
      onSearch && onSearch(keyword)
    }
  }
  
  return (
    <div className="page-navbar">
      <div className="top-search-menu">
        <div className="menu-icon">
          <i className="f7-icons" onClick={handleClick}>bars</i>
        </div>
        <div className="search-group">
          <i className="f7-icons">search</i>
          <input type="text" placeholder="Search" name="keyword" value={keyword} onChange={handleChangeKeyword} onKeyDown={handleKeydown} />
        </div>
      </div>
      { visible && (
        <div className="nav-menu custom-scrollbar">
          <NavMenuContent data={data} />
        </div>
      )}
      { visible && (
        <div className="overlay-panel" onClick={handleClick}>
        </div>  
      ) }
    </div>
  )
}

NavBar.propTypes = {
  searchKeyword: PropTypes.string,
  onSearch: PropTypes.func
}

export default NavBar
