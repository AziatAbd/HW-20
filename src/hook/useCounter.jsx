import { useState } from "react";

const useCounter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count + 5 <= 30) {
      setCount(count + 5);

      return;
    }
    return alert("Sorry, reached the maximum number");
  };

  const decrement = () => {
    if (count - 5 >= 0) {
      setCount(count - 5);
      return;
    }
    return alert("Sorry, reached the minimum number");
  };

  const resetCount = () => {
    setCount(0);
  };

  return { increment, decrement, resetCount, count };
};

export default useCounter;
