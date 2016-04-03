import { REQUEST_IMAGES, RECEIVE_IMAGES } from '../actions'

const grid = (state = {
  isFetching: false,
  images: [],
  lastUpdated: 0
}, action) => {
  switch (action.type) {
    case REQUEST_IMAGES:
      return Object.assign({}, state, {
        isFetching: true,
      })
    case RECEIVE_IMAGES:
      return Object.assign({}, state, {
        isFetching: false,
        images: action.images,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

export default grid
