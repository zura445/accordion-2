import { useState } from "react";
import "./App.css";

function App() {
  const [active, setActive] = useState(0);
  console.log(active);

  return (
    <>
      <div className="">
        <div className="">
          <h1
            className="cursor-pointer"
            onClick={() => {
              if (active === 0) {
                setActive(1);
              } else {
                setActive(0);
              }
            }}
          >
            Question
          </h1>
          {active === 1 ? <p>Answer</p> : null}
        </div>
        <div className="">
          <h1
            className="cursor-pointer"
            onClick={() => {
              if (active === 0) {
                setActive(2);
              } else {
                setActive(0);
              }
            }}
          >
            Question
          </h1>
          {active === 2 ? <p>Answer</p> : null}
        </div>
        <div className="">
          <h1
            className="cursor-pointer"
            onClick={() => {
              if (active === 0) {
                setActive(3);
              } else {
                setActive(0);
              }
            }}
          >
            Question
          </h1>
          {active === 3 ? <p>Answer</p> : null}
        </div>
        <div className="">
          <h1
            className="cursor-pointer"
            onClick={() => {
              if (active === 0) {
                setActive(4);
              } else {
                setActive(0);
              }
            }}
          >
            Question
          </h1>
          {active === 4 ? <p>Answer</p> : null}
        </div>
        <div className="">
          <h1
            className="cursor-pointer"
            onClick={() => {
              if (active === 0) {
                setActive(5);
              } else {
                setActive(0);
              }
            }}
          >
            Question
          </h1>
          {active === 5 ? <p>Answer</p> : null}
        </div>
      </div>
    </>
  );
}

export default App;
