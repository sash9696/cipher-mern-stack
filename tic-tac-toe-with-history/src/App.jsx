import { useState } from "react";
import "./App.css";

function calculateWinner(squares) {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],

    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}

function Square({ value, onSquareClick }) {
  // console.log('value',value)

  // console.log(`Square rendered`)
  return (
    <button onClick={onSquareClick} className="square">
      {" "}
      {value}{" "}
    </button>
  );
}

//History of moves

//squares
//array of arrays
// [
//   //first move
//   [null, null, null, null, null, null, null, null, null],
//   //second move

//   [null, null, "X", null, null, null, null, null, null],
//   //third move

//   [null, null, "X", null, null, null, null, null, "O"],
// ];

function TicTacToe() {
  const [xisNext, setXisNext] = useState(true);

  const [history, setHistory] = useState([Array(9).fill(null)]);

  const [currentMove, setCurrentMove] = useState(0);

  console.log("history", { history });

  const currentSquares = history[currentMove];


  // const currentSquares = history[history.length -  1];

  function goTo(move){

    console.log(`user needs to move to : ${move}`)

    //history[move] will the current squares data
    setCurrentMove(move);

    //all even places are being taken by O so the next player turn will be x

    setXisNext( move % 2 == 0);


  }

  function handleHistory(squares) {
    // todo

    const newHistory = [...history.slice(0, currentMove + 1), squares]
    setHistory(newHistory);
    // setHistory([...history, squares]); 
    setCurrentMove(newHistory.length - 1);
    setXisNext(!xisNext);
  }

  const moves = history.map((squares, move) => {
    let desc;

    if (move > 0) {
      desc = `Go to move : #${move}`;
    } else {
      desc = "Go to starting of the game";
    }

    return (
      <li key={move}>
        <button onClick={() => goTo(move)} >{desc}</button>
      </li>
    )
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board
          xisNext={xisNext}
          squares={currentSquares}
          handleHistory={handleHistory}
        />
      </div>

      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

function Board({ xisNext, squares, handleHistory }) {
  console.log(`Board rendered`);
  // const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    // alert(i)
    //creating copy of the squares state

    if (squares[i] || calculateWinner(squares)) {
      return;
    }

    const updatedSquares = squares.slice();

    if (xisNext) {
      updatedSquares[i] = "X";
    } else {
      updatedSquares[i] = "O";
    }
    console.log("updatedSquares", updatedSquares);

    handleHistory(updatedSquares);
  }

  const winner = calculateWinner(squares);

  console.log("winner", winner);

  let status;

  if (winner) {
    status = `Winner is : ${winner}`;
  } else {
    status = `Next player is : ${xisNext ? "X" : "O"}`;
  }

  return (
    <>
      <div className="status">{status} </div>
      <button
        onClick={() => {
          setSquares(Array(9).fill(null));
          setXisNext(true);
        }}
        style={{
          margin: "10px 0",
        }}
      >
        Reset
      </button>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

function App() {
  // console.log(`App rendered`)
  let gameHeading = "Tic Tac Toe";
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h1>{gameHeading}</h1>
      <TicTacToe />
    </div>
  );
}

export default App;
