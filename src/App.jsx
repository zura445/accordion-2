import { useState } from "react";
import "./App.css";
import Question from "./components/Question";

function App() {
  const [active, setActive] = useState(null);

  const questions = [
    "Question 1",
    "Question 2",
    "Question 3",
    "Question 4",
    "Question 5",
  ];

  return (
    <>
      <div className="">
        {questions.map((questions, index) => (
          <Question
            key={index}
            active={active}
            setActive={setActive}
            questions={questions}
            current={index}
          />
        ))}
      </div>
    </>
  );
}

export default App;
