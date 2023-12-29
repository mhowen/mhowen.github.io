<script setup>
definePageMeta({ layout: false });

const navigation_delay = 1000; // time in ms between clicking ENTER and navigating to site

const is_entering = ref(false); // used for animating transitional elements

function enter() {
  is_entering.value = true;
  setTimeout(() => navigateTo('/about'), navigation_delay);
}
</script>

<template>
  <div class="landing">
    <div class="entry" :class="{ entering: is_entering }" @click="enter">
      <TheLogo class="entry-logo" width="288" height="288" />
      <p class="entry-label">ENTER</p>
    </div>
  </div>
</template>

<style scoped>
.landing {
  background-image: var(--g-matching);
  background-size: 200%;
  animation: layout-bg 10s infinite alternate;

  display: grid;
  min-height: 100vh;
  min-height: 100dvh;
  place-content: center;
  position: relative;
  user-select: none;
}
.entry {
  cursor: pointer;
  font-size: 5rem;
  opacity: 1;
  stroke: initial;
  text-align: center;
}
.entry:hover { color: var(--c-accent) }
.entry:hover > .entry-logo { stroke: var(--c-accent) }
.entry-label {
  opacity: 1;
  transition: all 500ms ease-out;
}
.entry.entering > * { opacity: 0 }
.entry-logo {
  opacity: 1;
  transition: all 1000ms ease-out;
}
@keyframes layout-bg {
  0% { background-position: left }
  100% { background-position: right }
}
</style>
