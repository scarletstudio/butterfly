import { ChatData } from '../types'
import { CommunityData } from '../../config/communities'
import CommonLettersStarter from './CommonLettersStarter'
import IntentsStarter from './IntentsStarter'
import InterestsStarter from './InterestsStarter'
import SchedulesStarter from './SchedulesStarter'

const CONVERSATION_STARTERS_CONFIG = {
    commonLettersGenerator: CommonLettersStarter,
    rareIntentsGenerator: IntentsStarter,
    similarIntentsGenerator: IntentsStarter,
    rareInterestsGenerator: InterestsStarter,
    similarInterestsGenerator: InterestsStarter,
    limitedSchedulesGenerator: SchedulesStarter,
    similarSchedulesGenerator: SchedulesStarter,
}

export interface ConversationStarterProps {
    chat: ChatData
    community: CommunityData
}

export function getConversationStarterForChat(chat: ChatData) {
    const generator = chat?.metadata?.generator
    const StarterElement = CONVERSATION_STARTERS_CONFIG?.[generator]
    if (!generator || !StarterElement) return null
    return StarterElement
}
