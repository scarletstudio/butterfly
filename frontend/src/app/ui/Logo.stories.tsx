import React from 'react'

import Logo from './Logo'

export default {
    title: 'User Interface/Logo',
    component: Logo,
}

const Template = (args) => <Logo {...args} />

export const BigLogo = Template.bind({})
BigLogo.args = { size: 'Big' }

export const SmallLogo = Template.bind({})
SmallLogo.args = { size: 'Small' }

export const BigLogoCentered = Template.bind({})
BigLogoCentered.args = { size: 'Big', align: 'Centered' }
