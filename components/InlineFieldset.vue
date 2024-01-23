<script setup>
defineProps({
  legend: {
    type: String,
    required: true,
  },
  options: {
    type: Array,
    required: true,
  },
  disabled: {
    type: Boolean,
    default: false,
  }
})

const selection = defineModel();
</script>

<template>
  <fieldset class="ifs" :class="{ disabled: disabled }">
    <legend class="ifs-legend visually-hidden"> {{ legend }} </legend>
    
    <p class="ifs-label sr-hidden"> {{ legend }} </p>

    <ul class="ifs-inputs">
      <li
        v-for="(opt, index) in options"
        class="styled-input"
      >
        <label :for="'ifs-' + opt"> {{ opt }} </label>
        <input
          :id="'ifs-' + opt"
          :value="opt"
          :checked="index === 0"
          :disabled="disabled"
          type="radio"
          v-model="selection"
        />
      </li>
    </ul>
  </fieldset>
</template>

<style scoped>
.ifs {
  border: none;
}
.ifs-inputs {
  display: flex;
  gap: 2.5rem;
  justify-content: center;
  list-style: none;
  padding-inline-start: 0;
  padding: 0.25rem;
}
.ifs-inputs > .styled-input {
  display: flex;
  flex-direction: row-reverse;
  gap: 0.5rem;
  align-items: center;
  text-transform: capitalize;
}
.ifs-label {
  color: var(--c-accent);
  text-align: center;
}
.ifs.disabled {
  filter: grayscale();
  opacity: 0.25;
}
</style>

