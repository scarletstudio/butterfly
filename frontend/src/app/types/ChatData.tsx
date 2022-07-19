import { UserData } from './UserData'

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
}
