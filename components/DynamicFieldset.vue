<script setup>
defineProps({
  legend: {
    type: String,
    default: 'Peep this fieldset:',
  },
  options: {
    type: Array,
    required: true,
  },
  default_option: {
    type: String,
  },
});

const selection = defineModel();
</script>

<template>
  <fieldset class="dfs">
    <legend class="dfs-legend"> {{ legend }} </legend>

    <ul class="dfs-options">
      <li v-for="opt in options" :key="opt" class="styled-input option">
        <label :for="opt" class="option-label"> {{ opt }} </label>
        <input
          type="radio" 
          :id="opt"
          :value="opt"
          v-model="selection" 
          class="option-radio" />
      </li>

      <li v-if="default_option" class="styled-input option">
        <label for="uncategorized" class="option-label"> {{ default_option }} </label>
        <input
          type="radio" 
          id="uncategorized" 
          value="uncategorized" 
          v-model="selection" 
          class="option-radio" />
      </li>
    </ul>
  </fieldset>
</template>

<style scoped>
.dfs {
  background-color: var(--c-secondary);
  margin-inline: auto;
  padding-block: 1em;
}
.dfs-legend {
  color: var(--c-accent);
  margin-inline: auto;
  text-align: center;
}
.dfs-options {
  display: grid;
  gap: 1em;
  list-style: none;
  padding-inline-start: 0;
}
.option {
  display: flex;
  flex-direction: row-reverse;
  gap: 0.5em;
  align-items: center;
  justify-self: flex-start;
  padding-inline: 1em;
}

@media (min-width: 30rem) {
  .dfs-options {
    grid-template-columns: 1fr 1fr;
  }
  .dfs-options > .option:last-of-type {
    grid-column: span 2;
  }
}
</style>
