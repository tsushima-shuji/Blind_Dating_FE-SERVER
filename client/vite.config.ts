import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';
import mkcert from 'vite-plugin-mkcert';

export default defineConfig({
  server: {
    https: true,
  },

  plugins: [react(), tsconfigPaths(), svgr(), mkcert()],
});
