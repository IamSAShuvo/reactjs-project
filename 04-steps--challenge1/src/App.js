import "./style.css";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  function stepIncreament() {
    setStep(step + 1);
  }

  function stepDecreament() {
    setStep(step - 1);
  }
  function countIncreament() {
    setCount(count + step);
  }

  function countDecreament() {
    setCount(count - step);
  }
  return (
    <>
      <div className="buttons">
        <button
          style={{ backgroundColor: "#7850f2", color: "#fff" }}
          onClick={stepDecreament}
        >
          -
        </button>
        <h3>Step: {step}</h3>
        <button
          style={{ backgroundColor: "#7850f2", color: "#fff" }}
          onClick={stepIncreament}
        >
          +
        </button>
      </div>
      <div className="buttons">
        <button
          style={{ backgroundColor: "#7850f2", color: "#fff" }}
          onClick={countDecreament}
        >
          -
        </button>
        <h3>Counter: {count}</h3>
        <button
          style={{ backgroundColor: "#7850f2", color: "#fff" }}
          onClick={countIncreament}
        >
          +
        </button>
      </div>

      <Message count={count} />
    </>
  );
}

function Message({ count }) {
  const date = new Date("Sep 13 2023");
  date.setDate(date.getDate() + count);
  return (
    <div className="date">
      <span>
        {count === 0
          ? "Today is "
          : count > 0
          ? `${count} days from today is `
          : `${count} days ago was `}
      </span>
      <span>{date.toDateString()}</span>
    </div>
  );
}

export default App;
