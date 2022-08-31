// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'
import { name } from './package.json'

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, 'lib/main.ts'),
            name: name,
            // the proper extensions will be added
            fileName: name
        }
    }
})
