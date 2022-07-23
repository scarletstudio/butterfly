import React from 'react'
import './InterestsStarter.css'
import { ConversationStarterProps } from './ConversationStarter'
import { pluralize } from '../utils'
import { CommunityData } from '../../config/communities'

interface InterestsStarterProps {
    chatInterests: Array<string>
    communityData: CommunityData
}

const InterestsStarterInner = ({ chatInterests, communityData }: InterestsStarterProps) => {
    // const nInterest = pluralize(chatInterests.length, 'interest')
    // const joinedInterest = chatInterests.join(', ')
    // const anyInterest = `Fun fact, your common interest ${nInterest} are: ${joinedInterest}!`
    // const noInterest = 'Fun fact, you do not share any interest in common!'
    // const message = chatInterests.length > 0 ? anyInterest : noInterest
    // return (
    //     <div className="chatInterests">
    //         <p>{message}</p>
    //     </div>
    // )
    const communityInterests = communityData.interests

    return (
        <div className="Interests-Starter">
            <p>Chat Interests</p>
            <div className="Chat-Interests">
                {chatInterests.map((interest) => {
                    return <p key={interest}>{interest}</p>
                })}
            </div>
            <p>Community Interests</p>
            <div className="Community-Interests">
                {communityInterests.map((interest) => {
                    return <p key={interest.code}>{interest.name}</p>
                })}
            </div>
        </div>
    )
}

const InterestsStarter = ({ chat, community }: ConversationStarterProps) => (
    <InterestsStarterInner
        chatInterests={chat?.metadata?.interests || []}
        communityData={community || { interests: [] }}
    />
)
export default InterestsStarter
