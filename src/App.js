import React, { useRef, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMinus,
  faEraser,
  faSwatchbook,
  faPencilRuler,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [size, setSize] = useState(25);
  const [isDrawingLine, setIsDrawingLine] = useState(false);
  const [lineX, setLineX] = useState(0);
  const [lineY, setLineY] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = (window.innerWidth - 100) * 2;
    canvas.height = (window.innerHeight - 200) * 2;

    canvas.style.width = `${window.innerWidth - 100}px`;
    canvas.style.height = `${window.innerHeight - 200}px`;

    const context = canvas.getContext("2d");
    context.scale(2, 2);
    context.lineCap = "round";
    context.strokeStyle = `rgb(0, 0, 0)`;
    context.lineWidth = 25;
    contextRef.current = context;

    fillWithColor("white");
  }, []);

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    if (isDrawingLine) {
      setLineX(offsetX);
      setLineY(offsetY);
      return;
    }
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const finishDrwawing = ({ nativeEvent }) => {
    if (isDrawingLine) {
      const { offsetX, offsetY } = nativeEvent;
      contextRef.current.beginPath();
      contextRef.current.moveTo(lineX, lineY);
      contextRef.current.lineTo(offsetX, offsetY);
      contextRef.current.stroke();
      setIsDrawingLine(false);
      setIsDrawing(false);
      let element = document.getElementById("line");
      element.classList.remove("line");
      return;
    }
    contextRef.current.closePath();
    setIsDrawing(false);
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) {
      return;
    }
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
  };

  const inceraseBrushSize = () => {
    canvasRef.current.getContext("2d").lineWidth = size + 10;
    setSize(size + 10);
  };

  const deceraseBrushSize = () => {
    let newSize;
    if (size - 10 < 5) {
      newSize = 5;
    } else {
      newSize = size - 10;
    }
    canvasRef.current.getContext("2d").lineWidth = newSize;
    setSize(newSize);
  };

  const clear = () => {
    canvasRef.current
      .getContext("2d")
      .clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
  };

  const changeColor = (e) => {
    canvasRef.current.getContext("2d").strokeStyle = e.target.value;
  };

  const invertImage = () => {
    canvasRef.current.getContext("2d").globalCompositeOperation = "difference";
    canvasRef.current.getContext("2d").fillStyle = "white";
    canvasRef.current.getContext("2d").globalAlpha = 1;
    canvasRef.current
      .getContext("2d")
      .fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
  };

  const changeBrush = (e) => {
    canvasRef.current.getContext("2d").lineCap = e.target.value;
  };

  const fillWithColor = (color) => {
    canvasRef.current.getContext("2d").fillStyle = color;
    canvasRef.current
      .getContext("2d")
      .fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
  };

  return (
    <div className="App">
      <div className="panel">
        <form onChange={changeBrush}>
          <label className="container">
            <input type="radio" name="brush" value="square" />
            <span className="checkmark square"></span>
          </label>
          <label className="container">
            <input type="radio" name="brush" value="round" />
            <span className="checkmark round"></span>
          </label>
        </form>

        <form onChange={changeColor}>
          <label className="container">
            <input type="radio" name="color" value="rgb(255, 0, 55)" />
            <span
              className="checkmark red"
              onDoubleClick={() => fillWithColor("rgb(255, 0, 55)")}
              value="das"
            ></span>
          </label>
          <label className="container">
            <input type="radio" name="color" value="rgb(255, 230, 0)" />
            <span
              className="checkmark yellow"
              onDoubleClick={() => fillWithColor("rgb(255, 230, 0)")}
            ></span>
          </label>
          <label className="container">
            <input type="radio" name="color" value="rgb(38, 185, 38)" />
            <span
              className="checkmark green"
              onDoubleClick={() => fillWithColor("rgb(38, 185, 38)")}
            ></span>
          </label>
          <label className="container">
            <input type="radio" name="color" value="rgb(0, 174, 255)" />
            <span
              className="checkmark blue"
              onDoubleClick={() => fillWithColor("rgb(0, 174, 255)")}
            ></span>
          </label>
          <label className="container">
            <input type="radio" name="color" value="rgb(0, 0, 0)" />
            <span
              className="checkmark black"
              onDoubleClick={() => fillWithColor("rgb(0, 0, 0)")}
            ></span>
          </label>
          <label className="container">
            <input type="radio" name="color" value="rgb(255, 255, 255)" />
            <span
              className="checkmark white"
              onDoubleClick={() => fillWithColor("rgb(255, 255, 255)")}
            ></span>
          </label>
        </form>

        <FontAwesomeIcon
          icon={faPlus}
          className="fa-2x"
          onClick={inceraseBrushSize}
        />
        <span className="fa-3x noselect"> {size} </span>
        <FontAwesomeIcon
          icon={faMinus}
          className="fa-2x"
          onClick={deceraseBrushSize}
        />
        <FontAwesomeIcon icon={faEraser} className="fa-2x" onClick={clear} />
        <FontAwesomeIcon
          icon={faSwatchbook}
          className="fa-2x"
          onClick={invertImage}
        />
        <FontAwesomeIcon
          id="line"
          icon={faPencilRuler}
          className="fa-2x"
          onClick={() => {
            setIsDrawingLine(true);
            let element = document.getElementById("line");
            element.classList.add("line");
          }}
        />
      </div>

      <canvas
        onMouseDown={startDrawing}
        onMouseUp={finishDrwawing}
        onMouseMove={draw}
        ref={canvasRef}
      />
    </div>
  );
}

export default App;
