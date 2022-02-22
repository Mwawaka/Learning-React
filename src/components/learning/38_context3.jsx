import React, { Component } from 'react'
import { UserConsumer } from './38_context'

export class ComponentF extends Component {
  render() {
    return (
        <UserConsumer>
            {
                (name) => {
                   return <h1>Hello { name}</h1>
                }
            }
       </UserConsumer>
        // consuming the value provided 
    )
  }
}

export default ComponentF