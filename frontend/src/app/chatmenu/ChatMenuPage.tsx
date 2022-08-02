import { FunctionComponent } from 'react'
import { ChatData } from '../types'

export interface ChatMenuPageConfig {
    id: string
    name: string
    component: FunctionComponent
}

export interface ChatMenuConfig {
    options: Array<ChatMenuPageConfig>
}

export interface MessagesData {
    key: string
    type: string
    timestamp: number
    message: string
    from: string
}

export interface ChatMenuPageProps {
    chat: ChatData
    config: ChatMenuPageConfig
    messages: MessagesData[]
}
