import React, { useState } from "react";
import Game from "./Game";
import "../styles.css";

const Board = (props) => {
  const [points1, setPoints1] = useState(0);
  const [points2, setPoints2] = useState(0);
  const [points3, setPoints3] = useState(0);
  const [points4, setPoints4] = useState(0);
  const [game, setGame] = useState();
  const [hidden, setHidden] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [round, setRound] = useState(1);

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
        endPoints={props.endPoints}
        setDisable={setDisabled}
        round={round}
        setRound={setRound}
      ></Game>
    );
    setHidden("hidden");
  };

  const handleReset = (e) => {
    setPoints1(0);
    setPoints2(0);
    setPoints3(0);
    setPoints4(0);
    props.setHidden("");
    props.setBoard(<></>);
  };

  return (
    <>
      <div className={hidden + " board"}>
        <div>
          <p>
            {disabled
              ? "Fim do jogo."
              : "Jogo termina aos " + props.endPoints + " pontos"}
          </p>

          <div className="scoreBoard">
            <p
              className={
                disabled
                  ? points1 === Math.max(points1, points2, points3, points4)
                    ? "red"
                    : points1 === Math.min(points1, points2, points3, points4)
                    ? "green"
                    : ""
                  : ""
              }
            >
              {props.player1}: {points1} copas
            </p>
            <p
              className={
                disabled
                  ? points2 === Math.max(points1, points2, points3, points4)
                    ? "red"
                    : points2 === Math.min(points1, points2, points3, points4)
                    ? "green"
                    : ""
                  : ""
              }
            >
              {props.player2}: {points2} copas
            </p>
            <p
              className={
                disabled
                  ? points3 === Math.max(points1, points2, points3, points4)
                    ? "red"
                    : points3 === Math.min(points1, points2, points3, points4)
                    ? "green"
                    : ""
                  : ""
              }
            >
              {props.player3}: {points3} copas
            </p>
            <p
              className={
                disabled
                  ? points4 === Math.max(points1, points2, points3, points4)
                    ? "red"
                    : points4 === Math.min(points1, points2, points3, points4)
                    ? "green"
                    : ""
                  : ""
              }
            >
              {props.player4}: {points4} copas
            </p>
          </div>
        </div>

        <div className="heart_container">
          <button
            onClick={handleGame}
            disabled={disabled}
            className={disabled ? "hidden" : "heart turn_red"}
          >
            <p className="button_legend">Nova ronda</p>
          </button>
        </div>

        <div className="heart_container">
          <button
            onClick={handleReset}
            className={disabled ? "heart turn_red" : "heart"}
          >
            <p className="button_legend">Novo jogo</p>
          </button>
        </div>
      </div>
      {game}
    </>
  );
};

export default Board;
