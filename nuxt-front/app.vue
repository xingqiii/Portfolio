<template>
  <main class="wrapper" :class="mode">
    <themeSwitch @click.native="toggleTheme" theme="second"></themeSwitch>
    <div>
      <div>
        <button @click="navswitch"></button>
        <div v-if="nav">
          <navbar />
        </div>
      </div>
      <!-- <div>{{ back_end }}</div> -->
      <NuxtPage />
    </div>
  </main>
</template>

<script setup>
/* Show Full Page nav */
let nav = ref(false);
function navswitch() {
  nav.value = !nav.value;
}

/* Themes */
let mode = ref();

function toggleTheme() {
  mode.value = mode.value === "light" ? "dark" : "light";
}

/* Get data from Django Rest Backend */
let back_end = ref([]);
let response = await fetch("http://localhost:8000/api/back_end/");
back_end = await response.json();
</script>

<style lang="scss">
@import "@/assets/css/themes.scss";

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.wrapper {
  width: 100%;
  min-height: 100vh;
  transition: 1s ease-in-out background-color;
  background-color: var(--bg-color);
}
</style>
