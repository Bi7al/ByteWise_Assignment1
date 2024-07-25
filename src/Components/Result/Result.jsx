import React, { useContext } from 'react';
import { UserContext } from '../Contexts/UserContext';
import { QuizContext } from '../Contexts/QuizContext';

function Result() {
    const { userdata } = useContext(UserContext);
    const { score, incorrectAns } = useContext(QuizContext);
    return (
        <>
            <h1>Result</h1>
            <h2>Username: {userdata.userName}</h2>
            <h2>Score: {score}</h2>
            {
                score > 0 ? <div>
                    <h2>Incorrect Answers: </h2>
                    {

                        incorrectAns.map((ans, index) => {
                            return (
                                <p key={index} style={{ color: 'red' }}><b>Incorrect Question: </b>{ans.question} <br /><b>Correct Answer: </b>{ans.correct}</p>
                            )
                        })
                    }
                </div> : <></>
            }

        </>)
}

export default Result