// LESSON 32 ERROR HANDLING
// Error Boundary-A class component that implements either one or both of the lifecycle methods getDerivedStateFromErorr or componentDidCatch becomes an error boundary

import React from 'react'

function ErrorHandling({nam}) {
        if (nam === 'Trojan') {
                throw new Error('Virus Alert!!')
        }
        return (
               <h1>No Error in the page</h1>
        )
}

export default ErrorHandling