const { mergeConfig } = require('vite')

const STORYBOOK_URL = process.env.VITE_STORYBOOK_URL
const GITPOD_HMR = STORYBOOK_URL && {
    host: STORYBOOK_URL.split('//')[1],
    protocol: 'wss',
    clientPort: 443,
}

module.exports = {
    stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
    ],
    framework: '@storybook/react',
    features: {
        storyStoreV7: true,
    },
    typescript: {
        check: false,
        reactDocgen: false,
    },
    // https://github.com/storybookjs/builder-vite#customize-vite-config
    core: {
        builder: '@storybook/builder-vite',
    },
    async viteFinal(config) {
        return mergeConfig(config, {
            server: {
                hmr: GITPOD_HMR || true,
            },
        })
    },
}
