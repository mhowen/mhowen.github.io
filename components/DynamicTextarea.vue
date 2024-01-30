<script setup>
defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
  required: {
    type: Boolean,
    default: false,
  },
  rows: {
    type: Number,
    default: 6,
  },
  placeholder: {
    type: String,
    default: 'Your response here...',
  },
});

const inputValue = defineModel();
</script>

<template>
  <div class="dtextarea">
    <label for="dta">
      <slot />
    </label>
    <textarea
      id="dta"
      v-model="inputValue"
      :placeholder="placeholder"
      :rows="rows"
      :disabled="disabled"
    >
    </textarea>
  </div>
</template>

<style scoped>
.dtextarea {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
#dta {
  appearance: none;
  background-color: var(--c-secondary);
  color: var(--c-text);
  padding: 0.5rem 1rem;
}
#dta[disabled] {
  filter: grayscale();
  opacity: 0.25;
}
#dta::placeholder {
  font-style: italic;
}
</style>
