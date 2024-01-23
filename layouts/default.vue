<script setup>
const is_fading = ref(false); // while true, warning transitions to opacity 0
const is_cleared = ref(false); // once true, warning ceases to render altogether

function clearWarning() {
  is_fading.value = true;
  setTimeout(() => is_cleared.value = true, 1000);
}

const date = new Date();
const formatter = new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' });
const warningDate = ref(formatter.format(date) || 'January 2024'); // incl. emergency hardcoded fallback
</script>

<template>
  <div class="layout-default">
    <div class="warning" :class="{ fading: is_fading && !is_cleared, cleared: is_cleared }">
      <div class="warning-contents">
        <p>
          Hey there! If you're reading this, you're early—this site remains under construction as of <span style="color: var(--c-accent); font-weight: 700">{{ warningDate }}</span>. Some things aren't yet fully implemented or bug-tested, so proceed at your own risk for now.
        </p>
        <button class="btn btn-accent" @click="clearWarning">Gotcha</button>
      </div>
    </div>

    <TheHeader />
    
    <slot />

    <TheFooter />
  </div>
</template>

<style scoped>
.warning {
  background-color: #4e2763aa;
  backdrop-filter: blur(1rem);
  min-width: 100%;
  padding: 1em;
  position: fixed;
  top: 6rem;
  z-index: 999;

  opacity: 1;
  transition: opacity 1000ms;
}
.warning.fading { opacity: 0 }
.warning.cleared { display: none }
.warning-contents {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin-inline: auto;
  max-width: var(--dw-content);
}
.warning-contents > p {
  max-width: none;
  text-align: center;
}

.layout-default {
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  min-height: 100dvh;
  position: relative;
  padding-bottom: 4rem;
}
.layout-default::before {
  animation: layout-bg 10s infinite alternate;
  background-image: var(--g-matching);
  background-size: 200%;
  content: '';
  inset: 0;
  position: absolute;
  z-index: -9999;
}
@keyframes layout-bg {
  0% { background-position: left }
  100% { background-position: right }
}
</style>
