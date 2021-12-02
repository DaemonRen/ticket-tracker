import React, { useState } from "react";
import "./Counter.scss"
import Button from "../Button/Button";

const Counter = () => {
  const [counter, setCounter] = useState(() => {
    return 0;
  });

  const handleIncrement = () => {
    setCounter((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    if (counter > 0) {
      setCounter((prevCount) => prevCount - 1);
    }
  };

  return (
    <div className="ticket-tile__counter">
      <Button isPlus={false} onClick={handleDecrement} />
      <p className="ticket-tile__counter-number">{counter}</p>
      <Button isPlus={true} onClick={handleIncrement} />
    </div>
  );
};

export default Counter;
