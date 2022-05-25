<template>
  <div class="settings-outer">
    <div class="settings-left">
      <button>Auth</button>
      <button>Others</button>
    </div>
    <TheSeparatorVue class="separator" />
    <div class="settings-right">Hello</div>
  </div>
</template>

<script setup>
import TheSeparatorVue from "../components/TheSeparator.vue";
</script>

<style lang="scss" scoped>
.settings-outer {
  z-index: 100;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
}

.settings-left {
  display: flex;
  flex-direction: column;
}

.separator {
  --width: 2px;
  --height: 500px;
  --back-color: blue;
}

.settings-right {
  width: 500px;
}
</style>
