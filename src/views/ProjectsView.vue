<script setup lang="ts">
import rwd_fallback from "@/assets/img/proj_rwd_fb.png";
</script>

<template>
  <main class="fw-grid">
    <h1>
      <div class="mb-xs uppercase">Harry Owen</div>
      <div class="fs-2">Portfolio</div>
    </h1>
    <section class="mb-step-3">
      <p class="mb-l">
        This page was last updated on
        <span class="date">29 May 2024</span>.</p>
      <p class="mb-l">
        Welcome! Below is a rotating selection of projects and demonstrations
        that I consider good reflections of my talents as of when this page
        was last updated. All of the designs, code, and graphical
        assets are exclusively my own original work except where otherwise noted
        and attributed. All of it is open-source—each page includes one or more 
        external links to the relevant source code.
      </p>
    </section>
    <section class="mb-step-4">
      <h2>Web Design</h2>
      <div class="tile-grid mb-step-3">
        <button class="tile"
          @click="() => $router.push({ path: '/projects/responsive_design_sandbox' })"
        >
          <h3 class="tile__title">
            <div>Demo</div>
            <div>Responsive Design Sandbox</div>
          </h3>
          <p class="tile__desc">
            A guided introduction to the principles of Responsive Web Design
          </p>
          <img class="tile__img"
            :src="rwd_fallback"
            alt="Background image demonstrating device simulation functionality"
          />
        </button>
        <button class="tile coming-soon">
          <h3 class="tile__title">
            <div>Demo</div>
            <div>Modern API Consumption</div>
          </h3>
          <p class="tile__desc visually-hidden">
            Coming Soon!
          </p>
        </button>
      </div>
      <h2>Software Development</h2>
      <div class="tile-grid mb-step-3">
        <button class="tile coming-soon">
          <h3 class="tile__title">
            <div>Project</div>
            <div>TeX Picker</div>
          </h3>
          <p class="tile__desc visually-hidden">
            Coming Soon!
          </p>
        </button>
        <button class="tile coming-soon">
          <h3 class="tile__title">
            <div>Demo</div>
            <div>Qtile for Web Dev</div>
          </h3>
          <p class="tile__desc visually-hidden">
            Coming Soon!
          </p>
        </button>
      </div>
    </section>
  </main>
</template>

<style scoped>
p {
  max-width: 35em;

  font-size: calc(var(--step-0) * var(--halfstep));
}
.date {
  color: var(--clr-accent-soft);
  font-weight: 700;
}
.tile-grid {
  display: flex;
  flex-wrap: wrap;
  gap: var(--gap-l);
}
.tile {
  --padding: var(--gap-s);

  flex-basis: 25rem;
  flex-grow: 1;
  max-width: 25rem;
  aspect-ratio: 1;
  position: relative;

  background-color: transparent;
  border: 0.125em solid var(--clr-text-soft);
  color: var(--clr-text);
  text-align: initial;
}
.tile.coming-soon {
  color: #ababab40;
}
.tile.coming-soon::after {
  content: "COMING SOON";
  position: absolute;
  min-width: 100%;
  top: 45%;
  transform: rotateZ(-45deg);

  color: var(--clr-accent-soft);
  font-size: var(--step-2);
  font-weight: 700;
  text-align: center;
}
.tile__img {
  position: absolute;
  max-width: 100%;
  max-height: 100%;
  top: 0;
  z-index: -1;
  opacity: 1.0;
  transition: opacity 500ms ease-in;
}
.tile__title {
  min-height: 100%;
  position: relative;
}
.tile__title > * {
  background-color: var(--clr-background-75);
  padding: var(--padding);
}
.tile__title > :first-child {
  border-bottom: 1px solid currentColor;
  text-transform: uppercase;
}
.tile__title > :last-child {
  position: absolute;
  bottom: 0;
}
.tile__desc {
  background-color: var(--clr-background-75);
  padding: var(--gap-xl) var(--padding);
  position: absolute;
  font-size: var(--step-0);
  text-align: center;
  top: 50%;
  min-width: 100%;
  transform: translateY(-50%);
  opacity: 0.0;
  transition: opacity 500ms ease-in;
  user-select: none;
}
.tile:focus-visible,
.tile:hover {
  cursor: pointer;
}
.tile:focus-visible > .tile__img,
.tile:hover > .tile__img {
  opacity: 0.25;
}
.tile:not(.coming-soon):focus-visible > .tile__desc,
.tile:not(.coming-soon):hover > .tile__desc {
  opacity: 1.0;
}
</style>

