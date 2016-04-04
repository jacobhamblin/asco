import { SET_VERTICAL_DISPLAY } from '../actions'

const verticalDisplay = (state = false, action) => {
  switch (action.type) {
    case SET_VERTICAL_DISPLAY:
      return action.boolean
    default:
      return state
  }
}

export default verticalDisplay
