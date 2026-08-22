import { defineConfig } from "vite";
import { ViteEjsPlugin } from "vite-plugin-ejs";
import minimist from "minimist";

const DEFAULT_ARGS = {
  config: 'data.json'
}

var args = minimist(process.argv.slice(2), { default: DEFAULT_ARGS });

export default defineConfig(async () => {
  const { default: data } = await import(`./${args.config}`, { with: { type: 'json' } })

  return {
    plugins: [
      ViteEjsPlugin(data),
    ],
  }
});
