import React from 'react'
import { faCrown, faGhost } from '@fortawesome/free-solid-svg-icons'

import { Button } from './Button'

export default {
    title: 'User Interface/Button',
    component: Button,
}

const Template = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
    label: 'Button',
    primary: true,
}

export const Secondary = Template.bind({})
Secondary.args = {
    label: 'Button',
}

export const PrimaryWithIconBefore = Template.bind({})
PrimaryWithIconBefore.args = {
    label: 'Button',
    primary: true,
    iconBefore: faCrown,
}

export const SecondaryWithIconBefore = Template.bind({})
SecondaryWithIconBefore.args = {
    label: 'Button',
    iconBefore: faGhost,
}

export const PrimaryWithIconAfter = Template.bind({})
PrimaryWithIconAfter.args = {
    label: 'Button',
    primary: true,
    iconAfter: faCrown,
}

export const SecondaryWithIconAfter = Template.bind({})
SecondaryWithIconAfter.args = {
    label: 'Button',
    iconAfter: faGhost,
}

export const SecondaryWithIconBeforeAndAfter = Template.bind({})
SecondaryWithIconBeforeAndAfter.args = {
    label: 'Button',
    iconBefore: faCrown,
    iconAfter: faGhost,
}
