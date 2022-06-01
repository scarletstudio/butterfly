import React from 'react'

import '../src/stories/theme.css'

export const decorators = [
    (Story) => (
        <div className="Theme">
            <Story />
        </div>
    ),
]

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
}
