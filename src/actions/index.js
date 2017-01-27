import {browserHistory} from 'react-router'
import {AUTH_USER, AUTH_ERROR, AUTH_RESPONSE} from './types'


export function signInUser(user, password) {
  // console.log('user', 'password')
  var data= {
    username: user
    ,password: password
    ,grant_type: 'password'
  }
  return function(dispatch) {

    $.ajax({url: 'http://testapitoken.zfapi.club/token'
          , data: data
          , type: 'POST'
          , success: function(response,status) {
              // console.log(status)
              // console.log(response.token_type + ' ' + response.access_token)
              // indicate user has logged on
              dispatch({type: AUTH_USER})

              // send the response too
              dispatch(sendTokenResponse(response))

              //save jwt token
              localStorage.setItem('token',response.token_type + ' ' + response.access_token)


              browserHistory.push('/feature')
            }
          , error: function(ex) {
              dispatch(authError('Login Incorrect'))
          }
        })
  }
}




export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}


export function sendTokenResponse(response) {
  // console.log('auth response', response)
  return {
    type: AUTH_RESPONSE,
    payload: response
  }
}
