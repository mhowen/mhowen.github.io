<script setup>
defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
  labelHierarchy: {
    type: Number,
    default: 4,
  },
  label: String,
});
const is_expanded = ref(false);
</script>

<template>
  <div v-if="disabled">
    <slot />
  </div>

  <div
    v-else
    class="accordion"
    :class="{ expanded: is_expanded }">
    <div
      v-if="label"
      class="accordion-label"
      @click="is_expanded = !is_expanded">
        <span
          :id="label.replace(' ', '_')"
          class="accordion-label__heading">
          <h2 v-if="labelHierarchy === 2">{{ label }}</h2>
          <h3 v-else-if="labelHierarchy === 3">{{ label }}</h3>
          <h4 v-else>{{ label }}</h4>
        </span>
        <Icon class="accordion-label__icon" name="solar:map-arrow-left-bold" />
    </div>

    <button
      v-else
      class="accordion-ctrl"
      @click="is_expanded = !is_expanded">
      <Icon class="accordion-ctrl__icon" name="solar:map-arrow-right-bold" />
      <span class="accordion-ctrl__label">{{ is_expanded ? 'Collapse' : 'Expand' }}</span>
    </button>

    <div class="accordion-content">
      <div class="accordion-content__slot">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.accordion-label {
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: underline;
  user-select: none;
}
.accordion-label__heading {
  margin-inline-start: 0%;
  transform: translateX(0%);
  transition: all 500ms ease-in-out;
}
.accordion-content {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 500ms ease-in-out;
  overflow: hidden;
}
.accordion-content__slot {
  min-height: 0;
}
.accordion-ctrl {
  min-width: 100%;
  text-align: left;
}
.accordion-ctrl__icon,
.accordion-label__icon {
  rotate: 0deg;
  transition: rotate 500ms ease-in-out;
}
.accordion.expanded .accordion-label__heading {
  margin-inline-start: 50%;
  transform: translateX(-50%);
}
.accordion.expanded .accordion-ctrl__icon {
  rotate: 90deg;
}
.accordion.expanded .accordion-label__icon {
  rotate: -90deg;
}
.accordion.expanded .accordion-content {
  grid-template-rows: 1fr;
}
</style>
