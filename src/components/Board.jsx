import React, { useState } from "react";
import Game from "./Game";
import "../styles.css"

const Board = (props) => {
  const [points1, setPoints1] = useState(0);
  const [points2, setPoints2] = useState(0);
  const [points3, setPoints3] = useState(0);
  const [points4, setPoints4] = useState(0);
  const [game, setGame] = useState();
  const [hidden, setHidden] = useState("");

  const handleGame = (e) => {
    setGame(
      <Game
        player1={props.player1}
        player2={props.player2}
        player3={props.player3}
        player4={props.player4}
        points1={points1}
        points2={points2}
        points3={points3}
        points4={points4}
        setPoints1={setPoints1}
        setPoints2={setPoints2}
        setPoints3={setPoints3}
        setPoints4={setPoints4}
        setGame={setGame}
        setHidden={setHidden}
      ></Game>
    );
    setHidden('hidden');
  };

  const handleReset = (e) => {
    setPoints1(0);
    setPoints2(0);
    setPoints3(0);
    setPoints4(0);
    props.setHidden('');
    props.setBoard(<></>)
  };

  return (
    <>
      <div className={hidden}>
        <p>
          {props.player1}: {points1} copas
        </p>
        <p>
          {props.player2}: {points2} copas
        </p>
        <p>
          {props.player3}: {points3} copas
        </p>
        <p>
          {props.player4}: {points4} copas
        </p>
        <p>Jogo termina aos {props.endPoints} pontos</p>
      
        <button onClick={handleGame}>Registar jogada</button>

        <button onClick={handleReset}>Novo jogo</button>

      </div>
      {game}
    </>
  );
};

export default Board;
