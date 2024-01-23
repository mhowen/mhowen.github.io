// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    // no worries about exposing these -- RLS is configured to prevent server access without svc key 
    public: {
      supabase_url: 'https://vjzqxjnkmuizcoxluegn.supabase.co',
      supabase_anon_key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZqenF4am5rbXVpemNveGx1ZWduIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ5ODUwMjAsImV4cCI6MjAyMDU2MTAyMH0.zzR8zDW0ebGcAGr-c7IdzU7O7fraOjHdkw0yXYLYyx4',
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
    url: 'https://vjzqxjnkmuizcoxluegn.supabase.co',
    key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZqenF4am5rbXVpemNveGx1ZWduIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ5ODUwMjAsImV4cCI6MjAyMDU2MTAyMH0.zzR8zDW0ebGcAGr-c7IdzU7O7fraOjHdkw0yXYLYyx4',
    redirect: false,
  },
});
