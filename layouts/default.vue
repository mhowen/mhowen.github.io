<script setup>
const warningDate = ref('December 2023');
const warningDismissed = ref(false);

</script>

<template>
  <div class="layout-default">
    <div class="warning" :class="{ displayed: !warningDismissed }">
      <div class="warning-contents">
        <p>
          Hey there! If you're reading this, you're early—this site remains under construction as of <span style="color: var(--c-accent); font-weight: 700">{{ warningDate }}</span>. Some things aren't yet fully implemented or bug-tested, so proceed at your own risk for now.
        </p>
        <button class="btn btn-accent" @click="warningDismissed = true">Gotcha</button>
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

  opacity: 0;
  transition: opacity 1s ease;
}
.warning.displayed {
  opacity: 1;
}
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
  animation: layout-bg 10s infinite alternate;
  background-image: var(--g-matching);
  background-size: 200%;
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  min-height: 100dvh;
}
@keyframes layout-bg {
  0% { background-position: left }
  100% { background-position: right }
}
</style>
