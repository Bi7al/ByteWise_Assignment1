import React, { useContext, useRef } from 'react'
import { QuizContext } from '../Contexts/QuizContext';

function Question({ element, id }) {
    const { score, setScore, incorrectAns, setIncorrectAnswers, totalQuestions } = useContext(QuizContext);
    const history = useRef(0);
    function handleAnswer(e) {
        if (e.target.value === element.correct) {
            setScore(score + 10)
            history.current += 10;
            const Incorrect = incorrectAns.filter((ans) => ans.correct !== element.correct)
            setIncorrectAnswers(Incorrect)
        }
        else {
            setScore(score - history.current);
            if (history.current > 0) {
                history.current -= 10;
                setIncorrectAnswers([...incorrectAns, element])
            }

        }


    }
    return (
        <>
            <h3>Question {id + 1}/{totalQuestions}</h3>
            <p>{element.question}</p>
            <div className="answers">

                {
                    element.answers.map((answer, index) => {
                        return (<div>< input type="radio" name={element.qid} value={answer} onChange={handleAnswer} /> {answer}</div>)
                    })
                }

            </div ></>)
}

export default Question