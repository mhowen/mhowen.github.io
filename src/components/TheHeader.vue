<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink, useRouter } from 'vue-router';
import TheLogo from './TheLogo.vue';
import IconHamburger from './icons/IconHamburger.vue';

const is_tray_open = ref(false);

// check tray state before each route change and slide it closed if it's open
const router = useRouter();
router.beforeEach(() => {
  if (is_tray_open.value == true) is_tray_open.value = false;
});
</script>

<template>
  <header class="header pi-view">
    <button class="header__return-btn"
      @click="$router.push({ path: '/' })"
    >
      <TheLogo id="thelogo" />
      <span class="visually-hidden">Back to Landing Page</span>
    </button>

    <nav class="header__nav uppercase" 
      :class="{ 'tray-open': is_tray_open }"
    >
      <RouterLink to="/home">Home</RouterLink>
      <RouterLink to="/resume">Résumé</RouterLink>
      <RouterLink to="/projects">Projects & Demos</RouterLink>
      <RouterLink to="/contact">Contact</RouterLink>
    </nav>

    <button class="header__hamburger" @click="is_tray_open = !is_tray_open">
      <span class="visually-hidden">Expand Navigation Menu</span>
      <IconHamburger />
    </button>
  </header>
</template>

<style scoped>
.header__return-btn {
  --side-length: calc(var(--header-height) - var(--gap-xs));

  cursor: pointer;
  height: var(--side-length);
  width: var(--side-length);
  border: 0;
}
.header__return-btn:hover {
  background: transparent;
}
#thelogo {
  height: 100%;
  width: 100%;

  fill: var(--clr-text);
  stroke: var(--clr-background);
  stroke-width: 0.125em;
  transition-duration: 250ms;
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 999;

  background-color: var(--clr-text);
  border-bottom: 0.0625em solid var(--clr-background);
  color: var(--clr-background);
  font-size: calc(var(--step-1) * var(--halfstep));
}
.header__nav {
  position: fixed;
  inset: var(--header-height) 0 0 0;
  display: flex;
  flex-direction: column;
  gap: clamp(0.5rem, 5vh, var(--gap-xl));
  align-items: center;
  justify-content: center;
  transform: translateX(100%);
  transition: transform 250ms ease-in;

  background-color: var(--clr-white-50);
  backdrop-filter: blur(1rem);
}
.header__nav.tray-open { transform: translateX(0%) }
.header__nav > a {
  color: var(--clr-background);
  font-family: Oswald, system-ui, Inter;
  font-weight: 300;
  text-decoration: none;
}
.header__nav > a:hover,
.header__nav > a:focus-visible,
.header__hamburger:hover, 
.header__hamburger:focus-visible,
.header__nav > a.router-link-active {
  color: var(--clr-accent);
}
.header__nav > a.router-link-active {
  font-weight: 300;
  text-decoration: underline 0.0625em;
  text-shadow: 0.125rem 0.125rem 0.125rem var(--clr-background);
}
.header__hamburger {
  align-self: center;
  background-color: transparent;
  border: 0;
  color: var(--clr-background);
  transition: color 250ms ease-in;
}
.header__hamburger > svg {
  vertical-align: middle;
}

@media (min-width: 60rem) {
  .header__nav {
    transform: translateX(0%);
    position: initial;
    flex-direction: row;

    backdrop-filter: unset;
    background-color: unset;
  }
  .header__hamburger {
    display: none;
  }
}
</style>

