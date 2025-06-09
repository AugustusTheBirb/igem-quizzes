import { useState } from 'react'
import './App.css'
import data from "./edited.js"
import Quiz from './Quiz.jsx'
import Results from './Results.jsx'
import QuizMenu from './QuizMenu.jsx'

function App() {
  const [testId, setTestId] = useState(null)
  const [answers, setAnswers] = useState([-1,-1,-1,-1,-1])
  const [showResults, setShowResults] = useState(false)
  const [resultId, setResults] = useState(0)
  const [currentView, setCurrentView] = useState('menu')

  function reset() {
    setTestId(null)
    setShowResults(false)
    setAnswers([-1,-1,-1,-1,-1])
    setCurrentView('menu')
  }

  switch(currentView) {
    case 'menu':
      return <main><QuizMenu setTestId={setTestId} setCurrentView={setCurrentView} data={data}/></main>;
    case 'quiz':
      return (
              <main>
                <Quiz test={data[testId]} answers={answers} setAnswers={setAnswers}
                setResults={setResults} setShowResults={setShowResults}
                onComplete={() => setCurrentView('results')}/></main>
            );
    case 'results':
      return (<main>
        <Results test={data[testId]} resultId={resultId}
          onReset={reset}/>
      </main>);
  }

}

export default App
