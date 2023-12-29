<script setup>
const colorMode = useColorMode();

function doToggle() {
  const prevTheme = colorMode.preference;
  colorMode.preference = prevTheme === 'light' ? 'dark' : 'light';
}
</script>

<template>
  <button
    :class="{ toggled: $colorMode.preference === 'dark' }"
    class="toggle no-focus"
    @click="doToggle"
  >
    <div class="toggle-icons">
      <Icon name="material-symbols:light-mode-rounded" class="icon-light" />
      <Icon name="material-symbols:dark-mode-rounded" class="icon-dark" />
    </div>
  </button>
</template>

<style scoped>
.toggle {
  position: relative;
}
.toggle::after {
  aspect-ratio: 1;
  background-color: color-mix(in srgb, var(--c-accent), transparent 50%);
  border: 0.25rem solid var(--c-accent);
  border-radius: 100%;
  content: '';
  min-height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transform: translateX(0);
  transition: 500ms ease;
}
.toggle.toggled::after {
  left: 100%;
  transform: translateX(-100%);
}
.toggle-icons {
  display: flex;
  font-size: 2rem;
  gap: 2rem;
  justify-content: space-between;
  padding: 0.5rem;
}
</style>
