import React, { useRef, useState } from "react";
import Board from "../src/components/Board.jsx";
import "./styles.css";

function App() {
  let player1 = useRef();
  let player2 = useRef();
  let player3 = useRef();
  let player4 = useRef();
  let endPoints = useRef();
  const [hidden, setHidden] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [board, setBoard] = useState();

  const handleStart = (e) => {
    setBoard(
      <Board
        player1={player1.current}
        player2={player2.current}
        player3={player3.current}
        player4={player4.current}
        endPoints={endPoints.current}
        setHidden={setHidden}
        setBoard={setBoard}
      ></Board>
    );
    setHidden('hidden');
    // document.querySelectorAll('input').forEach(element => {
    //   element.value='';
    // });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    if (e.target.name == "player1") {
      player1.current = e.target.value;
    } else if (e.target.name == "player2") {
      player2.current = e.target.value;
    } else if (e.target.name == "player3") {
      player3.current = e.target.value;
    } else if (e.target.name == "player4") {
      player4.current = e.target.value;
    } else {
      endPoints.current = e.target.value;
    }

    if (
      player1.current.trim() != "" &&
      player2.current.trim() != "" &&
      player3.current.trim() != "" &&
      player4.current.trim() != "" &&
      endPoints.current > 0
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  let playerArray = [];
  for (let i = 1; i <= 4; i++) {
    playerArray.push(
      <form onSubmit={handleSubmit}>
        <label>
          Jogador {i}:
          <input type="text" name={"player" + i} onChange={handleChange} />
        </label>
      </form>
    );
  }

  return (
    <>
      <div className={hidden}>
        {playerArray}

        <form onSubmit={handleSubmit}>
          <label>
            Jogar até:
            <input type="number" name="endPoints" onChange={handleChange} />
          </label>
        </form>

        <button disabled={disabled} onClick={handleStart}>
          Jogar
        </button>
      </div>

      {board}
    </>
  );
}

export default App;
