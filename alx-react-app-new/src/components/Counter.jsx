import { useState } from 'react';

const Counter = () => {
    const [counter, setCounter] = useState(0);

    function Increment () {
        setCounter(counter + 1);
    }

    function Decrement () {
        setCounter(counter - 1);
    }

    function Resetcounter () {
        setCounter(0);
    }
    
    return (
        <div style={{ backgroundColor: 'navy', color: 'white', textAlign: 'center'}}>
            <h1>Counter: {counter}</h1>
            <button onClick ={Increment}>Increase</button>
            <button onClick ={Decrement}>Decrease</button>
            <button onClick={Resetcounter}>Reset</button>
        </div>
    );
};

export default Counter;