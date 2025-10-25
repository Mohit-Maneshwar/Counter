import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const Increament = () => {
    setCount(count + 1);
  };

  const Decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="w-full h-screen py-10 bg-gray-600 items-center gap-4">
      <h1 className="text-7xl font-bold bg-gray-900 w-full text-center text-white py-4 px-5 tracking-tight">
        Counter
      </h1>
      <div className="flex items-center justify-center gap-4 mt-10 flex-col">
        <p className="text-5xl">Count: {count}</p>
        <div className="flex items-center gap-5 py-5 ">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
            onClick={Increament}
          >
            Increment
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded cursor-pointer"
            onClick={Decrement}
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
