// Conditionally running effects

import React, { useEffect, useState } from 'react'

function EffectCount2() {
    const [count, setCount] = useState(0)
    const[name,setName]= useState('')
    // function passed as an argument is executed after every render thus this is not optimal thus we have to specify a condition 
    useEffect(() => {
console.log('useEffect:Updating the document' );
        document.title = `You clicked ${count} times`
    }, [count])
    // the count is for conditionally executing an Effect 
    return (
        <div>
            <h1>Up to date:{count}</h1>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
            <button onClick={() => setCount(prevState => prevState + 1)}>click</button>
        </div>
    )
}

export default EffectCount2