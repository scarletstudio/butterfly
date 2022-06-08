import { ChatData } from '../types'
import CommonLettersStarter from './CommonLettersStarter'

const CONVERSATION_STARTERS_CONFIG = {
    commonLettersGenerator: CommonLettersStarter,
}

export interface ConversationStarterProps {
    chat: ChatData
}

export function getConversationStarterForChat(chat: ChatData) {
    const generator = chat?.metadata?.generator
    const StarterElement = CONVERSATION_STARTERS_CONFIG?.[generator]
    if (!generator || !StarterElement) return null
    return StarterElement
}
