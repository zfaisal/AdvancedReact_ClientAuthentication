import {AUTH_USER} from '../actions/types'
import {UNAUTH_USER} from '../actions/types'
import {AUTH_ERROR} from '../actions/types'
import {AUTH_RESPONSE} from '../actions/types'

export default function(state= {}, action) {
  // console.log('action', action)
  switch(action.type) {
    case AUTH_RESPONSE:
       return {...state, tokenResponse: action.payload}
    case AUTH_USER:
      return {...state, authenticated: true}
    case UNAUTH_USER:
      return {...state, authenticated: false}
    case AUTH_ERROR:
       return {...state, error: action.payload}

  }

  return state
}
