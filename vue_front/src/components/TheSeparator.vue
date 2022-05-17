<template>
  <div class="line"></div>
</template>

<script setup></script>

<style lang="scss" scoped>
.line {
  margin-left: calc(50% - var(--width) / 2);
  width: var(--width);
  height: 3px;
  background-color: green;
}
</style>
