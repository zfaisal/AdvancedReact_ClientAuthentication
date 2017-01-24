import React, {Component} from 'react'
import { reduxForm } from 'redux-form'

class Signin extends Component {

  handleFormSubmit({email, password}) {
    console.log('here',this.state.email, this.state.password)
  }

  passChange(e) {
    this.setState({password: e.target.value})
  }

  emailChange(e) {
    this.setState({email: e.target.value})
  }

  render() {

    const { handleSubmit, fields: { email, password }} = this.props

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fielset className='form-group'>
          <label>Email</label>
          <input onChange={this.emailChange.bind(this)} className='form-control'/>
          <label>Password</label>
          <input onChange={this.passChange.bind(this)} className='form-control'/>
        </fielset>
        <button action='submit' className='btn btn-primary'>Sign In</button>
      </form>
    )
  }
}


export default reduxForm({
  form: 'signin',
  fields:  ["email", "password"]
})(Signin)
