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

import React from "react";

function Practice() {
    const nums = [1, 2, 3, 4, 5];
    const square = nums.map((nm,index) => (nm * nm));
    // console.log(square);
    const name = ["alice", "bob", "charlie", "daniella"];
    const title = name.map((name) => name[0].toUpperCase() + name.slice(1));
    // returns an array in which the first letter of the array are capitalized
    const pockemon = ["Bulbasur", "Charmander", "Squirtle"];
    const pokekon = pockemon.map((pk) => `<p>${pk}</p>`);
    // console.log(title);
    // console.log(pokekon);
    
    const colors = [
        <h3>Red</h3>,
        <h3>Orange</h3>,
        <h3>Yellow</h3>,
        <h3>Green</h3>,
        <h3>Blue</h3>,
        <h3>Indigo</h3>,
        <h3>Violet</h3>,
    ];
    return <div>
        {colors}
    </div>;
}

export default Practice;
