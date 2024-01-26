<script setup>
defineProps({
  axis: {
    type: String,
    default: 'y',
  },
  direction: {
    type: Number,
    default: -1,
  },
});
</script>

<template>
  <Transition
    :name="direction <= 0 ? 'flipNeg' : 'flipPos'"
    mode="out-in"
  >
    <slot />
  </Transition>
</template>

<style scoped>
.flipNeg-leave-active,
.flipPos-enter-active {
  transform-origin: center left;
  transition: transform 500ms ease-out;
}
.flipNeg-leave-to,
.flipPos-enter-from {
  transform: translateX(50%) rotateY(90deg);
}
.flipNeg-enter-active,
.flipPos-leave-active {
  transform-origin: center right;
  transition: transform 500ms linear;
}
.flipNeg-enter-from,
.flipPos-leave-to {
  transform: translateX(-50%) rotateY(-90deg);
}
</style>
