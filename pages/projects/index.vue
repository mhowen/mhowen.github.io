<script setup>

</script>

<template>
  <section class="section-projects">
    <h1>My Work</h1>

    <div class="projects">
      <p>Thanks for stopping by!</p>

      <p>
        This page is still under construction, but you're welcome to have a look
        at some of my works-in-progress below.
      </p>

      <div class="projects-list">
        <NuxtLink class="project" to="/projects/responsive_design">
          Demo: Responsive Design
        </NuxtLink>
        <span class="project forthcoming">Coming soon!</span>
        <span class="project forthcoming">Coming soon!</span>
      </div>

    </div>
  </section>
</template>

<style scoped>
.section-projects {
  margin-inline: auto;
  padding-inline: 1rem;
  width: min(var(--dw-content-wide), calc(100% - 1rem));
}
.projects {
  font-size: var(--step-1);
  margin-top: 5rem;
}
.projects > p {
  max-width: 60rem;
  margin-bottom: 2rem;
}

.projects-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
.project {
  flex-basis: 25rem;
  flex-grow: 1;
  aspect-ratio: 1;
  max-width: 25rem;

  display: grid;
  place-content: center;

  background-color: hsl(var(--hs-card) 8% / .8);
  border: 0.125rem solid hsl(var(--hs-card) 26%);
  position: relative;
  text-decoration: none;
  transition: 250ms ease-in;
}
.project::before {
  content: '';
  background-image: radial-gradient(circle at center, var(--c-accent), transparent);
  inset: 0;
  position: absolute;
  z-index: -1;
  opacity: 0;
  transition: opacity 250ms ease-in;
}
.project:not(.forthcoming):hover::before {
  opacity: 1;
}
.project.forthcoming {
  font-style: italic;
  opacity: 0.5;
}

</style>
