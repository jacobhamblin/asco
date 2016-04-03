require('es6-promise').polyfill();
import fetch from 'isomorphic-fetch';

export const REQUEST_USER = 'REQUEST_USER'
function requestUser(id) {
  return {
    type: REQUEST_USER,
    id
  }
}

export const RECEIVE_USER = 'RECEIVE_USER'
function receiveUser(id, json) {
  return {
    type: RECEIVE_USER,
    id,
    user: json,
    receivedAt: Date.now()
  }
}

export function fetchUser(id) {
  return function (dispatch) {
    dispatch(requestUser(id))
    return fetch(`/api/users/${id}`)
      .then(response => response.json())
      .then(json =>
        dispatch(receiveUser(id, json))
    )
  }
}
