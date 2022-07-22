import React from 'react'
import './IntentsStarter.css'
import { ConversationStarterProps } from './ConversationStarter'

interface IntentsStarterProps {
    // TODO: Fill out the props for your component
}

// TODO: Implement your component
// eslint-disable-next-line no-empty-pattern
const IntentsStarterInner = ({}: IntentsStarterProps) => {
    return <p> Sara Fryzlewicz was here!</p>
}

// TODO: Pass your component its props
// eslint-disable-next-line no-unused-vars
const IntentsStarter = ({ chat }: ConversationStarterProps) => <IntentsStarterInner />

export default IntentsStarter
