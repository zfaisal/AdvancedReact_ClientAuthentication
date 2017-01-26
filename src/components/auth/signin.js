import React, {Component} from 'react'
import { reduxForm } from 'redux-form'
import {connect} from 'react-redux'
import * as actions from '../../actions'
class Signin extends Component {

  handleFormSubmit({email, password}) {
    console.log('here',this.state.email, this.state.password)
    this.props.signInUser(this.state.email, this.state.password)
  }

  passChange(e) {
    this.setState({password: e.target.value})
  }

  emailChange(e) {
    this.setState({email: e.target.value})
  }

  render() {



    return (
      <div>
        <fielset className='form-group'>
          <label>Email</label>
          <input onChange={this.emailChange.bind(this)} className='form-control'/>
          <label>Password</label>
          <input onChange={this.passChange.bind(this)} className='form-control'/>
        </fielset>
        <button onClick={this.handleFormSubmit.bind(this)} className='btn btn-primary'>Sign In</button>
      </div>
    )
  }
}


export default connect(null, actions)(Signin)

// export default reduxForm({
//   form: 'signin',
//   fields:  ["email", "password"]
// }, null, actions )(Signin)
