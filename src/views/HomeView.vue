<script setup lang="ts">
import WordWall from "../components/WordWall.vue";
import portrait_main from "../assets/img/about_0.png";
import portrait_about from "../assets/img/about_1.png";
import signature from "../assets/img/sig.svg";
</script>

<template>
  <main id="app-main">
    <h1>
      <div class="fs-2 mb-xs">Hi there, I'm</div>
      <div class="uppercase">Harry Owen</div>
    </h1>
    <WordWall class="full-width mb-step-4" />
    <div class="intro border-block-soft full-width mb-step-4 pi-view">
      <div class="intro__text backdrop-bg">
        <p class="mb-xl">
          I'm an independent developer and designer with a broad, multidisciplinary
          skillset honed over many years of study and work in just about every
          sector of the informatics industry. I help folks who want systems that
          prioritize their users over their vendors.
        </p>
        <p>
          If you’re here for design or development services, check out my
          <RouterLink to="/contact"> Contact Page</RouterLink>
          to get in touch. You can also find my
          <RouterLink to="/projects">open-source projects</RouterLink>
          and live demos or my
          <RouterLink to="/resume">Résumé</RouterLink>
          hereabouts. Thanks for stopping by—keep making neat
          things!
        </p>
      </div>
      <img class="intro__img" :src="portrait_main"
        alt="Portrait of the author wearing a tailored suit and amicably smiling"
      />
    </div>
    <h2>More About Me</h2>
    <div class="about mb-xl">
      <img class="about__img" :src="portrait_about"
        alt="Portrait of the author seated at a desk in a well-appointed office"
      />
      <div class="about__text">
        <p class="mb-xl">
          Information systems aside, I'm a lover of all things cerebral. When
          I'm not designing Web content or writing code, you can find me
          tinkering, playing strategy games, or watching panel shows with my
          wife.
        </p>
        <p class="mb-xl">
          I was born and raised in Chicago, so feel free to ask me about
          Riccardo Muti's stewardship of the CSO, what does and does not belong
          on a Vienna Beef frank, or how to cope with loss as a lifelong Bears
          fan.
        </p>
        <p class="mb-xl">
          I was a pretty well accomplished policy debater back in the day and so
          am thrilled by clever rhetoric and thoughtful journalism. In my
          experience, these are remarkably cross-applicable to my work—the
          grammars of code, of design, and of language have much more in common
          with one another than you'd think.
        </p>
        <p>
          I find my greatest satisfactions are born of leveraging my talents to
          make other people's lives easier and better. If you reckon I could do
          so for you too, then I thank you for reading this far down and I hope
          to
          <RouterLink to="/contact">hear from you soon!</RouterLink>
        </p>
      </div>
    </div>
    <div class="sig mb-xxl ml-auto">
      <img class="mb-xs" :src="signature"
        alt="A characterful freehand signature"
      />
      <p>M. Harrison "Harry" Owen</p>
    </div>
  </main>
</template>

<style scoped>
#app-main {
  display: grid;
  align-content: start;
  grid-template-columns:
    minmax(var(--padding-inline), 1fr)
    min(100% - (var(--padding-inline) * 2), var(--app-max-inline))
    minmax(var(--padding-inline), 1fr);
  grid-template-rows: auto;
}
#app-main > * { grid-column: 2 }
#app-main > .full-width { grid-column: 1 / 4 }

.intro {
  position: relative;
  z-index: 1;
}
.intro__text {
  padding-block: var(--padding-inline);
  position: relative;
  max-width: 35em;
  z-index: 1;
}
.intro__img {
  position: absolute;
  bottom: 0;
  right: var(--padding-inline-view);
  height: calc(100% + 3 * var(--step-4));
  aspect-ratio: 1 / 2;
  object-position: top;
}
.about {
  display: flex;
  gap: var(--gap-xl);
}
.about__img {
  display: none;
}
.sig {
  color: var(--clr-white-soft);
  line-height: 0.9;
}
.sig > img {
  min-height: 4em;
}
@media (min-width: 46rem) {
  .intro__text {
    font-size: calc(var(--step-0) * var(--halfstep));
  }
  .about__img {
    display: inline-block;
    max-width: min(40%, 30em);

    border: 0.125em solid var(--clr-black-soft);
    border-top-right-radius: 2em;
    border-bottom-right-radius: 2em;
  }
}
</style>

