<script setup>
defineProps({
  column: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String,
    required: true,
  }
});
</script>

<template>
  <div class="with-icon" :class="{ 'with-icon-col': column }">
    <Icon :name="icon" height="2rem" width="2rem" />
    <div class="with-icon__slot">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.with-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
}
.with-icon-col {
  flex-direction: column;
}
.with-icon > svg {
  color: var(--c-accent);
  min-height: 2rem;
  min-width: 2rem;
}
.with-icon:not(.with-icon-col) > .with-icon__slot {
  flex: 1;
}
</style>
