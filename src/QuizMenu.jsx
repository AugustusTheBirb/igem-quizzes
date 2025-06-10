import React from 'react';

const QuizMenu = ({setCurrentView, setTestId, data}) => {
    function updateView(idx) {
        setTestId(idx)
        setCurrentView('quiz')
    } 

    return (
        <>
            <div className="buttons">
            {data.map((test, idx) => (
            <div key={idx}>
            <button className="test" onClick={() => updateView(idx)}>{test.title}</button>
            </div>
            ))}
            </div>
        </>
    );
};

export default QuizMenu;