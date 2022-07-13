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

const IntentCheckbox = ({ side, value, updateIntent, code }) => {
    const [checked, setIsChecked] = useState(value)
    const checkHandler = () => {
        updateIntent(code, side, checked)
        setIsChecked(!checked)
    }
    useEffect(() => {
        setIsChecked(value)
    }, [value])
    const label = side === 'giving' ? 'I can help others with this.' : 'I need help with this.'
    return (
        <div>
            <input type="checkbox" checked={checked} onChange={checkHandler} />
            <span>{label}</span>
            <br />
        </div>
    )
}

function transformUserIntents(intent, userIntentMap) {
    const { code, name } = intent
    const isSeeking = userIntentMap?.[code]?.seeking || false
    const isGiving = userIntentMap?.[code]?.giving || false
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
            {userIntents.map((intent) => (
                <div key={intent.code}>
                    <Subjects topic={intent.name} />
                    <IntentCheckbox
                        side="seeking"
                        value={intent.isSeeking}
                        updateIntent={updateIntent}
                        code={intent.code}
                    />
                    <IntentCheckbox
                        side="giving"
                        value={intent.isGiving}
                        updateIntent={updateIntent}
                        code={intent.code}
                    />
                </div>
            ))}
        </div>
    )
}

export default EditIntents
