import React from 'react'

import { Game } from './TwoTruthsAndLie'

export default {
    title: 'Games/TwoTruthsAndLie',
    component: Game,
}

const Template = (args) => <Game {...args} />

export const Example = Template.bind({})
Example.args = {
    sentences: [
        'The mascot of Illinois Tech is Talon the Hawk.',
        'IIT is an culinary arts school.',
        'IIT was built in April 23, 1940.',
    ],
    answer: 1,
}
