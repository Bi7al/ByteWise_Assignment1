import React, { createContext, useRef, useState } from 'react'
export const QuizContext = createContext();

export default function QuizContextProvider({ children }) {
  const [questions, setQuestions] = useState([{
    question: 'What is the capital of France?',
    answers: ['Paris', 'London', 'Berlin', 'Madrid'],
    correct: 'Paris',
  },
  {
    question: 'What is the capital of Pakistan?',
    answers: ['Paris', 'Islamabad', 'Berlin', 'Madrid'],
    correct: 'Islamabad',
  }
  ]);
  const [incorrectAns, setIncorrectAnswers] = useState(questions)
  const [score, setScore] = useState(0);
  const [endQuiz, setEndQuiz] = useState(false);




  return (
    <QuizContext.Provider value={{ questions, score, setScore, endQuiz, setEndQuiz, incorrectAns, setIncorrectAnswers }}>
      {children}
    </QuizContext.Provider>
  )
}

