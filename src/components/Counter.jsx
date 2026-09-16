import { Plus, Minus } from "lucide-react";
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    // Container
    <div className="shadow-md bg-[#F8FAFC] h-75 w-62.5 grid place-items-center rounded-2xl">
      {/* Title */}
      <h1 className="text-2xl font-bold">Counter App</h1>
      {/* Count */}
      <p
        className={`px-3 pb-1 text-center text-7xl font-bold text-gray-800 bg-white shadow-2xs rounded-4xl
          ${count < 0 ? "text-red-600" : "text-black" && count > 0 ? "text-green-600" : "text-black"}`}
      >
        {count}
      </p>
      {/* Button Area */}
      <div className="flex justify-center items-center gap-0.5 w-full">
        {/* Minus Button */}
        <button
          className="bg-red-600 text-white hover:bg-red-700 p-2 rounded-s-2xl cursor-pointer"
          onClick={() => setCount(count - 1)}
        >
          <Minus size={20} />
        </button>
        {/* Reset Button */}
        <button
          className="h-9 bg-slate-200 px-3 text-slate-800 hover:bg-slate-300 font-medium cursor-pointer"
          onClick={() => setCount(0)}
        >
          reset
        </button>
        {/* Plus Button */}
        <button
          className="bg-green-600 text-white hover:bg-green-700 p-2 rounded-e-2xl cursor-pointer"
          onClick={() => setCount(count + 1)}
        >
          <Plus size={20} />
        </button>
      </div>
    </div>
  );
};

export default Counter;
