const ResetButton = ({ setCount }) => {
  return (
    <button
      className="h-10 px-3 bg-slate-200 text-slate-800 hover:bg-slate-300 font-medium active:scale-95 cursor-pointer"
      onClick={() => setCount(0)}
    >
      reset
    </button>
  );
};

export default ResetButton;
