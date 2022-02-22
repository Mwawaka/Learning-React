// useEffect after render
import React, { useEffect, useState } from 'react'

function EffectCount() {
    const [count, setCount] = useState(0)
    // function passed as an argument is executed after every render
    useEffect(() => {
        
        document.title=`You clicked ${count} times`
    })
  return (
      <div>
          <h1>Up to date:{count }</h1>
          <button onClick={()=>setCount(prevState=>prevState+1)}>click</button>
    </div>
  )
}

export default EffectCount