// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  pages: true,
  devtools: { enabled: true },
  devServer: {
    port: 8000,
  },
  imports: {
    dirs: ["utils"],
  },
});
