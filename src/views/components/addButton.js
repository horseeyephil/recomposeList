import React from 'react'
import { addGrocery } from '../hocs/withState';

const AddButton = ({addGrocery}) => (
  <button
    className = "inputTool__addButton"
    onClick = {_=>addGrocery()}
  >Add!</button>
)

export default AddButton