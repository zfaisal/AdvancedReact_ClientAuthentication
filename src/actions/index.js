import {browserHistory} from 'react-router'
import {AUTH_USER} from './types'


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

              //save jwt token
              localStorage.setItem('token',response.token_type + ' ' + response.access_token)


              browserHistory.push('/feature')
            }
          , error: function(ex) {
            // console.log('error',ex)
          }
        })
  }
}
