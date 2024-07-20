// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["@nuxtjs/color-mode", "@nuxt/ui"],
  colorMode: {
    classSuffix: ""
  },
  tailwindcss: {
    cssPath: ["~/assets/tailwind.css", { injectPosition: 0 }],
    configPath: "tailwind.config.ts",
    exposeConfig: false,
    config: {},
    viewer: true
  }
})
