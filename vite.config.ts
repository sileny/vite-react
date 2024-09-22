// @ts-nocheck
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { federation } from '@module-federation/vite';
import topLevelAwait from 'vite-plugin-top-level-await';
import mfConfig from './module-federation-config.js';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation(mfConfig),
    topLevelAwait({
      // The export name of top-level await promise for each chunk module
      promiseExportName: "__tla",
      // The function to generate import names of top-level await promise in each chunk module
      promiseImportName: i => `__tla_${i}`
    }),
  ],
})
