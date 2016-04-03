require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch';

let headers = new Headers()
headers.set('Content-Type', 'application/json')
let credentials = '_asco_session=' + Asco.SESSION_TOKEN;

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
    return fetch(`/api/images?source=${source}`, {
      headers, credentials
    })
      .then(response => response.json())
      .then(json =>
        dispatch(receiveImages(json))
      )
  }
}
