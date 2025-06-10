import React from "react";

function Results({test, resultId, onReset, language}) {
    return (
        <div className="results" >
            <h3>{test.results[resultId].result}</h3>
            <p style={{marginBottom : "1rem"}}>{test.results[resultId].description}</p>
            <ul>
            {Object.keys(test.results[resultId])
              .filter(key => key !== "result" && key !== "description" && key !== "image")
              .map(key => (
                <li key={key}><b>{key}</b> : {test.results[resultId][key]}</li>
                ))}
            </ul>
            {test.results[resultId].image !== undefined ? <img className="cardimg" src={"/" + test.results[resultId].image} alt={test.results[resultId].result}/> : null}
            <button className="back"onClick={onReset}>{language === 'english' ? "Back" : "Atgal"}</button>
        </div>
    )
}

export default Results