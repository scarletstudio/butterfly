import React from 'react'
import './BlockUser.css'
import { ChatMenuPageProps } from './ChatMenuPage'

import { useGetManyUserData } from '../data'

interface BlockUserProps {
    // TODO: Fill out the props for your component
    uid: string
    // blocked:
}

// TODO: Implement your component
// eslint-disable-next-line no-empty-pattern
const BlockUserInner = ({ uid }: BlockUserProps) => {
    const userProfile = useGetManyUserData({ [uid]: true })?.[uid]
    if (!userProfile) {
        return <p>User not found.</p>
    }
    // const { photoURL, displayName } = userProfile
    // uid = // user ID you are checking for
    // const [res, err] = useBackendFetchJson({
    // route: `/chat/block/user/${uid}`
    // })
    // console.log(res?.blocks)
    return (
        <p>
            Grace was here! ${uid} ${userProfile}
        </p>
    )
}

// display users to block on chat menu
// TODO: Pass your component its props
// eslint-disable-next-line no-unused-vars
const BlockUser = ({ chat, config }: ChatMenuPageProps) => <BlockUserInner uid={chat?.for} />

export default BlockUser
