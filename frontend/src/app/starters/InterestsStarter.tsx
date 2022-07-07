import React from 'react'
import './InterestsStarter.css'
import { ConversationStarterProps } from './ConversationStarter'

interface InterestsStarterProps {
    // TODO: Fill out the props for your component
}

// TODO: Implement your component
// eslint-disable-next-line no-empty-pattern
const InterestsStarterInner = ({}: InterestsStarterProps) => {
    return <p>Liliana Ortiz was here!</p>
}

// TODO: Pass your component its props
// eslint-disable-next-line no-unused-vars
const InterestsStarter = ({ chat }: ConversationStarterProps) => <InterestsStarterInner />

export default InterestsStarter
