<template>
  <li class="li-rich" :class="embellishClass">
    <div class="li-rich-content">
      <slot />
    </div>

    <div v-if="link" class="li-rich-link">
      <a :href="link" target="_blank">Check Out a Sample</a>
    </div>
  </li>
</template>

<script setup lang="ts">
const props = defineProps({
  link: String,
  type: String,
});

const embellishClass = computed(() => ({
  em_js: props.type === 'JS',
  em_html: props.type === 'HTML',
  em_css: props.type === 'CSS',
  em_ts: props.type === 'TS',
  em_ng: props.type === 'Angular',
  em_react: props.type === 'React',
  em_vue: props.type === 'Vue',
  em_node: props.type === 'Node',
  em_express: props.type === 'Express',
}));
</script>

<style scoped>
/* 
How this all works:
  - each content type that gets a special color has its own class below containing a definition for --deco-hsl
  - that value's default gets overwritten by elements with such a class
  - we just pass in the H & S values, then pick our own lightness
*/
.li-rich {
  --deco-hsl: var(--hs-secondary) 65%;
  /* background: linear-gradient(135deg, var(--c-secondary) 30%, hsl(var(--hs-secondary) 65%)); */
  background: var(--c-secondary);
  border-left: 0.25rem solid hsl(var(--deco-hsl));
  border-radius: 0.5rem;
  box-shadow: var(--bs);
  display: flex;
  margin-bottom: 0.75rem;
  position: relative;
  inset: 0 0 0 0;
  transition: all 200ms ease-in;
}
.li-rich::after {
  content: '';
  min-height: 100%;
  aspect-ratio: 1;
  position: absolute;
  top: 0;

  background: linear-gradient(90deg, hsl(var(--deco-hsl)), hsl(var(--hs-secondary) 85% / .75));
  border-top-left-radius: 0.25rem;
  border-bottom-left-radius: 0.25rem;
  clip-path: inset(0 100% 0 0);
  transition: clip-path 200ms ease-in;
}
.li-rich:hover {
  inset: -0.25rem 0 0 -0.25rem;
}
.li-rich:hover::after {
  clip-path: inset(0 0 0 0);
}
.li-rich-content {
  padding: 0.5rem 2rem;
  flex: 1;
  position: relative;
  z-index: 1;
}
.li-rich-link {
  align-self: center;
  font-style: italic;
  padding-inline: 2rem;
}

.em_js { --deco-hsl: 53 93% 54%; }
.em_html { --deco-hsl: 18 88% 55%; }
.em_css { --deco-hsl: 331 51% 60%; }
.em_ts { --deco-hsl: 211 60% 48%; }
.em_ng { --deco-hsl: 347 100% 43%; }
.em_react { --deco-hsl: 195 82% 44%; }
.em_vue { --deco-hsl: 153 47% 49%; }
.em_node { --deco-hsl: 98 38% 56%; }
.em_express { --deco-hsl: 0 0% 33%; }
</style>
