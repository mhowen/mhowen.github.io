<script setup>
const expertiseIndex = ref(0); // which ExpertiseView to render
const expertiseDir   = ref(-1); // whether to flip in negative or positive dir

function setExpertiseIndex(newIndex) {
  const curIndex = expertiseIndex.value;
  expertiseDir.value = newIndex > curIndex ? 1 : -1;
  expertiseIndex.value = newIndex;
}

const fields = useFormData();
</script>

<template>
  <div class="page-about">
    <section class="section section-intro">
      <h1 class="section-intro__heading fs-6">
        <span class="fs-4">Hi there, I'm <br></span>
        <strong class="no-wrap ts-accent">Harry Owen</strong>
      </h1>

      <Vue3Marquee class="intro-banner bg-accent c-antitext fs-3 fw-thin py-2" :clone="true">
        <span class="px-4">WEB DEVELOPMENT</span>
        <span class="px-4">UI/UX DESIGN</span>
        <span class="px-4">DATA SCIENCE</span>
      </Vue3Marquee>

      <div class="intro-text fs-1">
        <p>
          I'm an independent developer and designer with a broad, multidisciplinary
          skillset honed over many years of study and work in just about every sector
          of the informatics industry. I help folks who want systems that prioritize
          their users over their vendors. If that sounds like you,
          <NuxtLink to="/contact" class="inline-link">drop me a line</NuxtLink>
          and let's build something neat!
        </p>

        <button class="btn btn-accent btn-link hover-fill uppercase">
          <NuxtLink to="#My_Expertise">Learn More</NuxtLink>
        </button>
      </div>

      <img class="intro-img"
        src="~/assets/img/about_0.png"
        alt="A smiling man in a fitted, charcoal-grey suit"
      />
    </section>

    <section class="section section-services" id="My_Expertise">
      <div class="expertise">
        <div class="expertise-nav">
          <button
            class="btn" :class="{ active: expertiseIndex === 0}"
            @click="setExpertiseIndex(0)"> WEB </button>
          <button
            class="btn" :class="{ active: expertiseIndex === 1}"
            @click="setExpertiseIndex(1)"> UI/UX </button>
          <button
            class="btn" :class="{ active: expertiseIndex === 2}"
            @click="setExpertiseIndex(2)"> DATA </button>
        </div>
        
        <div class="expertise-views">
          <TransitionFlip :direction="expertiseDir">
            <ExpertiseView
              v-if="expertiseIndex === 0"
              title="Web Development"
              :info-action="() => {
                fields.intent = 'INFO';
                fields.category = 'Custom Websites';
                navigateTo('/contact');
              }">
              <p>
                Contemporary Web Technology turns fanciful ideas into standard practice
                almost every week. Keeping apprised of and reactive to it all can be
                overwhelming, but anyone who's ever tried to pay their taxes online can 
                tell you why it mustn't be neglected. I can help you modernize your project
                and ensure that it stays ready for the next big thing.
              </p>
            </ExpertiseView>
            <ExpertiseView
              v-else-if="expertiseIndex === 1"
              title="User Experience"
              :info-action="() => {
                fields.intent = 'INFO';
                fields.category = 'UI/UX Design';
                navigateTo('/contact');
              }">
              <p>
                Contemporary Web Technology turns fanciful ideas into standard practice
                almost every week. Keeping apprised of and reactive to it all can be
                overwhelming, but anyone who's ever tried to pay their taxes online can 
                tell you why it mustn't be neglected. I can help you modernize your project
                and ensure that it stays ready for the next big thing.
              </p>
            </ExpertiseView>
            <ExpertiseView
              v-else-if="expertiseIndex === 2"
              title="Data Science"
              :info-action="() => {
                fields.intent = 'INFO';
                fields.category = 'Data Management';
                navigateTo('/contact');
              }">
              <p>
                Contemporary Web Technology turns fanciful ideas into standard practice
                almost every week. Keeping apprised of and reactive to it all can be
                overwhelming, but anyone who's ever tried to pay their taxes online can 
                tell you why it mustn't be neglected. I can help you modernize your project
                and ensure that it stays ready for the next big thing.
              </p>
            </ExpertiseView>
          </TransitionFlip>
        </div>
      </div> 

      <div class="services relative">
        <h4 class="services-heading">FEATURED SERVICES</h4>
        <div class="services-cards">
          <DataCard
            :action="() => {
              fields.intent = 'QUOTE';
              fields.category = 'Custom Websites';
              navigateTo('/contact');
            }"
            title="Bespoke Websites" price="1,500">
            Modern, responsive, and accessible interfaces for any use case. I'll
            deliver an implementation of your existing designs or help you realize
            your vision from scratch.
          </DataCard>
          
          <DataCard
            :action="() => {
              fields.intent = 'QUOTE';
              fields.category = 'Web Hosting';
              navigateTo('/contact');
            }"
            title="Web Hosting" price="100">
            Get your content on the open internet without relying on proprietary
            tech or outsourced customer service. Plus, pay no recurring fees below
            100,000 monthly visitors.
          </DataCard>

          <DataCard
            :action="() => {
              fields.intent = 'QUOTE';
              fields.category = 'Modernization';
              navigateTo('/contact');
            }"
            title="Site Modernization" price="700">
            Bring your existing website to parity with modern standards of
            accessibility and design within weeks. Includes 100% responsive layouts
            for all devices with a screen.
          </DataCard>
        </div>
      </div>
    </section> 

    <section class="section section-outro">
      <h2 class="section-outro__heading">More About Me</h2>

      <div class="outro-main grid">
        <img
          src="~/assets/img/about_1.png"
          alt="Contemplative man in suit looking out of frame"
          class="outro-img"
        />
    
        <p class="outro-text">
          When I'm not practicing or studying the information sciences, you'll tend
          to find me tinkering, playing strategy games, or enjoying a panel show with
          my wife. I was born and raised in Chicago, so feel free to ask me about
          Riccardo Muti's stewardship of the CSO, what does and does not belong on a
          Vienna Beef frank, or how to cope with loss as a lifelong Bears fan. I was a
          fairly accomplished policy debater back in the day and am accordingly thrilled
          by clever rhetoric and quality journalism. I find my greatest satisfactions
          are the result of leveraging my talents to make other people's lives easier
          and better, and I'd be delighted by any opportunity to do so for you! Thanks
          a million for reading this far down, and I hope to
          <NuxtLink to="contact" class="inline-link">hear from you</NuxtLink> soon.
        </p>
      </div>

      <div class="outro-sig">
        <TheSignature class="signature" />
        <p class="font-italic my-3">M. Harrison "Harry" Owen</p>
      </div>

    </section>
  </div>
</template>

<style scoped>
.section {
  margin-inline: auto;
  margin-bottom: clamp(2em, 20vh - 2em, 6em);
}
.section-intro {
  display: grid;
  grid-template-rows:
    [heading-start] auto
    [heading-end image-start banner-start] auto
    [banner-end text-start] auto [image-end text-end];
  grid-template-columns:
    [banner-start] calc((100% - var(--dw-content-wide)) / 2)
    [heading-start text-start image-start] 1fr
    [heading-end text-end image-end] calc((100% - var(--dw-content)) / 2) [banner-end];
  
  border-bottom: 0.125rem solid var(--c-accent);
  position: relative;
  overflow: hidden;
}
.section-intro__heading {
  grid-area: heading;
  margin-inline: 1rem;
}
.intro-banner {
  align-self: center;
  grid-area: banner;
  user-select: none;
  z-index: -1;
}
.intro-text {
  grid-area: text;
  align-self: start;
  border-radius: 1rem;
  box-shadow: var(--bs);
  backdrop-filter: blur(0.25em);
  background-color: hsl(var(--hs-card) 8% / .8);
  margin-inline: 1rem;
  max-width: 50ch;
  padding: 1em;
  z-index: 1;
}
.intro-text > .btn {
  margin-top: 2rem;
  min-width: 100%;
}
.intro-img {
  grid-area: image;
  justify-self: end;
}
.expertise {
  display: grid;
  gap: 2rem 1rem;
  grid-template-areas: "nav" "main";
  margin-inline: auto;
  width: min(60rem, 100% - 2rem);
}
.expertise-nav {
  display: flex;
  gap: 0.5rem;
  grid-area: nav;
}
.expertise-nav > .btn {
  backdrop-filter: blur(1rem);
  background-color: hsl(var(--hs-card) 8% / 0.8);
  border: 0.125rem solid hsl(var(--hs-card) 26%);
  border-radius: 0;
  flex: 1 0 max-content;
  font-size: var(--step-1);
  font-weight: 200;
  z-index: 2;
}
.expertise-nav > .btn.active {
  border-color: var(--c-accent);
  color: var(--c-accent);
  flex-grow: 3;
}
.expertise-views {
  perspective: 60rem;
}

@media (min-width: 72rem) {
  /* The idea: 
   * 72rem = 60rem (views) + 9rem (nav) + 1rem (gutter) + 2rem (padding)
   *   so, if >= 72rem width, views is _always_ 60rem wide!
  */
  .expertise {
    grid-template-areas: "nav main";
    grid-template-columns: 9rem 1fr;
    min-width: 70rem;
  }
  .expertise-nav {
    flex-direction: column;
  }
}
.section-services {
  padding-inline: 0;
}
.services::before {
  background-image: linear-gradient(transparent, var(--gtrax-accent), transparent);
  content: '';
  filter: blur(1rem);
  inset: 2rem 0 -2rem 0;
  opacity: 0.5;
  position: absolute;
  z-index: -1;
}
.services-heading {
  font-weight: 200;
  margin-inline: auto;
  max-width: max-content;
  padding-block: 4rem 2rem;
}
.services-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  justify-content: center;
  position: relative;
}
.section-outro { max-width: var(--dw-content) }
.outro-main { margin-block: 1rem }
.outro-sig {
  margin-left: auto;
  max-width: fit-content;
}
@media (min-width: 600px) {
  /* .intro-text { */
    /* background-color: initial; */
    /* box-shadow: none; */
    /* grid-column: 2 / 4; */
    /* padding-top: 2em; */
  /* } */
  /* .intro-img { */
    /* grid-column: 4 / 6; */
    /* justify-self: center; */
    /* right: initial; */
  /* } */
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

