import { SET_SEARCH_QUERY, setSearchQuery } from '../actions'

const initialQuery = () => {
  let split = window.location.hash.split('?')
  if (split.length === 1) {
    return null
  } else {
    return split[1]
  }
}

const search = (state = {
  query: initialQuery(),
}, action) => {
  switch (action.type) {
    case SET_SEARCH_QUERY:
      return Object.assign({}, state, {
        query: action.query
      })
    default:
      return state
  }
}

export default search
