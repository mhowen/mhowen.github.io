<script setup lang="ts">
/* Use this toggle if _all three_ of the following hold:
 *   1. You can count on JS being available all the time
 *   2. Flipping the toggle has an immediate effect
 *   3. The toggle _never_ has an indeterminate state
*/

import { ref } from "vue";
import IconConfirm from "@/components/icons/IconConfirm.vue";
import IconReject from "@/components/icons/IconReject.vue";

const props = defineProps({
  label: {
    type: String,
    default: "Label for a toggle",
  },
  start_checked: {
    type: Boolean,
    default: false,
  },
})

const is_checked = ref(props.start_checked);

function do_toggle() {
  // TODO: pass a function as a prop that gets lazily called here

  is_checked.value = !is_checked.value;
}
</script>

<template>
  <button
    :aria-pressed="is_checked"
    ref="toggle"
    class="toggle"
    type="button"
    @click="do_toggle"
  >
    <span class="toggle__display" hidden>
      <slot name="icon_active">
        <IconConfirm class="toggle__icon toggle__icon--confirm"/>
      </slot>
      <slot name="icon_inactive">
        <IconReject class="toggle__icon toggle__icon--reject" />
      </slot>
    </span>
    {{ label }}
  </button>
</template>

<style scoped>
.toggle {
  border: 0;
  padding: 0;
  margin: 0;
  background: transparent;
  color: inherit;
  font: inherit;
}
.toggle:focus {
  outline: 0;
}
.toggle:focus:not(:focus-visible) .toggle__display {
  outline: 0;
}
.toggle[aria-pressed="true"] .toggle__display {
  background-color: #e3f5eb;
}
.toggle[aria-pressed="true"] .toggle__display::before {
  transform: translate(100%, -50%);
}
.toggle[disabled] .toggle__display {
  cursor: not-allowed;
  filter: grayscale(40%);
  opacity: 0.6;
}
.toggle__display {
  --offset: 0.25em;
  --diameter: 1.8em;
  --border-width: 0.125rem;

  display: inline-flex;
  align-items: center;
  justify-content: space-around;

  width: calc(
    var(--diameter) * 2
    + var(--offset) * 2
    + var(--border-width) * 2
  );
  height: calc(var(--diameter) + var(--offset) * 2);
  margin-inline-end: 0.4rem;
  position: relative;

  border: 0.125rem solid var(--clr-text);
  border-radius: 100vw;
  cursor: pointer;
  transition: 250ms ease-in;
}
.toggle__display::before {
  content: "";

  width: var(--diameter);
  height: var(--diameter);
  position: absolute;
  top: 50%;
  left: var(--offset);
  z-index: 2;
  
  background-color: #fff;
  border: 0.125rem solid var(--clr-background-75);
  border-radius: 50%;
  transform: translate(0, -50%);
  transition: inherit;
}
.toggle:focus .toggle__display {
  outline: 0.125em dotted var(--clr-focus-outline);
  outline-offset: 0.125em;
}
.toggle__icon {
  display: inline-block;
  width: 1em;
  height: 1em;
  color: inherit;
  fill: currentColor;
  vertical-align: middle;
}
.toggle__icon--confirm {
  color: #1fb978;
}
.toggle__icon--reject {
  color: #e74c3c;
  font-size: 85%;
}
</style>

