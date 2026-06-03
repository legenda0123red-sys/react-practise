import { useState } from "react";

const App = () => {
  const [sec, setSec] = useState(0);


  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100">
      <div className="rounded-xl bg-white p-8 shadow-lg text-center">
        <p className="mb-4 text-6xl font-bold text-blue-500">{sec}</p>
        <div className="flex justify-between w-[200px]">
          <button className="py-[10px] px-[20px] text-white text-2xl bg-blue-800" onClick={() => setSec((prev) => prev + 1)}>+</button>
          <button className="py-[10px] px-[20px] text-white text-2xl bg-blue-800" onClick={() => setSec((prev) => prev - 1)}>-</button>
        </div>
      </div>
    </div>
  );
};

export default App;
