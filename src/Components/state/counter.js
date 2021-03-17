import React, {useState} from 'react';

function Counter() {
    const [count, setCount]=useState(2)
    

function sum() {
    setCount(count+1)
}

function subtract() {
    setCount(count-1)
}

function multiply() {
    setCount(count*2)
}

function welcome() {
    setCount("Hello")
}
        
    return(
        <div>
        <h1>Counter</h1>
        {count}
    

         <button onClick={sum}>Add</button>
        <button onClick={subtract}>Subtract</button>
        <button onClick={multiply}>Multiply</button>
        <button onClick={sum}>hello</button>
    </div>  
    )
}
export default Counter;



