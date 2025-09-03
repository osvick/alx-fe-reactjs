import { useState } from 'react';

const Counter = () => {
    const [counter, setCounter] = useState(0);

    function Increament () {
        setCounter(counter + 1);
    }

    function Decreament () {
        setCounter(counter - 1);
    }

    function Resetcounter () {
        setCounter(0);
    }
    
    return (
        <div style={{ backgroundColor: 'navy', color: 'white', textAlign: 'center'}}>
            <h1>Counter: {counter}</h1>
            <button onClick ={Increament}>Increase</button>
            <button onClick ={Decreament}>Decrease</button>
            <button onClick={Resetcounter}>Reset</button>
        </div>
    );
};

export default Counter;