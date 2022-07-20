import React from 'react'
import './InterestsStarter.css'
import { ConversationStarterProps } from './ConversationStarter'
import { pluralize } from '../utils'

interface InterestsStarterProps {
    interestStarter: Array<string>
}

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

const InterestsStarter = ({ chat }: ConversationStarterProps) => (
    <InterestsStarterInner interestStarter={chat?.metadata?.interests || []} />
)
export default InterestsStarter
