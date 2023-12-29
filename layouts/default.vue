<script setup>

</script>

<template>
  <div class="layout-default">
    <TheHeader />
    
    <slot />

    <TheFooter />
  </div>
</template>

<style scoped>
.layout-default {
  /* background-image: var(--g-highlight); */
  background-image: var(--g-matching);
  background-size: 200%;
  animation: layout-bg 10s infinite alternate;
}
@keyframes layout-bg {
  0% { background-position: left }
  100% { background-position: right }
}
</style>
