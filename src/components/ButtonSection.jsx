import MinusButton from "./MinusButton";
import PlusButton from "./PlusButton";
import ResetButton from "./ResetButton";

const ButtonSection = ({ count, setCount }) => {
  return (
    <div className="flex justify-center items-center">
      {/* Minus Button */}
      <MinusButton count={count} setCount={setCount} />

      {/* Reset Button */}
      <ResetButton setCount={setCount} />

      {/* Plus Button */}
      <PlusButton count={count} setCount={setCount} />
    </div>
  );
};

export default ButtonSection;
