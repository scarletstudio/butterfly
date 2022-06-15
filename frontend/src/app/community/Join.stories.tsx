import React from 'react'

import { JoinCommunity } from './Join'
import { withRouter } from '../testing'

export default {
    title: 'Community/JoinCommunity',
    component: JoinCommunity,
    decorators: [withRouter],
}

const Template = (args) => <JoinCommunity {...args} />

const validCommunity = {
    communityId: 'abc',
    communityConfig: { abc: { name: 'ABC Community' } },
}

const invalidCommunity = {
    communityId: 'xyz',
    communityConfig: {},
}

const loggedInUser = {
    authUser: { uid: 'count', displayName: 'Count von Count' },
}

const successfulActions = {
    doJoin: async () => ({ message: 'You have joined!' }),
    doLogin: async () => null,
}

const failedActions = {
    doJoin: async () => ({ error: 'Unable to join.' }),
    doLogin: async () => null,
}

export const ReadyToJoin = Template.bind({})
ReadyToJoin.args = {
    ...validCommunity,
    ...successfulActions,
    ...loggedInUser,
}

export const FailToJoin = Template.bind({})
FailToJoin.args = {
    ...validCommunity,
    ...failedActions,
    ...loggedInUser,
}

export const NotLoggedIn = Template.bind({})
NotLoggedIn.args = {
    ...validCommunity,
    ...successfulActions,
}

export const CommunityNotFound = Template.bind({})
CommunityNotFound.args = {
    ...invalidCommunity,
    ...successfulActions,
}

export const CommunityNotFoundLoggedIn = Template.bind({})
CommunityNotFoundLoggedIn.args = {
    ...invalidCommunity,
    ...successfulActions,
    ...loggedInUser,
}
