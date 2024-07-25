import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Components/App.jsx'
import UserContextProvider from './Components/Contexts/UserContext.jsx';
import QuizContextProvider from './Components/Contexts/QuizContext.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <UserContextProvider>
    <QuizContextProvider>
      <App />
    </QuizContextProvider>
  </UserContextProvider>
)
