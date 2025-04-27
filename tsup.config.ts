import { defineConfig } from 'tsup';

export default defineConfig({
  entry: { index: 'src/index.ts' },
  format: ['esm', 'cjs'],
  dts: true,
  outDir: 'dist',

  /**
   * v8 API: return { js: '.ext' }  (or  { mjs: '.ext' } / { cjs: '.ext' })
   */
  outExtension({ format }) {
    // For the CJS build rename *.js  →  *.cjs
    if (format === 'cjs') return { js: '.cjs' };

    // For the ESM build keep the default *.js
    return { js: '.js' };
  },

  external: ['@superexpert-ai/framework', '@tavily/core', 'dotenv'],
  clean: true,
  target: 'es2019',
});