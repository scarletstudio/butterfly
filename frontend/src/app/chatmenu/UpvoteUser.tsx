import React from 'react'
import './UpvoteUser.css'
import { ChatMenuPageProps } from './ChatMenuPage'
import { ChatData, UserData } from '../types'
import { COMMUNITY_CONFIG } from '../../config/communities'

interface UpvoteUserProps {
    // TODO: Fill out the props for your component
    participants: { [userId: string]: UserData }
    intents: Array<{
        code: string
        giver: string
        seeker: string
    }>
}
const mockIntent: Array<{
    code: string
    giver: string
    seeker: string
}> = [
    {
        code: 'watch-recs',
        giver: 'ZnfAz7KaYnQNIUGYqYAFNPhzH373',
        seeker: '567',
    },
    {
        code: 'tutoring-math',
        giver: 'NhFa0IpZHxdElyR9PXjhnERB9t43',
        seeker: '567',
    },
]

// TODO: Implement your component
// eslint-disable-next-line no-empty-pattern
export const UpvoteUserInner = (props: UpvoteUserProps) => {
    const community = 'demo'
    const { participants } = props
    const { intents } = props
    const getIntent = (intentCode): string => {
        for (let index = 0; index < COMMUNITY_CONFIG[community].intents.length; index += 1) {
            const intent = COMMUNITY_CONFIG[community].intents[index]
            if (intent.code === intentCode) {
                return intent.name
            }
        }
        return 'No intent'
    }
    return (
        <div>
            <div>
                <p className="paragraph">
                    Did your match help you in any of these areas? Give them an upvote so they can
                    be matched to others looking for support!{' '}
                </p>
            </div>
            <div>
                {Object.values(participants).map((user: UserData) => (
                    <div key={user.uid}>
                        <div className="container">
                            <img src={user.photoURL} alt="" className="profile" />
                            <p className="username">{user.displayName}</p>
                        </div>
                        <div className="container">
                            <button type="button">Up</button>
                            {Object.values(intents).map((intent) =>
                                user.uid === intent.giver ? (
                                    <p className="intent">{getIntent(intent.code)}</p>
                                ) : (
                                    <p />
                                )
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

// TODO: Pass your component its props
// eslint-disable-next-line no-unused-vars
const UpvoteUser = ({ chat, config }: ChatMenuPageProps) => (
    <UpvoteUserInner participants={chat.participants} intents={mockIntent ?? []} />
)

export default UpvoteUser
