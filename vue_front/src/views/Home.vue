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

console.log(getAPI.get());
</script>

<style lang="scss">
html,
body {
  overflow-x: hidden;
  scrollbar-width: none;
}
</style>
