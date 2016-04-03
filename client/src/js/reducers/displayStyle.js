import { SET_DISPLAY_STYLE } from '../actions'

const displayStyle = (state = 'grid', action) => {
  switch (action.type) {
    case SET_DISPLAY_STYLE:
      return action.style
    default:
      return state
  }
}

export default displayStyle
