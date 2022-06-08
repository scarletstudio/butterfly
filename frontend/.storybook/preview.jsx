import React from 'react'

import '../src/app/styles/Reset.css'
import '../src/app/styles/Main.css'
import '../src/app/styles/Theme.css'
import '../src/app/styles/Layout.css'

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
