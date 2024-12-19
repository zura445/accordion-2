import { useState } from "react";
import "./App.css";
import Question from "./components/Question";

function App() {
  const [active, setActive] = useState(null);

  const dialog = [
    { question: "question 1", answer: "answer 1" },
    { question: "question 2", answer: "answer 2" },
    { question: "question 3", answer: "answer 3" },
    { question: "question 4", answer: "answer 4" },
    { question: "question 5", answer: "answer 5" },
  ];
  console.log(dialog);

  return (
    <>
      <div className="">
        {dialog.map((dialog, index) => (
          <Question
            key={index}
            active={active}
            setActive={setActive}
            dialogQ={dialog.question}
            dialogA={dialog.answer}
            current={index}
          />
        ))}
      </div>
    </>
  );
}

export default App;
