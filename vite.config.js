import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  // Server configuration
  server: {
    port: 5173,
    strictPort: false,
    open: true,
    hmr: true,
  },

  // Build configuration
  build: {
    // Output directory
    outDir: 'dist',
    assetsDir: 'assets',
    
    // Minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },

    // Rollup options
    rollupOptions: {
      output: {
        // Asset file names
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/png|jpe?g|gif|tiff|bmp|ico/i.test(ext)) {
            return `assets/images/[name]-[hash][extname]`;
          } else if (/woff|woff2|ttf|otf|eot/i.test(ext)) {
            return `assets/fonts/[name]-[hash][extname]`;
          } else if (ext === 'css') {
            return `assets/css/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
        // Chunk file names
        chunkFileNames: 'assets/js/[name]-[hash].js',
        // Entry file names
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },

    // Source map for production debugging
    sourcemap: false,

    // CSS code splitting
    cssCodeSplit: true,

    // Chunk size warnings
    chunkSizeWarningLimit: 500,

    // Report compressed size
    reportCompressedSize: true,
  },

  // Optimization
  optimizeDeps: {
    include: ['gsap', 'lenis', 'swiper', 'lucide'],
  },

  // CSS configuration
  css: {
    postcss: './postcss.config.js',
  },

  // Resolve configuration
  resolve: {
    alias: {
      '@': '/src',
      '@js': '/src/js',
      '@css': '/src/css',
      '@modules': '/src/js/modules',
    },
  },
});
