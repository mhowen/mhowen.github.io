<script setup lang="ts">
/* Use this toggle if any or all of the following hold:
 *   1. Flipping it only has an effect when the user submits something
 *   2. The toggle may have an indeterminate state
 *   3. You can't count on JavaScript beyond the initial mount
*/
import IconConfirm from "@/components/icons/IconConfirm.vue";
import IconReject from "@/components/icons/IconReject.vue";

defineProps({
  label: {
    type: String,
    default: "Label for a toggle",
  },
})
</script>

<template>
  <label class="toggle" for="toggle">
    <input type="checkbox" id="toggle" class="toggle__input" />
    
    <span class="toggle__display" hidden>
      <slot name="icon_active">
        <IconConfirm class="toggle__icon toggle__icon--confirm"/>
      </slot>
      <slot name="icon_inactive">
        <IconReject class="toggle__icon toggle__icon--reject" />
      </slot>
    </span>
    {{ label }}
  </label>
</template>

<style scoped>
.toggle {
  display: inline-flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1ch;
  position: relative;
}
.toggle__input {
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
}
.toggle__input:focus + .toggle__display {
  outline: 0.125em dotted var(--clr-accent-soft);
  outline-offset: 0.125em;
  transition-duration: 0ms;
}
.toggle__input:focus:not(:focus-visible) + .toggle__display {
  outline: 0;
}
.toggle__input:checked + .toggle__display {
  background-color: #e3f5eb;
}
.toggle__input:checked + .toggle__display::before {
  transform: translate(100%, -50%);
}
.toggle__input:disabled + .toggle__display {
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

@media (prefers-reduced-motion: reduce) {
  .toggle__display {
    transition-duration: 0ms;
  }
}
</style>

