import React, { useState } from 'react'

export function Game({ sentences, answer }) {
    const [result, setResult] = useState()
    const [attempt, setAttempt] = useState(2)
    function checkAnswer(index) {
        if (index === answer) {
            setResult('Correct!')
        } else if (attempt <= 2 && attempt > 0) {
            setResult(`Incorrect. Try again!`)
            setAttempt(attempt - 1)
        } else if (attempt === 0) {
            setResult(`The lie is: ${sentences[answer]}`)
        }
    }
    return (
        <div>
            <h1> Two Truths and a Lie Game </h1>
            {sentences.map((sentence, index) => (
                <div key={sentence}>
                    <button type="button" onClick={() => checkAnswer(index)}>
                        Select
                    </button>
                    <span>{sentence}</span>
                </div>
            ))}
            <p>Attempts: {attempt}</p>
            <p>{result}</p>
        </div>
    )
}
