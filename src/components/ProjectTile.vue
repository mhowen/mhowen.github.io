<script setup lang="ts">
defineProps({
  description: {
    type: String,
    default: "Hoverable Description!",
  },
});
</script>

<template>
  <div class="tile">
    <slot />

    <p class="tile__desc">{{ description }}</p>
  </div>
</template>

<style scoped>
.tile {
  position: relative;

  border: 0.125rem solid var(--clr-text);
}
.tile > * {
  transition: opacity 250ms ease-in;
}
.tile__desc {
  padding: var(--gap-m) var(--gap-l);
  position: absolute;
  inset: 0;
  opacity: 0;

  pointer-events: none;
}
.tile > *:not(.tile__desc) {
  opacity: 1.0;
}
.tile:hover > .tile__desc {
  backdrop-filter: blur(0.25em);
  opacity: 1.0;
}
.tile:hover > *:not(.tile__desc) {
  opacity: 0.10;
}
</style>

