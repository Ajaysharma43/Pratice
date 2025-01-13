import { useEffect, useState } from "react";
import Square from "../Squere/Square";

export default function Board() {
  const [xisNext, setxisNext] = useState(true);
  const [Squares, setSquares] = useState(Array(9).fill(null));
  const Reverse = Array(9).fill(null);
  const [Display, setDisplay] = useState(true);

  const RestartGame = () => {
    setSquares(Reverse);
  };

  const calculatewinner = (Squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        Squares[a] &&
        Squares[a] === Squares[b] &&
        Squares[a] === Squares[c]
      ) {
        return Squares[a];
      }
    }
    return null;
  };

  const winner = calculatewinner(Squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Current player: " + (xisNext ? "X" : "O");
  }

  const handleClick = (i) => {
    if (Squares[i] || calculatewinner(Squares)) {
      return;
    } else {
      const Nextsquare = Squares.slice();
      if (xisNext == true) {
        Nextsquare[i] = "X";
        setxisNext(false);
      } else {
        Nextsquare[i] = "O";
        setxisNext(true);
      }
      setSquares(Nextsquare);
      console.log(Squares);
    }
  };
  return (
    <>
      <div className="status text-lg font-semibold text-center p-2 bg-blue-100 text-blue-700 rounded shadow">
        {status}
      </div>

      <div className="grid justify-center relative top-[50px]">
        <div className="flex">
          <Square value={Squares[0]} onSquereClick={() => handleClick(0)} />
          <Square value={Squares[1]} onSquereClick={() => handleClick(1)} />
          <Square value={Squares[2]} onSquereClick={() => handleClick(2)} />
        </div>
        <div className="flex">
          <Square value={Squares[3]} onSquereClick={() => handleClick(3)} />
          <Square value={Squares[4]} onSquereClick={() => handleClick(4)} />
          <Square value={Squares[5]} onSquereClick={() => handleClick(5)} />
        </div>
        <div className="flex">
          <Square value={Squares[6]} onSquereClick={() => handleClick(6)} />
          <Square value={Squares[7]} onSquereClick={() => handleClick(7)} />
          <Square value={Squares[8]} onSquereClick={() => handleClick(8)} />
        </div>
        <button onClick={() => RestartGame()} hidden={Display}>
          Restart
        </button>
      </div>
    </>
  );
}
