import React from 'react'

const Input = ({value, changeValue, addGrocery}) => (
  <input className="inputTool__input"
    value = {value}
    onChange = {event=>{changeValue(event.target.value)}}
    onKeyDown = {event=>{console.log(event.keyCode); event.keyCode===13 && addGrocery()}}
  ></input>
)

export default Input