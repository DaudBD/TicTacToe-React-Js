import { useState } from "react";

import circleIcon from "../assets/circle.png";
import crossIcon from "../assets/cross.png";

const TicTacToc = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isCircle, setIsCircle] = useState(true);
  const [winner, setWinner] = useState(null);

  const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkWinner = (newBoard) => {
    for (let pattern of winningPatterns) {
      const [a, b, c] = pattern;

      if (
        newBoard[a] &&
        newBoard[a] === newBoard[b] &&
        newBoard[a] === newBoard[c]
      ) {
        return newBoard[a];
      }
    }

    return null;
  };

  const handleClick = (index) => {
    // Box filled থাকলে click কাজ করবে না
    if (board[index] || winner) return;

    const newBoard = [...board];

    const currentPlayer = isCircle ? circleIcon : crossIcon;

    newBoard[index] = currentPlayer;

    setBoard(newBoard);

    const gameWinner = checkWinner(newBoard);

    if (gameWinner) {
      setWinner(gameWinner);
      return;
    }

    setIsCircle(!isCircle);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsCircle(true);
    setWinner(null);
  };

  const isDraw = !winner && board.every((box) => box !== null);

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center px-4">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
        Tic Tac Toe Game
      </h1>

      {/* Board */}
      <div className="w-[320px] h-80 grid grid-cols-3 gap-2">
        {board.map((item, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            className="bg-slate-700 rounded-xl flex items-center justify-center cursor-pointer hover:bg-slate-600 transition"
          >
            {item && (
              <img
                src={item}
                alt="tic tac toe"
                className="w-16 h-16 object-contain"
              />
            )}
          </div>
        ))}
      </div>

      {/* Game Status */}

      {winner ? (
        <p className="text-2xl text-green-400 font-bold mt-6">
          🎉 Winner: {winner === circleIcon ? "Circle" : "Cross"}
        </p>
      ) : isDraw ? (
        <p className="text-2xl text-yellow-400 font-bold mt-6">🤝 Game Draw!</p>
      ) : (
        <p className="text-xl text-white mt-6">
          Current Player:{" "}
          <span className="font-bold text-blue-400">
            {isCircle ? "Circle" : "Cross"}
          </span>
        </p>
      )}

      {/* Reset Button */}
      <button
        onClick={resetGame}
        className="mt-6 px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition"
      >
        Reset
      </button>
    </div>
  );
};

export default TicTacToc;
