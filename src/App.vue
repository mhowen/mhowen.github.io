<script setup lang="ts">
import { computed } from 'vue';
import { RouterView, useRoute } from 'vue-router';
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';

const route = useRoute();
const route_name = computed(() => route.name);
</script>

<template>
  <TheHeader id="app-header" :class="{ landing: route_name === 'landing' }" />

  <RouterView
    v-slot="{ Component }"
    id="app-main"
    :class="{ 'landing': route_name === 'landing' }"
  >
    <Transition name="fade" mode="out-in">
      <component :is="Component" />
    </Transition>
  </RouterView>

  <TheFooter id="app-footer" :class="{ landing: route_name === 'landing' }" />
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition:
    opacity
    var(--view-transition-duration)
    var(--view-transition-ease);
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
#app-header {
  height: var(--header-height);
  width: 100vw;
  width: 100dvw;
}
#app-main {
  flex-grow: 999;
  margin-top: var(--header-height);
}
#app-main:not(.landing) {
  flex-grow: 1;
  padding-top: var(--padding-inline);
}
#app-header,
#app-footer {
  opacity: 1;
  transition: opacity var(--view-transition-duration);
  transition-timing-function: var(--view-transition-ease);
  transition-delay: var(--view-transition-duration);
}
#app-header.landing,
#app-footer.landing {
  opacity: 0;
  transition-delay: 0ms;
}

@media (min-width: 60rem) {
  #app-main:not(.landing) {
    padding-top: var(--step-3);
  }
}
</style>

