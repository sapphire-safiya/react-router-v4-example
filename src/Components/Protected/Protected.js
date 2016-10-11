import React, { Component } from 'react'
import { Match, Link } from 'react-router'
import { Content } from '../../Components'

export default class ProtectedPage extends Component {
  render() {
  	const { location, pattern, pathname, isExact } = this.props
    return (
      <div>
      <h1>Protected Page</h1>
      <p>With the help of "Match" Component we can specify the Component we want to render for a particular pattern of the App loction/window.pathname.</p>
      </div>
    )
  }
}