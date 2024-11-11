import swc from 'unplugin-swc';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['**/*.e2e-spec.ts'],
    globals: true,
    environment: 'node',
    root: './',
  },
  plugins: [swc.vite()],
});
