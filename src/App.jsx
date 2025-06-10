import { useState } from 'react'
import './App.css'
import litData from "./lithuanian.js"
import engData from "./english.js"
import Quiz from './Quiz.jsx'
import Results from './Results.jsx'
import QuizMenu from './QuizMenu.jsx'

function App() {
  const [testId, setTestId] = useState(null)
  const [answers, setAnswers] = useState([-1,-1,-1,-1,-1])
  const [showResults, setShowResults] = useState(false)
  const [resultId, setResults] = useState(0)
  const [currentView, setCurrentView] = useState('lang')
  const [language, setLanguage] = useState(null) 


  function reset() {
    setTestId(null)
    setShowResults(false)
    setAnswers([-1,-1,-1,-1,-1])
    setCurrentView('menu')
  }


  const data = language === 'english' ? engData : language === 'lithuanian' ? litData : {}
  return (
    <main>
      <h1>Vilnius iGEM Quizzes</h1>
      {(() => {
      switch(currentView) {
        case 'lang':
          return (
            <>
            <button type='button' className='submit' onClick={() => {setLanguage('english'); setCurrentView('menu')}}>English</button>
            <button type='button' className='submit' onClick={() => {setLanguage('lithuanian'); setCurrentView('menu')}}>Lietuvių</button>
            </>
          )
        case 'menu':
          return <QuizMenu setTestId={setTestId} setCurrentView={setCurrentView} data={data} language={language}/>;
        case 'quiz':
          return (              
                    <Quiz test={data[testId]} answers={answers} setAnswers={setAnswers} language={language}
                    setResults={setResults} setShowResults={setShowResults}
                    setCurrentView={setCurrentView}/>
                );
        case 'results':
          return (
            <Results test={data[testId]} resultId={resultId} language={language}
              onReset={reset}/>
          );
        }
      })()}
    </main>
    )
  }

export default App
