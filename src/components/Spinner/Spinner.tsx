import React from 'react'
import BounceLoader from "react-spinners/BounceLoader";
import PropTypes from 'prop-types'
import './Spinner.scoped.scss'

function Spinner(props: any) {
  const { color, loading, size } = props

  return (
    <div className="spinner-container">
      <div className="spinner" style={{width: `${size}px`, height: `${size}px`}}>
        <BounceLoader color={color || "#f00"} loading={loading} size={size} />
      </div>
    </div>
  )
}

Spinner.propTypes = {
  color: PropTypes.string,
  loading: PropTypes.bool,
  size: PropTypes.number
}

export default Spinner