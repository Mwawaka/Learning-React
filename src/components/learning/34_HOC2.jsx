import React, { Component } from 'react'
import WithCounter from './35_HOC3'

class Hover extends Component {
   
    render() {
      const {increase,name,count}=this.props
    return (
    <h1 onMouseOver={increase}> {name} Hovered {count} Times</h1>
    )
  }
}

export default WithCounter(Hover,10) 