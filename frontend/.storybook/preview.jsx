import React from 'react'

import '../src/stories/core/Reset.css'
import '../src/stories/core/Main.css'
import '../src/stories/core/Theme.css'
import '../src/stories/core/Layout.css'

export const decorators = [
    (Story) => (
        <div className="App Theme">
            <div className="Layout">
                <Story />
            </div>
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
