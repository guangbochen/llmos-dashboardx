// https://nuxt.com/docs/api/configuration/nuxt-config
import process from "node:process";

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/fonts',
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss',
    'dayjs-nuxt',
  ],
  alias: {
    "@utils": "./utils",
    "@config": "./config"
  },
  // Vue plugins
  plugins: [
    { src: '~/plugins/steve/*' },
    // Third-party
    // '~/plugins/axios',
    // '~/plugins/tooltip',
    // '~/plugins/vue-clipboard2',
    // '~/plugins/v-select',
    // '~/plugins/directives',
    // '~/plugins/transitions',
    // '~/plugins/vue-final-modal',
    // { src: '~plugins/vue-js-modal' },
    // { src: '~/plugins/js-yaml' },
    // { src: '~/plugins/resize' },
    // { src: '~/plugins/shortkey' },

    // First-party
    // '~/plugins/i18n',
    // '~/plugins/global-formatters',
    // '~/plugins/trim-whitespace',
    // { src: '~/plugins/extend-router' },
    // { src: '~/plugins/lookup' },
    // { src: '~/plugins/int-number' },
    // { src: '~/plugins/nuxt-client-init' },
    // '~/plugins/replaceall',
    // '~/plugins/back-button',
  ],
  css: [
      'vue-final-modal/style.css',
      'vue-select/dist/vue-select.css',
  ],
  runtimeConfig: {
    // Keys within public are also exposed client-side
    public: {
      apiBase: "https://localhost:8443/v1",
      api: process.env.NUXT_API || 'https://localhost:8443/v1',
    }
  },
  typescript: {
    strict: false
  },
  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
})
