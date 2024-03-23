import { useRef, useState } from "react";
import "./Questions.css";
import { NavLink, useLocation } from "react-router-dom";

function Questions() {
  const location = useLocation();
  const Quiz = location.state;
  console.log(Quiz);

  let [index, setIndex] = useState(0);
  let [question, setQuestion] = useState(Quiz.questions[index]);
  let [lock, setLock] = useState(false);
  let [score, setScore] = useState(0);
  let [result, setResult] = useState(false);

  let optionRefs = useRef([]);

  let quizData = [];
  for (let question of Quiz.questions) {
    let data2 = {
      question: question.questionText,
    };

    for (let i = 0; i < question.options.length; i++) {
      data2["option" + (i + 1)] = question.options[i];
    }

    quizData.push(data2);
  }

  const checkAns = (e, ans) => {
    if (lock === false) {
      if (question.correctOption === ans) {
        e.target.classList.add("correct");
        setLock(true);
        setScore((prev) => prev + 1);
      } else {
        e.target.classList.add("wrong");
        setLock(true);
        optionRefs.current[question.correctOption - 1].classList.add("correct");
      }
    }
  };

  const next = () => {
    if (lock === true) {
      if (index === Quiz.questions.length - 1) {
        setResult(true);
        return;
      }
      setIndex((prevIndex) => prevIndex + 1);
      setQuestion(Quiz.questions[index + 1]);
      setLock(false);
      optionRefs.current.forEach((optionRef) => {
        optionRef.classList.remove("correct");
        optionRef.classList.remove("wrong");
      });
    }
  };

  const reset = () => {
    setIndex(0);
    setQuestion(Quiz.questions[0]);
    setScore(0);
    setLock(false);
    setResult(false);
    optionRefs.current.forEach((optionRef) => {
      optionRef.classList.remove("correct");
      optionRef.classList.remove("wrong");
    });
  };

  return (
    <>
      <div className="quest">
        <div className="contain">
          <h1>Quiz </h1>
          <hr />

          {result ? (
            <></>
          ) : (
            <>
              <h2>
                {index + 1}.{question.questionText}
              </h2>
              <ul>
                {Object.keys(quizData[index])
                  .filter((key) => key.startsWith("option"))
                  .map((optionKey, i) => (
                    <li
                      key={optionKey}
                      ref={(ref) => (optionRefs.current[i] = ref)}
                      onClick={(e) => {
                        checkAns(e, quizData[index][optionKey]);
                      }}
                    >
                      {quizData[index][optionKey]}
                    </li>
                  ))}
              </ul>
              <button onClick={next}>Next</button>
              <div className="index">
                {index + 1} of {Quiz.questions.length} questions
              </div>
            </>
          )}

          {result ? (
            <>
              <h2>
                You Scored {score} out of {Quiz.questions.length}
              </h2>
              <div className="btns">
                <button onClick={reset}>Reset</button>
                <button>
                  <NavLink to="/CourseView">Go to Lessons</NavLink>
                </button>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}

export default Questions;
