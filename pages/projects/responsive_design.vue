<script setup>
const device = ref('');
const layout = ref('home');

// map out simulated xy in advance, then retrieve values as we need them
const dimensions = new Map([
  ['notebook', [1440, 900]],
  // ['tablet', [1080, 810]],
  ['tablet', [810, 1080]],
  ['smartphone', [428, 720]],
  ['flip phone', [320, 640]],
]);
const deviceXY = computed(() => {
  const xy = dimensions.get(device.value);
  return xy ? [xy[0] + 'px', xy[1] + 'px'] : ['100%', '100%']
});

// used to hide controls that simulate devices larger than IRL viewport
const allowSmall = useScreenWidth(428);
const allowMedium = useScreenWidth(1080);
const allowAll = useScreenWidth(1440);

// if this is truthy, we stop displaying the intro message
const showMessage = ref(true);
</script>

<template>
  <div class="dframe">
    <div class="dframe-message" :class="{ visible: showMessage }">
      <button class="btn" @click="showMessage = false">Close</button>
      <span class="fs-2 italic">Demo:</span>
      <h1>Responsive Design</h1>
      <h2>Summary</h2>
      <p>
        This single-page applet is a nifty way to visualize how a web page's content
        layout must adapt to screens of various dimensions. The box containing it
        can dynamically change its height and width to simulate a device smaller than
        that on which the applet is running.
      </p>
      <p v-if="!allowAll" style="color: #ff88aa">
        Note: Browser detected narrow screen&#151;some simulations are disabled.
      </p>
      <h2>Usage</h2>
      <ul>
        <li>Select one of several mock-ups of common layouts</li>
        <li>Use the 'Simulate Device' buttons to change the container's dimensions</li>
        <li>Watch your chosen layout automatically adjust to the new screen!</li>
        <li>Note that buttons, links, etc. exist for demonstrative purposes and so are functionally inert.</li>
      </ul>
      <h2>What is Responsive Design?</h2>
      <p>
        In short, <span class="c-accent">responsive design</span> refers to the
        set of techniques and methodologies by which we ensure parity of user experience
        across all devices.
      </p>
      <p>
        Or, in more familiar terms: a webpage developed in accoradance with the
        principles of responsive design will look fantastic and feel great to use
        regardless of whether it's being rendered on an ultra-wide desktop monitor,
        an old flip phone screen, or anything in between. Naturally, these considerations
        extend to the sequencing and presentation of content by non-visual means,
        e.g., screen readers.
      </p>
      <h3 class="italic">How is it done?</h3>
      <p>
        Since web-capable devices can have screens of practically any size&#151;or
        even no screen at all&#151;responsive websites are generally programmed
        to lay themselves out and size their contents based on the screen dimensions
        provided by the browser. These days, a plurality of highly responsive websites
        (including this one) are designed to look and feel great on mobile screens
        first. We then progressively add complexity as dimensions increase.
        The result is an interface that seamlessly adjusts to the available screen space
        even if it suddenly changes&#151;flipping a mobile device from portrait to
        landscape orientation, for example.
      </p>
      <p>
        Of course, the extremely variable nature of web content means that each
        solution must take a website's specific content and requirements into account
        in order to develop a responsive design strategy.
        <span class="c-accent">A good UI/UX designer will work directly with you</span>
        and/or your content team in order to identify the most effective combination
        of tools and techniques for your unique requirements and user flow. This
        meticulous, case-by-case analysis and the expertise intrisic to it is a
        major part of why web design is often considered its own discipline distinct
        from web development.
      </p>
      <h3 class="italic">Why is this worth the investment?</h3>
      <p>
        First, an extremely practical reason: the meteoric rise of smartphones means
        that a significant percentage (if not an outright majority) of almost any website's users will be viewing it
        on a phone. Recognizing this, Google and other major search engine providers
        started priviliging responsively designed websites back in 2015. To this day, relatively few
        sites are at the bleeding edge of responsive design practices; accordingly,
        launching a site in that state is an excellent way to get a leg up in promotion. 
      </p>
      <p>
        Second, a word on the human element. Developing a highly efficient and optimized codebase
        for a website is well and good, but the average user's foremost concern is
        with how it feels to interface with that code. Even folks with marginal
        computer literacy will speak with confidence and authority when asked to
        give their impressions of a particularly good or particularly mediocre interface.
        Every user's subjective tastes will differ, but a skilled designer can reliably
        find the overlap of qualia in a given userbase. After all, nothing drives positive
        engagement quite like an experience that was way better than one expected!
      </p>
      <h3 class="italic">Want to know more?</h3>
      <p>
        With the benefit of several years of experience across the breadth of the
        web design field behind me, I can help you through your site's entire (re)design
        process or any part of it. If you already have a good idea of your needs, you can
        <NuxtLink target="_blank" to="/contact" class="inline-link">request a free quote</NuxtLink>
        through my Contact form. Still deciding on where to start? Feel free to
        <NuxtLink target="_blank" to="contact" class="inline-link">ask any questions</NuxtLink>
        you may have! Even if we don't end up signing a contract together, I'm open
        to most any excuse to discuss this remarkable subject.
      </p>
    </div>
    <div class="dframe-ctrl">
      <div class="ctrlgroup" v-if="allowSmall">
        <p class="ctrlgroup-label fw-bold text-center">Simulate Device</p>
        <button
          class="btn"
          :class="{ selected: device === 'none' }"
          @click="device = 'none'">None</button>
        <button
          class="btn"
          :class="{ selected: device === 'notebook', hidden: !allowAll }"
          @click="device = 'notebook'">Notebook</button>
        <button
          class="btn"
          :class="{ selected: device === 'tablet', hidden: !allowMedium }"
          @click="device = 'tablet'">Tablet</button>
        <button
          class="btn"
          :class="{ selected: device === 'smartphone', hidden: !allowSmall }"
          @click="device = 'smartphone'">Smartphone</button>
        <button
          class="btn"
          :class="{ selected: device === 'flip phone', hidden: !allowSmall }"
          @click="device = 'flip phone'">Flip Phone</button>
      </div>
      <div class="ctrlgroup">
        <p class="ctrlgroup-label fw-bold text-center">Select Layout</p>
        <button
          class="btn"
          :class="{ selected: layout === 'home' }"
          @click="layout = 'home'">Homepage</button>
        <button
          class="btn"
          :class="{ selected: layout === 'store' }"
          @click="layout = 'store'">Storefront</button>
        <button
          class="btn"
          :class="{ selected: layout === 'blog' }"
          @click="layout = 'blog'">Blog</button>
      </div>
      <button class="btn btn-reopen" @click="showMessage = true">
        Open Manual</button>
    </div>
    <DemoLayoutHome v-if="layout === 'home'" :deviceXY="deviceXY" />
    <DemoLayoutStore v-else-if="layout === 'store'" :deviceXY="deviceXY" />
    <DemoLayoutBlog v-else :deviceXY="deviceXY" />
  </div>
</template>

<style scoped>
.dframe {
  display: grid;
  max-height: min(1100px, 100%);
  position: relative;
}
.dframe-message {
  container: cnt-msg / inline-size;
  min-width: min(60rem, 100% - 2rem);
  display: none;
  background-color: hsl(var(--hs-card) 8%);
  border: 0.125rem solid var(--c-text);
  position: fixed;
  top: 50%;
  left: 50%;
  padding: 2rem;
  transform: translate(-50%, -50%);
  z-index: 100;
  max-height: 75%;
  overflow-y: auto;
}
.dframe-message > .btn {
  aspect-ratio: 1;
  border: 0.125rem solid var(--c-text);
  border-right: none;
  border-top: none;
  border-radius: 0;
  position: sticky;
  top: 0;
  left: 100%;
  transform: translateY(-2rem);
  text-transform: uppercase;
}
.dframe-message > h1 {
  color: var(--c-accent);
  font-size: clamp(1.6rem, 10cqw + 0.125rem, 5rem);
  font-weight: 400;
}
.dframe-message > h2 {
  font-size: clamp(1.5rem, 8cqw + 0.125rem, 3rem);
  font-weight: 200;
  padding-block-start: 2.5rem;
}
.dframe-message > h3 {
  font-size: clamp(1.5rem, 4cqw + 0.125rem, 2.25rem);
  font-weight: 200;
  padding-block-start: 1rem;
}
.dframe-message > p,
.dframe-message > ul {
  max-width: 60ch;
  padding-block-start: 1rem;
  line-height: 1.6;
}
.dframe-message.visible { display: block }
.dframe-ctrl {
  min-width: 100%;
  position: absolute;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  display: flex;
  gap: 2rem;
  justify-content: center;
  opacity: .25;
  transition: opacity 250ms ease-in;
}
.dframe-ctrl:hover { opacity: 1 }
.dframe-ctrl > .btn-reopen {
  border: 0.125rem solid var(--c-text);
  background-color: hsl(var(--hs-card) 8% / .8);
  max-height: max-content;
}
.ctrlgroup {
  backdrop-filter: blur(0.5rem);
  background-color: hsl(var(--hs-card) 8% / .8);
  border: 0.125rem solid var(--c-white);
  border-radius: 0.5em;
  display: flex;
  flex-wrap: wrap;
}
.ctrlgroup-label {
  border-bottom: 1px solid var(--c-white);
  flex-basis: 100%;
  font-weight: 400;
  padding-block: 0.125rem;
}
.ctrlgroup > .btn {
  border-radius: 0;
  flex: 1 0 max-content;
}
.ctrlgroup > .btn:not(:last-of-type) {
  border-inline-end: 1px solid var(--c-white);
}
.ctrlgroup > .btn.selected {
  color: var(--c-accent);
}
.ctrlgroup > .btn.hidden { display: none }

.ctrlgroup-buttons {
  border: 0.125rem solid var(--c-text);
  display: flex;
  flex-wrap: wrap;
}
.ctrlgroup-buttons > .btn {
  background-color: hsl(var(--hs-card) 8% / .8);
  border-radius: 0;
  flex: 1 0 max-content;
}
.ctrlgroup-buttons > .btn.selected {
  color: var(--c-accent);
}
.ctrlgroup-buttons > .btn.hidden {
  display: none;
}
</style>

