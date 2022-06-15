import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const FRONTEND_URL = process.env.VITE_FRONTEND_URL
const GITPOD_HMR = FRONTEND_URL && {
    host: FRONTEND_URL.split('//')[1],
    protocol: 'wss',
    clientPort: 443,
}

// https://vitejs.dev/config/
export default defineConfig({
    base: '/butterfly/',
    build: {
        outDir: 'butterfly',
    },
    plugins: [react()],
    server: {
        hmr: FRONTEND_URL ? GITPOD_HMR : true,
    },
})
