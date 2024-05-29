<script setup lang="ts">
import { computed } from "vue";

defineProps({
  label: {
    type: String,
    default: "Badge Label",
  },
  href: {
    type: String,
  },
});

const isExternalLink = computed(() => {
  return typeof props.to === 'string' && props.to.startsWith('http');
});
</script>

<template>

  <!-- <RouterLink :to="href" class="badge">
    <div class="badge__slot">
      <slot />
    </div>
    <span class="badge__label">{{ label }}</span>
  </RouterLink> -->
</template>

<style scoped>

</style>

