import { useState } from "react";
import Count from "./Count";
import ButtonSection from "./ButtonSection";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    // Container
    <div className="h-75 w-62.5 bg-[#F8FAFC] grid place-items-center rounded-2xl shadow-md">
      {/* Title */}
      <h1 className="text-4xl font-bold">Counter</h1>

      {/* Count */}
      <Count count={count} />

      {/* Button section */}
      <ButtonSection count={count} setCount={setCount} />
    </div>
  );
};

export default Counter;
