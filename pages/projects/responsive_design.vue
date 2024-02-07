<script setup>
const device = ref('');
const layout = ref('home');

// map out simulated xy in advance, then retrieve values as we need them
const dimensions = new Map([
  ['notebook', [1440, 900]],
  ['tablet', [1080, 810]],
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
      <p>Demo: Responsive Design</p>

      <p>
        This single-page applet is a nifty way to visualize and reason about the
        various means at our disposal for adapting web layouts to devices of all
        sizes. To use it:
      </p>
      <ul>
        <li>Select one of several mock-ups of common layouts</li>
        <li>Use the 'Simulate Device' buttons to change the container's dimensions</li>
        <li>Watch your chosen layout automatically adjust to the new screen!</li>
        <li v-if="!allowAll">
          Since you're using this demo on a smaller device, the following simulations are disabled:
        </li>
        <ul v-if="!allowAll">
          <li v-if="!allowAll">Notebooks</li>
          <li v-if="!allowMedium">Tablets and Flagship Smartphones</li>
          <li v-if="!allowSmall">Flagship Smartphones</li>
        </ul>
      </ul>
      <p>What is Responsive Design?</p>

      <p>
        In short, it refers to the set of techniques and methodologies by which
        we design and program webpages such that our users have the same high-quality
        experience regardless of which device they're viewing it on. The usual way
        this is done nowadays is through some combination of device queries, intrinsic
        design patterns, and dynamic property values. Interface Design professionals
        arrive at these strategies on a case-by-case basis after meticulous analysis
        of a client's visions and requirements.
      </p>

      <p>
        Accounting for different screen sizes is absolutely indispensable in modern
        web design and in user experience design in general.
      </p>

      <p>
        Users can and will get irritated if the interface they're made to use feels
        unresponsive, unpolished, or hastily assembled; since these observations are
        functions of our intuition, this is true even of users with limited tech literacy.
      </p>

      <p>
        And, from a more tangible perspective: for several years now, Google and other
        major search engine providers have privileged sites that meet the
        bleeding-edge standards of responsive design at the expense of those that
        do not. Responsive interfaces are about far more than just looking nice!
      </p>

      <p>
        Looking for some top-notch design work for your own content? Feel free to
        reach out! I have years of professional experience across the breadth of
        the discipline and would love to talk over your ideas even if we don't end up
        signing a contract together.
      </p>

    </div>
    <div class="dframe-ctrl">
      <div class="ctrlgroup" v-if="allowSmall">
        <p class="fw-bold text-center">Simulate Device</p>
        <div class="ctrlgroup-buttons">
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
      </div>
      <div class="ctrlgroup">
        <p class="fw-bold text-center">Select Layout</p>
        <div class="ctrlgroup-buttons">
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
      </div>
    </div>
    <div
      class="dframe-grid"
      :style="{
        '--device-width': deviceXY[0],
        '--device-height': deviceXY[1],
      }">
      <DemoLayout :layout="layout" />
    </div>
  </div>
</template>

<style scoped>
.dframe {
  display: grid;
  grid-template-rows: 1fr;
  position: relative;
}
.dframe-message {
  display: none;
  background-color: hsl(var(--hs-card) 8%);
  position: fixed;
  top: 50%;
  left: 50%;
  padding: 2rem;
  transform: translate(-50%, -50%);
  z-index: 100;
  max-height: 75%;
  max-width: 50rem;
  overflow-y: auto;
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
}
.ctrlgroup-buttons {
  border: 0.125rem solid white;
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
.dframe-grid {
  --device-width: 100%;
  --device-height: 100%;
  --inline-negative: calc((100% - var(--device-width)) / 2);
  --block-negative: calc((100% - var(--device-height)) / 2);

  display: grid;
  grid-template-columns: var(--inline-negative) 1fr var(--inline-negative);
  grid-template-rows: var(--block-negative) 1fr var(--block-negative);

  transition: all 500ms;
}
.dframe-grid > * {
  grid-column: 2;
  grid-row: 2;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>

