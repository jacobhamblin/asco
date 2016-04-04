import { REQUEST_IMAGES_SHOW, RECEIVE_IMAGES_SHOW, ADJUST_INDEX, findIndex } from '../actions'

const imageShow = (state = {
  collection: null,
  image: null,
  index: -1,
  isFetching: false,
  lastUpdated: 0,
}, action) => {
  switch (action.type) {
    case REQUEST_IMAGES_SHOW:
      return Object.assign({}, state, {
        isFetching: true,
      })
    case RECEIVE_IMAGES_SHOW:
      return Object.assign({}, state, {
        isFetching: false,
        collection: action.collection,
        lastUpdated: action.receivedAt,
        index: action.index,
        image: action.image
      })
    case ADJUST_INDEX:
      return Object.assign({}, state, {
        index: state.index + action.adjustment,
        image: state.collection[state.index + action.adjustment]
      })
    default:
      return state;
  }
}


export default imageShow
