<script setup lang="ts">
import IconNavigateInternal from "@/components/icons/IconNavigateInternal.vue";
import IconNavigateExternal from "@/components/icons/IconNavigateExternal.vue";

defineProps({
  href: {
    type: String,
    default: '/',
  },
});
</script>

<template>
  <button v-if="href[0] === '/'"
    class="btn fs-0-50"
    @click="$router.push({ path: href })"
  >
    <span class="btn__label ff-oswald"><slot /></span>
    <IconNavigateInternal />
  </button>
  <a v-else
    class="btn fs-0-50"
    :href="href"
  >
    <span class="btn__label ff-oswald"><slot /></span>
    <IconNavigateExternal />
  </a>
</template>

<style scoped>
.btn {
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: linear-gradient(transparent, currentColor);
  border: solid var(--clr-accent-soft);
  border-width: 0 0 0.125em 0;
  color: transparent;
  font-weight: 400;
  text-decoration: 0;
  transition: color 250ms ease-in;
}
.btn > * {
  color: var(--clr-text-soft);
  transition: inherit;
}
.btn > svg {
  font-size: 1.25em;
  margin-inline-start: var(--gap-s);
}
.btn:hover,
.btn:focus-visible {
  color: var(--clr-accent-soft);
}
.btn:hover > *,
.btn:focus-visible > * {
  color: var(--clr-text);
}
</style>

