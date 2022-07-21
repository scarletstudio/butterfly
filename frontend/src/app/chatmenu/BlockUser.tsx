import React from 'react'
import './BlockUser.css'
import { ChatMenuPageProps } from './ChatMenuPage'

interface BlockUserProps {
    // TODO: Fill out the props for your component
}

// TODO: Implement your component
// eslint-disable-next-line no-empty-pattern
const BlockUserInner = ({}: BlockUserProps) => {
    return <p>Grace was here!</p>
}

// TODO: Pass your component its props
// eslint-disable-next-line no-unused-vars
const BlockUser = ({ chat, config }: ChatMenuPageProps) => <BlockUserInner />

export default BlockUser
