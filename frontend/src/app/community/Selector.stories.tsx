import React from 'react'

import { CommunitySelector } from './Selector'

export default {
    title: 'Community/SelectCommunity',
    component: CommunitySelector,
}

const Template = (args) => <CommunitySelector {...args} />

export const NoCommunities = Template.bind({})
NoCommunities.args = {}

export const SomeCommunitiesNothingSelected = Template.bind({})
SomeCommunitiesNothingSelected.args = {
    communities: [
        { id: 'a', name: 'Community A' },
        { id: 'b', name: 'Community B' },
        { id: 'c', name: 'Community C' },
    ],
}

export const SelectedCommunity = Template.bind({})
SelectedCommunity.args = {
    communities: [
        { id: 'a', name: 'Community A' },
        { id: 'b', name: 'Community B' },
        { id: 'c', name: 'Community C' },
    ],
    selected: 'b',
}
