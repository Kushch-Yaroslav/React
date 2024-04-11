import React, { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(2);

  useEffect(() => {
    const handleClick = () => {
      setCount((count) => count + step);
    };
    console.log("effetcted created");
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [step]);

  const handlerChange = ({ target: { value } }) => {
    setStep(Number(value));
  };

  return (
    <div>
      <p>Count:{count}</p>
      <input type="text" name="step" value={step} onChange={handlerChange} />
    </div>
  );
};

export default Counter;
