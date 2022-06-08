import React from 'react'

import '../src/lib/styles/Reset.css'
import '../src/lib/styles/Main.css'
import '../src/lib/styles/Theme.css'
import '../src/lib/styles/Layout.css'

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
