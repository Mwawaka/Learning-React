import React, { Component } from 'react'

class ErrorBoundary extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         hasError:false
      }
    }
    // Error boundary to catch the error generated in the console
    static getDerivedStateFromError(error) {
        return {
            hasError:true
        }
    }
  render() {
    if (this.state.hasError) {
      return <h1>Virus detected</h1>
    }
    else {
      return this.props.children
      // refers to the component that we are actually rendering 
    }
   
  }
}

export default ErrorBoundary