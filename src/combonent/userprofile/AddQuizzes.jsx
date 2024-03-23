import { useEffect, useState } from "react";
import axiosInstance from "../../Axios/interceptor";
// import style from "./QuizForm.module.css"; 

const QuizForm = () => {
  const [title, setTitle] = useState("");
  const [selectedLesson, setSelectedLesson] = useState("");
  const [lessons, setLessons] = useState([]);

  const [questions, setQuestions] = useState([
    { questionText: "", options: ["", "", ""], correctOption: "" },
  ]);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    axiosInstance.get("http://localhost:4000/lesson/all").then((response) => {
      setLessons(response.data.data);
    });
  }, []);

  const handleLessonChange = (e) => {
    setSelectedLesson(e.target.value);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleQuestionChange = (index, e) => {
    const value = e.target.value;
    const updatedQuestions = [...questions];
    updatedQuestions[index] = {
      ...updatedQuestions[index],
      questionText: value,
    };
    setQuestions(updatedQuestions);
  };

  const handleOptionChange = (questionIndex, optionIndex, e) => {
    const { value } = e.target;
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].options[optionIndex] = value;
    setQuestions(updatedQuestions);
  };

  const handleCorrectOptionChange = (index, e) => {
    const { value } = e.target;
    const updatedQuestions = [...questions];
    updatedQuestions[index].correctOption = value;
    setQuestions(updatedQuestions);
  };

  const handleAddQuestion = () => {
    setQuestions([
      ...questions,
      { questionText: "", options: ["", "", ""], correctOption: "" },
    ]);
  };

  const handleRemoveQuestion = (index) => {
    const updatedQuestions = [...questions];
    updatedQuestions.splice(index, 1);
    setQuestions(updatedQuestions);
  };

  const validateForm = () => {
    const errors = {};
    if (title.length < 10) {
      errors.title = "Invalid Quiz title, please enter at least 10 characters";
    }
    if (!selectedLesson) {
      errors.selectedLesson = "Please select a lesson";
    }
    questions.forEach((question, index) => {
      if (!question.questionText.trim()) {
        if (!errors.questions) errors.questions = {};
        errors.questions[index] = {
          ...errors.questions[index],
          questionText: "Question is required",
        };
      }
      question.options.forEach((option, optionIndex) => {
        if (!option.trim()) {
          if (!errors.questions) errors.questions = {};
          if (!errors.questions[index]) errors.questions[index] = {};
          errors.questions[index][optionIndex] = `Option ${
            optionIndex + 1
          } for question ${index + 1} is required`;
        }
      });
      if (!question.correctOption.trim()) {
        if (!errors.questions) errors.questions = {};
        errors.questions[index] = {
          ...errors.questions[index],
          correctOption: `Correct option for question ${index + 1} is required`,
        };
      }
    });
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const quizSubmit = () => {
    if (validateForm()) {
      const quizData = {
        title,
        questions,
        lessons: selectedLesson,
      };
      axiosInstance
        .post("http://localhost:4000/quiz/addQuiz", quizData)
        .then((Quiz) => {
          console.log(Quiz);
        });
    }
  };

  return (
    <div className="container mt-4">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          quizSubmit();
        }}
        className="shadow-md bg-white rounded p-4 mb-4"
      >
        <h2 className="text-2xl font-bold text-center mb-4 text-gray-900">
          Create Quiz
        </h2>

        <select
          value={selectedLesson}
          onChange={handleLessonChange}
          className="form-control mb-4"
        >
          <option value="">Select Lesson</option>
          {lessons.map((lesson) => (
            <option key={lesson._id} value={lesson._id}>
              {lesson.title}
            </option>
          ))}
        </select>
        <p className="text-red">{errors.selectedLesson}</p>

        <input
          type="text"
          value={title}
          onChange={handleTitleChange}
          placeholder="Enter quiz title"
          className="form-control mb-4"
        />
        <p className="text-red">{errors.title}</p>
        {questions.map((question, index) => (
          <div key={index} className="mb-4">
            <input
              type="text"
              value={question.questionText}
              onChange={(e) => handleQuestionChange(index, e)}
              placeholder="Enter question"
              className="form-control mb-2"
            />
            <p className="text-red">{errors.questions?.[index]?.questionText}</p>
            {question.options.map((option, optionIndex) => (
              <div key={optionIndex}>
                <input
                  type="text"
                  value={option}
                  onChange={(e) => handleOptionChange(index, optionIndex, e)}
                  placeholder={`Option ${optionIndex + 1}`}
                  className="form-control mb-2"
                />
                <p className="text-red">{errors.questions?.[index]?.[optionIndex]}</p>
              </div>
            ))}

            <input
              type="text"
              value={question.correctOption}
              onChange={(e) => handleCorrectOptionChange(index, e)}
              placeholder="correct Option"
              className="form-control mb-2"
            />
            <p className="text-red">{errors.questions?.[index]?.correctOption}</p>

            <button
              type="button"
              onClick={() => handleRemoveQuestion(index)}
              className="btn btn-danger me-2 mb-2"
            >
              Remove Question
            </button>
          </div>
        ))}
        <div className="d-flex justify-content-between">
          <button
            type="button"
            onClick={handleAddQuestion}
            className="btn btn-primary mb-2"
          >
            Add Question
          </button>
          <button
            type="submit"
            className="btn btn-success mb-2"
          >
            Submit Quiz
          </button>
        </div>
      </form>
    </div>
  );
};

export default QuizForm;
