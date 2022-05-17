<template>
  <div class="overflow-hidden">
    <TheWelcomeCard />
    <TheAnimatedBackground />
  </div>
</template>

<script setup>
import TheAnimatedBackground from "../components/TheAnimatedBackground.vue";
import TheWelcomeCard from "../components/TheWelcomeCard.vue";
</script>

<style lang="scss">
html,
body {
  overflow-x: hidden;
  scrollbar-width: none;
}
</style>
