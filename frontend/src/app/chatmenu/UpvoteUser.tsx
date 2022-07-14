import React from 'react'
import './UpvoteUser.css'
import { ChatMenuPageProps } from './ChatMenuPage'

interface UpvoteUserProps {
    // TODO: Fill out the props for your component
}

// TODO: Implement your component
// eslint-disable-next-line no-empty-pattern
const UpvoteUserInner = ({}: UpvoteUserProps) => {
    return (
        <div>
            <p>Luis was here! </p>
        </div>
    )
}

// TODO: Pass your component its props
// eslint-disable-next-line no-unused-vars
const UpvoteUser = ({ chat, config }: ChatMenuPageProps) => <UpvoteUserInner />

export default UpvoteUser
