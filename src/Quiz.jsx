import React from "react";

function Quiz( {test, answers, setAnswers, setResults, setShowResults, setCurrentView, language}) {
    
    function getOccurrence(array, value) {
        let count = 0;
        array.forEach((v) => (v === value && count++))
        return count
      }
    
      function updateAnswers(questionId,val){
        let newAnswers = [...answers]
        newAnswers[questionId] = val  
        setAnswers(newAnswers)
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
          setCurrentView('results')
          
        }}

    return (
        <form  className="quiz" action="">
          <button type="button" className='submit' onClick={() => setCurrentView('menu')}>{language === 'english' ? "Back" : "Atgal"}</button>
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
          <button type="button" className='submit' onClick={submit}>{language === 'english' ? "Submit" : "Pateikti"}</button>
        </form>)
}
export default Quiz