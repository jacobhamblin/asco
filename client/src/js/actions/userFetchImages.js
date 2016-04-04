import { fetchImages } from '../actions'

export const SET_ALL_TAGS = 'SET_ALL_TAGS'
export const setAllTags = (tags) => {
  return {
    type: SET_ALL_TAGS,
    tags
  }
}
// let dispatchSetAllTags = dispatch(setAllTags)

export function userFetchImages(source, id) {
  return function (dispatch) {
    function allTags(images) {
      let tags = {}

      images.forEach(image => {
        image.tags.forEach(tag => {
          tags[tag.title] = true
        })
      })

      dispatch(setAllTags(Object.keys(tags)))
    }

    dispatch(fetchImages(source, id, allTags))

  }
}
