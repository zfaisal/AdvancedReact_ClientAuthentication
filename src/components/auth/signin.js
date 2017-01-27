import React, {Component} from 'react'
import { reduxForm } from 'redux-form'
import {connect} from 'react-redux'
import * as actions from '../../actions'
class Signin extends Component {

  handleFormSubmit({email, password}) {
    // console.log('here',this.state.email, this.state.password)
    this.props.signInUser(this.state.email, this.state.password)
  }

  passChange(e) {
    this.setState({password: e.target.value})
  }

  emailChange(e) {
    this.setState({email: e.target.value})
  }

  renderAlert() {
    if(this.props.errorMessage)
    {
      return (
        <div>{this.props.errorMessage}</div>
      )
    }
  }

  componentWillReceiveProps(nextProps) {
    // console.log('nextProps', nextProps.tokenResponse)
  }

  render() {
    // console.log('response', this.props.tokenResponse)
    return (
      <div>
        <fielset className='form-group'>
          <label>Email</label>
          <input onChange={this.emailChange.bind(this)} className='form-control'/>
          <label>Password</label>
          <input onChange={this.passChange.bind(this)} type='password' className='form-control'/>
        </fielset>
        {this.renderAlert()}
        <button onClick={this.handleFormSubmit.bind(this)} className='btn btn-primary'>Sign In</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  // console.log('state', state)
  return {
          errorMessage: state.auth.error
          ,tokenResponse: state.auth.tokenResponse
         }
}

export default connect(mapStateToProps, actions)(Signin)

// export default reduxForm({
//   form: 'signin',
//   fields:  ["email", "password"]
// }, null, actions )(Signin)
