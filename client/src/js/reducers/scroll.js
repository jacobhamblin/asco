import { MORE_IMAGES, RESET_SCROLL } from '../actions'

const scroll = (state = {
  blocksLoaded: 1
}, action) => {
  switch (action.type) {
    case MORE_IMAGES:
      return Object.assign({}, state, {
        blocksLoaded: state.blocksLoaded + 1,
      })
    case RESET_SCROLL:
      return Object.assign({}, state, {
        blocksLoaded: 1,
      })
    default:
      return state
  }
}

export default scroll
