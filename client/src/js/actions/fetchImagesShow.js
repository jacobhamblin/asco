// require('es6-promise').polyfill();
// import fetch from 'isomorphic-fetch';

export const REQUEST_IMAGES_SHOW = 'REQUEST_IMAGES'
function requestImagesShow(source) {
  return {
    type: REQUEST_IMAGES_SHOW,
    source
  }
}
export const findIndex = (source, json) => {
  if (json === null) return -1
  let index = -1;
  for (let i = 0; i < json.length; i++) {
    if (json[i].id === parseInt(source.slice(3))) index = i
  }
  return index
}

export const RECEIVE_IMAGES_SHOW = 'RECEIVE_IMAGES'
function receiveImagesShow(source, json) {
  let index = findIndex(source, json)

  return {
    type: RECEIVE_IMAGES_SHOW,
    image: json[index],
    index,
    collection: json,
    receivedAt: Date.now()
  }
}

export function fetchImagesShow(source) {
  return function (dispatch) {
    dispatch(requestImagesShow(source))

    return $.getJSON(`/api/images?source=${source}`, (data) => {
      dispatch(receiveImagesShow(source, data))
    })

    // return fetch(`/api/images?source=${source}`, {
    //   headers, cookie
    // })
    //   .then(response => response.json())
    //   .then(json =>
    //     dispatch(receiveImages(json))
    //   )
  }
}
