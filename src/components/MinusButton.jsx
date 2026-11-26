import { Minus } from "lucide-react";

const MinusButton = ({ count, setCount }) => {
  return (
    <button
      className="h-10 px-2 bg-red-600 text-white hover:bg-red-700 rounded-s-2xl active:scale-95 cursor-pointer"
      onClick={() => setCount(count - 1)}
    >
      <Minus size={20} />
    </button>
  );
};

export default MinusButton;
