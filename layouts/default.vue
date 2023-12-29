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
  animation: layout-bg 10s infinite alternate;
  background-image: var(--g-matching);
  background-size: 200%;
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  min-height: 100dvh;
}
@keyframes layout-bg {
  0% { background-position: left }
  100% { background-position: right }
}
</style>
