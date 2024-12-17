import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePreviousBtn() {
    if (step > 1) setStep(step - 1);
  }
  function handleNextBtn() {
    if (step < 3) setStep(step + 1);
  }

  return (
    <>
      <button
        className="close"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {isOpen ? "Χ" : <img src="icons8-menu-48.png" alt="" />}
        {/* &times; &equiv; */}
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>

          <div className="buttons">
            <Button
              bgColor="#7850f2"
              textColor="#fff"
              onClick={handlePreviousBtn}
            >
              <span>←</span>Previous
            </Button>
            <Button bgColor="#7850f2" textColor="#fff" onClick={handleNextBtn}>
              Next<span>→</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function Button({ bgColor, textColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default App;
