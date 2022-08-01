import React from 'react'
import './UpvoteUser.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { ChatMenuPageProps } from './ChatMenuPage'
import { ChatData, UserData } from '../types'
import { COMMUNITY_CONFIG } from '../../config/communities'
import { fetchFromBackend } from '../utils/Fetch'
import { useCurrentAuthUser } from '../login'

interface UpvoteUserProps {
    // TODO: Fill out the props for your component
    participants: { [userId: string]: UserData }
    intents: Array<{
        code: string
        giver: string
        seeker: string
    }>
    community: string
    match: string
    generator: string
    currentUserID: string
}
/*
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
*/
// TODO: Implement your component
// eslint-disable-next-line no-empty-pattern

export const UpvoteUserInner = (props: UpvoteUserProps) => {
    const { community } = props
    const { participants } = props
    const { intents } = props
    const { match } = props
    const { generator } = props
    const { currentUserID } = props
    const getUserIntent = (user: UserData): string => {
        for (let index = 0; index < intents.length; index += 1) {
            if (user.uid === intents[index].giver) {
                return intents[index].code
            }
        }
        return 'No intent'
    }
    const getIntent = (intentCode): string => {
        for (let index = 0; index < COMMUNITY_CONFIG[community].intents.length; index += 1) {
            const intent = COMMUNITY_CONFIG[community].intents[index]
            if (intent.code === intentCode) {
                return intent.name
            }
        }
        return 'No intent'
    }

    async function upvoteIntent(toUser: string, toIntent: string) {
        const upvoteData = {
            from_user: currentUserID,
            to_user: toUser,
            value: 1,
            intent: toIntent,
            community,
            match,
            users: Object.values(participants).map((user) => user.uid),
            generator,
            timestamp: Date.now(),
        }
        const res = await fetchFromBackend({
            route: `/ratings/intent_upvote`,
            options: {
                method: 'POST',
                body: JSON.stringify(upvoteData),
            },
        })

        console.log(res)
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
                            <button
                                type="submit"
                                className="selected"
                                onClick={() => upvoteIntent(user.uid, getUserIntent(user))}
                            >
                                <span className="selected">
                                    <FontAwesomeIcon icon={faThumbsUp} />
                                </span>
                            </button>

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
// chat.metadata?.intents ?? []
// mockIntent ?? []
const UpvoteUser = ({ chat, config }: ChatMenuPageProps) => {
    const authUser = useCurrentAuthUser()
    const currentUserID = authUser?.uid
    return (
        <UpvoteUserInner
            participants={chat.participants}
            intents={chat.metadata?.intents ?? []}
            community={chat.communityId}
            match={chat.id}
            generator={chat.metadata?.generator ?? ''}
            currentUserID={currentUserID}
        />
    )
}

export default UpvoteUser
