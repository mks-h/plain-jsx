import { defineConfig } from "vite";

export default defineConfig({
	esbuild: {
		jsxFactory: "jsxFactory",
		jsxInject: "import { jsxFactory } from '/src/index.js';",
	},
});
