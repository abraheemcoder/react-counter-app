const Count = ({ count }) => {
  return (
    <p
      className={`px-3 pb-1 text-center text-7xl font-bold text-gray-800 bg-white shadow-2xl rounded-4xl
          ${count < 0 ? "text-red-600" : count > 0 ? "text-green-600" : "text-black"}`}
    >
      {count}
    </p>
  );
};

export default Count;
