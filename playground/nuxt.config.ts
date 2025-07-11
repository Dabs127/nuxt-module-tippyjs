export default defineNuxtConfig({
  modules: ['../src/module'],
  tippyJs: {},
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      tippyJs: {
        importThemes: true
      }
    }
  },
  compatibilityDate: '2025-07-10',
  pages: true
})
