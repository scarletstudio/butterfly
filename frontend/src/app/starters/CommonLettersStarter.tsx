import React from 'react'
import './CommonLettersStarter.css'
import { ConversationStarterProps } from './ConversationStarter'
import { pluralize } from '../utils'

interface CommonLettersStarterProps {
    commonLetters: Array<string>
}

const CommonLettersStarterInner = ({ commonLetters }: CommonLettersStarterProps) => {
    const nLetters = pluralize(commonLetters.length, 'letter')
    const joinedLetters = commonLetters.join(', ')
    const anyLetters = `Fun fact, your names have ${nLetters} in common: ${joinedLetters}!`
    const noLetters = 'Fun fact, your names have no letters in common!'
    const message = commonLetters.length > 0 ? anyLetters : noLetters
    return (
        <div className="CommonLettersStarter">
            <p>{message}</p>
        </div>
    )
}

const CommonLettersStarter = ({ chat }: ConversationStarterProps) => (
    <CommonLettersStarterInner commonLetters={chat?.metadata?.commonLetters || []} />
)

export default CommonLettersStarter
