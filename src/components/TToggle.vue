<script setup lang="ts">
import { onMounted, ref } from 'vue';
import IconConfirm from '@/components/icons/IconConfirm.vue';
import IconReject from '@/components/icons/IconReject.vue';

defineProps({
  is_button: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
    default: "Label for a toggle",
  },
});

const toggle = ref<HTMLButtonElement | HTMLInputElement | null>(null)

const is_checked = ref(false);

function do_toggle() {
  console.log(`toggling from ${is_checked.value} to ${!is_checked.value}`)
  // is_checked.value = !is_checked.value;
}

/* If toggle mounts as a button:
 *   - Remove extraneous "for" attribute, since it has no corresponding label
 *   - Add "aria-pressed='false'" for a11y
 */
onMounted(() => {
  if (toggle.value?.nodeName == "BUTTON") {
    toggle.value.removeAttribute("for");
    // toggle.value.setAttribute("aria-pressed", "false");
  }
})
</script>

<template>
  <component
    :is="is_button ? 'button' : 'label'"
    @click="do_toggle"
    class="toggle"
    for="toggle"
    ref="toggle"
  >
    <p>State: {{ is_checked }}</p>
    <input v-if="!is_button" class="toggle__input"
      type="checkbox"
      name="toggle"
      id="toggle"
    />

    <span
      :class="{ checked: is_checked }"
      class="toggle__display"
      hidden
    >
      <IconConfirm class="toggle__icon toggle_icon--confirm"/>
      <IconReject class="toggle__icon toggle__icon--reject" />
    </span>
    {{ label }}
  </component>
</template>

<style scoped>
.toggle {
  display: inline-flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1ch;
  position: relative;

  background: transparent;
  border: none;
  color: var(--clr-text);
  font-family: Oswald, Inter;
  padding: 0;
  text-transform: uppercase;
}
.toggle__input {
  /* sits atop toggle and is clickable/focusable, but is totally invisible */
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
}
.toggle__input:focus + .toggle__display {
  /* give default browser outline style to focused input... */
  outline: 1px dotted #212121;
  outline: 1px auto -webkit-focus-ring-color;
}
.toggle__input:focus:not(:focus-visible) + .toggle__display {
  /* ...unless this was a mouse-click and we don't expect such a thing */
  outline: 0;
}
.toggle__input:checked + .toggle__display {
  background-color: #e3f5eb;
}
.toggle__input:checked + .toggle__display::before {
  transform: translate(100%, -50%);
}
.toggle[disabled] > .toggle__display {
  cursor: not-allowed;
  filter: grayscale(40%);
  opacity: 0.6;
}
.toggle__display {
  --offset: 0.25em;
  --diameter: 1.8em;
  --border-width: 0.1em;

  display: inline-flex;
  align-items: center;
  justify-content: space-around;

  width: calc( var(--diameter) * 2
    + var(--offset) * 2
    + var(--border-width) * 2
  );
  height: calc(var(--diameter) + var(--offset) * 2);

  border: 0.125rem solid var(--clr-text);

  position: relative;
  border-radius: 100vw;
  background-color: #fbe4e2;
  color: var(--clr-background);

  transition: 250ms ease-in;
  cursor: pointer;
}
.toggle__display::before {
  content: "";

  width: var(--diameter);
  height: var(--diameter);
  border-radius: 50%;

  border: 0.125rem solid rgb(0 0 0 / 0.2);

  position: absolute;
  z-index: 2;
  top: 50%;
  left: var(--offset);
  transform: translate(0, -50%);

  background-color: #fff;
  transition: inherit;
}
.toggle__icon {
  color: inherit;
  width: 1em;
  height: 1em;
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

