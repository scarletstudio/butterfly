import React from 'react'

import InterestsStarter from './InterestsStarter'

export default {
    title: 'Conversation Starters/InterestsStarter',
    component: InterestsStarter,
}

const Template = (args) => <InterestsStarter {...args} />

export const ManyOfBothInterests = Template.bind({})
ManyOfBothInterests.args = {
    chat: { metadata: { interests: ['Chess', 'Art', 'Movies', 'Fashion', 'Sports'] } },
    community: {
        interests: [
            { code: 'running', name: 'Running' },
            { code: 'biking', name: 'Biking' },
            { code: 'swimming', name: 'Swimming' },
        ],
    },
}

export const ManyChatInterests = Template.bind({})
ManyChatInterests.args = {
    chat: { metadata: { interests: ['Chess', 'Art', 'Movies', 'Fashion', 'Sports'] } },
}

export const OneChatInterest = Template.bind({})
OneChatInterest.args = {
    chat: { metadata: { interests: ['Art'] } },
}

export const ManyCommunityInterests = Template.bind({})
ManyCommunityInterests.args = {
    communityData: {
        interests: [
            { code: 'chess', name: 'Chess' },
            { code: 'apple', name: 'Apple' },
        ],
    },
}

export const OneCommunityInterest = Template.bind({})
OneCommunityInterest.args = {
    communityData: {
        interests: [{ code: 'apple', name: 'Apple' }],
    },
}

export const NoCommonInterests = Template.bind({})
NoCommonInterests.args = {}
