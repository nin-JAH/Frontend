// vite.config.js
import { defineConfig } from "file:///home/project/node_modules/vite/dist/node/index.js";
import react from "file:///home/project/node_modules/@vitejs/plugin-react/dist/index.mjs";
import path from "path";
import tagger from "file:///home/project/node_modules/@dhiwise/component-tagger/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [react(), tagger()],
  build: {
    outDir: "build"
  },
  resolve: {
    alias: {
      "@": path.resolve("./src"),
      "@components": path.resolve("./src/components"),
      "@pages": path.resolve("./src/pages"),
      "@assets": path.resolve("./src/assets"),
      "@constants": path.resolve("./src/constants"),
      "@styles": path.resolve("./src/styles")
    }
  },
  server: {
    port: "4028",
    host: "0.0.0.0",
    strictPort: true,
    allowedHosts: [".amazonaws.com", ".builtwithrocket.new"]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9wcm9qZWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9wcm9qZWN0L3ZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL3Byb2plY3Qvdml0ZS5jb25maWcuanNcIjsvLyB2aXRlLmNvbmZpZy5qc1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgdGFnZ2VyIGZyb20gXCJAZGhpd2lzZS9jb21wb25lbnQtdGFnZ2VyXCI7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbcmVhY3QoKSx0YWdnZXIoKV0sXG4gIGJ1aWxkOiB7XG4gICAgb3V0RGlyOiBcImJ1aWxkXCIsXG4gIH0sXG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgJ0AnOiBwYXRoLnJlc29sdmUoJy4vc3JjJyksXG4gICAgICAnQGNvbXBvbmVudHMnOiBwYXRoLnJlc29sdmUoJy4vc3JjL2NvbXBvbmVudHMnKSxcbiAgICAgICdAcGFnZXMnOiBwYXRoLnJlc29sdmUoJy4vc3JjL3BhZ2VzJyksXG4gICAgICAnQGFzc2V0cyc6IHBhdGgucmVzb2x2ZSgnLi9zcmMvYXNzZXRzJyksXG4gICAgICAnQGNvbnN0YW50cyc6IHBhdGgucmVzb2x2ZSgnLi9zcmMvY29uc3RhbnRzJyksXG4gICAgICAnQHN0eWxlcyc6IHBhdGgucmVzb2x2ZSgnLi9zcmMvc3R5bGVzJyksXG4gICAgfSxcbiAgfSxcbiAgc2VydmVyOiB7XG4gICAgcG9ydDogXCI0MDI4XCIsXG4gICAgaG9zdDogXCIwLjAuMC4wXCIsXG4gICAgc3RyaWN0UG9ydDogdHJ1ZSxcbiAgICBhbGxvd2VkSG9zdHM6IFsnLmFtYXpvbmF3cy5jb20nLCAnLmJ1aWx0d2l0aHJvY2tldC5uZXcnXVxuICB9XG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFDQSxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFdBQVc7QUFDbEIsT0FBTyxVQUFVO0FBQ2pCLE9BQU8sWUFBWTtBQUduQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsTUFBTSxHQUFFLE9BQU8sQ0FBQztBQUFBLEVBQzFCLE9BQU87QUFBQSxJQUNMLFFBQVE7QUFBQSxFQUNWO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLEtBQUssUUFBUSxPQUFPO0FBQUEsTUFDekIsZUFBZSxLQUFLLFFBQVEsa0JBQWtCO0FBQUEsTUFDOUMsVUFBVSxLQUFLLFFBQVEsYUFBYTtBQUFBLE1BQ3BDLFdBQVcsS0FBSyxRQUFRLGNBQWM7QUFBQSxNQUN0QyxjQUFjLEtBQUssUUFBUSxpQkFBaUI7QUFBQSxNQUM1QyxXQUFXLEtBQUssUUFBUSxjQUFjO0FBQUEsSUFDeEM7QUFBQSxFQUNGO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixZQUFZO0FBQUEsSUFDWixjQUFjLENBQUMsa0JBQWtCLHNCQUFzQjtBQUFBLEVBQ3pEO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
