// import "./styles.css";
import { useState } from "react";

const style = {
  display: "flex",
  justifyContent: "flex-start",
  gap: "20px",
  alignItems: "center",
};

export default function App() {
  const [bill, setBill] = useState("");
  const [myRating, setMyRating] = useState(0);
  const [otherRating, setOtherRating] = useState(0);

  const tip = bill * ((myRating + otherRating) / 2 / 100);

  function handleReset() {
    setBill("");
    setMyRating(0);
    setOtherRating(0);
  }

  console.log("tip", tip);
  console.log("myRating", myRating);
  console.log("otherRating", otherRating);

  return (
    <div>
      <TotalBill bill={bill} onSetBill={setBill} />

      <Feedback onTips={myRating} onSelectTips={setMyRating}>
        How did you like the service? :
      </Feedback>

      <Feedback onTips={otherRating} onSelectTips={setOtherRating}>
        How did your friend like the service? :
      </Feedback>

      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />

          <ResetButton onReset={handleReset} />
        </>
      )}
    </div>
  );
}

function TotalBill({ bill, onSetBill }) {
  // const [bill, setBill] = useState(0);
  return (
    <div style={style}>
      <h3>
        <label>How Much was the bill? : </label>
      </h3>
      <input
        style={{ height: "20px" }}
        type="number"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
}

function Feedback({ onTips, onSelectTips, children }) {
  return (
    <div style={style}>
      <h3>
        <label>{children}</label>
      </h3>
      <select
        style={{ height: "25px" }}
        value={onTips}
        onChange={(e) => onSelectTips(Number(e.target.value))}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okey (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

// function OthersOpinion({ othertips, onOtherTips }) {
//   return (
//     <div style={style}>
//       <h3>
//         <label>How did your friend like the service? : </label>
//       </h3>
//       <select
//         style={{ height: "25px" }}
//         value={othertips}
//         onChange={(e) => onOtherTips(e.target.value)}
//       >
//         <option value="dissatisfied">Dissatisfied (0%)</option>
//         <option value="okey">It was okey (5%)</option>
//         <option value="good">It was good (10%)</option>
//         <option value="amazing">Absolutely amazing! (20%)</option>
//       </select>
//     </div>
//   );
// }

function Output({ tip, bill }) {
  return (
    <h2 style={{ fontWeight: "bold" }}>{`You pay : $${
      bill + tip
    } ($${bill} + $${tip}) `}</h2>
  );
}

function ResetButton({ onReset }) {
  return <button onClick={() => onReset()}>Reset</button>;
}
