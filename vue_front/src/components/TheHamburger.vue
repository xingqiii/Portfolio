<template>
  <div>
    <div
      class="close-click"
      onclick="this.classList.toggle('active')"
      @click="booleanStore.navClose"
    ></div>
    <div class="over-ham">
      <div>
        <svg
          class="ham hamRotate ham4"
          viewBox="0 0 100 100"
          onclick="this.classList.toggle('active')"
          @click="booleanStore.navSwitch"
        >
          <path
            class="line top"
            d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20"
          />
          <path class="line middle" d="m 70,50 h -40" />
          <path
            class="line bottom"
            d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20"
          />
        </svg>

        <div class="menu-items" v-if="booleanStore.navShown">
          <div class="ham-home"><a href="/">Home</a></div>
          <div class="ham-games"><a href="/Games">Games</a></div>
          <div class="ham-projects"><a href="/Projects">Projects</a></div>
          <div class="ham-settings"><a href="/Settings">Settings</a></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useBooleanStore } from "../stores/booleans";
const booleanStore = useBooleanStore();
</script>

<style lang="scss">
:root {
  --width: 60px;
}

.close-click {
  position: absolute;
  z-index: 12;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}

.over-ham {
  z-index: 230;
  position: absolute;
  bottom: 1%;
  right: 0;
  margin: 1%;
  width: 350px;
  height: 350px;
  border-radius: 80% 0% 0% 30%;
}

/* Hamburger Menu */
.ham {
  position: absolute;
  bottom: 1%;
  right: 0;
  z-index: 200;
  margin-bottom: 90px;
  width: var(--width);
  transition: 1s ease-in-out background-color;
  background-color: var(--secondary-color);
  border-radius: 50%;
  cursor: pointer;
}
.hamRotate.active {
  transform: rotate(45deg);
}
.line {
  fill: none;
  transition: stroke-dasharray 400ms, stroke-dashoffset 400ms,
    1s ease-in-out stroke;
  stroke: var(--font-color);
  stroke-width: 5.5;
  stroke-linecap: round;
}
.ham4 .top {
  stroke-dasharray: 40 121;
}
.ham4 .bottom {
  stroke-dasharray: 40 121;
}
.ham4.active .top {
  stroke-dashoffset: -68px;
}
.ham4.active .bottom {
  stroke-dashoffset: -68px;
}

.menu-items {
  position: absolute;
  bottom: 1%;
  right: 0;
  div {
    text-transform: uppercase;
    border-radius: 50%;
    transition: 1s ease-in-out background-color;
    background-color: var(--secondary-color);
    a {
      width: 100px;
      height: 60px;
      text-decoration: none;
      list-style: none;
      transition: 1s ease-in-out color;
      color: var(--font-color);
      display: flex;
      justify-content: center;
      text-align: center;
      align-items: center;
    }
  }
  .ham-home {
    animation: first 500ms ease-in-out forwards;
  }
  .ham-games {
    animation: second 500ms ease-in-out forwards;
  }
  .ham-projects {
    animation: third 500ms ease-in-out forwards;
  }
  .ham-settings {
    animation: fourth 500ms ease-in-out forwards;
  }
}

@keyframes first {
  from {
    opacity: 0;
    transform: translateY(0);
  }
  to {
    opacity: 1;
    transform: translateY(-100px);
  }
}

@keyframes second {
  from {
    opacity: 0;
    transform: translateY(0) translateX(0);
  }
  to {
    opacity: 1;
    transform: translateY(-100px) translateX(-130px);
  }
}

@keyframes third {
  from {
    opacity: 0;
    transform: translateY(0) translateX(0);
  }
  to {
    opacity: 1;
    transform: translateY(-55px) translateX(-180px);
  }
}

@keyframes fourth {
  from {
    opacity: 0;
    transform: translateY(0);
  }
  to {
    opacity: 1;
    transform: translateX(-160px);
  }
}
</style>
