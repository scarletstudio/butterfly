/* eslint-disable */
import React, { useState, useEffect } from 'react'
import './EditIntents.css'
import { IntentData } from './Intent'

interface EditIntentsProps {
    intents: Array<IntentData>
    userIntentMap: { [code: string]: { [side: string]: boolean } }
    updateIntent(code: string, side: string, value: boolean): void
}

const Subjects = ({ topic }) => {
    return <h6>{topic}</h6>
}

const Seeking = ({ code, value, updateIntent }) => {
    const [checked, setIsChecked] = useState(value)
    const checkHandler = () => {
        updateIntent(code, 'seeking', !checked)
        setIsChecked(!checked)
    }
    useEffect(() => {
        setIsChecked(value)
    }, [value])

    return (
        <div>
            <input type="checkbox" checked={checked} onChange={checkHandler} />
            <span>I want help on this.</span>
            <br />
            <p>The Seeking checkbox is {checked ? 'seeking' : 'blank'}.</p>
        </div>
    )
}

const Giving = ({ value, updateIntent }) => {
    const [checked, setIsChecked] = useState(value)
    const checkHandler = () => {
        setIsChecked(!checked)
    }

    return (
        <div>
            <input type="checkbox" checked={checked} onChange={checkHandler} />
            <span>I can help others with this.</span>
            <br />
            <p>The Giving checkbox is {checked ? 'giving' : 'blank'}.</p>
        </div>
    )
}

function transformUserIntents(intent, userIntentMap) {
    const { code, name } = intent
    const isSeeking = userIntentMap?.[code]?.['seeking'] || false
    const isGiving = userIntentMap?.[code]?.['giving'] || false
    // Get seeking and giving from attributesMap
    return { code, name, isSeeking, isGiving }
}

// TODO: Implement your component
// eslint-disable-next-line no-empty-pattern
const EditIntents = ({ intents = [], userIntentMap = {}, updateIntent }: EditIntentsProps) => {
    const userIntents = intents.map((intent) => transformUserIntents(intent, userIntentMap))
    console.log(userIntents)
    return (
        <div>
            <h2>Intents</h2>
            {userIntents.map((intent) => (
                <div key={intent.code}>
                    <Subjects topic={intent.name} />
                    <Seeking
                        value={intent.isSeeking}
                        updateIntent={updateIntent}
                        code={intent.code}
                    />
                    <Giving value={intent.isGiving} updateIntent={updateIntent} />
                </div>
            ))}
        </div>
    )
}

export default EditIntents
