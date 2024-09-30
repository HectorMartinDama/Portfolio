import { defineConfig, envField } from "astro/config";

import tailwind from "@astrojs/tailwind";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel(),
  integrations: [tailwind()],
  env: {
    schema: {
      BLOG_API_ENDPOINT: envField.string({
        context: "server",
        access: "secret",
      }),
    },
  },

  adapter: vercel(),
});
