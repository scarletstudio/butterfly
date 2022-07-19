import React from 'react'
import './InterestsStarter.css'
import { ConversationStarterProps } from './ConversationStarter'
import { pluralize } from '../utils'

interface InterestsStarterProps {
    interestStarter: Array<string>
}

// TODO: Implement your component
// eslint-disable-next-line no-empty-pattern
const InterestsStarterInner = ({ interestStarter }: InterestsStarterProps) => {
    const nInterest = pluralize(interestStarter.length, 'interest')
    const joinedInterest = interestStarter.join(', ')
    const anyInterest = `Fun fact, your common interest ${nInterest} are: ${joinedInterest}!`
    const noInterest = 'Fun fact, you do not share any interest in common!'
    const message = interestStarter.length > 0 ? anyInterest : noInterest
    return (
        <div className="InterestStarter">
            <p>{message}</p>
        </div>
    )
}

// TODO: Pass your component its props
// eslint-disable-next-line no-unused-vars
const InterestsStarter = ({ chat }: ConversationStarterProps) => (
    <InterestsStarterInner interestStarter={chat?.metadata?.interests || []} />
)
export default InterestsStarter
