import React, { useContext, useRef, useState } from 'react'
import { UserContext } from '../Contexts/UserContext';
import { QuizContext } from "../Contexts/QuizContext"
import Question from './Question';
import "./Quiz.css"
function Quiz() {
    const { userdata } = useContext(UserContext);
    const { questions, setEndQuiz } = useContext(QuizContext);
    const index = useRef(0);
    const [question, setQuestion] = useState(questions[index.current])
    function forward() {
        index.current = ++index.current
        setQuestion(questions[index.current])
    }
    return (
        <div className="container">
            <div className="greeting">
                <h3>
                    Welcome {userdata.userName}
                </h3>
            </div>
            <div className="question">
                {
                    <Question key={index.current} element={question} id={index.current} />
                }
            </div>
            <div className="back-forward-control">
                {index.current < questions.length - 1 && <button onClick={forward}>{"Next->"}</button>}
            </div>
            <button onClick={() => setEndQuiz(true)}>End Quiz / Submit</button>
        </div>
    )
}

export default Quiz