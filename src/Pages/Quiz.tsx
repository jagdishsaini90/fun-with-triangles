import React, { useState } from "react";
import { QUESTIONS } from "../questions";
import "./Common.css";

const Quiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect: any) => {
    if (isCorrect === QUESTIONS[currentQuestion].correct) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < QUESTIONS.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="app">
      <h1 style={{ marginBottom: "10px" }}>Quiz on triangles</h1>
      <h4 style={{ marginBottom: "10px" }}>
        For each correct answer you will get 1 point
      </h4>
      {showScore ? (
        <div className="score-section">
          <h2>
            You scored {score} out of {QUESTIONS.length}
          </h2>
          <p>Refresh page to again take the quiz</p>
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{QUESTIONS.length}
            </div>
            <div className="question-text">
              {QUESTIONS[currentQuestion].question}
            </div>
          </div>
          <div className="answer-section">
            {QUESTIONS[currentQuestion].answers.map((answerOption) => (
              <button
                onClick={() => handleAnswerOptionClick(answerOption)}
                key={answerOption}
              >
                {answerOption}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;
