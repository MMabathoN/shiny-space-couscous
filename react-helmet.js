// vite.config.js

import reactRefresh from '@vitejs/plugin-react-refresh';

export default {
  plugins: [reactRefresh()],
  build: {
    rollupOptions: {
      external: ['react-helmet'], // Add 'react-helmet' to the list of external dependencies
    },
  },
};
