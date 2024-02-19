<script setup>
defineProps({
  deviceXY: {
    type: Array,
    required: true,
  }
});
</script>

<template>
  <div class="layout"
    :style="{
      '--dx': deviceXY[0],
      '--dy': deviceXY[1],
    }"
  >
    <div class="home">
      <div class="home-text">
        <h1 class="home-heading italic uppercase">store.biz</h1>
        <p class="home-tagline">
          <span class="fw-bold uppercase">Lorem</span>
          <span class="italic"> made </span>
          <span class="fw-bold uppercase">Ipsum</span>
        </p>
      </div>
      <div class="home-buttons">
        <button class="uppercase">Try Now</button>
        <button class="uppercase">Learn More</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.layout {
  --dy-max: calc(100vh - var(--dh-header) - var(--dh-footer));
  --dx: 100vw;
  --dy: var(--dy-max);
  --pad-x: calc((100vw - var(--dx)) / 2);
  --pad-y: calc((var(--dy-max) - var(--dy)) / 2);
  display: grid;
  grid-template-columns: var(--pad-x) 1fr var(--pad-x);
  grid-template-rows: var(--pad-y) 1fr var(--pad-y);

  transition: all 500ms ease-in;
} .layout > * { grid-column: 2; grid-row: 2; }

.home {
  --clr-primary: hsl(214 100% 56%);
  --clr-alt: hsl(var(--hs-accent-alt) 51%);
  --clr-muted: hsl(214 50% 56%);
  --clr-mutest: #606060;
  --clr-white: #fefefe;
  --clr-black: #141414;
  max-height: var(--dy);
  container: cnt-homelayout / inline-size;
  display: grid;
  place-content: center;
  overflow: hidden auto;
  transition: max-height 500ms ease-in;

  background-color: hsl(var(--hs-card) 60%);
  background-blend-mode: multiply;
  background-image: url("~/assets/img/chait-goli-phone-1440.png");
  background-position: center;
  background-size: cover;
  text-align: center;
}
.home-text::before {
  content:'';
  backdrop-filter: blur(0.25rem);
  background-color: hsl(214 40% 36% / 0.125);
  filter: blur(1rem);
  position: absolute;
  min-width: 125%;
  left: -12.5%;
  min-height: 25rem;
  transform: translateY(-2.5rem);
  z-index: -1;
}
.home-heading {
  font-size: clamp(3rem, 18cqw + 0.125rem, 12rem);

  text-shadow: 2px 2px 1px var(--clr-alt);
}
.home-tagline {
  font-size: clamp(1.5rem, 9cqw + 0.125rem, 4rem);
}
.home-tagline > span:not(:nth-child(2)) {
  text-shadow: 2px 2px 1px var(--clr-primary);
}
.home-buttons {
  margin-top: 3rem;
}
.home-buttons > button {
  font-size: clamp(1.5rem, 4cqw + 0.125rem, 2.25rem);
  margin: 0.5rem 1rem;
  min-width: min(25rem, calc(100% - 2rem));
  padding: 0.5rem 1rem;
}
</style>

