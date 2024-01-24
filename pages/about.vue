<script setup>
const inline_xl = useScreenWidth(1600); // true if inline width is gte the largest breakpoint
const serviceIndex = ref(0); // which expertise tab to display
const tabDirection = ref('lr'); // direction from/to which expertise tabs transition into/out of tab container

// on switching Expertise Section tabs, determine transition parameters and update related states
function switchToTab(nextIndex) {
  if (![0, 1, 2].includes(nextIndex)) return;

  // establish what direction to use based on chosen tab and current inline width
  const prevIndex = serviceIndex.value;
  const vertical = inline_xl.value;
  
  if (vertical && prevIndex < nextIndex) tabDirection.value = 'ud';
  else if (vertical) tabDirection.value = 'du';
  else if (prevIndex < nextIndex) tabDirection.value = 'rl';
  else tabDirection.value = 'lr';

  // finally, switch tab and trigger the transition
  serviceIndex.value = nextIndex;
}
</script>

<template>
  <div class="page-about">
    <section class="section section-intro">
      <h1 class="section-intro__heading fs-6">
        <span class="fs-4">Hi there, I'm <br></span>
        <strong class="no-wrap ts-accent">Harry Owen</strong>
      </h1>

      <Vue3Marquee class="intro-banner" :clone="true">
        <span class="intro-banner__span">WEB DEVELOPMENT</span>
        <span class="intro-banner__span">UI/UX DESIGN</span>
        <span class="intro-banner__span">DATA SCIENCE</span>
      </Vue3Marquee>

      <div class="intro-text">
        <p>
          I'm an independent developer and designer with a broad, multidisciplinary skillset honed over many years of study and work in just about every sector of the informatics industry. I help folks who want systems that prioritize their users over their vendors. If that sounds like you,
          <NuxtLink to="/contact" class="inline-link">drop me a line</NuxtLink>
          and let's build something neat!
        </p>

        <button
          class="btn btn-accent"
          @click="() => navigateTo('#My_Expertise')"
        >Learn More</button>
      </div>

      <img
        class="intro-img"
        src="~/assets/img/about_0.png"
        alt="A smiling man in a fitted, charcoal-grey suit"
      />
    </section>

    <div class="testsvc">
      <div class="testsvc-intro">
        <h3 class="tcard-block glowing">WEB DEVELOPMENT</h3>
        <p class="tcard-block">
          Contemporary Web Technology turns fanciful ideas into standard practice almost every week. Keeping apprised of and reactive to it all can be overwhelming, but anyone who's ever tried to pay their taxes online can tell you why it mustn't be neglected. I can help you modernize your project and ensure that it stays ready for the next big thing.
        </p>
        <div class="testsvc-intro__links">
          <button class="tcard-inline btn btn-logical">Demos</button>
          <button class="tcard-inline btn btn-logical">My Work</button>
          <button class="tcard-inline btn btn-logical">Get More Info</button>
        </div>
      </div>

      <div class="services">
        <h4 class="services-heading">SERVICES</h4>
        <div class="services-cards">
          <div class="tcard tcard-service">
            <h5 class="tcard-service__heading">Bespoke Websites</h5>
            <p class="tcard-service__summary">
              Modern, responsive, and accessible web presences for any use case.
              Designed and built according to your visions, not trends or templates.
            </p>
            <p>
              From <span class="testcard-c2a__price">$00.01</span>
            </p>
            <button class="btn btn-primary bg-accent">Get a Free Quote</button>
          </div>
  
          <div class="tcard tcard-service">
            <h5 class="tcard-service__heading">Custom Styling</h5>
            <p class="tcard-service__summary">
              Take advantage of your blog or storefront's true potential.
              Brilliant and engaging (re)designs for WordPress, Wix, Drupal, Joomla, and more.
            </p>
            <p>
              From <span class="testcard-c2a__price">$00.01</span>
            </p>
            <button class="btn btn-primary bg-accent">Get a Free Quote</button>
          </div>
  
          <div class="tcard tcard-service">
            <h5 class="tcard-service__heading">Custom Web Servers</h5>
            <p class="tcard-service__summary">
              Automate your mailing list, telemetry reports, or an entire application.
              Consult for free, then never worry about your operations' fitness or timeliness again.
            </p>
            <p>
              From <span class="testcard-c2a__price">$00.01</span>
            </p>
            <button class="btn btn-primary bg-accent">Get a Free Quote</button>
          </div>
        </div>
      </div>
    </div>

    <section class="section section-outro">
      <h2 class="section-outro__heading">More About Me</h2>

      <div class="outro-main grid">
        <img
          src="~/assets/img/about_1.png"
          alt="Contemplative man in suit looking out of frame"
          class="outro-img"
        />
    
        <p class="outro-text">When I'm not practicing or studying the information sciences, you'll tend to find me tinkering, playing strategy games, or enjoying a panel show with my wife. I was born and raised in Chicago, so feel free to ask me about Riccardo Muti's stewardship of the CSO, what does and does not belong on a Vienna Beef frank, or how to cope with loss as a lifelong Bears fan. I was a fairly accomplished policy debater back in the day and am accordingly thrilled by clever rhetoric and quality journalism. I find my greatest satisfactions are the result of leveraging my talents to make other people's lives easier and better, and I'd be delighted by any opportunity to do so for you! Thanks a million for reading this far down, and I hope to <NuxtLink to="contact" class="fw-bold">hear from you</NuxtLink> soon.</p>
      </div>

      <div class="outro-sig">
        <TheSignature class="signature" />
        <p class="font-italic my-3">M. Harrison "Harry" Owen</p>
      </div>

    </section>
  </div>
</template>

<style scoped>
.page-about {
  --card-bg: color-mix(in srgb, var(--c-secondary), transparent 20%);
  --card-br: 1rem;
  --padding-inline: 1rem;
}
.inline-card,
.inline-cards > * {
  background-color: var(--card-bg);
  border-radius: var(--card-br);
  padding: 0.5rem 1rem;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
}

.section {
  margin-inline: auto;
  padding-inline: var(--padding-inline);
}
.section-intro {
  max-width: initial;
  padding-inline: initial;
  
  --content-narrow: calc(100% - (var(--padding-inline) * 2));
  --content-width: min(var(--content-narrow), var(--dw-content-wide));
  --column-number: 4;
  --column-width: calc(var(--content-width) / var(--column-number));
  
  border-bottom: 0.125rem solid var(--c-accent);
  display: grid;
  gap: var(--padding-inline) 0;
  grid-template-columns:
    [full-width-start] minmax(var(--padding-inline), 1fr)
    [content-start] repeat(var(--column-number), var(--column-width)) [content-end]
    minmax(var(--padding-inline), 1fr) [full-width-end];
  grid-template-rows:
    [heading-start] auto
    [image-start] 1em 
    [heading-end banner-start] auto [banner-end]
    1fr [image-end];
  margin-top: clamp(2em, 10vh - 2em, 6em);
  position: relative;
  overflow: hidden;
}
.section-intro__heading { grid-column: content }
.intro-banner {
  background-color: var(--c-accent);
  color: var(--c-primary);
  font-size: var(--step-3);
  font-weight: 200;
  grid-column: full-width;
  grid-row: banner;
  min-height: min(4em, 10rem);
  user-select: none;
  z-index: 0;
}
.intro-banner__span {
  padding-inline: 1em;
}
.intro-text {
  align-self: flex-start;
  box-shadow: var(--bs);
  backdrop-filter: blur(0.25em);
  background-color: color-mix(in srgb, var(--c-antitext), transparent 15%);
  display: flex;
  flex-direction: column;
  font-size: var(--step-1);
  gap: 1rem;
  grid-column: 2 / 5;
  grid-row: banner-end / image-end;
  margin-bottom: var(--padding-inline);
  padding: 0.5em;
  z-index: 1;
}
.intro-img {
  align-self: flex-end;
  aspect-ratio: 1 / 2;
  grid-column: 3 / full-width-end;
  grid-row: image;
  justify-self: flex-end;
  object-fit: cover;
  object-position: top;
  position: relative;
  right: -20vw;
}
.services-nav { grid-area: nav }
.services-nav > .btn {
  background-color: transparent;
  border: 0.25rem solid var(--c-accent);
  border-radius: 0;
  color: color-mix(in srgb, var(--c-text), var(--c-primary) 25%);
  font-weight: 200;
  position: relative;
  transition: 1000ms ease-out;
  user-select: none;
}
.services-nav > .btn.selected {
  color: var(--c-accent);
  flex: 3;
}
.service-c2a__call {
  flex-grow: 1;
  font-style: italic;
  font-weight: 700;
  text-align: right;
}
.service-c2a__to-action {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.icon-grid__stack {
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
.icon-grid__stack > h4 {
  grid-column: 1 / 4;
  grid-row: 1 / 3;
}
.icon-grid > .card:not(:first-child) {
  border-radius: 0.5em;
  filter: grayscale(100%);
  transition: 500ms ease-out;
}
.icon-grid > .card:not(:first-child):hover {
  border-radius: 0.25em;
  filter: grayscale(0%);
}
.icon-grid__design {
  grid-template-columns: repeat(3, minmax(auto, 128px));
  grid-template-rows: min-content repeat(3, minmax(auto, 128px));
  grid-auto-flow: column;
}
.icon-grid__design > h4 { grid-column: 1 / 4 }
.section-outro {
  max-width: var(--dw-content);
}
.outro-main { margin-block: 1rem }
.outro-sig {
  margin-left: auto;
  max-width: fit-content;
}
@media (min-width: 600px) {
  .intro-text {
    background-color: initial;
    box-shadow: none;
    grid-column: 2 / 4;
    padding-top: 2em;
  }
  .intro-img {
    grid-column: 4 / 6;
    justify-self: center;
    right: initial;
  }
  .outro-img {
    align-self: center;
    object-fit: cover;
    object-position: center;
  }
}
@media (min-width: 900px) {
  .outro-main {
    grid-template-columns: auto auto;
    font-size: var(--step-1);
  }
  .outro-img { min-height: 100%; }
}
@media (min-width: 100rem) {
  .services-nav {
    flex-direction: column;
    gap: 2rem;
    justify-self: end;
  }
  .section-outro { padding-inline: 0 }
}
</style>

