import { useState } from "react";

const LoveCalculator = () => {
  const [name, setName] = useState("");
  const [loverName, setLoverName] = useState("");
  const [percentage, setPercentage] = useState(null);

  const calculateLove = (e) => {
    e.preventDefault();

    if (!name || !loverName) {
      alert("Please enter both names");
      return;
    }

    const randomPercentage = Math.floor(Math.random() * 101);

    setPercentage(randomPercentage);
  };
  
const resetGame = () => {
  setName("");
  setLoverName("");
  setPercentage(null);
};
  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold text-blue-500 mb-8">Love Calculator</h1>

      <form
        onSubmit={calculateLove}
        className="w-full max-w-md bg-blue-800 p-6 rounded-xl"
      >
        {/* Your Name */}
        <div className="mb-4">
          <label className="block text-white mb-2">Your Name</label>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="w-full px-4 py-3 rounded-lg outline-none text-amber-100"
          />
        </div>

        {/* Lover Name */}
        <div className="mb-4">
          <label className="block text-white mb-2">Your Lover Name</label>

          <input
            type="text"
            value={loverName}
            onChange={(e) => setLoverName(e.target.value)}
            placeholder="Enter lover name"
            className="w-full px-4 py-3 rounded-lg outline-none text-amber-100"
          />
        </div>

        {/* Submit */}
        <div className="space-y-3">
          <button
            type="submit"
            className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 rounded-lg"
          >
            Calculate
          </button>

          <button
            type="reset" onClick={resetGame}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg"
          >
            Reset
          </button>
        </div>
      </form>

      {/* Percentage */}
      {percentage !== null && (
        <h2 className="mt-8 text-3xl text-white border-4 border-amber-500 p-4 rounded-lg">
          Love Percentage: {percentage}%
        </h2>
      )}
    </div>
  );
};

export default LoveCalculator;
