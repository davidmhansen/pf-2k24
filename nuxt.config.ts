// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  pages: true,
  devtools: { enabled: true },
  devServer: {
    port: 8000,
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/utils.scss" as *;',
        },
      },
    },
  },
  imports: {
    dirs: ["utils"],
  },
});
