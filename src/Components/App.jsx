import React, { useContext } from 'react'
import Credentials from './Credentials/Credentials'
import Quiz from './Quiz/Quiz.jsx';
import Result from './Result/Result.jsx';
import { UserContext } from './Contexts/UserContext.jsx'
import { QuizContext } from './Contexts/QuizContext.jsx';

function App() {
    const { userdata } = useContext(UserContext);
    const { endQuiz } = useContext(QuizContext);
    return (
        <>
            {
                endQuiz.current ? <Result /> : <>{userdata.userName ? <Quiz /> : <Credentials />}</>
            }
        </>

    )
}

export default App