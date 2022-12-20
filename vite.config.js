import { sveltekit } from "@sveltejs/kit/vite";
import { nodeLoaderPlugin } from "@vavite/node-loader/plugin";

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [nodeLoaderPlugin(), sveltekit()],
};

export default config;
