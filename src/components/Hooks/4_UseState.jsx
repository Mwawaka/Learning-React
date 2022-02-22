// Using useState with objects

import React, { useState } from 'react'

function Name() {
    const[names,setName,]=useState({name:'',email:''})
    return (
        <form >
            <label>UserName:</label>
            <input type="text" value={names.name} onChange={(e=>setName({...names,name:e.target.value}))} /> <br />
            <label>Email:</label>
            <input type="email" value={names.email} onChange={(e => setName({...names, email: e.target.value }))} />
            <h1>UserName:{names.name}</h1>
            <h1>Email:{ names.email}</h1>
    </form>
  )
}

export default Name
// we use the spread operator ...name so to manually merge the states of the name and email