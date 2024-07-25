import React, { useContext } from 'react';
import { UserContext } from '../Contexts/UserContext';
import { QuizContext } from '../Contexts/QuizContext';

function Result() {
    const { userdata } = useContext(UserContext);
    const { score } = useContext(QuizContext);
    return (
        <>
            <h1>Result</h1>
            <h2>Username: {userdata.userName}</h2>
            <h2>Score: {score}</h2>

        </>)
}

export default Result