import React, { useState } from 'react'
import './EditIntents.css'
import { IntentData } from './Intent'

interface EditIntentsProps {
    intents: Array<IntentData>
}

const Subjects = ({ topic }) => {
    return <h6>{topic}</h6>
}

const Seeking = () => {
    const [isChecked, setIsChecked] = useState(false)
    const checkHandler = () => {
        setIsChecked(!isChecked)
    }

    return (
        <div>
            <input type="checkbox" checked={isChecked} onChange={checkHandler} />
            <span>I want help on this.</span>
            <br />
            <p>The Seeking checkbox is {isChecked ? 'checked' : 'unchecked'}.</p>
        </div>
    )
}

const Giving = () => {
    const [isChecked, setIsChecked] = useState(false)
    const checkHandler = () => {
        setIsChecked(!isChecked)
    }

    return (
        <div>
            <input type="checkbox" checked={isChecked} onChange={checkHandler} />
            <span>I can help others with this.</span>
            <br />
            <p>The Giving checkbox is {isChecked ? 'checked' : 'unchecked'}.</p>
        </div>
    )
}

// TODO: Implement your component
// eslint-disable-next-line no-empty-pattern
const EditIntents = ({ intents = [] }: EditIntentsProps) => {
    console.log(intents)
    return (
        <div>
            <h2>Intents</h2>
            {intents.map((intent) => (
                <div key={intent.code}>
                    <Subjects topic={intent.name} />
                    <Seeking />
                    <Giving />
                </div>
            ))}
        </div>
    )
}

export default EditIntents
