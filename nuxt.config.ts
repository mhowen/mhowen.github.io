// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
  },
  components: [
    {
      path: '~/components',
      extensions: ['.vue'],
    },
  ],
  css: ['~/assets/css/index.css', '~/assets/css/App.css', '~/assets/css/utility.css'],
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/color-mode',
    '@nuxtjs/google-fonts',
    'nuxt-icon',
    '@hypernym/nuxt-anime',
    '@vueuse/nuxt',
  ],
  anime: {
    composables: true,
  },
  colorMode: {
    preference: 'system',
    fallback: 'dark',
  },
  routeRules: {
    '/about': { ssr: false },
    '/resume': { ssr: false },
  },
  googleFonts: {
    families: {
      Inter: '200..900',
    }
  },
});
