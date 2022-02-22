// import React from 'react'
// // we can also pass parameters to the HOC
// const WithCounter = (WrappedComponent,increments) => {
//     class WithCounter extends React.Component{
//         constructor(props) {
//             super(props)

//             this.state = {
//                 count: 0
//             }
//         }
//         // must be an arrow function
//         increment = () => {
//             this.setState((prevState) =>
//                 ({ count: prevState.count + increments })
//             )
//         }
//         render() {
//             // passing a prop
//             return <WrappedComponent
//                 // name='Anonymous'
//                 count={this.state.count}
//                 increase={this.increment}
//                 {...this.props} />
//             // Spread operator that is used to access the props that are passed to the component which ends in the HOC
//         }
//     }
//     return WithCounter;
// }


// export default WithCounter;


// Original Version
// import React from 'react'

// const UpdatedComponent = (OriginalComponent) => {
//     class NewComponent extends React.Component{
//         render() {
//             return <OriginalComponent />
            
//         }
//     }
//     return NewComponent;
// }


// export default UpdatedComponent;





