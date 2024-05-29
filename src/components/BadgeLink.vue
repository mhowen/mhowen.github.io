<script setup lang="ts">
/* This component is only for external links */

defineProps({
  label: {
    type: String,
    default: "Badge Label",
  },
  href: {
    type: String,
    default: "/",
  },
});
</script>

<template>
  <a class="badgelink" :href="href">
    <div class="badgelink__slot">
      <slot />
    </div>
    {{ label }}
  </a>
</template>

<style scoped>
.badgelink {
  --icon-sidelength: 2.5em;

  display: flex;
  align-items: center;
  gap: var(--gap-m);
}
.badgelink.circled > .badgelink__slot {
  border: 0.125em solid;
  border-color: var(--clr-text-soft);
  border-radius: 100vw;
  transition: border-color 250ms ease-in;
}
.badgelink.circled:hover > .badgelink__slot {
  border-color: var(--clr-accent-soft);
}
.badgelink__slot {
  height: var(--icon-sidelength);
  width: var(--icon-sidelength);
}
.badgelink__slot > :first-child {
  width: 100%;
  height: 100%;
}
</style>

