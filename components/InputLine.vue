<script setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
  inputType: {
    type: String,
    default: 'text',
  },
  maxlength: {
    type: String,
    default: '256',
  },
  minlength: {
    type: String,
    default: '0',
  },
  placeholder: {
    type: String,
    default: '',
  },
  required: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

const input_value = defineModel();
</script>

<template>
  <div class="inputline" :class="{ disabled: disabled }">
    <label :for="label" class="label"> {{ label }} </label>
    <input
      :id="label"
      :type="inputType"
      :maxlength="maxlength"
      :minlength="minlength"
      :placeholder="placeholder"
      :disabled="disabled"
      :required="required"
      class="input"
      v-model="input_value"
    />
  </div>
</template>

<style scoped>
.label {
  color: var(--c-accent);
  text-align: center;
}
.input {
  appearance: none;
  background-color: var(--c-secondary);
  color: var(--c-text);
  padding: 0.5rem 1rem;
}
.input::placeholder {
  font-style: italic;
}
.inputline.disabled {
  filter: grayscale();
  opacity: 0.25;
}
</style>

