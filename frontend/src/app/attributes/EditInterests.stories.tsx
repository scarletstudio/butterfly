import React from 'react'

import EditInterests from './EditInterests'

export default {
    title: 'Edit Attributes/EditInterests',
    component: EditInterests,
}

const Template = (args) => <EditInterests {...args} />

// TODO: Set args with the props to test a case of your component
export const Case1 = Template.bind({})
Case1.args = {}

// TODO: Add more cases to test your component
