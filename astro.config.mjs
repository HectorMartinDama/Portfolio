import { defineConfig, envField } from "astro/config";

import tailwind from "@astrojs/tailwind";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: cloudflare(),
  integrations: [tailwind()],
  env: {
    schema: {
      BLOG_API_ENDPOINT: envField.string({
        context: "server",
        access: "secret",
      }),
    },
  },
});
