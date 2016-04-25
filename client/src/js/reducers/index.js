import { combineReducers } from 'redux'
import grid from './grid'
import verticalDisplay from './verticalDisplay'
import imageShow from './imageShow'
import search from './search'
import user from './user'
import scroll from './scroll'

const rootReducer = combineReducers({
  grid,
  verticalDisplay,
  imageShow,
  search,
  user,
  scroll
})

export default rootReducer
