import { defineConfig, loadEnv } from 'vite'

// Types and Interfaces
import type { UserConfig, UserConfigExport } from 'vite'

export default ({ mode }: UserConfig): UserConfigExport => {
  const env = { ...process.env, ...loadEnv(<string>mode, process.cwd()) }

  return defineConfig({
    appType: 'spa',
    publicDir: './public',
    plugins: [],
    clearScreen: true,
    build: {
      outDir: './dist',
      minify: true
    },
    server: {
      host: true,
      port: +env.VITE_PORT!
    }
  })
}
