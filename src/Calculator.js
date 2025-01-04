import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleButtonClick = (value) => {
    if (value === "C") {
      setInput("");
    } else if (value === "=") {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput("Error");
      }
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="calculator">
      <div className="display">{input || "0"}</div>
      <div className="buttons">
        {/* Number buttons */}
        <button className="number" onClick={() => handleButtonClick("7")}>
          7
        </button>
        <button className="number" onClick={() => handleButtonClick("8")}>
          8
        </button>
        <button className="number" onClick={() => handleButtonClick("9")}>
          9
        </button>
        <button onClick={() => handleButtonClick("/")}>/</button>
        <button className="number" onClick={() => handleButtonClick("4")}>
          4
        </button>
        <button className="number" onClick={() => handleButtonClick("5")}>
          5
        </button>
        <button className="number" onClick={() => handleButtonClick("6")}>
          6
        </button>
        <button onClick={() => handleButtonClick("*")}>*</button>
        <button className="number" onClick={() => handleButtonClick("1")}>
          1
        </button>
        <button className="number" onClick={() => handleButtonClick("2")}>
          2
        </button>
        <button className="number" onClick={() => handleButtonClick("3")}>
          3
        </button>
        <button onClick={() => handleButtonClick("-")}>-</button>
        <button className="number" onClick={() => handleButtonClick("0")}>
          0
        </button>
        <button onClick={() => handleButtonClick(".")}>.</button>
        <button onClick={() => handleButtonClick("+")}>+</button>
        <button className="clear" onClick={() => handleButtonClick("C")}>
          C
        </button>
        <button className="equals" onClick={() => handleButtonClick("=")}>
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
