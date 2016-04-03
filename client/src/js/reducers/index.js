import { combineReducers } from 'redux'
import grid from './grid'
import displayStyle from './displayStyle'
import imageShow from './imageShow'

const rootReducer = combineReducers({
  grid,
  displayStyle,
  imageShow
})

export default rootReducer
