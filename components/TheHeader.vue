<script setup>
const is_wide = useScreenWidth(900);
const nav_expanded = ref(false);

// configure inline nav guard to control mobile nav state
const router = useRouter();
router.beforeEach(() => {
  // mobile navbar slides closed before executing navigation
  nav_expanded.value = false;
});
</script>

<template>
  <header class="header">
    <div class="header-content">
      <TheLogo class="logo" @click="() => navigateTo('/')" />
  
      <nav
        class="navbar"
        :class="{ expanded: nav_expanded, 'navbar-wide': is_wide }"
      >
        <NuxtLink class="inline-link" to="/about">ABOUT</NuxtLink>
        <NuxtLink class="inline-link" to="/resume">RÉSUMÉ</NuxtLink>
        <NuxtLink class="inline-link" to="/projects">PORTFOLIO</NuxtLink>
        <NuxtLink
          class="inline-link btn-contact"
          :class="{ activeRoute: $route.fullPath === '/contact' }"
          to="/contact">CONTACT</NuxtLink>

        <!-- <TheThemeToggle /> -->
      </nav>
      
      <Icon
        v-if="!is_wide"
        class="hamburger fs-5"
        name="material-symbols:menu-rounded"
        @click="nav_expanded = !nav_expanded"
      />
    </div>
  </header>
</template>

<style scoped>
.header {
  background-color: color-mix(in srgb, var(--c-secondary), transparent 50%);
  border-bottom: 1px solid black;
  position: sticky;
  top: 0;
  z-index: 9999;
}
.header::before {
  backdrop-filter: blur(1rem);
  content: '';
  inset: 0;
  position: absolute;
  z-index: -1;
  -webkit-backdrop-filter: blur(1rem);
}
.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  max-height: var(--dh-header);
  max-width: var(--dw-content-wide);
  padding-inline: 0.5rem;
  position: relative;
  overflow: hidden;
}
.navbar {
  align-items: center;
  background-color: color-mix(in srgb, var(--c-secondary), transparent 30%);
  backdrop-filter: blur(1rem);
  display: flex;
  flex-direction: column;
  font-size: var(--step-3);
  font-weight: 900;
  justify-content: center;
  gap: 2em;
  inset: 0 0 0 30%;
  padding-block: calc(var(--dh-header) + 0.5em); /* plus half the parent's block padding on either side */
  position: fixed;
  transform: translateX(100%);
  transition: transform 500ms ease-in-out;
  z-index: 999;
  -webkit-backdrop-filter: blur(1rem);
}
.navbar-wide {
  backdrop-filter: none;
  background-color: initial;
  -webkit-backdrop-filter: none;

  flex-direction: row;
  font-size: var(--step-1);
  padding-block: 0;
  min-height: var(--dh-header);
  margin: 0 auto;

  position: relative;
  inset: initial;
}
.inline-link:not(.router-link-exact-active) { text-decoration: none }
.btn-contact {
  color: var(--c-text);
  position: relative;
}
.btn-contact::before {
  --track2: transparent 75%;
  background-image: linear-gradient(0deg, var(--c-accent-alt), var(--track2));
  border-radius: 0.25rem;
  content: '';
  inset: -0.25rem -0.5rem;
  opacity: 0.5;
  position: absolute;
  z-index: -1;
  transition: all 150ms ease-in-out;
}
.btn-contact:hover::before,
.btn-contact.activeRoute::before {
  --track2: transparent;
  opacity: 1;
}
.logo {
  min-height: 96px;
  max-height: var(--d-header-height);
  min-width: 96px;
  max-width: var(--d-header-height);
  padding-block: 0.25em;
}
.navbar.expanded,
.navbar-wide {
  transform: translateX(0%);
}
.hamburger {
  z-index: 1000;
}
</style>
