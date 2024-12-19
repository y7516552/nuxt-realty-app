import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  "imports": {
       "dirs": ['stores','@core/*','@core/composable/*','@core/components/*','@layouts/*','@layouts','@layouts/composable/*','@layouts/components/*',]
  },
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/i18n',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
  ],
  i18n: {
    strategy: "no_prefix",
    locales: [
      {
        code: "zh-TW",
        file: "zh-TW.json",
      },
      {
        code: "en",
        file: "en.json",
      },
      {
        code: "ar",
        file: "ar.json",
      },
      {
        code: "fr",
        file: "fr.json",
      },
    ],
    langDir: "language",
    defaultLocale: "zh-TW",
    detectBrowserLanguage: {
      useCookie: true,
    },
  },

  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})