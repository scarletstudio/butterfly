import React, { useState, useEffect } from 'react'
import './EditInterests.css'
import { InterestData } from './Interest'

interface EditInterestsProps {
    allInterests: Array<InterestData>
    updateInterest(code: string, value: boolean): void
    userInterestsMap: { [code: string]: boolean }
}

const InterestCheckbox = ({ code, updateInterest, value }) => {
    const [checked, setChecked] = useState(value)
    const checkHandler = () => {
        const newValue = !checked
        updateInterest(code, newValue)
        setChecked(newValue)
    }
    useEffect(() => {
        setChecked(value)
    }, [value])
    return <input type="checkbox" checked={checked} onChange={checkHandler} />
}

const EditInterests = ({
    allInterests = [],
    userInterestsMap = {},
    updateInterest,
}: EditInterestsProps) => {
    return (
        <div>
            <p>Choose the topics that you like.</p>
            {allInterests.map((interest) => (
                <div key={interest.code}>
                    <InterestCheckbox
                        code={interest.code}
                        updateInterest={updateInterest}
                        value={userInterestsMap?.[interest.code] || false}
                    />
                    <span> {interest.name} </span>
                </div>
            ))}
        </div>
    )
}
export default EditInterests
