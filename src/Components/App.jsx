import React, { useContext } from 'react'
import Credentials from './Credentials/Credentials'
import Quiz from './Quiz/Quiz.jsx';
import Result from './Result/Result.jsx';
import { UserContext } from './Contexts/UserContext.jsx'
import { QuizContext } from './Contexts/QuizContext.jsx';
import "./App.css";

function App() {
    const { userdata } = useContext(UserContext);
    const { endQuiz } = useContext(QuizContext);
    return (
        <div className='app-wrapper'>
            <div className="app">
                {
                    endQuiz ? <Result /> : <>{userdata.userName ? <Quiz /> : <Credentials />}</>
                }
            </div>
        </div>

    )
}

export default App