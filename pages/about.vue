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

      <Vue3Marquee class="intro-banner fw-bold font-mono" :clone="true">
        <span class="px-4">WEB DEVELOPMENT</span>
        <span class="px-4">UI/UX DESIGN</span>
        <span class="px-4">DATA SCIENCE</span>
      </Vue3Marquee>

      <div class="intro-text flex flex-col flex-center gap-4">
        <p>I'm an independent developer and designer with a broad, multidisciplinary skillset honed over many years of study and work in just about every sector of the informatics industry. I help folks who want systems that prioritize their users over their vendors. If that sounds like you, <NuxtLink to="/contact" class="font-bold">drop me a line</NuxtLink> and let's build something neat!</p>

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

    <section class="section section-expertise grid">
      <h2 id="My_Expertise" class="section-expertise__heading">My Expertise</h2>
        
      <div class="services-nav flex fs-2">
        <button
          class="btn no-hover" :class="{ selected: serviceIndex === 0 }"
          @click="() => switchToTab(0)">WEB
        </button>
        <button
          class="btn no-hover" :class="{ selected: serviceIndex === 1 }"
          @click="() => switchToTab(1)">UI/UX
        </button>
        <button
          class="btn no-hover" :class="{ selected: serviceIndex === 2 }"
          @click="() => switchToTab(2)">DATA
        </button>
      </div>

      <DirectionalTransition :direction="tabDirection">
        <div class="service-grid service-grid__web" v-if="serviceIndex === 0">
          <div class="service-grid__section card inner-grad rad-grad rad-grad-tl">
            <h3 class="fw-bold">WEB DEVELOPMENT</h3>
            <p class="fs-1">
              Contemporary Web Technology turns fanciful ideas into standard practice almost every week. Keeping apprised of and reactive to it all can be overwhelming, but anyone who's ever tried to pay their taxes online can tell you why it mustn't be neglected. I can help you modernize your project and ensure that it stays ready for the next big thing.
            </p>
          </div>

          <div class="service-grid__section grid">
            <h4 class="card fw-bold inner-grad lin-grad lin-grad-lr">Things I'm Great At</h4>
            <ul class="grid auto-columns card-grid">
              <li>Bespoke Websites</li>
              <li>Single-Page Apps</li>
              <li>API Consumption</li>
              <li>Responsive Design</li>
              <li>Database Integration</li>
              <li>Cryptography</li>
              <li>Systems Design</li>
              <li>SEO</li>
              <li>User Authentication</li>
            </ul>
            <div class="service-c2a flex">
              <span class="service-c2a__call card">Anything else in mind?</span>
              <button class="service-c2a__to-action btn btn-accent">Let's Talk!</button>
            </div>
          </div>


          <div class="service-grid__section flex flex-col">
            <h4 class="card fw-bold inner-grad lin-grad lin-grad-lr">Professional Highlights</h4>
            <ul class="card-list">
              <li>Custom data scraping and validation tools</li>
              <li>Frontend logic for enterprise data viz</li>
              <li>Web server for coordinating academic research</li>
            </ul>
            <div class="service-c2a flex">
              <span class="service-c2a__call card">Want more details?</span>
              <button class="service-c2a__to-action btn btn-accent">My Résumé</button>
            </div>
          </div>
          
          <div class="service-grid__section icon-grid icon-grid__stack grid">
            <h4 class="card flex flex-center fw-bold inner-grad rad-grad rad-grad-tl text-center">This Site's Stack</h4>
            <IconCard icon="vscode-icons:file-type-nuxt"/>
            <IconCard icon="vscode-icons:file-type-typescript-official"/>
            <IconCard icon="vscode-icons:file-type-node"/>
            <IconCard icon="devicon:postgresql"/>
            <IconCard icon="vscode-icons:file-type-vite"/>
            <IconCard icon="vscode-icons:file-type-css"/>
          </div>
        </div>



        <div class="service-grid service-grid__design" v-else-if="serviceIndex === 1">
          <div class="service-grid__section card grid inner-grad rad-grad rad-grad-tl">
            <h3 class="fw-bold">UI/UX DESIGN</h3>
            <p class="fs-1">
              My approach to User Experience design is unapologetically human-first. Users of all backgrounds and abilities expect and deserve an experience that makes them feel valued as more than just conduits for someone else's revenue—I can help you deliver it without falling back on hackneyed shortcuts or clichéd templates.
            </p>
          </div>
          <div class="service-grid__section grid">
            <h4 class="card fw-bold inner-grad lin-grad lin-grad-lr">Things I'm Great At</h4>
            <ul class="grid auto-columns card-grid">
              <li>Accessibility</li>
              <li>Custom CMS Styling</li>
              <li>Image Manipulation</li>
              <li>Internationalization</li>
              <li>Progressive Enhancement</li>
              <li>Vector Graphics</li>
              <li>Video Editing</li>
              <li>Visualizations</li>
            </ul>
            <div class="service-c2a flex">
              <span class="service-c2a__call card">Anything else in mind?</span>
              <button class="service-c2a__to-action btn btn-accent">Let's Talk!</button>
            </div>
          </div>

          <div class="service-grid__section flex flex-col flex-sandwich">
            <h4 class="card fw-bold inner-grad lin-grad lin-grad-lr">Professional Highlights</h4>
            <ul class="card-list">
              <li>Interface for ad-hoc configuration of D3.js visualizations</li>
              <li>Ground-up redesign of employee data collection forms</li>
              <li>Extensible frontend for microcontroller manuals used in university classes</li>
            </ul>
            <div class="service-c2a flex">
              <span class="service-c2a__call card">Want more details?</span>
              <button class="service-c2a__to-action btn btn-accent">My Résumé</button>
            </div>
          </div>
          <div class="service-grid__section icon-grid icon-grid__design grid">
            <h4 class="card fw-bold inner-grad lin-grad lin-grad-lr">My Toolset</h4>
            <IconCard icon="devicon:figma" />
            <IconCard icon="devicon:inkscape" />
            <IconCard icon="simple-icons:gimp" />
            <IconCard icon="devicon:d3js" />
            <IconCard icon="devicon:aftereffects" />
            <IconCard icon="simple-icons:kdenlive" />
            <IconCard icon="simple-icons:audacity" />
            <IconCard icon="simple-icons:aseprite" />
          </div>
          </div>
        <div class="service-grid service-grid__data" v-else-if="serviceIndex === 2">
          <div class="service-grid__section card grid inner-grad rad-grad rad-grad-tl">
            <h3 class="fw-bold">DATA SERVICES</h3>
            <p class="fs-1">
              I work with data every day and am tragically used to hearing from folks who tell me about how helplessly remote and inaccessible their data apparatus feels, whether because it was outsourced to strangers or hastily cobbled together by IT. I can help you streamline your data infrastructure so that it works best for your specific needs.
            </p>
          </div>
          <div class="service-grid__section grid">
            <h4 class="service-tab__inline-heading card inner-grad lin-grad lin-grad-lr">Things I'm Great At</h4>
            <ul class="grid auto-columns card-grid">
              <li>Data Modeling</li>
              <li>Database Design</li>
              <li>Custom Dashboards</li>
              <li>Custom Visualizations</li>
              <li>Systems Integration</li>
              <li>Web Connectivity</li>
            </ul>
            <div class="service-c2a flex">
              <span class="service-c2a__call card">Anything else in mind?</span>
              <button class="service-c2a__to-action btn btn-accent">Let's talk!</button>
            </div>
          </div>
          <div class="service-grid__section flex flex-col flex-sandwich">
            <h4 class="service-tab__inline-heading card inner-grad lin-grad lin-grad-lr">Professional Highlights</h4>
            <ul class="card-list">
              <li>Complete remodel of a large corporate Access database</li>
              <li>Star schema for extremely variable granularity requirements</li>
              <li>Custom middleware to leverage inventory data in decision support</li>
            </ul>
            <div class="service-c2a flex">
              <span class="service-c2a__call card">Want more details?</span>
              <button class="service-c2a__to-action btn btn-accent">My Résumé</button>
            </div>
          </div>
      
          <div class="todo">
          </div>
        </div>
      </DirectionalTransition>
    </section>

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
.service-grid {
  align-self: center;
  grid-area: content;
  justify-self: center;
  max-width: 60ch;

  display: grid;
  gap: 2rem;
}

.section {
  --padding-inline: 1rem;
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
  grid-column: full-width;
  grid-row: banner;
  min-height: min(4em, 10rem);
  user-select: none;
  z-index: 0;
}
.intro-text {
  align-self: flex-start;
  box-shadow: var(--bs);
  backdrop-filter: blur(0.25em);
  background-color: color-mix(in srgb, var(--c-antitext), transparent 15%);
  font-size: var(--step-1);
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
.section-expertise {
  gap: 2rem;
  grid-template-areas: "heading" "nav" "content";
  margin-bottom: 10rem;
}
.section-expertise__heading {
  grid-area: heading;
  padding-top: 10rem;
  z-index: 1;
}
.services-nav { grid-area: nav }
.services-nav > .btn {
  background-color: var(--c-secondary);
  border: 0.25rem solid var(--c-accent);
  border-radius: 0;
  color: color-mix(in srgb, var(--c-text), var(--c-primary) 25%);
  position: relative;
  transition: 1000ms ease-out;
  user-select: none;
}
.services-nav > .btn::after {
  border: 0.25rem solid var(--c-accent);
  clip-path: inset(0);
  content: '';
  filter: blur(0.5rem);
  inset: 0;
  opacity: 0;
  position: absolute;
  transition: opacity 500ms ease-in-out;
}
.services-nav > .btn.selected {
  background-color: var(--c-secondary);
  color: var(--c-accent);
  flex: 3;
}
.services-nav > .btn.selected::after { opacity: 1 }
.service-c2a__call {
  border-left: 0.25rem solid;
  border-bottom: 0.25rem solid;
  border-image-source: radial-gradient(circle at bottom left, var(--c-white), transparent 75%);
  border-image-slice: 1;
  flex: 1;
  font-style: italic;
  font-weight: 700;
  text-align: right;
  position: relative;
}
.service-c2a__call::before {
  background-image: linear-gradient(270deg, var(--c-secondary), transparent 90%);
  content: '';
  inset: 0;
  position: absolute;
  z-index: -1;
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
  .service-grid {
    grid-template-columns:
      [text-start c1-start] auto
      [text-end c1-end c2-start c3-start] auto [c2-end c3-end];
    max-width: none;
  }
  .service-grid > .service-grid__section:first-of-type { grid-area: text }
  .service-grid > .service-grid__section:nth-of-type(2) { grid-area: c1 }
  .service-grid > .service-grid__section:nth-of-type(3) { grid-area: c2 }
  .service-grid > .service-grid__section:nth-of-type(4) { grid-area: c3 }
  .service-grid__web,
  .service-grid__design {
    grid-template-rows:
      [text-start c2-start] auto
      [c2-end c3-start] auto
      [text-end c1-start] auto [c1-end c3-end];
  }
  .service-grid__design {
    grid-template-columns:
      [text-start c1-start] auto
      [text-end c2-start] auto
      [c1-end c3-start] auto [c2-end c3-end];
  }
  .service-grid__data {
    grid-template-rows:
      [text-start c2-start] auto
      [c2-end c3-start] auto
      [text-end c1-start] auto [c1-end c3-end];
  }
  .outro-main {
    grid-template-columns: auto auto;
    font-size: var(--step-1);
  }
  .outro-img { min-height: 100%; }
}
@media (min-width: 100rem) {
  .section-expertise {
    grid-template-areas: ". heading" "nav content";
    grid-template-columns: 1fr var(--dw-content) 1fr;
    max-width: none;
  }
  .services-nav {
    flex-direction: column;
    gap: 2rem;
    justify-self: end;
  }
  .section-outro { padding-inline: 0 }
}
</style>
