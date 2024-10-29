import { defineConfig, passthroughImageService } from "astro/config";

import tailwind from "@astrojs/tailwind";
import vercelStatic from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  output: "static",
  adapter: vercelStatic({
    webAnalytics: {
      enabled: true,
    },
  }),
  integrations: [tailwind()],
  image: {
    service: passthroughImageService(),
  },
});
