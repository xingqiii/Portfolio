<template>
  <button>BUTTON</button>
</template>

<script setup>
function getTheme() {
  const first = firstTheme({
    a: "var(--primary-color)",
    b: "var(--secondary-color)",
    c: "var(--font-color)",
    d: "var(--bg-color)",
    e: "var(--heading-color)",
  });

  const second = secondTheme({
    a: "var(--primary-color)",
    b: "var(--secondary-color)",
    c: "var(--font-color)",
    d: "var(--bg-color)",
    e: "var(--heading-color)",
  });

  const themes = {
    first,
    second,
  };

  return themes;
}
</script>
