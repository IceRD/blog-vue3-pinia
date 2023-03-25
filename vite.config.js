import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslint from 'vite-plugin-eslint'
import path from 'path'

// https://vitejs.dev/config/
export default () => {
	return defineConfig({
		plugins: [vue(), eslint()],
		resolve: {
			alias: {
				'@': path.resolve(__dirname, './src'),
				'~': path.resolve(__dirname, '.'),
			},
		},
	})
}
