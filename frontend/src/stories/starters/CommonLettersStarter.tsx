import React from 'react'
import './CommonLettersStarter.css'
import { ConversationStarterProps } from './ConversationStarter'
import { pluralize } from '../core'

interface CommonLettersStarterProps {
    commonLetters: Array<string>
}

const CommonLettersStarterInner = ({ commonLetters }: CommonLettersStarterProps) => {
    const nLetters = pluralize(commonLetters.length, 'letter')
    const joinedLetters = commonLetters.join(', ')
    return (
        <div className="CommonLettersStarter">
            <p>
                Fun fact, your names have {nLetters} in common: {joinedLetters}!
            </p>
        </div>
    )
}

const CommonLettersStarter = ({ chat }: ConversationStarterProps) => (
    <CommonLettersStarterInner commonLetters={chat?.metadata?.commonLetters} />
)

export default CommonLettersStarter
