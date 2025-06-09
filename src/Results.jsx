import React from "react";

function Results({test, resultId, onReset}) {
    return (
        <div className="results">
            <h3>{test.results[resultId].result}</h3>
            <p style={{marginBottom : "1rem"}}>{test.results[resultId].description}</p>
            {Object.keys(test.results[resultId])
              .filter(key => key !== "result" && key !== "description" && key !== "image")
              .map(key => (
                <p key={key}><b>{key}</b> : {test.results[resultId][key]}</p>
                ))}
            {test.results[resultId].image !== undefined ? <img className="cardimg" src={"../public/" + test.results[resultId].image} alt={test.results[resultId].result}/> : null}
            <button className="back"onClick={onReset}>Atgal</button>
        </div>
    )
}

export default Results