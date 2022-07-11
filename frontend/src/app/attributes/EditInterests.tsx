import React, { useState } from 'react'
import './EditInterests.css'
import { InterestData } from './Interest'

interface EditInterestsProps {
    allInterests: Array<InterestData>
    // eslint-disable-next-line no-unused-vars
    updateInterest(code: string, value: boolean): void
    // eslint-disable-next-line react/no-unused-prop-types
    userInterestsMap: { [code: string]: boolean }
}

const Checkbox = ({ code, updateInterest, newValue }) => {
    const [checked, setChecked] = useState(newValue)
    const checkHandler = () => {
        updateInterest(code, checked)

        setChecked(newValue)
    }
    return (
        <div>
            <input type="checkbox" checked={checked} onChange={checkHandler} />
        </div>
    )
}

const EditInterests = ({ allInterests = [], updateInterest }: EditInterestsProps) => {
    return (
        <div>
            <p>Choose the topics that you like.</p>
            {allInterests.map((interest) => (
                <div key={interest.code}>
                    <span> {interest.name} </span>
                    <Checkbox code={interest.code} updateInterest={updateInterest} newValue="" />
                </div>
            ))}
        </div>
    )
}
export default EditInterests
