<template>
  <div class="overflow-hidden">
    <TheWelcomeCard />
    <TheAnimatedBackground />
  </div>
</template>

<script setup>
import TheAnimatedBackground from "../components/TheAnimatedBackground.vue";
import TheWelcomeCard from "../components/TheWelcomeCard.vue";
import { getAPI } from "@/axios-api";
import { ref } from "@vue/reactivity";
let APIData = ref([]);

getAPI
  .get("/back_end/")
  .then((response) => {
    console.log(response.data);
    APIData = response.data;
  })
  .catch((err) => {
    console.log(err);
  });

console.log(APIData);
</script>

<style lang="scss">
html,
body {
  overflow-x: hidden;
  scrollbar-width: none;
}
</style>
