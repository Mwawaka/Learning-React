// import React from 'react'

// function Practice() {
//     const date = new Date();
//     const hours = date.getHours() % 12;
//     let timeOfDay;
//     if (hours < 12) {
//         timeOfDay = 'Morning';
//     }
//     else if (hours >= 12) {
//         timeOfDay = 'Afternoon';

//     }
//     else {
//         timeOfDay='Night'
//     }
//   return (
//       <h1>Good{ timeOfDay}! Hommie</h1>
//   )
// }

// export default Practice

// prctice on map function

// import React from "react";

// function Practice() {
//     const nums = [1, 2, 3, 4, 5];
//     const square = nums.map((nm,index) => (nm * nm));
//     // console.log(square);
//     const name = ["alice", "bob", "charlie", "daniella"];
//     const title = name.map((name) => name[0].toUpperCase() + name.slice(1));
//     // returns an array in which the first letter of the array are capitalized
//     const pockemon = ["Bulbasur", "Charmander", "Squirtle"];
//     const pokekon = pockemon.map((pk) => `<p>${pk}</p>`);
//     // console.log(title);
//     // console.log(pokekon);

//     const colors = [
//         <h3>Red</h3>,
//         <h3>Orange</h3>,
//         <h3>Yellow</h3>,
//         <h3>Green</h3>,
//         <h3>Blue</h3>,
//         <h3>Indigo</h3>,
//         <h3>Violet</h3>,
//     ];
//     return <div>
//         {colors}
//     </div>;
// }

// export default Practice;


// import React, { Component } from 'react'

// class Practice extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             count: 0
//         }
//     }
//     increaseCount() {
//         this.setState(
//             ((prevState) => ({ count: prevState.count + 1 })),()=>{console.log('CallBack value:'+this.state.count);}
            
            
//         )
//         console.log(this.state.count);

//     }
//     incrementFive() {
//         this.increaseCount();
//         this.increaseCount();
//         this.increaseCount();
//         this.increaseCount();
//         this.increaseCount();

//     }
//     render() {
//         return (
//             <div>
//                 <h2>Count:{this.state.count}</h2>
//                 <button onClick={() => this.incrementFive()}>increment</button>
//             </div>)
//     }
// }
// export default Practice

// import React from 'react'

// function Practice() {
//    const handleClick = () => {
//        console.log('Button clicked');
//     }
//   return (
//       <div>
          
//           <button onClick={handleClick}>Click</button>
//     </div>
//   )
// }

// export default Practice


// import React, { Component } from 'react'

// class Practice extends Component {
//    constructor(props) {
//      super(props)
//   //  Controls the state of the input value
//      this.state = {
//        username: '',
//        email: '',
//        textarea: '',
//        frame:''
//      }
//      this.handleUser = (event) => {
//        this.setState(

//          { username: event.target.value }
//        )
//      }
//      this.handleEmail = (event) => {
//        this.setState(
//          {
//            email:event.target.value
//          }
//        )
//      }
//      this.handleText = (event) => {
//        this.setState(
//          {
//            textarea:event.target.value
//          }
//        )
//      }
//      this.frameWork = (event) => {
//        this.setState(
//          {
//            frame:event.target.value
//          }
//        )
//      }
//      this.handleSubmit = (event) => {
       
//          alert(` ${this.state.username} ${this.state.email} ${this.state.frame}`)
//          event.preventDefault()
       
//      }
//   }
  
//   render() {
//     return (
//       <form onSubmit={this.handleSubmit} >
//         <label>UserName:</label>
//         <input type="text" value={this.state.username} onChange={this.handleUser}/>
//         <label>Email:</label>
//         <input type="email" value={this.state.email} onChange={this.handleEmail} />
//         <br />
//         <label>Comments:</label>
//         <textarea value={this.state.textarea} onChange={this.handleText} cols="30" rows="5"></textarea>
//         <br />
//         <select value={this.state.frame} onChange={this.frameWork}>
//           <option value="ReactJs">ReactJs</option>
//           <option value="AngularJs">AngularJs</option>
//           <option value="VueJs">VueJs</option>
//         </select>
//         <br />
//         <input type="submit"/>
//      </form>
//     )
//   }
// }

// export default Practice;

// import React from 'react'
// import ReactDom from 'react-dom'

// function Practice() {
//   return ReactDom.createPortal(
//       <div>Practice</div>,
//       document.querySelector("#root-portal")
//   )
// }

// export default Practice