require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch';

export const REQUEST_IMAGES = 'REQUEST_IMAGES'
function requestImages(source) {
  return {
    type: REQUEST_IMAGES,
    source
  }
}

export const RECEIVE_IMAGES = 'RECEIVE_IMAGES'
function receiveImages(source, json) {
  return {
    type: RECEIVE_IMAGES,
    images: json,
    receivedAt: Date.now()
  }
}

export function fetchImages(source) {
  return function (dispatch) {
    dispatch(requestImages(source))
    return fetch(`/api/images?source=${source}`)
      .then(response => response.json())
      .then(json =>
        dispatch(receiveImages(json))
      )
  }
}
