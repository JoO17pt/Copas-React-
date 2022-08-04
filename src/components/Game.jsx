import React, { useRef, useState } from "react";
import "../styles.css";

const Game = (props) => {
  const [disabled, setDisabled] = useState(true);
  let points1game = useRef(0);
  let points2game = useRef(0);
  let points3game = useRef(0);
  let points4game = useRef(0);
  let endGame = useRef(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleCancelar = (e) => {
    props.setHidden("");
    props.setGame(<></>);
  };

  const handleChange = (e) => {
    if (e.target.name == "points1game") {
      points1game.current = e.target.value;
      if (e.target.value > 13 && e.target.value < 26) {
        new Audio("/sounds/rameira.mp3").play();
      }
    } else if (e.target.name == "points2game") {
      points2game.current = e.target.value;
      if (e.target.value > 13 && e.target.value < 26) {
        new Audio("/sounds/rameira.mp3").play();
      }
    } else if (e.target.name == "points3game") {
      points3game.current = e.target.value;
      if (e.target.value > 13 && e.target.value < 26) {
        new Audio("/sounds/rameira.mp3").play();
      }
    } else {
      points4game.current = e.target.value;
      if (e.target.value > 13 && e.target.value < 26) {
        new Audio("/sounds/rameira.mp3").play();
      }
    }

    if (
      parseInt(points1game.current) +
        parseInt(points2game.current) +
        parseInt(points3game.current) +
        parseInt(points4game.current) ===
      26
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const handleClose = (e) => {
    if (parseInt(points1game.current) == 26) {
      if (
        props.points2 + 13 >= props.endPoints ||
        props.points3 + 13 >= props.endPoints ||
        props.points4 + 13 >= props.endPoints
      ) {
        endGame.current = true;
      }
      props.setPoints2(props.points2 + 13);
      props.setPoints3(props.points3 + 13);
      props.setPoints4(props.points4 + 13);
    } else if (parseInt(points2game.current) == 26) {
      if (
        props.points1 + 13 >= props.endPoints ||
        props.points3 + 13 >= props.endPoints ||
        props.points4 + 13 >= props.endPoints
      ) {
        endGame.current = true;
      }
      props.setPoints1(props.points1 + 13);
      props.setPoints3(props.points3 + 13);
      props.setPoints4(props.points4 + 13);
    } else if (parseInt(points3game.current) == 26) {
      if (
        props.points1 + 13 >= props.endPoints ||
        props.points2 + 13 >= props.endPoints ||
        props.points4 + 13 >= props.endPoints
      ) {
        endGame.current = true;
      }
      props.setPoints1(props.points1 + 13);
      props.setPoints2(props.points2 + 13);
      props.setPoints4(props.points4 + 13);
    } else if (parseInt(points4game.current) == 26) {
      if (
        props.points1 + 13 >= props.endPoints ||
        props.points2 + 13 >= props.endPoints ||
        props.points3 + 13 >= props.endPoints
      ) {
        endGame.current = true;
      }
      props.setPoints1(props.points1 + 13);
      props.setPoints2(props.points2 + 13);
      props.setPoints3(props.points3 + 13);
    } else {
      if (
        props.points1 + parseInt(points1game.current) >= props.endPoints ||
        props.points2 + parseInt(points2game.current) >= props.endPoints ||
        props.points3 + parseInt(points3game.current) >= props.endPoints ||
        props.points4 + parseInt(points4game.current) >= props.endPoints
      ) {
        endGame.current = true;
      }
      props.setPoints1(props.points1 + parseInt(points1game.current));
      props.setPoints2(props.points2 + parseInt(points2game.current));
      props.setPoints3(props.points3 + parseInt(points3game.current));
      props.setPoints4(props.points4 + parseInt(points4game.current));
    }

    if (endGame.current == true) {
      props.setDisable(true);
    } else {
      if (props.round + 1 === 2) {
        new Audio("/sounds/esquerda.mp3").play();
        props.setRound(props.round + 1);
      } else if (props.round + 1 === 3) {
        new Audio("/sounds/frente.mp3").play();
        props.setRound(props.round + 1);
      } else if (props.round + 1 === 4) {
        new Audio("/sounds/assuncao.mp3").play();
        props.setRound(props.round + 1);
      } else {
        new Audio("/sounds/direita.mp3").play();
        props.setRound(1);
      }
    }

    props.setHidden("");
    props.setGame(<></>);
  };

  return (
    <div className="game">
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            <p>{props.player1}:</p>
            <input
              type="number"
              name="points1game"
              defaultValue={0}
              onChange={handleChange}
            />
          </label>
        </form>
      </div>

      <div>
        <form onSubmit={handleSubmit}>
          <label>
            <p>{props.player2}:</p>
            <input
              type="number"
              name="points2game"
              defaultValue={0}
              onChange={handleChange}
            />
          </label>
        </form>
      </div>

      <div>
        <form onSubmit={handleSubmit}>
          <label>
            <p>{props.player3}:</p>
            <input
              type="number"
              name="points3game"
              defaultValue={0}
              onChange={handleChange}
            />
          </label>
        </form>
      </div>

      <div>
        <form onSubmit={handleSubmit}>
          <label>
            <p>{props.player4}:</p>
            <input
              type="number"
              name="points4game"
              defaultValue={0}
              onChange={handleChange}
            />
          </label>
        </form>
      </div>

      <div>
        <button
          disabled={disabled}
          onClick={handleClose}
          className={disabled ? "heart" : "heart turn_red"}
        >
          <p className="button_legend">Submeter</p>
        </button>
      </div>

      <div>
        <button onClick={handleCancelar}>Cancelar</button>
      </div>
    </div>
  );
};

export default Game;
