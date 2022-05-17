<template>
  <main class="wrapper" :class="mode">
    <div class="outer-nav-overlay"></div>
    <div class="outer-nav">
      <div class="inner-nav">
        <div class="left-nav">
          <router-link to="/" class="left-nav">homepage</router-link>
        </div>

        <div class="right-nav">
          <label class="toggle" for="MyToggle">
            <input class="toggle__input" id="MyToggle" type="checkbox" />
            <div class="toggle__fill" @click="toggleTheme"></div>
          </label>
        </div>
      </div>
    </div>
    <div class="nav-bottom" id="theme-dark" v-if="ThemeToggled"></div>
    <div class="nav-bottom" id="theme-light" v-if="!ThemeToggled"></div>
    <div>
      <TheHamburgerVue />
      <!-- <div v-if="booleanStore.navShown">
        <TheOverlayNav />
      </div> -->
      <!-- <div>{{ back_end }}</div> -->
    </div>
    <router-view></router-view>
  </main>
</template>

<script setup>
import { ref, onMounted, computed } from "@vue/runtime-core";
import TheHamburgerVue from "./TheHamburger.vue";
import themeSwitch from "./themeSwitch.vue";
import { useBooleanStore } from "../stores/booleans.js";
import { storeToRefs } from "pinia";
const booleanStore = useBooleanStore();
/* Variable Declaration  */
let ThemeToggled = ref(false);
let mode = ref(null);

/* Themes */
mode.value = "light";
function toggleTheme() {
  ThemeToggled.value = !ThemeToggled.value;
  mode.value = mode.value === "light" ? "dark" : "light";
}
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  height: 100vh;
  transition: 1s ease-in-out background-color;
  background-color: var(--primary-color);
}

.outer-nav-overlay {
  z-index: 12;
  position: fixed;
  width: 110vw;
  height: 10%;
  filter: blur(10px 10px);
  transition: 1s ease-in-out background-color;
  background-color: var(--secondary-color);
}

.outer-nav {
  z-index: 13;
  position: fixed;
  width: 100%;
  height: 10%;
  display: flex;
  transition: 1s ease-in-out background-color;
  background-color: var(--secondary-color);
}
.inner-nav {
  width: 100%;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  overflow: hidden;
  justify-content: space-between;
}

.left-nav {
  text-decoration: none;
  padding-left: 5%;
  font-size: 2rem;
  text-transform: uppercase;
  transition: 1s ease-in-out color;
  color: var(--font-color);
}

.right-nav {
  display: flex;
  align-items: center;
  padding-right: 5%;
  margin-right: 5%;
}

.open-nav {
  padding-left: 50%;
}

/* Theme Changer */
.toggle {
  --width: 50px;
  --height: calc(var(--width) / 2);
  --border-radius: calc(var(--height) / 2);
  display: inline-block;
  cursor: pointer;
}

.toggle__input {
  display: none;
}

.toggle__fill {
  position: relative;
  width: var(--width);
  height: var(--height);
  border-radius: var(--border-radius);
  transition: 1s ease-in-out background-color;
  background-color: var(--primary-color);
}

.toggle__input:checked ~ .toggle__fill {
  transition: 1s ease-in-out background-color;
  background-color: var(--primary-color);
}

.toggle__fill::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: var(--height);
  width: var(--height);
  background: #ffffff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  border-radius: var(--border-radius);
  transition: transform 1s;
}

.toggle__input:checked ~ .toggle__fill::after {
  transform: translateX(var(--height));
}

/* Nav Bottom */

@mixin gradient-animation($start, $end, $transTime) {
  position: absolute;
  top: 8%;
  left: -4%;
  width: 110vw;
  height: 4%;
  filter: blur(5px);
  background: linear-gradient($start, $end);
  &:before {
    background: linear-gradient($end, $start);
    opacity: 0;
    z-index: -100;
    transition: opacity $transTime;
  }
  animation: rot $transTime ease-in-out forwards;
}

#theme-dark {
  @include gradient-animation(var(--secondary-color), var(--primary-color), 1s);
}
#theme-light {
  @include gradient-animation(var(--secondary-color), var(--primary-color), 1s);
}

@keyframes rot {
  0% {
    opacity: 0;
  }
  100% {
    z-index: 13;
    opacity: 1;
  }
}
</style>
