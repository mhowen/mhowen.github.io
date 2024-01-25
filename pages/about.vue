<script setup>
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
          I'm an independent developer and designer with a broad, multidisciplinary
          skillset honed over many years of study and work in just about every sector
          of the informatics industry. I help folks who want systems that prioritize
          their users over their vendors. If that sounds like you,
          <NuxtLink to="/contact" class="inline-link">drop me a line</NuxtLink>
          and let's build something neat!
        </p>

        <button
          class="btn btn-accent hover-fill"
          @click="() => navigateTo('#My_Expertise')"
        >Learn More</button>
      </div>

      <img
        class="intro-img"
        src="~/assets/img/about_0.png"
        alt="A smiling man in a fitted, charcoal-grey suit"
      />
    </section>

    <section class="section section-services" id="My_Expertise">
      <ExpertiseView title="Web Development" class="mi-auto">
        Contemporary Web Technology turns fanciful ideas into standard practice
        almost every week. Keeping apprised of and reactive to it all can be overwhelming,
        but anyone who's ever tried to pay their taxes online can tell you why it mustn't
        be neglected. I can help you modernize your project and ensure that it stays ready 
        for the next big thing.
      </ExpertiseView>

      <div class="services relative">
        <h4 class="services-heading">FEATURED SERVICES</h4>
        <div class="services-cards">
          <div class="card">
            <h5 class="card-heading">Responsive Websites</h5>
            <p class="card-body">
              Modern, responsive, and accessible interfaces for any use case. I can
              deliver an implementation of your existing designs or help you realize
              your vision from scratch.
            </p>
            <div class="card-c2a">
              <p>
                From <span class="card-c2a__price">$00.01</span>
              </p>
              <button class="btn btn-accent hover-fill">Get a Free Quote</button>
            </div>
          </div>
  
          <div class="card">
            <h5 class="card-heading">Web Hosting</h5>
            <p class="card-body">
              Get your content on the open internet without relying on proprietary
              tech or outsourced customer service. Plus, no recurring payments for
              time-limited deployments.
            </p>
            <div class="card-c2a">
              <p>
                From <span class="card-c2a__price">$00.01</span>
              </p>
              <button class="btn btn-accent hover-fill">Get a Free Quote</button>
            </div>
          </div>
  
          <div class="card">
            <h5 class="card-heading">Custom Databases</h5>
            <p class="card-body">
              Extensible, reliable, and inexpensive databases for any organizational
              purpose. Migrate your existing data or build a bespoke data model.
              Integrate with your existing portal or backend for no extra fee.
            </p>
            <div class="card-c2a">
              <p>
                From <span class="card-c2a__price">$00.01</span>
              </p>
              <button class="btn btn-accent hover-fill">Get a Free Quote</button>
            </div>
          </div>
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
.page-about {
  --card-bg: color-mix(in srgb, var(--c-secondary), transparent 20%);
  --card-br: 1rem;
  --padding-inline: 1rem;
}
.section {
  margin-inline: auto;
  margin-bottom: clamp(2em, 20vh - 2em, 6em);
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
  gap: 2em;
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
.services-cards > .card {
  display: flex;
  flex-direction: column;
  font-size: 1.25rem;
  width: min(27rem, 100%);
}
.card-heading {
  color: var(--c-accent);
  font-size: 2rem;
  font-weight: 200;
  text-transform: uppercase;
}
.card-body {
  padding-block: 2rem 3rem;
}
.card-c2a {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
}
.section-outro { max-width: var(--dw-content) }
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

