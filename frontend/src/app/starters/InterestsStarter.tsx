import React from 'react'
import './InterestsStarter.css'
import { ConversationStarterProps } from './ConversationStarter'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface InterestsStarterProps {
    // TODO: Fill out the props for your component
}

// TODO: Implement your component
// eslint-disable-next-line no-empty-pattern
const InterestsStarterInner = ({}: InterestsStarterProps) => {
    return <p>You have some interests in common!</p>
}

// TODO: Pass your component its props
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const InterestsStarter = ({ chat }: ConversationStarterProps) => <InterestsStarterInner />

export default InterestsStarter
