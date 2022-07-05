import React, { useState } from 'react'
import './EditIntents.css'

interface EditIntentsProps {
    // TODO: Fill out the props for your component
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
const EditIntents = ({}: EditIntentsProps) => {
    return (
        <div>
            <h2>Intents</h2>
            <Subjects topic="Learn about Careers in technology" />
            <Seeking />
            <Giving />
            <Subjects topic="Get more involved at Illinois Tech" />
            <Seeking />
            <Giving />
            <Subjects topic="Get show and movie recommendations" />
            <Seeking />
            <Giving />
        </div>
    )
}

export default EditIntents
