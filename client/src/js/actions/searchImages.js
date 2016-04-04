import { fetchImages } from '../actions'

export const SET_SEARCH_QUERY = 'SET_SEARCH_QUERY'
export const setSearchQuery = (query) => {
  return {
    type: SET_SEARCH_QUERY,
    query
  }
}

export function searchImages(query) {
  return function (dispatch) {
    dispatch(setSearchQuery(query))

    dispatch(fetchImages('query', query))
  }
}
