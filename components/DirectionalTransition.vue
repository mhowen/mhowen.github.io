<script setup>
defineProps({
  direction: {
    type: String,
    default: 'lr'
  }
});
</script>

<template>
  <Transition
    :name="direction"
    mode="out-in">
    <slot></slot>
  </Transition>
</template>

<style>
/* scoped CSS isn't used b/c it doesn't apply to slot content */
.du-enter-from,
.ud-leave-to {
  opacity: 0;
  transform: translate(0, -25%);
}
.ud-enter-from,
.du-leave-to {
  opacity: 0;
  transform: translate(0, 25%);
}
.lr-enter-from,
.rl-leave-to {
  opacity: 0;
  transform: translate(-25%, 0);
}
.lr-leave-to,
.rl-enter-from {
  opacity: 0;
  transform: translate(25%, 0);
}
.lr-enter-to,
.lr-leave-from,
.rl-enter-to,
.rl-leave-from,
.ud-enter-to,
.ud-leave-from,
.du-enter-to,
.du-leave-from {
  opacity: 1;
  transform: translate(0, 0);
}
.lr-enter-active,
.lr-leave-active,
.rl-enter-active,
.rl-leave-active,
.ud-enter-active,
.ud-leave-active,
.du-enter-active,
.du-leave-active {
  transition: all 500ms ease-out;
}
</style>
