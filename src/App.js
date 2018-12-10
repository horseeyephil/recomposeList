import React from 'react'

import {compose} from 'recompose'

import ToDoInput, {addGrocery} from './views/hocs/withState'
import Listicle from './views/components/listOf'
import AddButton from './views/components/addButton'


import './list.scss'

const App = ({changeValue, value, addGrocery, groceries, deleteGrocery}) => (
  <div
    className="list"
  >
    <div>Groceries</div>
    <div className='inputTool'>
      <ToDoInput value={value} changeValue={changeValue} addGrocery={addGrocery}/>
      <AddButton addGrocery={addGrocery}/>
    </div>
    <Listicle groceries={groceries} deleteGrocery={deleteGrocery} />
  </div>)

  export default compose(addGrocery)(App)