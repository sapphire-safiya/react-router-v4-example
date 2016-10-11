import React, { Component } from 'react'

export default class Content extends Component {
  render() {
    const { location, pattern, pathname, isExact } = this.props
    if(location.query != null)
      return(
        <div><h2>Query String: {JSON.stringify(location.query, null, 2)}</h2></div>
        )
    else    
    return (
      <div>
        <h2>This is {this.props.params.level}!</h2>
      </div>
    )
  }
}