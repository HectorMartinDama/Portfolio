import { defineConfig, envField, passthroughImageService } from "astro/config";

import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
  integrations: [tailwind()],
  image: {
    service: passthroughImageService(),
  },
  vite: {
    ssr: {
      noExternal: 'cookie'
  },
  env: {
    schema: {
      BLOG_API_ENDPOINT: envField.string({
        context: "server",
        access: "secret",
      }),
    },
  },
});
