import { useEffect, useState, useRef } from "react";
import anime from "animejs";
import Square from "../Squere/Square";

export default function Board() {
  const [xisNext, setxisNext] = useState(true);
  const [Squares, setSquares] = useState(Array(9).fill(null));
  const Reverse = Array(9).fill(null);
  const [Display, setDisplay] = useState(false);
  const [Score, setScore] = useState({ X: 0, O: 0, Draw: 0 });

  const gridRef = useRef(null);
  const statusRef = useRef(null);
  const restartButtonRef = useRef(null);
  const scoreboardRef = useRef(null);

  const RestartGame = () => {
    setSquares(Reverse);
    setDisplay(false); // Hide the restart button after game restart

    // Animate the grid on reset
    anime({
      targets: gridRef.current.children,
      scale: [0, 1],
      delay: anime.stagger(100), // Staggered animation for each square
      duration: 500,
      easing: "easeOutElastic(1, 0.5)",
    });
  };

  const calculateWinner = (Squares) => {
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
        return Squares[a]; // Return the winner ('X' or 'O')
      }
    }
    return null;
  };

  useEffect(() => {
    const winner = calculateWinner(Squares);
    if (winner) {
      setScore((prevScore) => ({
        ...prevScore,
        [winner]: prevScore[winner] + 1,
      }));

      // Animate the scoreboard
      anime({
        targets: scoreboardRef.current.children,
        scale: [0.8, 1],
        duration: 600,
        easing: "easeOutElastic(1, 0.5)",
      });
    } else if (Squares.every((square) => square !== null)) {
      setScore((prevScore) => ({
        ...prevScore,
        Draw: prevScore.Draw + 1,
      }));

      // Animate the scoreboard
      anime({
        targets: scoreboardRef.current.children,
        scale: [0.8, 1],
        duration: 600,
        easing: "easeOutElastic(1, 0.5)",
      });
    }
  }, [Squares]);

  useEffect(() => {
    const winner = calculateWinner(Squares);
    if (winner || Squares.every((square) => square !== null)) {
      setDisplay(true);

      // Animate the restart button
      anime({
        targets: restartButtonRef.current,
        scale: [0, 1],
        duration: 500,
        easing: "easeOutBounce",
      });
    }
  }, [Squares]);

  const winner = calculateWinner(Squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else if (Squares.every((square) => square !== null)) {
    status = "It's a Draw!";
  } else {
    status = "Current player: " + (xisNext ? "X" : "O");
  }

  useEffect(() => {
    // Animate the status text
    anime({
      targets: statusRef.current,
      opacity: [0, 1],
      translateY: [-10, 0],
      duration: 500,
      easing: "easeOutQuad",
    });
  }, [status]);

  const handleClick = (i) => {
    if (Squares[i] || winner) {
      return; // Prevent updating if the square is already filled or the game is over
    } else {
      const Nextsquare = Squares.slice();
      if (xisNext) {
        Nextsquare[i] = "X";
        setxisNext(false);
      } else {
        Nextsquare[i] = "O";
        setxisNext(true);
      }
      setSquares(Nextsquare);
    }
  };

  return (
    <>
      <div
        ref={statusRef}
        className="status text-lg font-semibold text-center p-2 bg-blue-100 text-blue-700 rounded shadow"
      >
        {status}
      </div>

      <div
        ref={gridRef}
        className="grid justify-center relative top-[50px]"
      >
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

        {Display && (
          <button
            ref={restartButtonRef}
            onClick={RestartGame}
            className="mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Restart
          </button>
        )}
      </div>

      <div
        ref={scoreboardRef}
        className="scoreboard text-center mt-[15%] space-y-4"
      >
        <div className="text-2xl font-bold text-gray-800">Scoreboard</div>
        <div className="grid grid-cols-3 gap-4 text-lg font-medium">
          <div className="bg-blue-100 p-4 rounded-lg shadow-md flex flex-col items-center">
            <div className="text-blue-700 font-bold text-xl mb-2">Player X</div>
            <div className="text-blue-500 text-2xl">{Score.X}</div>
          </div>
          <div className="bg-red-100 p-4 rounded-lg shadow-md flex flex-col items-center">
            <div className="text-red-700 font-bold text-xl mb-2">Player O</div>
            <div className="text-red-500 text-2xl">{Score.O}</div>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md flex flex-col items-center">
            <div className="text-gray-700 font-bold text-xl mb-2">Draw</div>
            <div className="text-gray-500 text-2xl">{Score.Draw}</div>
          </div>
        </div>
      </div>
    </>
  );
}
