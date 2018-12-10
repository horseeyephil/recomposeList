import ToDoInput from '../components/input'
import immutableSplice from '../../tools/immutableSplice'


import {withState, withStateHandlers} from 'recompose'

const inputState = withState("grocery", "addGrocery", '')

export const addGrocery = withStateHandlers(
  ({initialValue='', emptyList=[]}) => ({
    value: initialValue,
    groceries: emptyList
  }),
  {
    changeValue: ({ value }) => targetValue => {
      return ({
      value: targetValue
    })
    },
    addGrocery: ({groceries, value}) => _ => {

      console.log(groceries, value)
      if(value.length<1) return
      return ({
        groceries: [...groceries, value],
        value: ''
      })
    },
    deleteGrocery: ({groceries}) => deleteIndex => {
      return ({
        groceries: immutableSplice(groceries, deleteIndex)
      })
    }

  }
)

export default ToDoInput //addGrocery(ToDoInput)