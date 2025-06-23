import { useState, useEffect } from "react";


const Counter = () => {
  const [counter, setCounter] = useState(0);

  const btnIncrement = () => {
    setCounter((_counter) => {
      return counter + 1;
    });
  };

  const btnDecrement = () => {
    setCounter((_counter) => {
      return counter - 1;
    });
  };

  const btnReset = () => {
    setCounter((_counter) => {
      setCounter(0);
    });
  };

    useEffect(() =>{
        document.title = `${counter}`
    }, [counter])

  return (
    <>
      <div>
        <p>Count: {counter}</p>
      </div>
      <div>
        <button onClick={btnIncrement}>Aumenta</button>
      </div>
      <div>
        <button onClick={btnDecrement}>Decrementa</button>
      </div>
      <div>
        <button onClick={btnReset}>Reset</button>
      </div>
    </>
  );
};

export default Counter;
