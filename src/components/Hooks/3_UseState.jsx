// Using useState with previous state

import React, { useState } from "react";

function Counting2() {
    const initialCount = 0;
    const [count, setCount] = useState(initialCount);
    const incrementFive = () => {
        for (let i = 0; i < 5; i++) {
            setCount((prevCount) => prevCount + 1);
        }
    };

    return (
        <div>
            <h1>Count:{count}</h1>
            <button onClick={() => setCount(initialCount)}>Click to Reset</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Click to increment</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>Click to decrement</button>
            <button onClick={incrementFive}>Click to increment 5</button>
        </div>
    );
}

export default Counting2;
