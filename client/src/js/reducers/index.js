import { combineReducers } from 'redux'
import images from './images'
import displayStyle from './displayStyle'

const rootReducer = combineReducers({
  images,
  displayStyle
})

export default rootReducer
