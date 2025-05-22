import { useState } from "react";
import Button from "../common/Button";

const QuizProblem = ({ problem }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
    setShowFeedback(false);
  };

  const handleSubmit = () => {
    setShowFeedback(true);
  };

  const isCorrect = Array.isArray(problem.correctAnswer)
    ? problem.correctAnswer.includes(selectedOption)
    : selectedOption === problem.correctAnswer;

  return (
    <div className="quiz-problem">
      <p className="question-number">Q{problem.number}.</p>
      <p className="question-text">{problem.question}</p>
      <ul className="options">
        {problem.options.map((option, index) => (
          <li key={index}>
            <input
              type="radio"
              name={`q${problem.number}`}
              id={`q${problem.number}-opt${index}`}
              value={option}
              checked={selectedOption === option}
              onChange={handleOptionChange}
            />
            <label htmlFor={`q${problem.number}-opt${index}`}>{option}</label>
          </li>
        ))}
      </ul>
      <div className="quiz-actions">
        <Button primary onClick={handleSubmit} icon="check">
          정답 확인
        </Button>
        <Button
          secondary
          onClick={() => alert("다음 문제!")}
          icon="arrow-right"
        >
          다음 문제
        </Button>
        <Button small secondary icon="star" title="즐겨찾기 추가"></Button>
      </div>

      {showFeedback && (
        <div
          className={`answer-feedback ${isCorrect ? "correct" : "incorrect"}`}
        >
          <p>{isCorrect ? "정답입니다!" : "오답입니다."}</p>
          {problem.explanation && (
            <p className="explanation">해설: {problem.explanation}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default QuizProblem;
