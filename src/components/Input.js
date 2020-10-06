import React from 'react'

const Input = (props) => {
  return (
    <input 
      value={props.value} 
      onChange={props.onChange}
      type={props.inputType}
      className={props.className}
      placeholder={props.placeholder}
    />
  )
}

export default Input;