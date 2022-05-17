<template>
  <div>
    <div class="drop1" v-for="drop1 in 100" :key="drop1"></div>
    <div class="drop2" v-for="drop2 in 100" :key="drop2"></div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@function random_range($min, $max) {
  $rand: random();
  $random_range: $min + floor($rand * (($max - $min) + 1));
  @return $random_range;
}

.drop1 {
  $total: 100;
  position: absolute;
  height: 20px;
  width: 20px;
  transition: 1s ease-in-out background-color;
  background-color: var(--heading-color);
  border-radius: 50%;

  @for $i from 1 through $total {
    $random-x: calc(random(1000000) * 0.000098vw);
    $random-offset: calc(random_range(-100000, 100000) * 0.000098vw);
    $random-x-end: calc($random-x + $random-offset);
    $random-x-end-yoyo: calc($random-x + calc($random-offset / 2));
    $random-yoyo-time: calc(random_range(30000, 80000) / 100000);
    $random-yoyo-y: calc($random-yoyo-time * 100vh);
    $random-scale: calc(random(10000) * 0.0001);
    $fall-duration: calc(random_range(10, 30) * 800ms);
    $fall-delay: calc(random(30) * -1s);

    &:nth-child(#{$i}) {
      opacity: random(10000) * 0.0001;
      transform: translate($random-x, -10px) scale($random-scale);
      animation: fall-#{$i} $fall-duration $fall-delay linear infinite;
    }

    @keyframes fall-#{$i} {
      #{percentage($random-yoyo-time)} {
        transform: translate($random-x-end, $random-yoyo-y) scale($random-scale);
      }

      to {
        transform: translate($random-x-end-yoyo, 97vh) scale($random-scale);
      }
    }
  }
}

.drop2 {
  $total: 200;
  position: absolute;
  height: 20px;
  width: 20px;
  transition: 1s ease-in-out background-color;
  background-color: var(--heading-color);
  border-radius: 50%;

  @for $i from 1 through $total {
    $random-x: calc(random(1000000) * 0.000098vw);
    $random-offset: calc(random_range(-100000, 100000) * 0.000098vw);
    $random-x-end: calc($random-x + $random-offset);
    $random-x-end-yoyo: calc($random-x + calc($random-offset / 2));
    $random-yoyo-time: calc(random_range(30000, 80000) / 100000);
    $random-yoyo-y: calc($random-yoyo-time * 100vh);
    $random-scale: calc(random(10000) * 0.0001);
    $fall-duration: calc(random_range(10, 30) * 800ms);
    $fall-delay: calc(random(30) * -1s);

    &:nth-child(#{$i}) {
      opacity: random(10000) * 0.0001;
      transform: translate($random-x, -10px) scale($random-scale);
      animation: fall-#{$i} $fall-duration $fall-delay linear infinite;
    }

    @keyframes fall-#{$i} {
      #{percentage($random-yoyo-time)} {
        transform: translate($random-x-end, $random-yoyo-y) scale($random-scale);
      }

      to {
        transform: translate($random-x-end-yoyo, 97vh) scale($random-scale);
      }
    }
  }
}
</style>
