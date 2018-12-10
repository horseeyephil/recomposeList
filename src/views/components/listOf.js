import React from 'react'
import {withStateHandlers} from 'recompose'
import classNames from 'classnames'

//recompose stuff
const showState = withStateHandlers(
  props=>({
    displayX: false
  }),
  {
    hover : _ => _ => ({displayX : true}),
    unHover : _ => _ => ({displayX : false})
  }
)

const listItem = ({each, idx, hover, unHover, displayX, deleteGrocery}) => (
  <div
      className="groceryItem"
      onMouseOver={_=>hover()}
      onMouseLeave={_=>unHover()}
    >{each}<span 
      className= {classNames("deleteButton", {"deleteButton--hidden": !displayX})} 
      onClick={_=>deleteGrocery(idx)}
    >delete</span>
  </div>
)

const ItemWithHover = showState(listItem)

const Listicle = ({groceries, deleteGrocery}) => {
  return groceries.map((each, idx)=>{
    return <ItemWithHover key={each+idx} each={each} idx={idx} deleteGrocery={deleteGrocery}/>
  })
}

export default (Listicle)