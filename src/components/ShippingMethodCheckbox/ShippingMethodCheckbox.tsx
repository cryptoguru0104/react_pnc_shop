import React, { useState } from 'react'
import './ShippingMethodCheckbox.scoped.scss'
import checkmarkIcon from './images/checkmark.png'

const ShippingMethodCheckbox = (props: any) => {
  const { checked, onClick, label, fee } = props; // label is the only optional prop
  const [ stateChecked, setStateChecked ] = useState(checked)

  const handleClick = (e: any) => {
    setStateChecked((prev: any) => !prev)
    onClick && onClick(stateChecked)
  }
  
  return (
    <div className="checkbox" onClick={handleClick}>
      <div className="checkmark-box">
        <img src={checkmarkIcon} alt="checkmark" className={stateChecked ? "" : "d-none"} />
      </div>
      <label className="content">
        <div className="label">{label}</div>
        <div className="fee">{fee}</div>
      </label>
    </div>
  );
}

export default ShippingMethodCheckbox