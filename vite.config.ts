import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
	base:'/attendance-helper',
	server: {
		port: 3000,
		host: true
	},
	plugins: [
		react(),
		VitePWA({registerType: 'autoUpdate'})
	],
	build: {
		outDir: 'docs'
	}
})
