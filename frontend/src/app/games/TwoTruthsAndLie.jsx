import React, { useState } from 'react'

export function Game({ sentences, answer }) {
    const [result, setResult] = useState()
    function checkAnswer(index) {
        if (index === answer) {
            setResult('Correct!')
        } else {
            setResult(`Incorrect. The lie is: ${sentences[answer]}`)
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
            <p>{result}</p>
        </div>
    )
}
