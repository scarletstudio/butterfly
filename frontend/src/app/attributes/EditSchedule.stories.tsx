import React from 'react'

import EditSchedule from './EditSchedule'

export default {
    title: 'Edit Attributes/EditSchedule',
    component: EditSchedule,
}

const Template = (args) => <EditSchedule {...args} />

// TODO: Set args with the props to test a case of your component
export const Case1 = Template.bind({})
Case1.args = {}

// TODO: Add more cases to test your component
