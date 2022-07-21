import React from 'react'
import './CommonLettersStarter.css'
import { ConversationStarterProps } from './ConversationStarter'
import { pluralize } from '../utils'
import { CommunityData } from '../../config/communities'

interface CommonLettersStarterProps {
    commonLetters: Array<string>
    community: CommunityData
}

const CommonLettersStarterInner = ({ commonLetters, community }: CommonLettersStarterProps) => {
    const nLetters = pluralize(commonLetters.length, 'letter')
    const joinedLetters = commonLetters.join(', ')
    const anyLetters = `Fun fact, your names have ${nLetters} in common: ${joinedLetters}!`
    const noLetters = 'Fun fact, your names have no letters in common!'
    const message = commonLetters.length > 0 ? anyLetters : noLetters
    return (
        <div className="CommonLettersStarter">
            <p>{message}</p>
            {/* <p>{community.name}</p> */}
        </div>
    )
}

const CommonLettersStarter = ({ chat, community }: ConversationStarterProps) => (
    <CommonLettersStarterInner
        commonLetters={chat?.metadata?.commonLetters || []}
        community={community}
    />
)

export default CommonLettersStarter
