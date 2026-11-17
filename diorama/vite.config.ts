import { defineConfig } from 'vite-plus';

export default defineConfig({
  base: './', // relative addresses: the build works in any folder of a server
  build: {
    target: 'esnext',
    chunkSizeWarningLimit: 1200, // three.js is one 1 MB file (344 kB compressed)
    rolldownOptions: {
      input: ['index.html', 'garage.html', 'twitch.html'],
      output: { comments: { legal: true } }, // keep the licence notices of the libraries
    },
  },
  worker: { format: 'es' },
  fmt: {
    singleQuote: true,
    printWidth: 160,
    ignorePatterns: ['dist/**', 'public/**', 'tools/archive/**', 'src/puzzles.json', 'docs/**'],
  },
  lint: { ignorePatterns: ['dist/**', 'public/**', 'tools/archive/**'] },
});
