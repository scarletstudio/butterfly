import { useEffect, useState } from 'react'
import {
    getDatabase,
    limitToLast,
    onChildAdded,
    onValue,
    orderByChild,
    push,
    query,
    ref,
    serverTimestamp,
} from 'firebase/database'
import { getAnalytics, logEvent } from 'firebase/analytics'
import { MESSAGE_TYPE } from './ChatConstants'
import { DB_PATH } from '../constants'
import { getUserData } from '../data'

/*
 * Hook that returns a state variable containing data
 * about the given chat.
 */
export function useGetChatData(chatId) {
    const [data, setData] = useState({})

    useEffect(() => {
        // Do not try to fetch if ID is nullish, return empty function from hook
        if (!chatId) return () => undefined
        const db = getDatabase()
        // TODO(vinesh): Clean up this hack. We are joining the community ID to
        // the match ID to the user ID to get the user-match record. For now,
        // this is an easy way to add community ID to the chat data response
        // without adding it via a context or in the match dataclass.
        const communityId = chatId.split('/')[0]
        const chatPath = `${DB_PATH.MATCHES}/${chatId}`
        const chatRef = ref(db, chatPath)
        // Fetch chat data
        const unsubscribe = onValue(chatRef, async (snap) => {
            const val = snap.val()
            // Get user data for each participant
            const participants = val?.participants || {}
            const participantData = await Object.keys(participants).reduce(async (agg, uid) => {
                const userData = await getUserData(uid)
                return {
                    ...(await agg),
                    [uid]: userData,
                }
            }, participants)
            // Update chat data with participants
            setData({
                isLoaded: true,
                exists: snap.exists(),
                communityId,
                ...val,
                participants: participantData,
            })
        })
        return unsubscribe
    }, [chatId])

    return data
}

/*
 * Hook that returns a state variable containing the most
 * recent messages in a given chat.
 * Inputs:
 * - limit: Maximum number of recent messages to fetch
 */
export function useGetMessages(chatId, limit = 50) {
    const [messages, setMessages] = useState({
        keys: {},
        values: [],
    })

    useEffect(() => {
        // Fetch most recent messages in chronological order
        const db = getDatabase()
        const messagesPath = `${DB_PATH.MESSAGES}/${chatId}`
        const messagesRef = query(
            ref(db, messagesPath),
            orderByChild('timestamp'),
            limitToLast(limit)
        )
        // Listen for new messages
        const unsubscribe = onChildAdded(messagesRef, (snap) => {
            const { key } = snap
            const val = { key, ...snap.val() }
            setMessages((prev) => {
                // Skip if already received
                if (key in prev.keys) return prev
                const { keys, values } = prev
                // Add the new message to state
                return {
                    isLoaded: true,
                    keys: { ...keys, [key]: true },
                    values: [...values, val],
                }
            })
        })
        return unsubscribe
    }, [chatId, limit])

    return messages.values
}

/*
 * Function to send a message to the given chat.
 * Inputs:
 * - data.message = Text of the message to send
 * - data.from = User ID of the sender
 */
export async function sendMessage(chatId, data) {
    if (!data.from) {
        throw new Error('Missing `from` in message data.')
    }
    if (!data.message) {
        throw new Error('Missing `message` in message data.')
    }
    const messageValue = {
        type: MESSAGE_TYPE,
        timestamp: serverTimestamp(),
        message: data.message,
        from: data.from,
    }
    const db = getDatabase()
    const messagesPath = `${DB_PATH.MESSAGES}/${chatId}`
    const messagesRef = ref(db, messagesPath)
    await push(messagesRef, messageValue)
    const analytics = getAnalytics()
    logEvent(analytics, 'send_chat_message', {
        community: data?.community,
        release: data?.release,
        chat: data?.chat,
    })
}
