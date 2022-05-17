<template>
  <div>
    <div class="filtering"><div class="flt"></div></div>
    <div class="outer-home-text">
      <div class="inner-home-text">
        <h1>Welcome</h1>
        <TheSeparatorVue class="sepa" />
        <br />
        <p>
          I build this Webpage to practice different Languages, Libraries and
          Frameworks.
        </p>
        <p>Feel free to look around!</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import TheSeparatorVue from "./TheSeparator.vue";
</script>

<style lang="scss" scoped>
/* Filter Overlay */
.filtering {
  z-index: 8;
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
}

.flt {
  top: 0;
  left: 0;
  width: 45%;
  height: 40%;
  filter: blur(7px);
  transition: 1s ease-in-out background-color;
  background-color: var(--primary-color);
}

/* Text Element */
.outer-home-text {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 11;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.inner-home-text {
  z-index: 14;
  transition: 1s ease-in-out color;
  color: var(--heading-color);
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1.5rem;
}

.sepa {
  --width: 20%;
}
</style>
