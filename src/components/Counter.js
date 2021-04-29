import React, { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
        setCount(prevCount => prevCount + 100);
    };
    const handleDecrement = () => {
        setCount(prevCount => prevCount - 100);
    };
    return (
        <div>
            <div>
                <button onClick={handleDecrement}>-</button>
                <h2>Count is {count}</h2>
                <button onClick={handleIncrement}>+</button>
            </div>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    );
}

export default Counter;