import { REQUEST_IMAGES, RECEIVE_IMAGES } from '../actions'

const images = (state = {
  isFetching: false,
  images: []
}, action) => {
  switch (action.type) {
    case REQUEST_IMAGES:
      return Object.assign({}, state, {
        isFetching: true,
        lastUpdated: 0
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

export default images
