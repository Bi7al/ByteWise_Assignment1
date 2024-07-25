import React, { useContext, useRef } from 'react'
import { QuizContext } from '../Contexts/QuizContext'

function Question({ element, id }) {
    const { score, setScore } = useContext(QuizContext);
    const history = useRef(0);
    function handleAnswer(e) {
        if (e.target.value === element.correct) {
            setScore(score + 10)
            history.current += 10;
        }
        else {
            setScore(score - history.current);
            if (history.current > 0) {
                history.current -= 10;
            }
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