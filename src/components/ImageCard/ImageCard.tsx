import React from 'react'
import PropTypes from 'prop-types'
import './ImageCard.scoped.scss'

const PageTitle = (props: any) => {
  const { data } = props
  
  return (
    <div className="image-card">
      <img src={data.ImageUrl} alt="Thumb" />
      <div className="content">
        <h3>{data.Title}</h3>
      </div>
    </div>
  )
}

PageTitle.propTypes = {
  data: PropTypes.object
}

export default PageTitle
