<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
  delay_ms: {
    type: Number,
    default: 2500,
  },
});

const line0 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus semper velit mauris, sed vestibulum lacus posuere sed. Praesent mauris urna, placerat quis dignissim nec, vulputate vitae ante.";
const line1 = "Praesent mauris urna, placerat quis dignissim nec, vulputate vitae ante. Phasellus eu metus nec tortor tincidunt elementum eget ac arcu. Pellentesque suscipit mi erat, consectetur posuere ex iaculis ac.";
const line2 = "Ut rutrum semper leo, ut lobortis augue sagittis quis. Mauris ut convallis odio. Integer vulputate sem ut suscipit euismod. Pellentesque suscipit mi erat, consectetur posuere ex iaculis ac.";

const get_random = () => Math.round(Math.random() * 5);
const rand = ref(get_random());
const set_rand = () => rand.value = get_random();

setInterval(set_rand, props.delay_ms);
</script>

<template>
  <div class="ww" aria-hidden="true">
    <p class="ww__row mb-s">
      <span v-for="w in line0.split(' ')" :key="w"
        class="ww__row__word"
        :class="{ lit: get_random() == rand }"
      >{{ w }}</span>
    </p>
    <p class="ww__row mb-s">
      <span v-for="w in line1.split(' ')" :key="w"
        class="ww__row__word"
        :class="{ lit: get_random() == rand }"
      >{{ w }}</span>
    </p>
    <p class="ww__row">
      <span v-for="w in line2.split(' ')" :key="w"
        class="ww__row__word"
        :class="{ lit: get_random() == rand }"
      >{{ w }}</span>
    </p>
  </div>
</template>

<style scoped>
.ww {
  line-height: 0.9;
  position: relative;
  overflow: hidden;

  font-family: 'Exo 2', Oswald;
  font-size: calc(var(--step-1) * var(--halfstep));
  font-weight: 200;
  text-transform: uppercase;
  text-wrap: nowrap;
  user-select: none;
}
.ww__row__word {
  color: var(--clr-text-soft-50);
  margin-inline-end: var(--gap-s);
  transition: color 1000ms ease-in;
}
.ww__row__word.lit {
  color: var(--clr-accent-soft);
}
</style>

