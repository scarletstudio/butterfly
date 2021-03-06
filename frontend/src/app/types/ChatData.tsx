import { CommunityData } from '../../config/communities'
import { UserData } from './UserData'

export interface MessageData {
    // ID for the message, unique within the chat
    key: string
    // User ID of the user who sent this message
    from: string
    // Timestamp in milliseconds when the message was sent
    timestamp: number
    // Type of message, currently the only value is 'MESSAGE'
    type: string
    // Content of the message
    message: string
}

// Keep this in sync with: pipeline/types/chat.py
export interface ChatData {
    // ID for the match this chat is for, release tag plus match key
    id: string
    // Whether or not a chat with this match ID exists
    exists: boolean
    // Whether or not the chat has loaded
    isLoaded: boolean
    // ID of the community this match is part of
    communityId: string
    // ID of the user who this chat was created for, included in participants
    for: string
    // Map of the IDs of users in this chat (and match) to their user data
    participants: { [userId: string]: UserData }
    // Release tag that this chat and match are part of
    release_tag: string
    // Timestamp representing when this chat and match go live, in milliseconds
    release_timestamp: number
    // Title for this chat and match, if any
    title?: string
    // Map of custom metadata for the match this chat is for
    metadata: {
        generator?: string
        score?: number
        commonLetters?: Array<string>
        interests?: Array<string>
        intents?: Array<{
            code: string
            giver: string
            seeker: string
        }>
        availability?: Array<{
            day: string
            hour: number
        }>
    }
    // Latest message for this chat, if any
    latestMessage?: MessageData
    // Community for this chat and match
    communityConfig?: CommunityData
}
