<script setup>

</script>

<template>
  <section class="section-projects">
    <h1>My Work</h1>

    <div class="projects">
      <p>Thanks for stopping by!</p>

      <p>
        This page is still under construction, but you're welcome to have a look
        at some of my works-in-progress.
      </p>

      <NuxtLink class="projectlink" to="/projects/responsive_design">
        Demo: Responsive Design
      </NuxtLink>
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
.projectlink {
  transition: 250ms ease-in;
}
.projectlink:hover {
  color: var(--c-accent);
}
</style>
