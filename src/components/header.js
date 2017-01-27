import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import * as actions from '../actions'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      signin: 'sign in'
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.authenticated)
    {
      
      this.setState({signin: 'sign out'})
    }
  }

  render() {

  return (
      <div><button>{this.state.signin}</button></div>
    )
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  }
}

export default connect(mapStateToProps,actions)(Header)
