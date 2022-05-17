<script setup>
import TheNavbarVue from "./components/TheNavbar.vue";
</script>

<template>
  <TheNavbarVue />
</template>

<style>
@import "./assets/css/themes.scss";
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Roboto Slab", "Helvetica Neue", Helvetica, Arial, sans-serif;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  text-transform: uppercase;
  font-family: Montserrat, "Helvetica Neue", Helvetica, Arial, sans-serif;
}
</style>
