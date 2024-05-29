<script setup lang="ts">
import { useRouter } from 'vue-router';
import TheLogo from '@/components/TheLogo.vue';
// import ActiveToggle from '@/components/ActiveToggle.vue';

const router = useRouter();

function enter() {
  router.push({ name: 'home' });
}
</script>

<template>
  <main class="landing">
    <div class="controls">
      <button class="controls__enterbtn" @click="enter">
        <TheLogo class="logo" />
        <p class="mb-s">Enter</p>
      </button>
    </div>
  </main>
</template>

<style scoped>
.landing {
  display: grid;
  place-items: center;
}
.controls {
  position: fixed;
}
.controls__enterbtn {
  background: transparent;
  border: 0;
  color: inherit;
  cursor: pointer;
  transition: color 500ms ease-in;
}
.controls__enterbtn:hover {
  color: var(--clr-accent);
}
.logo {
  --sidelength: min(35vh, 100vw - 2 * var(--padding-inline));
  height: var(--sidelength);
  width: var(--sidelength);
}
.controls__enterbtn > p {
  font-family: Oswald, Inter;
  font-size: var(--step-4);
  font-weight: 200;
  line-height: 0.9;
  text-align: center;
  text-transform: uppercase;
}

h1 {
  font-size: var(--step-4);
}
</style>

