export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: process.env.VITE_SOCKET_URL, // Updated to use env variable
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
