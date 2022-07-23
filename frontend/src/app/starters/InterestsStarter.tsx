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
    const communityStringInterests: Array<string> = []
    communityInterests.forEach((x) => {
        communityStringInterests.push(x.name)
    })
    const combinedInterests = chatInterests.concat(communityStringInterests)
    return (
        <div className="Interests-Starter">
            <p>Common Interests</p>
            <div className="Chat-Interests">
                {combinedInterests.map((interest) => {
                    return <p key={interest}>{interest}</p>
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
