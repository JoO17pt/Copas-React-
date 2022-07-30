import React, { useRef, useState } from "react";

const Game = (props) => {
  const [disabled, setDisabled] = useState(true);
  let points1game = useRef();
  let points2game = useRef();
  let points3game = useRef();
  let points4game = useRef();

  const handleSubmit = e => {
    e.preventDefault();
  };

  const handleChange = e => {
    if (e.target.name == "points1game") {
      points1game.current = e.target.value;
    } else if (e.target.name == "points2game") {
      points2game.current = e.target.value;
    } else if (e.target.name == "points3game") {
      points3game.current = e.target.value;
    } else points4game.current = e.target.value;

    if(parseInt(points1game.current)+parseInt(points2game.current)+parseInt(points3game.current)+parseInt(points4game.current) == 26) {
        setDisabled(false);
    } else {setDisabled(true);}
  };

  const handleClose = e => {
    if(parseInt(points1game.current) == 26) {
        props.setPoints2(props.points2 + 13);
        props.setPoints3(props.points3 + 13);
        props.setPoints4(props.points4 + 13);
    } else if (parseInt(points2game.current) == 26) {
        props.setPoints1(props.points1 + 13);
        props.setPoints3(props.points3 + 13);
        props.setPoints4(props.points4 + 13);
    } else if (parseInt(points3game.current) == 26) {
        props.setPoints1(props.points1 + 13);
        props.setPoints2(props.points2 + 13);
        props.setPoints4(props.points4 + 13);
    } else if (parseInt(points4game.current) == 26) {
        props.setPoints1(props.points1 + 13);
        props.setPoints2(props.points2 + 13);
        props.setPoints3(props.points3 + 13);
    } else {
        props.setPoints1(props.points1 + parseInt(points1game.current));
        props.setPoints2(props.points2 + parseInt(points2game.current));
        props.setPoints3(props.points3 + parseInt(points3game.current));
        props.setPoints4(props.points4 + parseInt(points4game.current));
    }
    props.setHidden('');
    props.setGame(<></>);
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            {props.player1}:
            <input type="number" name="points1game" onChange={handleChange}/>
          </label>
        </form>
      </div>

      <div>
        <form onSubmit={handleSubmit}>
          <label>
            {props.player2}:
            <input type="number" name="points2game" onChange={handleChange}/>
          </label>
        </form>
      </div>

      <div>
        <form onSubmit={handleSubmit}>
          <label>
            {props.player3}:
            <input type="number" name="points3game" onChange={handleChange}/>
          </label>
        </form>
      </div>

      <div>
        <form onSubmit={handleSubmit}>
          <label>
            {props.player4}:
            <input type="number" name="points4game" onChange={handleChange}/>
          </label>
        </form>
      </div>

      <div>
        <button disabled={disabled} onClick={handleClose}>Submeter</button>
      </div>
    </>
  );
};

export default Game;
