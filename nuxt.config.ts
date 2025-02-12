// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  modules: [
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    [
      "@nuxtjs/i18n",
      {
        langDir: "locales",
        defaultLocale: "zh",
        locales: [
          { code: "zh", file: "zh.json" },
          { code: "en", file: "en.json" },
        ],
      },
    ],
  ],
  // 移除 pinia 配置，转而使用 imports
  imports: {
    dirs: ["store/**"],
  },
  i18n: {
    langDir: "locales",
    defaultLocale: "zh",
    locales: [
      { code: "zh", file: "zh.json" },
      { code: "en", file: "en.json" },
    ],
  },
  // css: [
  //   // 如果有全局 SCSS 文件可以在这里添加
  // ],

  // vite: {
  //   css: {
  //     preprocessorOptions: {
  //       scss: {
  //         additionalData: '@use "@/assets/styles/_variables.scss" as *;',
  //       },
  //     },
  //   },
  // },
});
