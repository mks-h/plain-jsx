import { defineConfig } from "vite";

export default defineConfig({
	esbuild: {
		jsxFactory: "jsxFactory",
		jsxFragment: "jsxFragment",
		jsxInject: "import { jsxFactory, jsxFragment } from '/src/index.js';",
	},
});
