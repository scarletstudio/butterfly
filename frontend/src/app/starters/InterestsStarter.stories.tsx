import React from 'react'

import InterestsStarter from './InterestsStarter'

export default {
    title: 'Conversation Starters/InterestsStarter',
    component: InterestsStarter,
}

const Template = (args) => <InterestsStarter {...args} />

export const ManyOfBothInterests = Template.bind({})
ManyOfBothInterests.args = {
    chat: { metadata: { interests: ['a', 'b', 'c'] } },
    communityData: {
        interests: [
            { code: 'chess', name: 'Chess' },
            { code: 'apple', name: 'Apple' },
        ],
    },
}

export const ManyChatInterests = Template.bind({})
ManyChatInterests.args = {
    chat: { metadata: { interests: ['a', 'b', 'c'] } },
}

export const OneChatInterest = Template.bind({})
OneChatInterest.args = {}

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
OneCommunityInterest.args = {}

export const NoCommonLetters = Template.bind({})
NoCommonLetters.args = {}
