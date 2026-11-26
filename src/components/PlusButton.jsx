import { Plus } from "lucide-react";

const PlusButton = ({ count, setCount }) => {
  return (
    <button
      className="h-10 px-2 bg-green-600 text-white hover:bg-green-700 p-2 rounded-e-2xl active:scale-95 cursor-pointer"
      onClick={() => setCount(count + 1)}
    >
      <Plus size={20} />
    </button>
  );
};

export default PlusButton;
