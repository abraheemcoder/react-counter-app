import { Plus, Minus } from "lucide-react";
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    // Container
    <div className="shadow-md bg-[#F8FAFC] h-75 w-62.5 flex flex-col justify-evenly items-center rounded-2xl">
      {/* Title */}
      <h1 className="text-2xl">Counter App</h1>
      {/* Count */}
      <p className="text-7xl font-bold text-gray-800 bg-red-400 shadow-2xs rounded-[50%]">{count}</p>
      {/* Button Area */}
      <div className="flex justify-center gap-2 bg-amber-200 w-full">
        {/* Minus Button */}
        <button
          className="bg-[#DC2626] hover:bg-[#B91C1C]"
          onClick={() => setCount(count - 1)}
        >
          <Minus size={20} />
        </button>
        {/* Reset Button */}
        <button
          className="bg-[#EEF2FF] hover:bg-[#E0E7FF]"
          onClick={() => setCount(0)}
        >
          reset
        </button>
        {/* Plus Button */}
        <button
          className="bg-[#16A34A] hover:bg-[#15803D] text-4xl"
          onClick={() => setCount(count + 1)}
        >
          <Plus size={20} />
        </button>
      </div>
    </div>
  );
};

export default Counter;
