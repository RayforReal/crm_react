import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path';
import WindiCSS from 'vite-plugin-windicss'

export default defineConfig({
    plugins: [react(), WindiCSS()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        }
    },
})
