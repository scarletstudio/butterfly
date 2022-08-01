import React from 'react'
import { UserData } from '../types'

import { UpvoteUserInner } from './UpvoteUser'

export default {
    title: 'Chat Menu Pages/UpvoteUserInner',
    component: UpvoteUserInner,
}

const participants: { [userId: string]: UserData } = {
    something: {
        uid: 'randomuser',
        displayName: 'displaysomename',
        email: 'someemail@gmail.com',
        photoURL: 'photo.com',
        latestLogin: 1,
    },
}

const Template = (args) => <UpvoteUserInner {...args} />

// TODO: Set args with the props to test a case of your component
export const Case1 = Template.bind({})

Case1.args = { participants }

// TODO: Add more cases to test your component
