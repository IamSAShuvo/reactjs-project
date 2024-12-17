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

  // function stepIncreament() {
  //   setStep(step + 1);
  // }

  // function stepDecreament() {
  //   setStep(step - 1);
  // }

  function countIncreament() {
    setCount(count + step);
  }

  function countDecreament() {
    setCount(count - step);
  }

  function handleReset() {
    setCount(0);
    setStep(1);
  }

  return (
    <>
      <div className="buttons">
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <h3>{step}</h3>
      </div>
      <div className="buttons">
        <button
          style={{ backgroundColor: "#7850f2", color: "#fff" }}
          onClick={countDecreament}
        >
          -
        </button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        {/* <h3>Counter: {count}</h3> */}
        <button
          style={{ backgroundColor: "#7850f2", color: "#fff" }}
          onClick={countIncreament}
        >
          +
        </button>
      </div>

      <Message count={count} />

      {count !== 0 || step !== 1 ? (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : null}
    </>
  );
}

function Message({ count }) {
  const date = new Date();
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
