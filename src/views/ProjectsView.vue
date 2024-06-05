<script setup lang="ts">
import RouterButton from '@/components/RouterButton.vue';
</script>

<template>
  <main class="fw-grid">
    <section class="intro mb-step-3">
      <h1>
        <div class="mb-xs uppercase">Harry Owen</div>
        <div class="fs-2">Portfolio</div>
      </h1>
      <p class="mb-l">
        This page was last updated on
        <span class="clr-accent-soft fw-700">5 June 2024</span>.
      </p>
      <p class="mb-l">
        Welcome! Below is a rotating selection of projects and demonstrations
        that I consider good reflections of my talents as of when this page
        was last updated. All of the designs, code, and graphical
        assets are exclusively my own original work except where otherwise noted
        and attributed. All of it is open-source—each page includes one or more
        external links to the relevant source code.
      </p>
    </section>
    <section class="project-category">
      <h2>Web Design</h2>
      <div class="project">
        <h3 class="project__title">
          <span class="project__title__type">Demo:</span>
          Responsive Design Sandbox
        </h3>
        <p class="project__desc">
          An interactive exploration of Responsive Web Design (RWD) principles.
          Pick a screen size to simulate and watch the page design adapt in real time.
        </p>
        <div class="project__links">
          <RouterButton
            href="/projects/responsive_design_sandbox"
          >Project Page
          </RouterButton>
          <RouterButton
            href="https://github.com/mhowen/mhowen.github.io/blob/main/src/views/ResponsiveDesignSandboxView.vue"
          >Source Code
          </RouterButton>
        </div>
      </div>
      <div class="project">
        <h3 class="project__title">
          <span class="project__title__type">Project:</span>
          Hacking with Stingy APIs
        </h3>
        <p class="project__desc">
          A theory-forward introduction to a novel strategy for testing and
          iterating on projects that depend on free-tier, request-limited APIs.
        </p>
        <div class="project__links">
          <p class="project__links__coming-soon">Coming Soon</p>
        </div>
      </div>
    </section>
    <section class="project-category">
      <h2>Software Development</h2>
      <div class="project">
        <h3 class="project__title">
          <span class="project__title__type">Project:</span>
          Scnippet
        </h3>
        <p class="project__desc">
          A highly configurable, TextMate-aware snippet provider written in
          low-level C that brings IDE-like snippets to any environment.
        </p>
        <div class="project__links">
          <p class="project__links__coming-soon">Coming Soon</p>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.intro > p {
  max-width: 35em;
  font-size: calc(var(--step-0) * var(--halfstep));
}
.project-category > h2 {
  margin-bottom: var(--gap-m);
}
.project-category > .project:last-of-type {
  margin-bottom: var(--step-4);
}
.project {
  max-width: 50rem;
  margin-bottom: var(--gap-xxl);
}
.project__title,
.project__desc {
  margin-bottom: var(--gap-s);
}
.project__links {
  display: flex;
  flex-wrap: wrap;
  gap: var(--gap-m);
}
.project__links > * {
  flex: 1 0 max-content;
}
.project__links__coming-soon {
  padding: var(--gap-s) var(--gap-m);
  border-bottom: 0.125em solid var(--clr-text-soft);
  color: var(--clr-text-soft);
  font-family: Oswald, Inter;
  font-size: calc(var(--step-0) * var(--halfstep));
}
</style>

