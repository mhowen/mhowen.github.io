<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="expview">
    <h3 class="expview-heading c-accent uppercase"> {{ title }} </h3>
    
    <p class="expview-body fs-1">
      <slot />
    </p>

    <div class="expview-controls fs-1">
      <button class="btn hover-glow">Demos</button>
      <button class="btn hover-glow">My Work</button>
      <button class="btn hover-glow">Get More Info</button>
    </div>
  </div>
</template>

<style scoped>
.expview {
  max-width: min(60rem, 100%);
}
.expview-heading,
.expview-body,
.expview-controls > .btn {
  background-color: var(--c-card);
  border: 1px solid hsl(var(--hs-card) 26%);
  border-radius: 0;
  font-weight: 200;
  padding: 1rem clamp(1rem, 2vw + 0.125rem, 2rem);
}
.expview-heading {
  border-bottom: 0.5rem solid var(--c-accent);
  position: relative;
}
.expview-body {
  margin-block: 1rem;
}
.expview-controls {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}
.expview-controls > .btn {
  flex: 1;
  letter-spacing: 0.125rem;
  text-transform: uppercase;
}
.expview-controls > .btn:last-of-type {
  flex-basis: 100%;
}

.expview-heading::before {
  background-color: var(--c-accent);
  content: '';
  filter: blur(3rem);
  inset: 50% 0 -3rem 0;
  position: absolute;
  z-index: -1;
}
</style>
