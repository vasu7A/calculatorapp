import { useState } from "react";
import "./index.css";

const Calc = () => {
  const [expression, setExpression] = useState("");
  console.log(expression);

  const executeIt = () => {
    setExpression(eval(expression));
  };

  return (
    <div className="app">
      <h1 className="heading">Calculator</h1>
      <input className="input-box" type="text" value={expression} />
      <div className="operators">
        <button
          type="button"
          onClick={() => {
            setExpression(expression + "+");
          }}
        >
          {" "}
          +
        </button>
        <button
          type="button"
          onClick={() => {
            setExpression(expression + "-");
          }}
        >
          {" "}
          -
        </button>
        <button
          type="button"
          onClick={() => {
            setExpression(expression + "*");
          }}
        >
          {" "}
          *
        </button>
        <button
          type="button"
          onClick={() => {
            setExpression(expression + "/");
          }}
        >
          {" "}
          /
        </button>
      </div>
      <div className="bottom-section">
        <div className="outside-container">
          <div className="btn-style">
            <button
              type="button"
              onClick={() => {
                setExpression(expression + "7");
              }}
            >
              {" "}
              7
            </button>
            <button
              type="button"
              onClick={() => {
                setExpression(expression + "8");
              }}
            >
              {" "}
              8
            </button>
            <button
              type="button"
              onClick={() => {
                setExpression(expression + "9");
              }}
            >
              {" "}
              9
            </button>
          </div>
          <div className="btn-style">
            <button
              type="button"
              onClick={() => {
                setExpression(expression + "4");
              }}
            >
              {" "}
              4
            </button>
            <button
              type="button"
              onClick={() => {
                setExpression(expression + "5");
              }}
            >
              {" "}
              5
            </button>
            <button
              type="button"
              onClick={() => {
                setExpression(expression + "6");
              }}
            >
              {" "}
              6
            </button>
          </div>

          <div className="btn-style">
            <button
              type="button"
              onClick={() => {
                setExpression(expression + "1");
              }}
            >
              {" "}
              1
            </button>
            <button
              type="button"
              onClick={() => {
                setExpression(expression + "2");
              }}
            >
              {" "}
              2
            </button>
            <button
              type="button"
              onClick={() => {
                setExpression(expression + "3");
              }}
            >
              {" "}
              3
            </button>
          </div>

          <div className="btn-style">
            <button
              type="button"
              onClick={() => {
                setExpression(expression + "0");
              }}
            >
              {" "}
              0
            </button>
            <button
              type="button"
              onClick={() => {
                setExpression(expression + ".");
              }}
            >
              {" "}
              .
            </button>
            <button
              className="clear-btn"
              onClick={() => {
                setExpression("");
              }}
              type="button"
            >
              Clear
            </button>
          </div>
        </div>
        <div>
          <button
            className="btn-equal"
            type="button"
            onClick={() => {
              executeIt();
            }}
          >
            {" "}
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calc;
