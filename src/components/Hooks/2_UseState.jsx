import React, { useState } from 'react'

function Counting() {
    const [count, increment] = useState(0)
    
    
  return (
      <div>
          <button onClick={()=>increment(count+1)}>Clicked {count} times</button>
    </div>
  )
}

export default Counting