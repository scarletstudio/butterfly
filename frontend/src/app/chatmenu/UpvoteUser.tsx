import React from 'react'
import './UpvoteUser.css'
import { ChatMenuPageProps } from './ChatMenuPage'
import { UserData } from '../types'

interface UpvoteUserProps {
    // TODO: Fill out the props for your component
    participants: Object
}

// TODO: Implement your component
// eslint-disable-next-line no-empty-pattern
export const UpvoteUserInner = (props: UpvoteUserProps) => {
    const { participants } = props
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
                            <button className="btn" type="button">
                                Thumb
                            </button>
                            <p className="rec">Get TV recommendations</p>
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
    <UpvoteUserInner participants={chat.participants} />
)

export default UpvoteUser
