import React, { useState } from "react";
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
    <div className="ticket-tile__info">
      <Button isPlus={true} onClick={handleIncrement} />
      <p>{counter}</p>
      <Button isPlus={false} onClick={handleDecrement} />
    </div>
  );
};

export default Counter;
