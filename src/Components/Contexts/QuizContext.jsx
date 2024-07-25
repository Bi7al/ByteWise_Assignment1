import React, { createContext, useRef, useState } from 'react'
export const QuizContext = createContext();

export default function QuizContextProvider({ children }) {
  const [questions, setQuestions] = useState([{
    qid: 1,
    question: 'What is the capital of France?',
    answers: ['Paris', 'London', 'Berlin', 'Madrid'],
    correct: 'Paris',
  },
  {
    qid: 2,
    question: 'What is the capital of Pakistan?',
    answers: ['Paris', 'Islamabad', 'Berlin', 'Madrid'],
    correct: 'Islamabad',
  }
    , {
    qid: 3,
    question: 'What is the Result: 3+2-8/2 (use DMAS)?',
    answers: ['1', '-3/2', '-2/3', '0'],
    correct: '1',
  },
  {
    qid: 4,
    question: 'What is the Result: 3+2-1+2 in Javascript',
    answers: ['6', '2', '10', '8'],
    correct: "6",
  }
  ]);
  const [incorrectAns, setIncorrectAnswers] = useState(questions)
  const [score, setScore] = useState(0);
  const [endQuiz, setEndQuiz] = useState(false);

  const totalQuestions = questions.length;


  return (
    <QuizContext.Provider value={{ questions, score, setScore, endQuiz, setEndQuiz, incorrectAns, setIncorrectAnswers, totalQuestions }}>
      {children}
    </QuizContext.Provider>
  )
}

