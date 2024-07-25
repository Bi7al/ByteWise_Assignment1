import React, { useContext } from 'react'
import { UserContext } from '../Contexts/UserContext';
import { QuizContext } from "../Contexts/QuizContext"
import Question from './Question';
function Quiz() {
    const { userdata } = useContext(UserContext);
    const { questions, setEndQuiz } = useContext(QuizContext);
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

                            <Question key={index} element={element} id={index} />
                        )
                    })
                }
                <button onClick={() => setEndQuiz(true)}>End Quiz / Submit</button>
            </div>
        </div>
    )
}

export default Quiz