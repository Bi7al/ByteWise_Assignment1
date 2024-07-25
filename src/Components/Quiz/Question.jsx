import React, { useContext, useRef } from 'react'
import { QuizContext } from '../Contexts/QuizContext'

function Question({ element, id }) {
    const { score, setScore } = useContext(QuizContext);
    const initialScore = useRef(score);
    function handleAnswer(e) {
        if (e.target.value === element.correct) {
            setScore(score + 10)
        }
        else {
            setScore(initialScore.current)
        }


    }
    return (
        <>
            <p>{element.question}</p>
            <div className="answers">

                {
                    element.answers.map((answer, index) => {
                        return (
                            <>
                                <input type="radio" name={id} value={answer} onChange={handleAnswer} /> {answer}
                            </>
                        )
                    })
                }

            </div></>)
}

export default Question