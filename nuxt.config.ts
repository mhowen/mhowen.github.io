// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      supabase_url: process.env.SUPABASE_URL,
      supabase_anon_key: process.env.SUPABASE_KEY,
    },
  },
  ssr: false,
  nitro: {
    preset: 'github_pages',
  },
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
  css: [
    '~/assets/css/index.css',
    '~/assets/css/App.css',
    '~/assets/css/utility.css',
    '~/assets/css/temp.css',
  ],
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/color-mode',
    '@nuxtjs/google-fonts',
    '@nuxtjs/supabase',
    'nuxt-icon',
    '@hypernym/nuxt-anime',
    '@vueuse/nuxt',
  ],
  anime: {
    composables: true,
  },
  colorMode: {
    preference: 'dark',
    fallback: 'dark',
  },
  googleFonts: {
    families: {
      Inter: '200..900',
    }
  },
  supabase: {
    redirect: false,
  },
});
