import React from 'react'

import { Notification } from './Notification'

export default {
    title: 'User Interface/Notification',
    component: Notification,
}

const Template = (args) => <Notification {...args} />

export const Basic = Template.bind({})
Basic.args = {
    visible: true,
    children: <p>This is a notification!</p>,
}

export const FixedBottom = Template.bind({})
FixedBottom.args = {
    visible: true,
    classes: ['Fixed', 'Bottom'],
    children: <p>This is a notification!</p>,
}
