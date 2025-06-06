import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import data from "./data.js"
function App() {
  const [testId, setTestId] = useState(null)
  const [answers, setAswers] = useState([-1,-1,-1,-1,-1])
  const [showResults, setShowResults] = useState(false)
  const [resultId, setResults] = useState(0)
  

  function changeTest(id) {
    setTestId(id)
  }

  function reset() {
    setTestId(null)
    setShowResults(false)
    setAswers([-1,-1,-1,-1,-1])
  }

  function getOccurrence(array, value) {
    let count = 0;
    array.forEach((v) => (v === value && count++))
    return count
  }

  function updateAnswers(questionId,val){
    let newAnswers = answers.copyWithin()
    newAnswers[questionId] = val  
    setAswers(newAnswers)
  }

  function submit(e) {
    e.preventDefault();
    if (answers.includes(-1) === false) {
      let maximumOccurence = 0
      let maximumId = null
      for (let i=0;i<5;i+=1){
        let occurrence = getOccurrence(answers,i)
        if (occurrence > maximumOccurence){
          maximumOccurence = occurrence
          maximumId = i
        }
      }
      setResults(maximumId)
      setShowResults(true)
      
    }

  }

  return (
    <>
      <main>
        
        <h1 >Vilnius iGEM Quizzes</h1>
        <div className={`${testId === null ? "buttons" : "none"}`}>
        {data.map((test, idx) => (
        <div key={idx}>
        <button className="test" onClick={() => changeTest(idx)}>{test.title}</button>
        </div>
        ))}
        </div>

        {data.map((test, idx) => (
        <div key={idx}>
        <form  className={`${!showResults && testId === idx ? "quiz" : "none"}`} action="">
          {test.questions.map((question, idee) => (
            <fieldset key={idee}>
              <legend>{question.question}</legend>
              <ul name={idee} id={idee}>
                {[0,1,2,3].map((ans,id) => (
                <li key={id}>
                  <label htmlFor={question.question}>
                  <input name={question.question} type="radio" value={ans} onChange={() => updateAnswers(question.id-1,ans)}/>
                  <p className='choice'>{question.options[id].text}</p>
                  </label>
                </li>
                ))}
              </ul>
            </fieldset>  
          ))}
          <button type="button" className='submit' onClick={submit}>Submit</button>
        </form>
        <div className={`${showResults && testId === idx ? "results" : "none"}`}>
            <h3>{test.results[resultId].result}</h3>
            <p>{test.results[resultId].description}</p>
            <button className="back"onClick={reset}>Atgal</button>
        </div>
        </div>))}
        
      </main>
    </>
  )
}

export default App
