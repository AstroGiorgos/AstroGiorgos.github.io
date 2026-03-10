// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

import { template } from "./src/settings";


// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), sitemap()],
  site: "https://astrogiorgos.github.io",
  base: "/",
});
