import React, { useContext } from 'react'
import { UserContext } from '../Contexts/UserContext';
import { QuizContext } from "../Contexts/QuizContext"
import Question from './Question';
function Quiz() {
    const { userdata } = useContext(UserContext);
    const { questions, score } = useContext(QuizContext);
    return (
        <div className="container">
            <div className="greeeting">
                <h3>
                    Welcome {userdata.userName}
                </h3>
            </div>
            <div className="questions">

                {
                    questions.map((element, index) => {
                        return (
                            <>
                                <h3>Question {index + 1}</h3>
                                <Question element={element} id={index} />
                            </>
                        )
                    })
                }
                {score}
            </div>
        </div>
    )
}

export default Quiz