<script setup>
definePageMeta({ layout: false }); // no need for Header and Footer on this page

const labelFadeTimer = ref(1.0); // bound to inline opacity of the label span

// fade out label, then enter site proper after waiting long enough for animations to finish
function enter() {
  if (labelFadeTimer.value < 1.0) return; // prevent more than one from existing at a time

  const interval = setInterval(() => {
    labelFadeTimer.value -= 0.02;

    if (labelFadeTimer.value <= 0) {
      clearInterval(interval);
      delayedNav();
    }
  }, 10);
}

function delayedNav() {
  const delay = 1000; // in ms; should match transition duration in the css rules

  setTimeout(() => navigateTo('/about'), delay);
}
</script>

<template>
  <div class="landing">
    <div
    class="landing-graphic"
    :class="{ animating: labelFadeTimer <= 0 }"
    role="button"
    @click="enter">
      <TheLogo class="logo" />
      <span
        class="label"
        :style="{ opacity: labelFadeTimer }"
      >ENTER</span>
    </div>

    <div class="landing-a11y">
      <TheThemeToggle />
      <div class="motion-toggle">
        <label for="reduced-motion">Reduced Motion</label>
        <input id="reduced-motion" type="checkbox" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.landing-graphic {
  --d-max: calc(var(--d-app-header-height) * var(--logo-scalar));
  --d-min: var(--d-app-header-height);
  --logo-scalar: 4;

  cursor: pointer;
  aspect-ratio: 1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 1000ms;
}
.landing-a11y {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: absolute;
  top: 65%;
  left: 50%;
  transform: translateX(-50%);
}
.landing-graphic:hover {
  color: var(--c-accent);
}
.landing-graphic:hover .logo {
  stroke: var(--c-accent);
}
.landing-graphic.animating {
  top: 0;
  left: 1rem;
  transform: initial;
}
.landing-graphic.animating .logo {
  width: var(--d-min);
  height: var(--d-min);
}
.label {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-family: var(--ff-mono);
  font-size: var(--fs-h1);
  font-weight: var(--fw-bold);
  user-select: none;
}
.logo {
  padding: 0.25rem;
  width: var(--d-max);
  height: var(--d-max);
  transition: all 1000ms;
}
</style>
