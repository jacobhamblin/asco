import { SET_ACTIVE_TAG, TAGS_DISPLAY, SET_ALL_TAGS, REQUEST_USER, RECEIVE_USER, SET_FOLLOW } from '../actions'

function presentTag() {
  let split = window.location.hash.split('?')
  if (split.length === 1) {
    return false
  } else {
    return split[1]
  }
}

const user = (state = {
  activeTag: presentTag(),
  owner: null,
  allTags: null,
  showTags: false,
  isFetching: false
}, action) => {
  switch (action.type) {
    case SET_ACTIVE_TAG:
      return Object.assign({}, state, {
        activeTag: action.tag,
        showTags: false
      })
    case TAGS_DISPLAY:
      return Object.assign({}, state, {
        showTags: action.boolean
      })
    case REQUEST_USER:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_USER:
      return Object.assign({}, state, {
        isFetching: false,
        owner: action.user,
        lastUpdated: action.receivedAt
      })
    case SET_FOLLOW:
      return Object.assign({}, state, {
        owner: {
          follow: action.follow,
          id: state.owner.id,
          username: state.owner.username,
          description: state.owner.description
        }
      })
    case SET_ALL_TAGS:
      return Object.assign({}, state, {
        showTags: false,
        allTags: action.tags
      })
    default:
      return state;
  }
}

export default user
