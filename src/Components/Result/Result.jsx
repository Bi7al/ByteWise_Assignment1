import React, { useContext } from 'react';
import { UserContext } from '../Contexts/UserContext';
import { QuizContext } from '../Contexts/QuizContext';
import "./Result.css"
function Result() {
    const { userdata } = useContext(UserContext);
    const { score, incorrectAns, totalQuestions } = useContext(QuizContext);
    return (
        <div className='results'>
            <div>
                <h1>Result</h1>
                <br />
                <h2>Score: {score}/{10 * totalQuestions}</h2>
                <h2>Percentile: {(score / (10 * totalQuestions)) * 100} %</h2>
                <h2>Username: {userdata.userName}</h2>
            </div>
            {
                incorrectAns.length > 0 ? <><h2 style={{ color: 'rgb(26, 0, 50)' }}>Incorrect Answers: </h2> <div className="incorrect-answers">

                    {

                        incorrectAns.map((ans, index) => {
                            return (
                                <p key={index}><b>*</b> {ans.question} <br /><b>|  Correct Answer: </b>{ans.correct}</p>
                            )
                        })
                    }
                </div></> : <h4>Wow You Scored 100%, Congratulations</h4>

            }

        </div >)
}

export default Result