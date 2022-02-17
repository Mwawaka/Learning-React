import React from 'react'

function Destructuring() {
    const person = {
        name: 'King Sley',
        email: 'Sley56@gmail.com',
        phone: '07474774734'
    
    }
    // Destructuring the object
    const { name, email } = person;
    console.log(name);
    console.log(email);
  return (
    <div></div>
  )
}

export default Destructuring