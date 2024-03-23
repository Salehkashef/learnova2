// // import React from 'react'
// import './Quiz.css'

// function Quiz() {
//   return (
//     <>
//     <div style={{padding:'15px',gap:'10px'}}>
//     <p style={{fontSize:'30px',fontWeight:'bold',}}>Practice Quiz</p>
//     <div className="quiz" style={{backgroundColor:'rgba(244, 140, 6, 0.3)'}}>
//         <img src="src\assets\lesson2.png" alt="" />
//         <span style={{marginLeft:'10px'}}>Quiz 01 : Introduction about XD</span>
//         <span style={{marginLeft:'30px'}}>10 Questions</span>
//     </div>

//     <div className="quiz" >
//         <img src="src\assets\lesson2.png" alt="" />
//         <span style={{marginLeft:'10px'}}>Quiz 02 : Introduction about XD</span>
//         <span style={{marginLeft:'30px'}}>10 Questions</span>
//     </div>

//     <div className="quiz" >
//         <img src="src\assets\lesson2.png" alt="" />
//         <span style={{marginLeft:'10px'}}>Quiz 03 : Introduction about XD</span>
//         <span style={{marginLeft:'30px'}}>10 Questions</span>
//     </div>

//     <div className="quiz" >
//         <img src="src\assets\lesson2.png" alt="" />
//         <span style={{marginLeft:'10px'}}>Quiz 04 : Introduction about XD</span>
//         <span style={{marginLeft:'30px'}}>10 Questions</span>
//     </div>

//     <div className="quiz" >
//         <img src="src\assets\lesson2.png" alt="" />
//         <span style={{marginLeft:'10px'}}>Quiz 05 : Introduction about XD</span>
//         <span style={{marginLeft:'30px'}}>10 Questions</span>
//     </div>

//     <div className="quiz" >
//         <img src="src\assets\lesson2.png" alt="" />
//         <span style={{marginLeft:'10px'}}>Quiz 06 : Introduction about XD</span>
//         <span style={{marginLeft:'30px'}}>10 Questions</span>
//     </div>

//     <div className="quiz" >
//         <img src="src\assets\lesson2.png" alt="" />
//         <span style={{marginLeft:'10px'}}>Quiz 07 : Introduction about XD</span>
//         <span style={{marginLeft:'30px'}}>10 Questions</span>
//     </div>

//     <div className="quiz" >
//         <img src="src\assets\lesson2.png" alt="" />
//         <span style={{marginLeft:'10px'}}>Quiz 08 : Introduction about XD</span>
//         <span style={{marginLeft:'30px'}}>10 Questions</span>
//     </div>

//     <div className="quiz" >
//         <img src="src\assets\lesson2.png" alt="" />
//         <span style={{marginLeft:'10px'}}>Quiz 09 : Introduction about XD</span>
//         <span style={{marginLeft:'30px'}}>10 Questions</span>
//     </div>

//     <div className="quiz" >
//         <img src="src\assets\lesson2.png" alt="" />
//         <span style={{marginLeft:'10px'}}>Quiz 10 : Introduction about XD</span>
//         <span style={{marginLeft:'30px'}}>10 Questions</span>
//     </div>

//     <div className="quiz" >
//         <img src="src\assets\lesson2.png" alt="" />
//         <span style={{marginLeft:'10px'}}>Quiz 11 : Introduction about XD</span>
//         <span style={{marginLeft:'30px'}}>10 Questions</span>
//     </div>

//     <div className="quiz" >
//         <img src="src\assets\lesson2.png" alt="" />
//         <span style={{marginLeft:'10px'}}>Quiz 12 : Introduction about XD</span>
//         <span style={{marginLeft:'30px'}}>10 Questions</span>
//     </div>

//     <div className="quiz" >
//         <img src="src\assets\lesson2.png" alt="" />
//         <span style={{marginLeft:'10px'}}>Quiz 13 : Introduction about XD</span>
//         <span style={{marginLeft:'30px'}}>10 Questions</span>
//     </div>

//     <div className="quiz" >
//         <img src="src\assets\lesson2.png" alt="" />
//         <span style={{marginLeft:'10px'}}>Quiz 14 : Introduction about XD</span>
//         <span style={{marginLeft:'30px'}}>10 Questions</span>
//     </div>

//     <div className="quiz" >
//         <img src="src\assets\lesson2.png" alt="" />
//         <span style={{marginLeft:'10px'}}>Quiz 15 : Introduction about XD</span>
//         <span style={{marginLeft:'30px'}}>10 Questions</span>
//     </div>

//     <div className="quiz" >
//         <img src="src\assets\lesson2.png" alt="" />
//         <span style={{marginLeft:'10px'}}>Quiz 16 : Introduction about XD</span>
//         <span style={{marginLeft:'30px'}}>10 Questions</span>
//     </div>

//     </div>
//     </>
//   )
// }

// export default Quiz

import { useState, useEffect } from "react";
import "./Quiz.css";
import axiosInstance from "../Axios/interceptor";
import { useLocation, useNavigate } from "react-router-dom";

function Quiz({ Course }) {
  const [quizzes, setQuizzes] = useState([]);
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [videoFinished, setVideoFinished] = useState(false);

  useEffect(() => {
    fetchQuizzes();

    setTimeout(() => {
      setVideoFinished(true);
    }, 5000);
  }, []);

  const locator = useLocation();
  const lessonData = locator.state;
  const Navigation = useNavigate();

  const fetchQuizzes = async () => {
    const response = await axiosInstance.get(
      `http://localhost:4000/lesson/course/${Course._id}`
    );

    console.log(response.data.data);
    try {
      const data = await axiosInstance.get(
        `http://localhost:4000/quiz/lesson/${Course._id}`
      );
      console.log(data);
      setQuizzes(data.data.data);
    } catch (error) {
      console.error("Error fetching quizzes:", error);
    }
  };

  const handleQuizClick = (quiz) => {
    if (videoFinished) {
      setSelectedQuiz(quiz);

      Navigation("/quiz", { state: quiz });
    } else {
      alert("Please finish watching the video first.");
    }
  };

  const handleChoiceClick = (choice) => {
    console.log("Selected choice:", choice);
  };

  return (
    <>
      <div style={{ padding: "15px", gap: "10px" }}>
        <p style={{ fontSize: "30px", fontWeight: "bold" }}>Practice Quiz</p>

        {quizzes.map((quiz, index) => (
          <div
            key={index}
            className="quiz"
            style={{
              cursor: "pointer",
              backgroundColor:
                selectedQuiz === quiz
                  ? "rgba(244, 140, 6, 0.3)"
                  : "rgba(238, 100, 91, 0.3)",
            }}
            onClick={() => handleQuizClick(quiz)}
          >
            <img src="src/assets/lesson2.png" alt="" />
            <span style={{ marginLeft: "10px" }}>{quiz.title}</span>
            <span style={{ marginLeft: "30px" }}>
              {quiz.questions.length} Questions
            </span>
          </div>
        ))}

        {/* {selectedQuiz && videoFinished && (
          <div>
            <h3>Questions for {selectedQuiz.title}</h3>
            {selectedQuiz.questions.map((question, index) => (
              <div key={index}>
                <p>{question.questionText}</p>
                <div>
                  {question.options.map((option, idx) => (
                    <button key={idx} onClick={() => handleChoiceClick(option)}>
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )} */}
      </div>
    </>
  );
}

export default Quiz;
