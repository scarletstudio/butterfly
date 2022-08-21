import React from 'react'
import { CommunityData } from '../../config/communities'
import InterestsStarter from './InterestsStarter'

export default {
    title: 'Conversation Starters/InterestsStarter',
    component: InterestsStarter,
}

const Template = (args) => <InterestsStarter {...args} />

export const ManyChatInterests = Template.bind({})
ManyChatInterests.args = {
    chat: { metadata: { interests: ['chess', 'art', 'sports'] } },
    community: {
        id: 'sds',
        name: 'Scarlet Data Studio',
        intents: [
            { code: 'tech-careers', name: 'Learn about careers in technology' },
            { code: 'involve-iit', name: 'Get more involved at Illinois Tech' },
            { code: 'watch-recs', name: 'Get show and movie recommendations' },
        ],
        interests: [
            { code: 'chess', name: 'Chess' },
            { code: 'art', name: 'Art' },
            { code: 'movies', name: 'Movies' },
            { code: 'fashion', name: 'Fashion' },
            { code: 'sports', name: 'Sports' },
        ],
    },
}

export const OneChatInterest = Template.bind({})
OneChatInterest.args = {
    chat: { metadata: { interests: ['art'] } },
    community: {
        id: 'sds',
        name: 'Scarlet Data Studio',
        intents: [
            { code: 'tech-careers', name: 'Learn about careers in technology' },
            { code: 'involve-iit', name: 'Get more involved at Illinois Tech' },
            { code: 'watch-recs', name: 'Get show and movie recommendations' },
        ],
        interests: [
            { code: 'chess', name: 'Chess' },
            { code: 'art', name: 'Art' },
            { code: 'movies', name: 'Movies' },
            { code: 'fashion', name: 'Fashion' },
            { code: 'sports', name: 'Sports' },
        ],
    },
}

export const NoCommonInterests = Template.bind({})
NoCommonInterests.args = {
    community: {
        id: 'sds',
        name: 'Scarlet Data Studio',
        intents: [
            { code: 'tech-careers', name: 'Learn about careers in technology' },
            { code: 'involve-iit', name: 'Get more involved at Illinois Tech' },
            { code: 'watch-recs', name: 'Get show and movie recommendations' },
        ],
        interests: [
            { code: 'chess', name: 'Chess' },
            { code: 'art', name: 'Art' },
            { code: 'movies', name: 'Movies' },
            { code: 'fashion', name: 'Fashion' },
            { code: 'sports', name: 'Sports' },
        ],
    },
}
