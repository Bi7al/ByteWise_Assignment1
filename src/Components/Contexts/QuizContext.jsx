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
  const [score, setScore] = useState(0);
  const endQuiz = useRef(false);




  return (
    <QuizContext.Provider value={{ questions, score, setScore, endQuiz }}>
      {children}
    </QuizContext.Provider>
  )
}

