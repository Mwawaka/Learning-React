// LIST RENDERING

// import React from "react";

// function NameList() {
//     const names = [
//         {
//             id: 1,
//             name: 'Bruce',
//             age: 30,
//             skill:'React'
//         },
//         {
//              id: 2,
//             name: 'Clark',
//             age: 35,
//             skill:'Angular'
//         },
//         {
//              id: 3,
//             name: 'Pretty',
//             age: 25,
//             skill:'Vue'
//         }
//   ];
//     const nameList = names.map((nm) => <h2>I am {nm.name} and I am {nm.age} and I code using {nm.skill }.</h2>);
//   return (
//     <div>
//       {/* {
//             names.map(nm => <h2>{nm}</h2>)
//             // you can also this function to a variable
//         } */}
//       {nameList}
//     </div>
//   );
// }
// export default NameList;


// Refactoring the JSX into a simple component
import React from "react";
import PersonList from "./PersonList";

function NameList() {
    const names = [
        {
            id: 1,
            name: 'Bruce',
            age: 30,
            skill:'React'
        },
        {
             id: 2,
            name: 'Clark',
            age: 35,
            skill:'Angular'
        },
        {
             id: 3,
            name: 'Pretty',
            age: 25,
            skill:'Vue'
        }
  ];
    const nameList = names.map(nm => <PersonList nm={nm} />);
    // nm is a parameter which is passed as nm to the PersonList component
  return (
    <div>
     {nameList}
    </div>
  );
}
export default NameList;