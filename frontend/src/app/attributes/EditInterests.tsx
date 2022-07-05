import React from 'react'
import './EditInterests.css'
import { InterestData } from './Interest'

interface EditInterestsProps {
    allInterests: Array<InterestData>
    // eslint-disable-next-line no-unused-vars
    updateInterest(code: string, value: boolean): void
}

function fakeUpdateInterest(code, value) {
    // eslint-disable-next-line no-console
    console.log('Updated your interest!', code, value)
}

const EditInterests = ({
    allInterests = [],
    updateInterest = fakeUpdateInterest,
}: EditInterestsProps) => {
    // eslint-disable-next-line no-console
    console.log(allInterests)
    updateInterest('anime', true)
    return (
        <div>
            <p>Choose the topics that you like.</p>
            {allInterests.map((interest) => (
                <div key={interest.code}>
                    {' '}
                    <input type="checkbox" />
                    <span>{interest.name}</span>
                </div>
            ))}
        </div>
    )
}
export default EditInterests
