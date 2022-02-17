// LIST RENDERING Lesson 17
// Using functional components 



// import React from "react";

// function NameList() {
//   const persons = [
//     {
//       id: 1,
//       name: "Bruce",
//       age: 30,
//       skill: "React",
//     },
//     {
//       id: 2,
//       name: "Clark",
//       age: 35,
//       skill: "Angular",
//     },
//     {
//       id: 3,
//       name: "Pretty",
//       age: 25,
//       skill: "Vue",
//     },
//   ];
//   const personList = persons.map((person) => (
//     <h2>
//       I am {person.name} and I am {person.age} and I code using {person.skill}.
//     </h2>
//   ));
  
       
//   return (
//     <div>
//       {personList}
//       {/* above is the normal way */}
//       {/* When render the variable personList it generates an error indicating that each child in a list should have a unique key */}
      
 
     
//     </div>
//   );
// }
// export default NameList;

// Refactoring the JSX into a simple component where we have the 
// NameList component and PersonList component 
// Works best
import React from "react";
import PersonList from "./17_PersonList";

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
    //PersonList is a component ,to which passing the prop nm whose value is the elements of the new array formed by the map function
  return (
    <div>
      {nameList}
      {/* rendering the values of the nameList which calls the PersonList component passing the props and also the PersonList returns a h2 element containing the details that we passed */}
    </div>
  );
}
export default NameList;

// // Map method -creates a new array with the results of calling a provided function on every element in the calling array/From the array which is being mapped
