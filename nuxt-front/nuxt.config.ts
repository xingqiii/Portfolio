import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["cookie-universal-nuxt"],
  build: {
    /*
     ** You can extend webpack config here
     */
    transpile: ["three"],
  },
  // add this Axios object
});
