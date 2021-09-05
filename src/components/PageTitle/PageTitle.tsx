import React from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import './PageTitle.scoped.scss'

const PageTitle = (props: any) => {
  const { title, canReturn } = props
  const history = useHistory()

  return (
    <div className='page-title'>
      {title}
      {canReturn && (
        <button
          className='return'
          type='button'
          onClick={(e) => history.goBack()}
        >
          <i className="f7-icons">chevron_left</i>
        </button>
      )}
    </div>
  )
}

PageTitle.propTypes = {
  title: PropTypes.string,
  canReturn: PropTypes.bool,
}

export default PageTitle
